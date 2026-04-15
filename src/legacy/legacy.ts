import './legacy-impl.js'

export type LegacyPage = 'home' | 'search' | 'movie' | 'tv' | 'catalog' | 'profile' | 'theater' | 'owner'

type BootOptions = { mountId?: string }

declare global {
  interface Window {
    __slwu?: {
      boot?: (page?: string, opts?: BootOptions) => void
    }
  }
}

export function boot(page: LegacyPage, opts?: BootOptions) {
  window.__slwu?.boot?.(page, opts)
}

