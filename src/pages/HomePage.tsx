import { useEffect } from 'react'
import { useLegacyBoot } from '../hooks/useLegacyBoot'

export default function HomePage() {
  useEffect(() => {
    document.body.className = ''
  }, [])

  useLegacyBoot('home')

  return (
    <>
      <div id="splash-screen">
        <div className="splash-content">
          <div className="splash-logo">SHELIVESWITHUS</div>
          <div className="splash-tagline">Cinema at your fingertips</div>
          <div className="splash-loader">
            <div className="splash-bar"></div>
          </div>
        </div>
      </div>

      <nav id="navbar">
        <div className="nav-left">
          <a href={import.meta.env.BASE_URL} className="nav-logo">
            SHELIVESWITHUS
          </a>
          <ul className="nav-links" id="nav-links">
            <li>
              <a href={import.meta.env.BASE_URL} className="active">
                Home
              </a>
            </li>
            <li>
              <a href={`${import.meta.env.BASE_URL}search?type=movie`}>Movies</a>
            </li>
            <li>
              <a href={`${import.meta.env.BASE_URL}search?type=tv`}>TV Shows</a>
            </li>
            <li>
              <a href="#" id="my-list-nav">
                My List
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="nav-search" id="nav-search">
            <button className="search-btn" id="search-toggle" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <input type="text" id="search-input" placeholder="Titles, people, genres" autoComplete="off" />
          </div>
          <button className="hamburger" id="hamburger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <main id="main-content" style={{ opacity: 0, transition: 'opacity 0.6s ease' }}>
        <section id="hero" className="hero">
          <div className="hero-backdrop" id="hero-backdrop"></div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-badge">🎬 Featured</div>
            <h1 className="hero-title" id="hero-title">
              Loading...
            </h1>
            <p className="hero-desc" id="hero-desc"></p>
            <div className="hero-meta" id="hero-meta"></div>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-3d" id="hero-play-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Play
              </button>
              <button className="btn btn-secondary btn-3d" id="hero-info-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                More Info
              </button>
            </div>
          </div>
        </section>

        <section id="categories" className="categories"></section>

        <div className="ad-container-banner"></div>
      </main>
    </>
  )
}
