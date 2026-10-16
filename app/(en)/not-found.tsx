import NotFoundSection from '@/components/sections/NotFoundSection'

/**
 * No `metadata` export here on purpose: Next resolves the layout metadata on
 * the client for a not-found boundary, so a different server-side <title>
 * is a text hydration mismatch that unmounts the whole page.
 */
export default function NotFound() {
  return <NotFoundSection locale="en" />
}
