import { NextResponse } from 'next/server'

/**
 * www redirect — disabled on Hostinger (internal host headers cause loops).
 * Canonical tags in each page handle the www/non-www SEO deduplication instead.
 */
export function middleware(request) {
  return NextResponse.next()
}

export const config = {
  matcher: [],
}
