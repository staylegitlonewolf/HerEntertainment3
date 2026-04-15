import { useEffect } from 'react'
import { useLegacyBoot } from '../hooks/useLegacyBoot'

export default function CatalogPage() {
  useEffect(() => {
    document.body.className = ''
  }, [])

  useLegacyBoot('catalog')

  return <div id="legacy-mount" />
}
