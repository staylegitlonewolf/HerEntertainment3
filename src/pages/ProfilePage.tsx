import { useEffect } from 'react'
import { useLegacyBoot } from '../hooks/useLegacyBoot'

export default function ProfilePage() {
  useEffect(() => {
    document.body.className = 'profile-page'
  }, [])

  useLegacyBoot('profile', { mountId: 'legacy-mount' })

  return <div id="legacy-mount"></div>
}

