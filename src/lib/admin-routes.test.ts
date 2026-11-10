import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'
import { PUBLIC_ADMIN_ROUTES, isPublicAdminRoute } from './admin-routes'

const src = (p: string) => readFileSync(join(process.cwd(), 'src', p), 'utf-8')

describe('isPublicAdminRoute', () => {
  it('knows the pages that must work signed out', () => {
    for (const r of PUBLIC_ADMIN_ROUTES) expect(isPublicAdminRoute(r), r).toBe(true)
  })

  it('covers nested paths like the invite link', () => {
    expect(isPublicAdminRoute('/accept-invite/anything')).toBe(true)
  })

  it('does not accidentally open a real admin page', () => {
    for (const r of ['/dashboard', '/leads', '/team', '/settings', '/loginx', '/']) {
      expect(isPublicAdminRoute(r), r).toBe(false)
    }
  })
})

describe('the admin shell does not leak to signed-out visitors', () => {
  const layout = src('app/(admin)/layout.tsx')

  it('fails CLOSED when the role is unknown', () => {
    // The bug: `!role || item.roles.includes(role)` showed every nav item to a
    // null role, so /login served the whole admin toolset in its HTML.
    // Target the CALL, not the string: /!role \|\|/ alone also matches the
    // comment that documents the old code, so it failed on the fix itself.
    expect(layout).not.toMatch(/NAV_ITEMS\.filter\(\(item\) => !role/)
    expect(layout).toMatch(/role \? NAV_ITEMS\.filter/)
  })

  it('renders no admin chrome at all on the signed-out pages', () => {
    expect(layout).toMatch(/isPublicAdminRoute\(pathname\)/)
  })

  it('still paints the dark background on those pages', () => {
    // Returning bare children dropped the nav AND the theme, leaving the dark
    // login card on a white page. Dropping the nav is the point; dropping the
    // background was a regression.
    const branch = layout.slice(layout.indexOf('isPublicAdminRoute(pathname)'), layout.indexOf('isPublicAdminRoute(pathname)') + 220)
    expect(branch).toMatch(/bg-\[#0A0A0A\]/)
    expect(branch).not.toMatch(/return <>\{children\}<\/>/)
  })

  it('uses the shared route list rather than its own copy', () => {
    expect(layout).toMatch(/from '@\/lib\/admin-routes'/)
    expect(layout).not.toMatch(/const PUBLIC_ADMIN_ROUTES/)
  })
})
