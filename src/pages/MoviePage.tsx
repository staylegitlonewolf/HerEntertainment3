import { useEffect } from 'react'
import { useLegacyBoot } from '../hooks/useLegacyBoot'

export default function MoviePage() {
  useEffect(() => {
    document.body.className = 'detail-page'
  }, [])

  useLegacyBoot('movie')

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
              <a href={`${import.meta.env.BASE_URL}search?type=movie`} className="active">
                Movies
              </a>
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

      <main className="detail-main">
        <div className="detail-backdrop-wrap" id="detail-backdrop-wrap">
          <div className="detail-backdrop" id="detail-backdrop"></div>
          <div className="detail-backdrop-overlay"></div>
        </div>

        <div className="detail-content container">
          <a href="javascript:history.back()" className="back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </a>

          <div className="detail-header" id="detail-header">
            <div className="skeleton-title skeleton"></div>
            <div className="skeleton-text skeleton"></div>
          </div>

          <div className="detail-layout">
            <div className="detail-main-col">
              <div className="player-section">
                <div className="player-container" id="player-container">
                  <div className="player-loading">
                    <div className="spinner"></div>
                    <p>Loading player…</p>
                  </div>
                </div>
              </div>

              <div className="detail-info" id="detail-info"></div>

              <section className="detail-section" id="cast-section" style={{ display: 'none' }}>
                <h2 className="section-title">Cast</h2>
                <div className="cast-row" id="cast-row"></div>
              </section>

              <section className="detail-section" id="similar-section" style={{ display: 'none' }}>
                <h2 className="section-title">You May Also Like</h2>
                <div className="row-track" id="similar-row"></div>
              </section>

              <div className="ad-container-banner"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
