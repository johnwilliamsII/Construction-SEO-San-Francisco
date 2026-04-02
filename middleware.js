import { NextResponse } from 'next/server'

/**
 * 301 redirect non-www → www
 * Eliminates the www / non-www duplicate content issue at the HTTP level.
 * e.g. contractorseobayarea.com/blog/x/ → www.contractorseobayarea.com/blog/x/
 */
export function middleware(request) {
  const host = request.headers.get('host') || ''

  // Skip in local dev and if already www
  if (
    host.includes('localhost') ||
    host.includes('127.0.0.1') ||
    host.startsWith('www.')
  ) {
    return NextResponse.next()
  }

  // Redirect non-www → www (301 permanent)
  const url = request.nextUrl.clone()
  url.host = `www.${host}`
  return NextResponse.redirect(url, { status: 301 })
}

export const config = {
  // Run on all routes except Next.js internals and static files
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
