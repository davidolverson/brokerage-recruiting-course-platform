/**
 * The project's SQL entry point.
 *
 * Everything here used to import `neon` from `@neondatabase/serverless`
 * directly. That driver talks to Neon over HTTP and cannot reach an ordinary
 * Postgres server, so the app could not be pointed at a local database at
 * all — which is why nothing behind a login had ever been run. The admin
 * dashboard, the pipeline, the course app and the calendar's own authoring
 * API had no coverage and no screenshots, because there was no way to get a
 * session in the first place.
 *
 * So the driver is chosen from the connection string instead. A Neon endpoint
 * still gets the Neon driver and production is unchanged. Anything else gets
 * node-postgres, which is what makes `postgres://localhost/...` work.
 *
 * The local client is a shim, not a reimplementation: it forwards to `pg` and
 * returns real Postgres rows. It covers the two shapes this codebase uses —
 * the tagged template and `.query(text, params)` — and deliberately nothing
 * else, so an unsupported call fails loudly rather than quietly returning
 * something plausible.
 */

import { neon as neonHttp, type NeonQueryFunction } from '@neondatabase/serverless'
import { Pool } from 'pg'

/**
 * Named explicitly rather than inferred from `neonHttp`. `ReturnType` of it
 * collapses to the union across its overloads, which loses the row type every
 * caller relies on and makes `rows[0]` an error.
 */
type Sql = NeonQueryFunction<false, false>

/**
 * Neon's own hostnames. Anything else is assumed to be a plain Postgres
 * server, which is also the right answer if this branch is ever moved off
 * Neon — today that case throws at connect time.
 */
function isNeonEndpoint(connectionString: string): boolean {
  try {
    const host = new URL(connectionString).hostname
    return host.endsWith('.neon.tech') || host.endsWith('.neon.build')
  } catch {
    return false
  }
}

const pools = new Map<string, Pool>()

function poolFor(connectionString: string): Pool {
  const existing = pools.get(connectionString)
  if (existing) return existing

  const pool = new Pool({
    connectionString,
    // Local Postgres is not behind TLS, and a Neon string never reaches here.
    ssl: false,
    max: 5,
  })
  pools.set(connectionString, pool)
  return pool
}

/** The options object Neon accepts as a third argument. */
interface QueryOptions {
  arrayMode?: boolean
  fullResults?: boolean
}

function isTemplateStrings(value: unknown): value is TemplateStringsArray {
  return Array.isArray(value) && 'raw' in value
}

function localClient(connectionString: string): Sql {
  const run = async (text: string, params: unknown[], options?: QueryOptions) => {
    const pool = poolFor(connectionString)
    const values = params as unknown[]

    // Drizzle asks for positional rows and maps them with its own column
    // metadata, so array mode has to be honoured rather than always returning
    // objects — otherwise every value it reads comes back undefined. The two
    // calls are written out separately because pg picks its result type from
    // the presence of `rowMode`, not from its value.
    const result = options?.arrayMode
      ? await pool.query({ text, values, rowMode: 'array' })
      : await pool.query({ text, values })

    return options?.fullResults
      ? {
          rows: result.rows,
          fields: result.fields,
          rowCount: result.rowCount,
          command: result.command,
          rowAsArray: Boolean(options.arrayMode),
        }
      : result.rows
  }

  /**
   * Neon's client is callable three ways and this codebase uses all of them:
   * as a tagged template in hand-written SQL, and as `client(text, params,
   * options)` / `client.query(...)` from inside Drizzle, which reaches for
   * `client.query ?? client`.
   */
  const client = (
    first: TemplateStringsArray | string,
    ...rest: unknown[]
  ): Promise<unknown> => {
    if (isTemplateStrings(first)) {
      let text = ''
      first.forEach((part, i) => {
        text += part
        if (i < rest.length) text += `$${i + 1}`
      })
      return run(text, rest)
    }
    return run(first, (rest[0] as unknown[]) ?? [], rest[1] as QueryOptions | undefined)
  }

  client.query = (text: string, params: unknown[] = [], options?: QueryOptions) =>
    run(text, params, options)

  // Only reached by Drizzle's `db.batch()`, which nothing here calls. Failing
  // loudly beats emulating Neon's batch semantics badly.
  client.transaction = () => {
    throw new Error('The local Postgres client does not implement batched transactions.')
  }

  // The cast is the one piece of dishonesty here, and it is deliberate. Making
  // a pg-backed function structurally identical to NeonQueryFunction would
  // mean declaring overloads and options this code never uses, and the
  // alternative — a narrower shared type — would change the inferred row type
  // at all 36 call sites and turn a driver change into a typing refactor.
  return client as unknown as Sql
}

export function neon(connectionString: string): Sql {
  return isNeonEndpoint(connectionString)
    ? neonHttp(connectionString)
    : localClient(connectionString)
}
