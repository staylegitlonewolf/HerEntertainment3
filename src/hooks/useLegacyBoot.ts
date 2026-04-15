import { useEffect } from 'react'

export type LegacyPage = 'home' | 'search' | 'movie' | 'tv' | 'catalog' | 'profile' | 'theater' | 'owner'

export function useLegacyBoot(page: LegacyPage, opts?: { mountId?: string }) {
  useEffect(() => {
    let cancelled = false
    import('../legacy/legacy').then((legacy) => {
      if (cancelled) return
      legacy.boot(page, { mountId: opts?.mountId })
    })
    return () => {
      cancelled = true
    }
  }, [page, opts?.mountId])
}

