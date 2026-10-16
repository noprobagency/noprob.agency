'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

/**
 * The global 404 is one document for the whole site, so the locale is picked
 * on the client from the URL: /it/... shows the Italian version, anything
 * else the English one. The switch happens after mount: on a 404 the server
 * does not see the requested pathname, so choosing during render would make
 * the server and client markup differ and React would drop the page.
 */
export default function NotFoundLocale({ it, en }: { it: React.ReactNode; en: React.ReactNode }) {
  const pathname = usePathname()
  const [isIt, setIsIt] = useState(false)
  useEffect(() => {
    setIsIt(pathname.startsWith('/it'))
  }, [pathname])
  return <>{isIt ? it : en}</>
}
