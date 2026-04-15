import { useEffect } from 'react'
import { useLegacyBoot } from '../hooks/useLegacyBoot'

export default function SearchPage() {
  useEffect(() => {
    document.body.className = 'search-page'
  }, [])

  useLegacyBoot('search')

  return (
    <>
      <nav id="navbar" className="navbar-solid">
        <div className="nav-left">
          <a href={import.meta.env.BASE_URL} className="nav-logo">
            SHELIVESWITHUS
          </a>
          <ul className="nav-links">
            <li>
              <a href={import.meta.env.BASE_URL}>Home</a>
            </li>
            <li>
              <a href={`${import.meta.env.BASE_URL}search?type=movie`}>Movies</a>
            </li>
            <li>
              <a href={`${import.meta.env.BASE_URL}search?type=tv`}>TV Shows</a>
            </li>
            <li>
              <a href={`${import.meta.env.BASE_URL}#my-list`}>My List</a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="nav-search nav-search--open" id="nav-search">
            <button className="search-btn" id="search-toggle" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <input
              type="text"
              id="search-input"
              placeholder="Titles, people, genres"
              autoComplete="off"
              autoFocus
            />
          </div>
          <button className="hamburger" id="hamburger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <main className="search-main container">
        <div className="search-header">
          <div className="search-bar-wrap">
            <svg className="search-bar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              id="main-search-input"
              className="search-bar-input"
              placeholder="Search movies, TV shows, people…"
              autoComplete="off"
            />
            <button className="search-clear" id="search-clear" aria-label="Clear" style={{ display: 'none' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="search-filters">
            <button className="filter-btn active" data-filter="all">
              All
            </button>
            <button className="filter-btn" data-filter="movie">
              Movies
            </button>
            <button className="filter-btn" data-filter="tv">
              TV Shows
            </button>
          </div>
        </div>

        <div id="search-status" className="search-status"></div>
        <div id="search-results" className="search-results-grid"></div>

        <div className="ad-container-banner"></div>
      </main>
    </>
  )
}
