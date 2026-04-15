import { useEffect } from 'react'
import { useLegacyBoot } from '../hooks/useLegacyBoot'

export default function OwnerPage() {
  useEffect(() => {
    document.body.className = 'owner-page'
  }, [])

  useLegacyBoot('owner', { mountId: 'legacy-mount' })

  return <div id="legacy-mount"></div>
}

