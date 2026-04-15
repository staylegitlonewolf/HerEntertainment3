import { useEffect } from 'react'
import { useLegacyBoot } from '../hooks/useLegacyBoot'

export default function TheaterPage() {
  useEffect(() => {
    document.body.className = 'theater-page'
  }, [])

  useLegacyBoot('theater', { mountId: 'legacy-mount' })

  return <div id="legacy-mount"></div>
}

