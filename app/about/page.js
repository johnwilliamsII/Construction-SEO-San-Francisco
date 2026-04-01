'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/* /about/ → canonical URL is /bay-area-seo-company/ */
export default function AboutRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/bay-area-seo-company/')
  }, [router])
  return null
}
