import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

/**
 * There was no eslint config in this repo at all, and `package.json` still ran
 * `next lint`, which Next 16 removed. So `npm run lint` had never once worked:
 * tsc, the build and vitest were the only real gates.
 *
 * eslint-config-next 16 ships native flat config, so it is imported directly.
 * Going through FlatCompat instead throws "Converting circular structure to
 * JSON" from the eslintrc validator, which reads like a config bug rather than
 * the wrong wrapper.
 *
 * Scope is deliberately narrow. This is a production-style site, so a config that
 * turned hundreds of pre-existing style opinions into errors would just get
 * ignored, and an ignored gate is worse than no gate. It runs Next's own
 * correctness rules — react-hooks dependency checks, no-html-link-for-pages,
 * the image and script rules — and little else.
 */
export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'public/**',
      'next-env.d.ts',
      'test-results/**',
      'playwright-report/**',
      'screenshots/**',
      'scripts/**',
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // Escaped entities in copy are a house-style opinion, not a defect, and
      // this codebase is mostly prose-carrying marketing pages.
      'react/no-unescaped-entities': 'off',

      /**
       * React Compiler rules, demoted from error to warning ON PURPOSE.
       *
       * The first run of this gate reported 40 of these across the app, every
       * one of them pre-existing. They are real advisories worth working
       * through, but each needs per-component judgement about render
       * behaviour, and rewriting forty effects in one unreviewed pass on a
       * production site is how you break a page nobody was looking at.
       *
       * They stay visible as warnings so the count can come down
       * deliberately. Everything left at `error` is a real defect that must
       * block, which is what makes the gate worth running at all — a gate
       * that fails on day one with forty untriaged errors just gets
       * bypassed.
       *
       * Counts at the time of writing: set-state-in-effect 31, purity 5,
       * preserve-manual-memoization 3, immutability 1.
       */
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/purity': 'warn',
      'react-hooks/preserve-manual-memoization': 'warn',
      'react-hooks/immutability': 'warn',
    },
  },
]
