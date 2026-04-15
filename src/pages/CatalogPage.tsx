import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLegacyBoot } from '../hooks/useLegacyBoot'

const CATALOG_GENRES: Array<{ label: string; path: string }> = [
  { label: 'New Releases', path: 'movie/now_playing' },
  { label: 'Family', path: 'discover/movie?with_genres=10751' },
  { label: 'Comedy', path: 'discover/movie?with_genres=35' },
  { label: 'Action', path: 'discover/movie?with_genres=28' },
  { label: 'Horror', path: 'discover/movie?with_genres=27' },
  { label: 'Classics', path: 'discover/movie?primary_release_date.lte=1999-12-31&sort_by=popularity.desc' },
  { label: 'Cartoons', path: 'discover/movie?with_genres=16' },
]

export default function CatalogPage() {
  useEffect(() => {
    document.body.className = 'categories-page'
  }, [])

  useLegacyBoot('catalog')

  return (
    <div className="slwu-route-shell" id="legacy-mount">
      <div className="slwu-route-card">
        <div className="slwu-route-top">
          <Link to="/" className="slwu-back-link">
            ← Back
          </Link>
          <h1>Catalog</h1>
        </div>
        <div className="categories-grid">
          {CATALOG_GENRES.map((g) => (
            <Link
              key={g.label}
              className="remote-pill remote-pill--catalog"
              to={`/search?category=${encodeURIComponent(g.label.toLowerCase())}`}
              data-path={g.path}
            >
              {g.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
