/* ============================================================
   SheLivesWithUs — script.js
   All JavaScript: TMDB API, Splash, Navbar, Rows, Search,
   My List, Continue Watching, Movie/TV Detail
   ============================================================ */

"use strict";

// ── API config ──────────────────────────────────────────────
const TMDB_KEY  = "d9f0568167a608d0700093444b0c2da7";
const TMDB_BASE = "https://api.themoviedb.org/3";
const IMG_W500  = "https://image.tmdb.org/t/p/w500";
const IMG_ORIG  = "https://image.tmdb.org/t/p/original";

const VIDKING_MOVIE = (id)  => `https://www.vidking.net/embed/movie/${id}?color=8B5CF6&autoPlay=false`;
const VIDKING_TV    = (id, s, e) => `https://www.vidking.net/embed/tv/${id}/${s}/${e}?color=8B5CF6&autoPlay=false&nextEpisode=true&episodeSelector=true`;

const PATH_PARTS = location.pathname.split('/').filter(Boolean);
const SITE_ROOT = location.hostname.endsWith('github.io') && PATH_PARTS.length ? `/${PATH_PARTS[0]}/` : '/';
function appUrl(rel = '') {
  return SITE_ROOT + String(rel).replace(/^\/+/, '');
}
function appHref(rel = '') {
  return new URL(appUrl(rel), location.origin).toString();
}

// ── Helpers ──────────────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

async function tmdb(path) {
  const sep = path.includes("?") ? "&" : "?";
  const res = await fetch(`${TMDB_BASE}${path}${sep}api_key=${TMDB_KEY}`);
  if (!res.ok) throw new Error(`TMDB ${res.status}: ${path}`);
  return res.json();
}

function posterUrl(p, size = IMG_W500) {
  return p ? `${size}${p}` : null;
}

function year(dateStr) {
  return dateStr ? dateStr.slice(0, 4) : "N/A";
}

function formatRuntime(min) {
  if (!min) return "";
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h ? `${h}h ${m}m` : `${m}m`;
}

function esc(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ── My List (localStorage, profile-aware) ───────────────────
const MyList = {
  _key() {
    const pid = localStorage.getItem('pt_active_profile') || 'default';
    return `pt_mylist_${pid}`;
  },
  get() {
    try { return JSON.parse(localStorage.getItem(this._key()) || "[]"); }
    catch { return []; }
  },
  has(id, type) {
    return this.get().some(i => i.id === id && i.type === type);
  },
  add(item) {
    const list = this.get();
    if (!this.has(item.id, item.type)) list.unshift(item);
    localStorage.setItem(this._key(), JSON.stringify(list));
  },
  remove(id, type) {
    const list = this.get().filter(i => !(i.id === id && i.type === type));
    localStorage.setItem(this._key(), JSON.stringify(list));
  },
  toggle(item) {
    if (this.has(item.id, item.type)) { this.remove(item.id, item.type); return false; }
    this.add(item); return true;
  }
};


// ── Hidden List (localStorage, profile-aware) ─────────────────
const HiddenList = {
  _key() {
    const pid = localStorage.getItem('pt_active_profile') || 'default';
    return `pt_hidden_${pid}`;
  },
  get() {
    try { return JSON.parse(localStorage.getItem(this._key()) || "[]"); }
    catch { return []; }
  },
  has(id, type) { return this.get().some(i => i.id === id && i.type === type); },
  add(item) { const list = this.get(); if (!this.has(item.id, item.type)) list.unshift(item); localStorage.setItem(this._key(), JSON.stringify(list)); },
  remove(id, type) { const list = this.get().filter(i => !(i.id === id && i.type === type)); localStorage.setItem(this._key(), JSON.stringify(list)); },
  toggle(item) { if (this.has(item.id, item.type)) { this.remove(item.id, item.type); return false; } this.add(item); return true; }
};

// ── Watch Progress (localStorage, profile-aware) ────────────
const Progress = {
  _key() {
    const pid = localStorage.getItem('pt_active_profile') || 'default';
    return `pt_progress_${pid}`;
  },
  get() {
    try { return JSON.parse(localStorage.getItem(this._key()) || "{}"); }
    catch { return {}; }
  },
  save(id, type, data) {
    const all = this.get();
    all[`${type}_${id}`] = { ...data, savedAt: Date.now() };
    localStorage.setItem(this._key(), JSON.stringify(all));
  },
  getAll() {
    return Object.values(this.get());
  }
};

// ── Vidking progress events ──────────────────────────────────
window.addEventListener("message", function(event) {
  try {
    if (typeof event.data !== "string") return;
    const msg = JSON.parse(event.data);
    if (msg.type === "PLAYER_EVENT" && msg.data) {
      const d = msg.data;
      const id = d.id;
      const type = d.mediaType || "movie";
      if (id && d.progress > 1 && d.progress < 98) {
        Progress.save(id, type, {
          id, type,
          progress: d.progress,
          timestamp: d.currentTime,
          season: d.season,
          episode: d.episode,
          title: document.title
        });
      }
    }
  } catch (_) { /* ignore */ }
});

// ============================================================
//  PAGE DETECTION
// ============================================================
const PAGE = (() => {
  const p = location.pathname;
  if (p.endsWith("movie.html")) return "movie";
  if (p.endsWith("tv.html")) return "tv";
  if (p.endsWith("search.html")) return "search";
  if (/profile\.html$|\/profile\/?$/.test(p)) return "profile";
  if (/theater\.html$|\/theater\/?$/.test(p)) return "theater";
  if (/categories\.html$|\/categories\/?$/.test(p)) return "categories";
  if (/owner\.html$|\/owner\/?$/.test(p)) return "owner";
  return "home";
})();

// ============================================================
//  SHARED: NAVBAR
// ============================================================
function initNavbar() {
  const navbar = $("#navbar");
  if (!navbar) return;

  // Scroll opacity
  if (!navbar.classList.contains("navbar-solid")) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    }, { passive: true });
  }

  // Hamburger
  const hamburger = $("#hamburger");
  const navLinks  = $(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }

  // Search toggle (navbar compact search)
  const searchToggle = $("#search-toggle");
  const navSearch    = $("#nav-search");
  const searchInput  = $("#search-input");

  if (searchToggle && navSearch && searchInput) {
    searchToggle.addEventListener("click", () => {
      navSearch.classList.toggle("open");
      if (navSearch.classList.contains("open")) searchInput.focus();
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && searchInput.value.trim()) {
        location.href = appHref(`search.html?q=${encodeURIComponent(searchInput.value.trim())}`);
      }
      if (e.key === "Escape") {
        navSearch.classList.remove("open");
        searchInput.value = "";
      }
    });
  }

}

// ============================================================
//  SHARED: CARD BUILDER
// ============================================================
function buildMovieCard(item, type = "movie") {
  const id       = item.id;
  const title    = item.title || item.name || "Untitled";
  const poster   = posterUrl(item.poster_path);
  const date     = item.release_date || item.first_air_date || "";
  const rating   = item.vote_average ? item.vote_average.toFixed(1) : "";
  const href     = type === "tv" ? `tv.html?id=${id}` : `movie.html?id=${id}`;
  const inList   = MyList.has(id, type);

  const img = poster
    ? `<img src="${esc(poster)}" alt="${esc(title)}" loading="lazy" />`
    : `<div class="no-poster" style="aspect-ratio:2/3;background:var(--surface);display:flex;align-items:center;justify-content:center;">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:32px;height:32px;opacity:.3"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
       </div>`;

  const card = document.createElement("div");
  card.className = "movie-card";
  card.dataset.id   = id;
  card.dataset.type = type;
  card.innerHTML = `
    ${img}
    <div class="movie-card-overlay">
      <div class="movie-card-title">${esc(title)}</div>
      <div class="movie-card-meta">${year(date)}${rating ? ` · ⭐ ${rating}` : ""}</div>
    </div>
    <div class="movie-card-actions">
      <button class="card-action-btn hide-btn${HiddenList.has(id, type) ? " is-hidden" : ""}" title="${HiddenList.has(id, type) ? "Unhide" : "Hide"}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="19" y1="5" x2="5" y2="19"/><line x1="5" y1="5" x2="19" y2="19"/></svg>
      </button>
      <button class="card-action-btn list-btn${inList ? " in-list" : ""}" title="${inList ? "Remove from My List" : "Add to My List"}">
        ${inList
          ? `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>`
          : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`
        }
      </button>
    </div>
  `;

  // Click → detail page
  card.addEventListener("click", (e) => {
    if (e.target.closest(".card-action-btn")) return;
    location.href = href;
  });

  // My List toggle
  const listBtn = card.querySelector(".list-btn");
  listBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const added = MyList.toggle({ id, type, title, poster: item.poster_path });
    listBtn.classList.toggle("in-list", added);
    listBtn.innerHTML = added
      ? `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
  });

  const hideBtn = card.querySelector(".hide-btn");
  if (hideBtn) hideBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const hidden = HiddenList.toggle({ id, type, title, poster: item.poster_path });
    hideBtn.classList.toggle("is-hidden", hidden);
    hideBtn.title = hidden ? "Unhide" : "Hide";
    if (hidden) card.remove();
  });

  return card;
}

function buildSkeletonCards(n = 8) {
  return Array.from({ length: n }, () => {
    const d = document.createElement("div");
    d.className = "skeleton-card skeleton";
    return d;
  });
}

// ============================================================
//  SHARED: ROW BUILDER
// ============================================================
function buildRow(title, items, type = "movie") {
  items = (items || []).filter(item => !HiddenList.has(item.id, (item.media_type || type || "movie")));
  if (!items || items.length === 0) return null;

  const wrapper = document.createElement("div");
  wrapper.className = "row-wrapper";

  const viewHref = appHref(`categories/?q=${encodeURIComponent(title)}`);
  wrapper.innerHTML = `
    <div class="row-header">
      <h2 class="row-title"><a href="${viewHref}">${esc(title)}</a></h2>
      <a class="row-viewall" href="${viewHref}">View All</a>
    </div>
    <div class="row-track-container">
      <button class="row-arrow arrow-left" aria-label="Scroll left">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="row-track"></div>
      <button class="row-arrow arrow-right" aria-label="Scroll right">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  `;

  const track = wrapper.querySelector(".row-track");
  items.forEach(item => track.appendChild(buildMovieCard(item, type)));

  // Arrows
  const leftBtn  = wrapper.querySelector(".arrow-left");
  const rightBtn = wrapper.querySelector(".arrow-right");
  const scrollAmt = 600;

  leftBtn.addEventListener("click",  () => track.scrollBy({ left: -scrollAmt, behavior: "smooth" }));
  rightBtn.addEventListener("click", () => track.scrollBy({ left:  scrollAmt, behavior: "smooth" }));

  return wrapper;
}

// ============================================================
//  HOME PAGE
// ============================================================
async function initHomePage() {
  // Splash screen
  initSplash();

  // Wait for main content to be ready then fade in
  const main = $("#main-content");

  // Navbar
  initNavbar();

  // Fetch hero + categories in parallel
  const categoriesEl = $("#categories");
  if (!categoriesEl) return;

  // Show skeleton rows while loading
  const skeletonRows = [
    "Trending Now", "Top Rated", "Popular on SheLivesWithUs", "Now Playing",
    "Action", "Comedy", "Horror", "Sci-Fi"
  ];
  skeletonRows.forEach(t => {
    const w = document.createElement("div");
    w.className = "row-wrapper";
    w.innerHTML = `
      <div class="row-header"><h2 class="row-title">${esc(t)}</h2></div>
      <div class="row-track-container">
        <div class="row-track" id="skel-${t.replace(/\s+/g,"-")}"></div>
      </div>
    `;
    const track = w.querySelector(".row-track");
    buildSkeletonCards(8).forEach(c => track.appendChild(c));
    categoriesEl.appendChild(w);
  });

  const categories = [
    { title: "Trending Now",         path: "/trending/movie/week",                  type: "movie" },
    { title: "Top Rated",            path: "/movie/top_rated",                      type: "movie" },
    { title: "Popular on SheLivesWithUs", path: "/movie/popular",                        type: "movie" },
    { title: "Now Playing",          path: "/movie/now_playing",                    type: "movie" },
    { title: "Action",               path: "/discover/movie?with_genres=28",        type: "movie" },
    { title: "Comedy",               path: "/discover/movie?with_genres=35",        type: "movie" },
    { title: "Horror",               path: "/discover/movie?with_genres=27",        type: "movie" },
    { title: "Sci-Fi",               path: "/discover/movie?with_genres=878",       type: "movie" },
    { title: "Romance",              path: "/discover/movie?with_genres=10749",     type: "movie" },
    { title: "Documentary",          path: "/discover/movie?with_genres=99",        type: "movie" },
    { title: "Animation",            path: "/discover/movie?with_genres=16",        type: "movie" },
    { title: "Trending TV Shows",    path: "/trending/tv/week",                     type: "tv"    },
    { title: "Top Rated TV",         path: "/tv/top_rated",                         type: "tv"    },
  ];

  // Hero: use trending
  let heroLoaded = false;

  // Fetch all rows
  const results = await Promise.allSettled(
    categories.map(c => tmdb(c.path))
  );

  // Replace skeleton rows and add real rows
  categoriesEl.innerHTML = "";

  // Continue Watching (if any)
  const progress = Progress.getAll();
  if (progress.length > 0) {
    // Fetch details for progress items
    const cwItems = await Promise.allSettled(
      progress.slice(0, 10).map(p =>
        tmdb(p.type === "tv" ? `/tv/${p.id}` : `/movie/${p.id}`)
          .then(d => ({ ...d, _mediaType: p.type, _progress: p.progress }))
      )
    );
    const cwData = cwItems
      .filter(r => r.status === "fulfilled")
      .map(r => r.value);
    if (cwData.length > 0) {
      const cwRow = buildRow("Continue Watching", cwData, "mixed");
      if (cwRow) {
        // Fix types per item
        cwData.forEach((item, i) => {
          const cards = cwRow.querySelectorAll(".movie-card");
          if (cards[i]) cards[i].dataset.type = item._mediaType;
        });
        categoriesEl.appendChild(cwRow);
      }
    }
  }

  // My List row
  const myListItems = MyList.get();
  if (myListItems.length > 0) {
    const mlData = await Promise.allSettled(
      myListItems.slice(0, 20).map(i =>
        tmdb(i.type === "tv" ? `/tv/${i.id}` : `/movie/${i.id}`)
          .then(d => ({ ...d, _mediaType: i.type }))
      )
    );
    const mlItems = mlData.filter(r => r.status === "fulfilled").map(r => r.value);
    if (mlItems.length > 0) {
      const mlRow = document.createElement("div");
      mlRow.className = "row-wrapper";
      mlRow.id = "my-list";
      mlRow.innerHTML = `
        <div class="row-header"><h2 class="row-title">My List</h2></div>
        <div class="row-track-container">
          <button class="row-arrow arrow-left" aria-label="Scroll left">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div class="row-track"></div>
          <button class="row-arrow arrow-right" aria-label="Scroll right">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      `;
      const track = mlRow.querySelector(".row-track");
      mlItems.forEach(item => {
        track.appendChild(buildMovieCard(item, item._mediaType || "movie"));
      });
      const la = mlRow.querySelector(".arrow-left");
      const ra = mlRow.querySelector(".arrow-right");
      la.addEventListener("click", () => track.scrollBy({ left: -600, behavior: "smooth" }));
      ra.addEventListener("click", () => track.scrollBy({ left:  600, behavior: "smooth" }));
      categoriesEl.appendChild(mlRow);
    }
  }

  // Render category rows
  results.forEach((result, i) => {
    if (result.status !== "fulfilled") return;
    const data  = result.value;
    const items = data.results || [];
    const cat   = categories[i];

    // Set hero from first trending row
    if (!heroLoaded && i === 0 && items.length > 0) {
      heroLoaded = true;
      const heroItem = items[Math.floor(Math.random() * Math.min(5, items.length))];
      loadHero(heroItem);
    }

    const row = buildRow(cat.title, items, cat.type);
    if (row) categoriesEl.appendChild(row);
  });

  // Show main
  if (main) main.style.opacity = "1";
}

// ── Hero ─────────────────────────────────────────────────────
async function loadHero(item) {
  if (!item) return;

  const id    = item.id;
  const type  = item.media_type === "tv" ? "tv" : "movie";
  const title = item.title || item.name || "";
  const desc  = item.overview || "";
  const backdrop = item.backdrop_path ? `${IMG_ORIG}${item.backdrop_path}` : "";

  const heroBackdrop = $("#hero-backdrop");
  const heroTitle    = $("#hero-title");
  const heroDesc     = $("#hero-desc");
  const heroMeta     = $("#hero-meta");
  const heroPlayBtn  = $("#hero-play-btn");
  const heroInfoBtn  = $("#hero-info-btn");

  if (heroBackdrop && backdrop) {
    heroBackdrop.style.backgroundImage = `url(${backdrop})`;
  }
  if (heroTitle) heroTitle.textContent = title;
  if (heroDesc)  heroDesc.textContent  = desc;

  // Fetch details for rating / genres
  try {
    const detail = await tmdb(`/${type}/${id}`);
    const rating = detail.vote_average ? detail.vote_average.toFixed(1) : "";
    const genres = (detail.genres || []).slice(0, 3).map(g => g.name).join(", ");
    const runtime = detail.runtime ? formatRuntime(detail.runtime) : (detail.episode_run_time ? formatRuntime(detail.episode_run_time[0]) : "");
    const releaseYear = year(detail.release_date || detail.first_air_date);

    if (heroMeta) {
      heroMeta.innerHTML = `
        ${rating ? `<span class="rating"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${rating}</span>` : ""}
        <span>${releaseYear}</span>
        ${runtime ? `<span>${runtime}</span>` : ""}
        ${genres ? `<span>${esc(genres)}</span>` : ""}
      `;
    }
  } catch (_) { /* non-critical */ }

  const href = type === "tv" ? `tv.html?id=${id}` : `movie.html?id=${id}`;
  if (heroPlayBtn) {
    heroPlayBtn.addEventListener("click", () => {
      navigateWithLoader(href, backdrop, title);
    });
  }
  if (heroInfoBtn) {
    heroInfoBtn.addEventListener("click", () => { location.href = href; });
  }
  const heroButtons = document.querySelector(".hero-buttons");
  if (heroButtons && !document.getElementById("hero-list-btn")) {
    const heroListBtn = document.createElement("button");
    heroListBtn.id = "hero-list-btn";
    heroListBtn.className = "btn btn-secondary btn-3d";
    const added = MyList.has(id, type);
    heroListBtn.textContent = added ? "In My List" : "Add to My List";
    heroListBtn.onclick = () => {
      const nowAdded = MyList.toggle({ id, type, title, poster: item.poster_path });
      heroListBtn.textContent = nowAdded ? "In My List" : "Add to My List";
    };
    heroButtons.appendChild(heroListBtn);
  }
}

// ── Splash ───────────────────────────────────────────────────
function initSplash() {
  const splash = $("#splash-screen");
  if (!splash) return;

  // Always show splash on home page load
  const shown = sessionStorage.getItem("pt_splash");
  if (shown) {
    splash.style.display = "none";
    const main = $("#main-content");
    if (main) main.style.opacity = "1";
    return;
  }

  // Hide after 3 seconds
  setTimeout(() => {
    splash.classList.add("fade-out");
    setTimeout(() => {
      splash.style.display = "none";
      sessionStorage.setItem("pt_splash", "1");
    }, 800);
  }, 3000);
}

// ============================================================
//  MOVIE DETAIL PAGE
// ============================================================
async function initMoviePage() {
  initNavbar();

  // Netflix-style loader on entry
  await checkPlayLoader();

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  if (!id) { location.href = appUrl("index.html"); return; }

  try {
    const movie = await tmdb(`/movie/${id}?append_to_response=credits,similar`);

    // Title
    document.title = `SheLivesWithUs — ${movie.title || "Movie"}`;

    // Backdrop
    const backdrop = movie.backdrop_path ? `${IMG_ORIG}${movie.backdrop_path}` : "";
    const backdropEl = $("#detail-backdrop");
    if (backdropEl && backdrop) {
      backdropEl.style.backgroundImage = `url(${backdrop})`;
    }

    // Header
    const headerEl = $("#detail-header");
    if (headerEl) {
      const genres = (movie.genres || []).map(g =>
        `<span class="genre-pill">${esc(g.name)}</span>`
      ).join("");

      const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";
      const inList = MyList.has(movie.id, "movie");

      headerEl.innerHTML = `
        <h1 class="detail-title">${esc(movie.title || "")}</h1>
        <div class="detail-meta">
          <span class="rating-badge">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${esc(rating)}
          </span>
          <span>${year(movie.release_date)}</span>
          ${movie.runtime ? `<span>${formatRuntime(movie.runtime)}</span>` : ""}
          ${genres}
        </div>
        <p class="detail-overview">${esc(movie.overview || "")}</p>
        <div class="detail-action-row">
          <button class="detail-list-btn ${inList ? "in-list" : ""}" id="detail-list-btn">
            ${inList
              ? `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List`
              : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List`
            }
          </button>
          <button class="detail-list-btn" id="watch-in-theater-btn">Watch in Theater</button>
        </div>
      `;

      // My List toggle
      const listBtn = headerEl.querySelector("#detail-list-btn");
      listBtn.addEventListener("click", () => {
        const added = MyList.toggle({
          id: movie.id, type: "movie",
          title: movie.title,
          poster: movie.poster_path
        });
        listBtn.className = `detail-list-btn ${added ? "in-list" : ""}`;
        listBtn.innerHTML = added
          ? `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List`
          : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List`;
      });
      const theaterBtn = headerEl.querySelector("#watch-in-theater-btn");
      if (theaterBtn) theaterBtn.addEventListener("click", () => {
        const target = new URL(appHref("theater/"));
        target.searchParams.set("src", VIDKING_MOVIE(id));
        location.href = target.toString();
      });
    }

    // Player
    const playerContainer = $("#player-container");
    if (playerContainer) {
      playerContainer.innerHTML = `<iframe src="${VIDKING_MOVIE(id)}" allow="autoplay; fullscreen"></iframe>`;
    }

    // Sidebar poster
    const sidebarPoster = $("#sidebar-poster");
    if (sidebarPoster && movie.poster_path) {
      sidebarPoster.src = `${IMG_W500}${movie.poster_path}`;
      sidebarPoster.alt = movie.title || '';
      sidebarPoster.style.display = '';
    }

    // Sidebar list button
    const sidebarListBtn = $("#sidebar-list-btn");
    if (sidebarListBtn) {
      const updateSidebarList = () => {
        const inList = MyList.has(movie.id, "movie");
        sidebarListBtn.innerHTML = inList
          ? `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 6L9 17l-5-5"/></svg> In My List`
          : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List`;
      };
      updateSidebarList();
      sidebarListBtn.addEventListener("click", () => {
        MyList.toggle({ id: movie.id, type: "movie", title: movie.title, poster: movie.poster_path });
        updateSidebarList();
      });
    }

    // Sidebar share button
    const sidebarShareBtn = $("#sidebar-share-btn");
    if (sidebarShareBtn) {
      sidebarShareBtn.addEventListener("click", () => {
        if (navigator.share) {
          navigator.share({ title: `${movie.title} — SheLivesWithUs`, url: location.href });
        } else {
          navigator.clipboard.writeText(location.href).then(() => {
            sidebarShareBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Link Copied!`;
            setTimeout(() => {
              sidebarShareBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Share`;
            }, 2000);
          });
        }
      });
    }

    // Update OG meta dynamically (for share previews)
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogTitle) ogTitle.content = `${movie.title} — SheLivesWithUs`;
    if (ogDesc) ogDesc.content = movie.overview || 'Watch free on SheLivesWithUs';
    if (ogImage && movie.backdrop_path) ogImage.content = `${IMG_ORIG}${movie.backdrop_path}`;

    // Detail info grid
    const detailInfo = $("#detail-info");
    if (detailInfo && movie) {
      detailInfo.innerHTML = `
        <div class="detail-info-grid">
          ${movie.status   ? `<div class="info-item"><label>Status</label><span>${esc(movie.status)}</span></div>` : ""}
          ${movie.budget   ? `<div class="info-item"><label>Budget</label><span>$${(movie.budget / 1e6).toFixed(1)}M</span></div>` : ""}
          ${movie.revenue  ? `<div class="info-item"><label>Revenue</label><span>$${(movie.revenue / 1e6).toFixed(1)}M</span></div>` : ""}
          ${movie.original_language ? `<div class="info-item"><label>Language</label><span>${esc(movie.original_language.toUpperCase())}</span></div>` : ""}
          ${(movie.production_companies || []).length ? `<div class="info-item"><label>Studio</label><span>${esc(movie.production_companies[0].name)}</span></div>` : ""}
        </div>
      `;
    }

    // Cast
    const cast = (movie.credits && movie.credits.cast || []).slice(0, 20);
    if (cast.length > 0) {
      const castSection = $("#cast-section");
      const castRow     = $("#cast-row");
      if (castSection && castRow) {
        castSection.style.display = "";
        cast.forEach(actor => {
          const img = actor.profile_path
            ? `<img class="cast-img" src="${IMG_W500}${actor.profile_path}" alt="${esc(actor.name)}" loading="lazy" />`
            : `<div class="cast-img" style="background:var(--bg4);border-radius:var(--radius-sm);"></div>`;
          const card = document.createElement("div");
          card.className = "cast-card";
          card.innerHTML = `
            ${img}
            <div class="cast-name">${esc(actor.name)}</div>
            <div class="cast-char">${esc(actor.character || "")}</div>
          `;
          castRow.appendChild(card);
        });
      }
    }

    // Similar movies
    const similar = (movie.similar && movie.similar.results || []).slice(0, 20);
    if (similar.length > 0) {
      const simSection = $("#similar-section");
      const simRow     = $("#similar-row");
      if (simSection && simRow) {
        simSection.style.display = "";
        similar.forEach(item => simRow.appendChild(buildMovieCard(item, "movie")));
      }
    }

  } catch (err) {
    console.error("Movie detail error:", err);
    const h = $("#detail-header");
    if (h) h.innerHTML = `<p style="color:var(--text-muted)">Failed to load movie details. Please try again.</p>`;
  }
}

// ============================================================
//  TV DETAIL PAGE
// ============================================================
async function initTvPage() {
  initNavbar();

  // Netflix-style loader on entry
  await checkPlayLoader();

  const params  = new URLSearchParams(location.search);
  const id      = params.get("id");
  const initSeason  = parseInt(params.get("season") || "1", 10);
  const initEpisode = parseInt(params.get("episode") || "1", 10);

  if (!id) { location.href = appUrl("index.html"); return; }

  let currentSeason  = initSeason;
  let currentEpisode = initEpisode;

  try {
    const show = await tmdb(`/tv/${id}?append_to_response=credits,similar`);

    document.title = `SheLivesWithUs — ${show.name || "TV Show"}`;

    // Backdrop
    const backdrop = show.backdrop_path ? `${IMG_ORIG}${show.backdrop_path}` : "";
    const backdropEl = $("#detail-backdrop");
    if (backdropEl && backdrop) {
      backdropEl.style.backgroundImage = `url(${backdrop})`;
    }

    // Header
    const headerEl = $("#detail-header");
    if (headerEl) {
      const genres = (show.genres || []).map(g =>
        `<span class="genre-pill">${esc(g.name)}</span>`
      ).join("");
      const rating = show.vote_average ? show.vote_average.toFixed(1) : "N/A";
      const inList = MyList.has(show.id, "tv");

      headerEl.innerHTML = `
        <h1 class="detail-title">${esc(show.name || "")}</h1>
        <div class="detail-meta">
          <span class="rating-badge">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${esc(rating)}
          </span>
          <span>${year(show.first_air_date)}</span>
          ${show.number_of_seasons ? `<span>${show.number_of_seasons} Season${show.number_of_seasons !== 1 ? "s" : ""}</span>` : ""}
          ${genres}
        </div>
        <p class="detail-overview">${esc(show.overview || "")}</p>
        <div class="detail-action-row">
          <button class="detail-list-btn ${inList ? "in-list" : ""}" id="detail-list-btn">
            ${inList
              ? `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List`
              : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List`
            }
          </button>
          <button class="detail-list-btn" id="watch-in-theater-btn">Watch in Theater</button>
        </div>
      `;

      const listBtn = headerEl.querySelector("#detail-list-btn");
      listBtn.addEventListener("click", () => {
        const added = MyList.toggle({
          id: show.id, type: "tv",
          title: show.name,
          poster: show.poster_path
        });
        listBtn.className = `detail-list-btn ${added ? "in-list" : ""}`;
        listBtn.innerHTML = added
          ? `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List`
          : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List`;
      });
      const theaterBtn = headerEl.querySelector("#watch-in-theater-btn");
      if (theaterBtn) theaterBtn.addEventListener("click", () => {
        const target = new URL(appHref("theater/"));
        target.searchParams.set("src", VIDKING_TV(id, currentSeason, currentEpisode));
        location.href = target.toString();
      });
    }

    // Player
    function loadPlayer(season, episode) {
      const pc = $("#player-container");
      if (pc) {
        pc.innerHTML = `<iframe src="${VIDKING_TV(id, season, episode)}" allow="autoplay; fullscreen"></iframe>`;
      }
      // Update URL
      const url = new URL(location.href);
      url.searchParams.set("season", season);
      url.searchParams.set("episode", episode);
      history.replaceState(null, "", url.toString());
    }

    loadPlayer(currentSeason, currentEpisode);

    // Season/episode selector
    const seasons = (show.seasons || []).filter(s => s.season_number > 0);
    if (seasons.length > 0) {
      const episodeSelector = $("#episode-selector");
      const seasonSelect    = $("#season-select");
      const episodesGrid    = $("#episodes-grid");

      if (episodeSelector && seasonSelect && episodesGrid) {
        episodeSelector.style.display = "";

        seasons.forEach(s => {
          const opt = document.createElement("option");
          opt.value = s.season_number;
          opt.textContent = `Season ${s.season_number}`;
          if (s.season_number === currentSeason) opt.selected = true;
          seasonSelect.appendChild(opt);
        });

        async function loadEpisodes(seasonNum) {
          episodesGrid.innerHTML = `<div class="spinner" style="margin:20px auto;"></div>`;
          try {
            const seasonData = await tmdb(`/tv/${id}/season/${seasonNum}`);
            const episodes   = seasonData.episodes || [];
            episodesGrid.innerHTML = "";
            episodes.forEach(ep => {
              const thumb = ep.still_path ? `${IMG_W500}${ep.still_path}` : "";
              const card  = document.createElement("div");
              card.className = `episode-card${ep.episode_number === currentEpisode && seasonNum === currentSeason ? " active" : ""}`;
              card.innerHTML = `
                ${thumb
                  ? `<img class="episode-thumb" src="${esc(thumb)}" alt="Episode ${ep.episode_number}" loading="lazy" />`
                  : `<div class="episode-thumb" style="background:var(--surface);flex:0 0 120px;"></div>`
                }
                <div class="episode-info">
                  <div class="episode-num">Episode ${ep.episode_number}</div>
                  <div class="episode-title">${esc(ep.name || "")}</div>
                  <div class="episode-desc">${esc(ep.overview || "No description available.")}</div>
                </div>
              `;
              card.addEventListener("click", () => {
                currentSeason  = seasonNum;
                currentEpisode = ep.episode_number;
                $$(".episode-card").forEach(c => c.classList.remove("active"));
                card.classList.add("active");
                loadPlayer(currentSeason, currentEpisode);
                // Scroll to player
                const pc = $("#player-container");
                if (pc) pc.scrollIntoView({ behavior: "smooth", block: "start" });
              });
              episodesGrid.appendChild(card);
            });
          } catch (_) {
            episodesGrid.innerHTML = `<p style="color:var(--text-muted);padding:12px;">Failed to load episodes.</p>`;
          }
        }

        loadEpisodes(currentSeason);

        seasonSelect.addEventListener("change", () => {
          currentSeason  = parseInt(seasonSelect.value, 10);
          currentEpisode = 1;
          loadEpisodes(currentSeason);
          loadPlayer(currentSeason, currentEpisode);
        });
      }
    }

    // Detail info
    const detailInfo = $("#detail-info");
    if (detailInfo) {
      detailInfo.innerHTML = `
        <div class="detail-info-grid">
          ${show.status   ? `<div class="info-item"><label>Status</label><span>${esc(show.status)}</span></div>` : ""}
          ${show.type     ? `<div class="info-item"><label>Type</label><span>${esc(show.type)}</span></div>` : ""}
          ${show.number_of_episodes ? `<div class="info-item"><label>Episodes</label><span>${show.number_of_episodes}</span></div>` : ""}
          ${show.original_language  ? `<div class="info-item"><label>Language</label><span>${esc(show.original_language.toUpperCase())}</span></div>` : ""}
          ${show.networks && show.networks[0] ? `<div class="info-item"><label>Network</label><span>${esc(show.networks[0].name)}</span></div>` : ""}
        </div>
      `;
    }

    // Cast
    const cast = (show.credits && show.credits.cast || []).slice(0, 20);
    if (cast.length > 0) {
      const castSection = $("#cast-section");
      const castRow     = $("#cast-row");
      if (castSection && castRow) {
        castSection.style.display = "";
        cast.forEach(actor => {
          const img = actor.profile_path
            ? `<img class="cast-img" src="${IMG_W500}${actor.profile_path}" alt="${esc(actor.name)}" loading="lazy" />`
            : `<div class="cast-img" style="background:var(--bg4);border-radius:var(--radius-sm);"></div>`;
          const card = document.createElement("div");
          card.className = "cast-card";
          card.innerHTML = `
            ${img}
            <div class="cast-name">${esc(actor.name)}</div>
            <div class="cast-char">${esc(actor.character || "")}</div>
          `;
          castRow.appendChild(card);
        });
      }
    }

    // Similar
    const similar = (show.similar && show.similar.results || []).slice(0, 20);
    if (similar.length > 0) {
      const simSection = $("#similar-section");
      const simRow     = $("#similar-row");
      if (simSection && simRow) {
        simSection.style.display = "";
        similar.forEach(item => simRow.appendChild(buildMovieCard(item, "tv")));
      }
    }

  } catch (err) {
    console.error("TV detail error:", err);
    const h = $("#detail-header");
    if (h) h.innerHTML = `<p style="color:var(--text-muted)">Failed to load show details. Please try again.</p>`;
  }
}

// ============================================================
//  SEARCH PAGE
// ============================================================
function initSearchPage() {
  initNavbar();

  const mainInput   = $("#main-search-input");
  const clearBtn    = $("#search-clear");
  const statusEl    = $("#search-status");
  const resultsEl   = $("#search-results");
  const filterBtns  = $$(".filter-btn");

  const params      = new URLSearchParams(location.search);
  const initialQ    = params.get("q") || "";
  const initialType = params.get("type") || "all";

  let currentFilter = initialType !== "all" ? initialType : "all";
  let searchTimer   = null;
  let lastQuery     = "";

  // Set initial filter
  filterBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === currentFilter);
  });

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.toggle("active", b === btn));
      if (lastQuery) doSearch(lastQuery);
      else if (currentFilter !== "all") doSearch("");
    });
  });

  if (mainInput) {
    mainInput.value = initialQ;
    mainInput.addEventListener("input", () => {
      const q = mainInput.value.trim();
      clearBtn.style.display = q ? "flex" : "none";
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => doSearch(q), 500);
    });
    // Auto-search on load
    if (initialQ) {
      clearBtn.style.display = "flex";
      doSearch(initialQ);
    } else if (currentFilter !== "all") {
      doSearch("");
    } else {
      showDefaultState();
    }
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      mainInput.value = "";
      clearBtn.style.display = "none";
      mainInput.focus();
      showDefaultState();
    });
  }

  function showDefaultState() {
    statusEl.textContent = "";
    resultsEl.innerHTML = `
      <div class="no-results">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <h3>Search SheLivesWithUs</h3>
        <p>Find movies and TV shows</p>
      </div>
    `;
  }

  async function doSearch(query) {
    lastQuery = query;

    if (!query && currentFilter === "all") {
      showDefaultState();
      return;
    }

    statusEl.textContent = "Searching…";
    resultsEl.innerHTML = "";

    // Show skeleton
    const grid = resultsEl;
    for (let i = 0; i < 12; i++) {
      const s = document.createElement("div");
      s.className = "skeleton-card skeleton";
      s.style.aspectRatio = "2/3";
      grid.appendChild(s);
    }

    try {
      let items = [];

      if (query) {
        let searchPath = "/search/multi";
        if (currentFilter === "movie") searchPath = "/search/movie";
        else if (currentFilter === "tv")    searchPath = "/search/tv";

        const data = await tmdb(`${searchPath}?query=${encodeURIComponent(query)}&page=1`);
        items = (data.results || []).filter(i => !HiddenList.has(i.id, i.media_type || currentFilter));
      } else {
        // Browse by type
        const path = currentFilter === "movie" ? "/movie/popular" : "/tv/popular";
        const data = await tmdb(`${path}`);
        items = data.results || [];
      }

      // Filter
      if (currentFilter !== "all" && query) {
        items = items.filter(i => (i.media_type || currentFilter) === currentFilter);
      }

      resultsEl.innerHTML = "";

      if (items.length === 0) {
        statusEl.textContent = "";
        resultsEl.innerHTML = `
          <div class="no-results" style="grid-column:1/-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <h3>No results found</h3>
            <p>Try a different search term or browse our categories on the home page.</p>
          </div>
        `;
        return;
      }

      statusEl.textContent = query
        ? `${items.length} result${items.length !== 1 ? "s" : ""} for "${query}"`
        : `Showing popular ${currentFilter === "tv" ? "TV shows" : "movies"}`;

      items.forEach(item => {
        const type     = item.media_type || currentFilter;
        const id       = item.id;
        const title    = item.title || item.name || "Untitled";
        const poster   = posterUrl(item.poster_path);
        const date     = item.release_date || item.first_air_date || "";
        const rating   = item.vote_average ? item.vote_average.toFixed(1) : "";
        const href     = type === "tv" ? appHref(`tv.html?id=${id}`) : appHref(`movie.html?id=${id}`);

        const card = document.createElement("div");
        card.className = "search-card fade-in";
        card.innerHTML = `
          ${poster
            ? `<img src="${esc(poster)}" alt="${esc(title)}" loading="lazy" />`
            : `<div class="no-poster">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                 No Image
               </div>`
          }
          <div class="search-card-info">
            <div class="search-card-title">${esc(title)}</div>
            <div class="search-card-meta">
              <span class="type-badge ${type === "tv" ? "tv" : "movie"}">${type === "tv" ? "TV" : "Movie"}</span>
              ${year(date)}
              ${rating ? `· ⭐ ${rating}` : ""}
            </div>
          </div>
        `;
        card.addEventListener("click", () => { location.href = href; });
        resultsEl.appendChild(card);
      });

    } catch (err) {
      console.error("Search error:", err);
      resultsEl.innerHTML = `<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px">Search failed. Please try again.</p>`;
      statusEl.textContent = "";
    }
  }
}

// ============================================================
//  NETFLIX-STYLE PLAY LOADER
// ============================================================
function showPlayLoader(backdropUrl, title) {
  return new Promise((resolve) => {
    // Create overlay
    const loader = document.createElement('div');
    loader.className = 'play-loader';
    loader.innerHTML = `
      <div class="play-loader-backdrop" style="background-image:url(${esc(backdropUrl || '')})"></div>
      <div class="play-loader-overlay"></div>
      <div class="play-loader-content">
        <div class="play-loader-logo">SHELIVESWITHUS</div>
        <div class="play-loader-title">${esc(title || '')}</div>
        <div class="play-loader-ring"></div>
      </div>
    `;
    document.body.appendChild(loader);

    // Trigger animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { loader.classList.add('active'); });
    });

    // Resolve after animation
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.remove();
        resolve();
      }, 600);
    }, 2400);
  });
}

// Navigate with play loader
function navigateWithLoader(href, backdropUrl, title) {
  // Store loader data for the target page
  sessionStorage.setItem('pt_play_loader', JSON.stringify({ backdrop: backdropUrl, title }));
  showPlayLoader(backdropUrl, title).then(() => {
    location.href = href;
  });
}

// Show loader on page load if coming from a play action
function checkPlayLoader() {
  const data = sessionStorage.getItem('pt_play_loader');
  if (data) {
    sessionStorage.removeItem('pt_play_loader');
    try {
      const { backdrop, title } = JSON.parse(data);
      return showPlayLoader(backdrop, title);
    } catch(_) {}
  }
  return Promise.resolve();
}

// ============================================================
//  SERVICE WORKER REGISTRATION
// ============================================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// ============================================================
//  BOOT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  switch (PAGE) {
    case "home":   initHomePage();   break;
    case "movie":  initMoviePage();  break;
    case "tv":     initTvPage();     break;
    case "search": initSearchPage(); break;
    case "profile": break;
    case "theater": break;
  }
});



/* ============================================================
   SheLivesWithUs — Global overlays, TV remote, profile, theater
   ============================================================ */
(function() {
  const BC = ("BroadcastChannel" in window) ? new BroadcastChannel("slwu_remote") : null;

  const PROFILE_KEY = "slwu_profiles";
  const ACTIVE_PROFILE_KEY = "pt_active_profile";
  const REMOTE_STATE_KEY = "slwu_remote_state";
  const NOW_PLAYING_KEY = "slwu_now_playing";
  const UI_SCALE_KEY = "slwu_ui_scale_2x";

  const CATALOG_GENRES = {
    "New Releases": "/movie/now_playing",
    "Family": "/discover/movie?with_genres=10751",
    "Comedy": "/discover/movie?with_genres=35",
    "Action": "/discover/movie?with_genres=28",
    "Horror": "/discover/movie?with_genres=27",
    "Classics": "/discover/movie?primary_release_date.lte=1999-12-31&sort_by=popularity.desc",
    "Cartoons": "/discover/movie?with_genres=16"
  };

  function getProfiles() {
    try { return JSON.parse(localStorage.getItem(PROFILE_KEY) || "[]"); } catch (_) { return []; }
  }
  function saveProfiles(items) {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(items));
  }
  function getActiveProfile() {
    const id = localStorage.getItem(ACTIVE_PROFILE_KEY);
    return getProfiles().find(p => p.id === id) || null;
  }
  function upsertProfile(name, pin) {
    const profiles = getProfiles();
    let profile = profiles.find(p => p.name.toLowerCase() === String(name).trim().toLowerCase());
    if (!profile) {
      profile = { id: "p_" + Date.now(), name: String(name).trim(), pin: String(pin).trim(), createdAt: Date.now() };
      profiles.push(profile);
    } else {
      profile.pin = String(pin).trim();
    }
    saveProfiles(profiles);
    localStorage.setItem(ACTIVE_PROFILE_KEY, profile.id);
    return profile;
  }
  function loginProfile(name, pin) {
    const profile = getProfiles().find(p => p.name.toLowerCase() === String(name).trim().toLowerCase() && String(p.pin) === String(pin).trim());
    if (profile) localStorage.setItem(ACTIVE_PROFILE_KEY, profile.id);
    return profile;
  }
  function deleteProfile(id) {
    const items = getProfiles().filter(p => p.id !== id);
    saveProfiles(items);
    if (localStorage.getItem(ACTIVE_PROFILE_KEY) === id) localStorage.removeItem(ACTIVE_PROFILE_KEY);
  }
  function setNowPlayingFromIframe(iframe, context = {}) {
    if (!iframe || !iframe.src) return;
    const pagePoster = document.querySelector("#sidebar-poster")?.src || "";
    const payload = { src: iframe.src, title: document.title, url: location.href, page: PAGE, poster: pagePoster, ts: Date.now(), ...context };
    localStorage.setItem(NOW_PLAYING_KEY, JSON.stringify(payload));
  }
  function getNowPlaying() {
    try { return JSON.parse(localStorage.getItem(NOW_PLAYING_KEY) || "null"); } catch (_) { return null; }
  }
  function pushRemoteAction(action, payload = {}) {
    const data = { action, payload, ts: Date.now() };
    localStorage.setItem(REMOTE_STATE_KEY, JSON.stringify(data));
    if (BC) BC.postMessage(data);
  }
  function toggleAppFullscreen() {
    if (document.fullscreenElement) return document.exitFullscreen().catch(() => {});
    return document.documentElement.requestFullscreen?.().catch(() => {});
  }
  function getCurrentPageIframe() {
    return document.querySelector("#player-container iframe, #theater-player");
  }
  function tryControlIframe(command, args = []) {
    const iframe = getCurrentPageIframe() || document.querySelector("#tvremote-mini-player iframe");
    if (!iframe || !iframe.contentWindow) return false;
    try {
      iframe.contentWindow.postMessage(JSON.stringify({ event: "command", func: command, args }), "*");
      return true;
    } catch (_) {
      return false;
    }
  }
  function ensureGlobalUI() {
    document.querySelectorAll(".footer, .ad-container-native, .ad-container-banner, .ad-toggle-wrap").forEach(el => el.remove());

    const navLeft = document.querySelector("#navbar .nav-left");
    if (navLeft) {
      const logo = navLeft.querySelector('.nav-logo');
      if (logo) logo.remove();
    }
    const navRight = document.querySelector("#navbar .nav-right");
    if (navRight && !document.getElementById("nav-collapse-btn")) {
      const navCollapseBtn = document.createElement("button");
      navCollapseBtn.id = "nav-collapse-btn";
      navCollapseBtn.className = "nav-chip-btn nav-chip-btn--menu";
      navCollapseBtn.textContent = "☰";
      navRight.appendChild(navCollapseBtn);
    }

    if (!document.getElementById("global-action-stack")) {
      const stack = document.createElement("div");
      stack.id = "global-action-stack";
      stack.className = "global-action-stack";
      stack.innerHTML = `
        <button id="global-stack-toggle" class="global-fab global-fab--toggle" aria-label="Menu">☰</button>
        <div class="global-action-stack-menu">
          <button id="global-appfs-btn" class="global-fab global-fab--stack">Full</button>
          <button id="global-tv-btn" class="global-fab global-fab--stack">TV</button>
          <button id="global-scale-btn" class="global-fab global-fab--stack">1x</button>
          <button id="global-profile-btn" class="global-fab global-fab--stack">Profile</button>
          <button id="global-mylist-btn" class="global-fab global-fab--stack">My List</button>
          <button id="global-hidden-btn" class="global-fab global-fab--stack">Hidden</button>
          <button id="global-theater-btn" class="global-fab global-fab--stack">Theater</button>
          <button id="global-catalog-btn" class="global-fab global-fab--stack">Catalog</button>
          <button id="global-search-btn" class="global-fab global-fab--stack global-fab--search">Menu</button>
        </div>
      `;
      document.body.appendChild(stack);
    }
    if (!document.getElementById("slwu-brand-pin")) {
      const brand = document.createElement("div");
      brand.id = "slwu-brand-pin";
      brand.textContent = "SheLivesWithMe";
      document.body.appendChild(brand);
    }

    if (!document.getElementById("slwu-profile-modal")) {
      const modal = document.createElement("div");
      modal.id = "slwu-profile-modal";
      modal.className = "slwu-modal";
      modal.innerHTML = `
        <div class="slwu-modal-card">
          <button class="slwu-modal-close" data-close-modal="profile">×</button>
          <h2>PROFILE</h2>
          <p>Scan to open the local profile page.</p>
          <img id="slwu-profile-qr" alt="Profile QR Code" />
          <div class="slwu-modal-actions">
            <a class="btn btn-primary btn-3d" href="${appUrl('profile/')}">Open Profile</a>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    if (!document.getElementById("tv-remote-panel")) {
      const panel = document.createElement("aside");
      panel.id = "tv-remote-panel";
      panel.className = "tv-remote-panel";
      panel.innerHTML = `
        <div class="tv-remote-header">
          <div class="tv-remote-header-actions tv-remote-header-actions--split">
            <div class="tv-remote-header-actions">
              <button id="tvremote-nowplaying-toggle" class="remote-mini-btn remote-mini-btn--primary">Now Playing</button>
              <button id="tvremote-more-header" class="remote-mini-btn">Load More</button>
              <button id="tvremote-random-header" class="remote-mini-btn">Random</button>
            </div>
            <div class="tv-remote-header-actions">
              <button id="tvremote-fullscreen" class="remote-mini-btn">1x</button>
              <button id="tvremote-controls-toggle" class="remote-mini-btn">Controls</button>
              <button id="tvremote-close" class="remote-mini-btn">✕</button>
            </div>
          </div>
        </div>

        <div class="tvremote-section">
          <div id="tvremote-mini-player" class="tvremote-mini-player" hidden>
            <iframe title="Now Playing Preview" allow="autoplay; fullscreen"></iframe>
          </div>
          <div id="tvremote-nowplaying-meta" class="tvremote-nowplaying-meta"></div>
        </div>

        <div class="tvremote-section tvremote-sticky-search">
          <div class="tvremote-input-wrap">
            <input id="tvremote-search" class="tvremote-input" type="text" placeholder="Search movies or TV..." />
            <button id="tvremote-search-clear" class="tvremote-clear-btn" type="button">Clear</button>
          </div>
          <div class="tvremote-tab-row">
            <button class="remote-pill active" data-remote-tab="search">Search</button>
            <button class="remote-pill" data-remote-mode="home">Home</button>
            <button class="remote-pill" data-remote-mode="movie">Movies</button>
            <button class="remote-pill" data-remote-mode="tv">TV Shows</button>
            <button class="remote-pill" data-remote-tab="catalog">Catalog</button>
            <button class="remote-pill" data-remote-tab="mylist">My List ❤</button>
          </div>
        </div>

        <div class="tvremote-scroll">
          <div id="tvremote-tab-search" class="tvremote-tab active">
            <div id="tvremote-results" class="tvremote-results"></div>
            
          </div>

          <div id="tvremote-tab-catalog" class="tvremote-tab">
            <div id="tvremote-catalog" class="tvremote-catalog"></div>
            <div id="tvremote-catalog-results" class="tvremote-results"></div>
          </div>

          <div id="tvremote-tab-mylist" class="tvremote-tab">
            <div id="tvremote-mylist" class="tvremote-results"></div>
          </div>
        </div>

        <div class="tvremote-controls">
          <div class="tvremote-row">
            <button id="tvremote-prev-episode" class="remote-btn">Prev Ep</button>
            <button id="tvremote-next-episode" class="remote-btn">Next Ep</button>
          </div>
          <div class="tvremote-grid-2">
            <button id="tvremote-playpause" class="remote-btn remote-btn-primary">Play / Pause</button>
            <button id="tvremote-stop" class="remote-btn">Stop</button>
          </div>
          <div class="tvremote-grid-2">
            <button id="tvremote-seek-back" class="remote-btn">-30s</button>
            <button id="tvremote-seek-forward" class="remote-btn">+30s</button>
            <button id="tvremote-volume-down" class="remote-btn">Vol -</button>
            <button id="tvremote-volume-up" class="remote-btn">Vol +</button>
          </div>
          <div class="tvremote-grid-2">
            <button id="tvremote-player-fullscreen" class="remote-btn">Full Screen</button>
            <button id="tvremote-player-window" class="remote-btn">Windowed</button>
          </div>
          <div class="tvremote-grid-2">
            <button id="tvremote-resolution" class="remote-btn">Resolutions</button>
            <button id="tvremote-subtitles" class="remote-btn">Subtitles</button>
          </div>
          <div id="tvremote-message" class="tvremote-message">Best-effort control for embedded players.</div>
        </div>
      `;
      document.body.appendChild(panel);
    }

    if (!document.getElementById("global-search-sheet")) {
      const sheet = document.createElement("section");
      sheet.id = "global-search-sheet";
      sheet.className = "global-search-sheet";
      sheet.innerHTML = `
        <div class="global-search-sheet-inner">
          <div class="global-search-results-wrap">
            <aside class="global-search-side">
              <div class="sheet-title">My List</div>
              <div id="global-search-mylist" class="global-search-mylist"></div>
            </aside>
            <section class="global-search-main">
              <div id="global-search-results" class="global-search-results"></div>
            </section>
          </div>
          <div class="global-search-inputbar">
            <div class="global-search-inputwrap">
              <input id="global-search-input" type="text" placeholder="Search anything..." />
              <button id="global-search-clear" class="remote-mini-btn" type="button">Clear</button>
            </div>
            <button id="global-search-close" class="remote-mini-btn">Close</button>
          </div>
        </div>
      `;
      document.body.appendChild(sheet);
    }
    if (!document.getElementById("global-hidden-sheet")) {
      const sheet = document.createElement("section");
      sheet.id = "global-hidden-sheet";
      sheet.className = "global-search-sheet";
      sheet.innerHTML = `
        <div class="global-search-sheet-inner">
          <div class="global-search-results-wrap">
            <section class="global-search-main">
              <div class="sheet-title">Hidden</div>
              <div id="global-hidden-results" class="global-search-results"></div>
            </section>
          </div>
          <div class="global-search-inputbar">
            <div></div>
            <button id="global-hidden-close" class="remote-mini-btn">Close</button>
          </div>
        </div>
      `;
      document.body.appendChild(sheet);
    }
  }

  function initGlobalButtons() {
    const body = document.body;
    const closeBtn = document.getElementById("tvremote-close");
    const profileBtn = document.getElementById("profile-open-btn");
    const modal = document.getElementById("slwu-profile-modal");
    const theater = document.getElementById("global-theater-btn");
    const myListBtn = document.getElementById("global-mylist-btn");
    const hiddenBtn = document.getElementById("global-hidden-btn");
    const menuToggle = document.getElementById("global-stack-toggle");
    const appFsBtn = document.getElementById("global-appfs-btn");
    const scale = document.getElementById("global-scale-btn");
    const tvMenuBtn = document.getElementById("global-tv-btn");
    const profileMenuBtn = document.getElementById("global-profile-btn");
    const catalogBtn = document.getElementById("global-catalog-btn");
    const navCollapseBtn = document.getElementById("nav-collapse-btn");
    const searchFab = document.getElementById("global-search-btn");
    const searchSheet = document.getElementById("global-search-sheet");

        if (closeBtn) closeBtn.onclick = () => body.classList.remove("remote-open");
    if (profileBtn) profileBtn.onclick = () => {
      const qr = document.getElementById("slwu-profile-qr");
      const profileUrl = appHref("profile/");
      if (qr) qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" + encodeURIComponent(profileUrl);
      modal.classList.add("open");
    };
    document.querySelectorAll("[data-close-modal='profile']").forEach(btn => btn.onclick = () => modal.classList.remove("open"));
    if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });

    if (theater) theater.onclick = () => {
      const now = getNowPlaying();
      const target = new URL(appHref("theater/"));
      if (now && now.src) target.searchParams.set("src", now.src);
      location.href = target.toString();
    };
    if (myListBtn) myListBtn.onclick = () => {
      body.classList.add("sheet-open");
      const input = document.getElementById("global-search-input");
      if (input) input.value = "";
      renderSearchMyList();
      const results = document.getElementById("global-search-results");
      if (results) results.innerHTML = '<div class="tvremote-empty">Choose from My List or search.</div>';
    };
    if (menuToggle) menuToggle.onclick = () => body.classList.toggle("stack-open");
    if (appFsBtn) appFsBtn.onclick = () => toggleAppFullscreen();
    const setUiScale = (n) => {
      body.classList.remove("ui-scale-1x","ui-scale-2x","ui-scale-3x");
      body.classList.add(`ui-scale-${n}x`);
      localStorage.setItem(UI_SCALE_KEY, String(n));
      if (scale) scale.textContent = `${n}x`;
    };
    const initialUiScale = parseInt(localStorage.getItem(UI_SCALE_KEY) || "1", 10);
    setUiScale([1,2,3].includes(initialUiScale) ? initialUiScale : 1);
    if (scale) scale.onclick = () => {
      const current = parseInt(localStorage.getItem(UI_SCALE_KEY) || "1", 10);
      setUiScale(current === 3 ? 1 : current + 1);
    };
    if (tvMenuBtn) tvMenuBtn.onclick = () => body.classList.toggle("remote-open");
    if (profileMenuBtn) profileMenuBtn.onclick = () => { const qr = document.getElementById("slwu-profile-qr"); const profileUrl = appHref("profile/"); if (qr) qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" + encodeURIComponent(profileUrl); modal?.classList.add("open"); };
    if (catalogBtn) catalogBtn.onclick = () => location.href = appHref("categories/");
    if (navCollapseBtn) navCollapseBtn.onclick = () => body.classList.toggle("nav-collapsed");
    if (searchFab) searchFab.onclick = () => body.classList.toggle("sheet-open");
    const searchClose = document.getElementById("global-search-close");
    if (searchClose) searchClose.onclick = () => body.classList.remove("sheet-open");
    const searchClear = document.getElementById("global-search-clear");
    if (searchClear) searchClear.onclick = () => {
      const input = document.getElementById("global-search-input");
      const results = document.getElementById("global-search-results");
      if (input) input.value = "";
      if (results) results.innerHTML = '<div class="tvremote-empty">Type to search.</div>';
    };
    if (searchSheet) searchSheet.addEventListener("click", (e) => {
      if (e.target === searchSheet) body.classList.remove("sheet-open");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") body.classList.remove("sheet-open");
    });
  }

  function renderRemoteCards(items, container) {
    if (!container) return;
    container.innerHTML = "";
    if (!items.length) {
      container.innerHTML = '<div class="tvremote-empty">No items found.</div>';
      return;
    }
    items.forEach(item => {
      const type = item.media_type === "tv" || item.first_air_date ? "tv" : "movie";
      const title = item.title || item.name || "Untitled";
      const href = type === "tv" ? `tv.html?id=${item.id}` : `movie.html?id=${item.id}`;
      const inList = MyList.has(item.id, type);
      const card = document.createElement("article");
      card.className = "tvremote-card";
      const poster = posterUrl(item.poster_path) || "";
      card.innerHTML = `
        <button class="tvremote-card-wish ${inList ? "in-list" : ""}" aria-label="Wish List">❤</button>
        ${poster ? `<img src="${esc(poster)}" alt="${esc(title)}" loading="lazy">` : `<div class="tvremote-card-fallback">${esc(title.slice(0,1))}</div>`}
        <div class="tvremote-card-info">
          <div class="tvremote-card-title">${esc(title)}</div>
          <div class="tvremote-card-meta">${type.toUpperCase()} · ${year(item.release_date || item.first_air_date || "")}</div>
        </div>
      `;
      card.addEventListener("click", (e) => {
        if (e.target.closest(".tvremote-card-wish")) return;
        location.href = href;
      });
      card.querySelector(".tvremote-card-wish").onclick = (e) => {
        e.stopPropagation();
        const added = MyList.toggle({ id: item.id, type, title, poster: item.poster_path });
        e.currentTarget.classList.toggle("in-list", added);
        renderMyList();
        renderSearchMyList();
      };
      container.appendChild(card);
    });
  }

  let remoteSearchPage = 1;
  let remoteSearchFilter = "all";
  let remoteSearchTerm = "";
  async function doRemoteSearch(reset = true) {
    const input = document.getElementById("tvremote-search");
    const results = document.getElementById("tvremote-results");
    if (!input || !results) return;
    const query = input.value.trim();
    if (reset) {
      remoteSearchPage = 1;
      remoteSearchTerm = query;
      results.innerHTML = "";
    }
    if (!query) {
      results.innerHTML = '<div class="tvremote-empty">Search movies, TV, or people.</div>';
      return;
    }
    const data = await tmdb(`/search/multi?query=${encodeURIComponent(query)}&page=${remoteSearchPage}`);
    const items = (data.results || []).filter(i => i.media_type === "movie" || i.media_type === "tv");
    const fragment = document.createElement("div");
    renderRemoteCards(items, fragment);
    if (reset) results.innerHTML = fragment.innerHTML;
    else results.insertAdjacentHTML("beforeend", fragment.innerHTML);
    wireRemoteCardButtons(results);
  }

  function wireRemoteCardButtons(scope) {
    scope.querySelectorAll(".tvremote-card").forEach(card => {
      if (card.dataset.wired) return;
      card.dataset.wired = "1";
      const wish = card.querySelector(".tvremote-card-wish");
      if (wish) {
        wish.addEventListener("click", (e) => e.stopPropagation());
      }
    });
  }

  async function renderCatalog() {
    const wrap = document.getElementById("tvremote-catalog");
    if (!wrap) return;
    wrap.innerHTML = "";
    Object.keys(CATALOG_GENRES).forEach(name => {
      const btn = document.createElement("button");
      btn.className = "remote-pill remote-pill--catalog";
      btn.textContent = name;
      btn.onclick = async () => {
        wrap.querySelectorAll(".remote-pill").forEach(x => x.classList.remove("active"));
        btn.classList.add("active");
        const data = await tmdb(CATALOG_GENRES[name]);
        renderRemoteCards((data.results || []).slice(0, 12), document.getElementById("tvremote-catalog-results"));
      };
      wrap.appendChild(btn);
    });
  }

  function renderMyList() {
    const box = document.getElementById("tvremote-mylist");
    if (!box) return;
    const items = MyList.get();
    if (!items.length) {
      box.innerHTML = '<div class="tvremote-empty">My List is empty.</div>';
      return;
    }
    Promise.all(items.slice(0, 24).map(i =>
      tmdb(i.type === "tv" ? `/tv/${i.id}` : `/movie/${i.id}`)
        .then(d => ({ ...d, media_type: i.type }))
        .catch(() => null)
    )).then(all => {
      renderRemoteCards(all.filter(Boolean), box);
    });
  }

  function syncMiniPlayer() {
    const miniWrap = document.getElementById("tvremote-mini-player");
    if (!miniWrap) return;
    const mini = miniWrap.querySelector("iframe");
    const live = document.querySelector("#player-container iframe");
    const now = getNowPlaying();
    const src = live?.src || now?.src || "";
    if (src && mini.src !== src) mini.src = src;
  }

  function renderSearchMyList() {
    const box = document.getElementById("global-search-mylist");
    if (!box) return;
    const items = MyList.get();
    box.innerHTML = items.length ? "" : '<div class="tvremote-empty">Nothing saved yet.</div>';
    items.slice(0, 30).forEach(item => {
      const btn = document.createElement("button");
      btn.className = "global-search-list-item";
      const title = item.title || item.name || "Saved Item";
      const poster = item.poster ? `${IMG_W500}${item.poster}` : posterUrl(item.poster_path || item.poster);
      btn.innerHTML = `
        ${poster ? `<img src="${esc(poster)}" alt="${esc(title)}" loading="lazy">` : `<span class="global-search-list-thumb-fallback">${esc(title.slice(0,1))}</span>`}
        <span class="global-search-list-label">${esc(title)}</span>
      `;
      btn.onclick = () => {
        location.href = item.type === "tv" ? `tv.html?id=${item.id}` : `movie.html?id=${item.id}`;
      };
      box.appendChild(btn);
    });
  }

  function renderHiddenList() {
    const box = document.getElementById("global-hidden-results");
    if (!box) return;
    const items = HiddenList.get();
    box.innerHTML = items.length ? "" : '<div class="tvremote-empty">Nothing hidden yet.</div>';
    items.slice(0, 40).forEach(item => {
      const btn = document.createElement("button");
      btn.className = "global-search-list-item";
      const title = item.title || item.name || "Hidden Item";
      const poster = item.poster ? `${IMG_W500}${item.poster}` : posterUrl(item.poster_path || item.poster);
      btn.innerHTML = `${poster ? `<img src="${esc(poster)}" alt="${esc(title)}" loading="lazy">` : `<span class="global-search-list-thumb-fallback">${esc(title.slice(0,1))}</span>`}<span class="global-search-list-label">${esc(title)}</span>`;
      btn.onclick = () => { HiddenList.remove(item.id, item.type); renderHiddenList(); };
      box.appendChild(btn);
    });
  }

  let globalSearchTimer = null;
  async function runGlobalSearch(query) {
    const results = document.getElementById("global-search-results");
    if (!results) return;
    if (!query) {
      results.innerHTML = '<div class="tvremote-empty">Type to search.</div>';
      return;
    }
    results.innerHTML = '<div class="tvremote-empty">Searching…</div>';
    const data = await tmdb(`/search/multi?query=${encodeURIComponent(query)}&page=1`);
    renderRemoteCards((data.results || []).filter(i => i.media_type === "movie" || i.media_type === "tv"), results);
  }

  function initGlobalSearchDock() {
    renderSearchMyList();
    const input = document.getElementById("global-search-input");
    if (input) {
      input.addEventListener("input", () => {
        clearTimeout(globalSearchTimer);
        globalSearchTimer = setTimeout(() => runGlobalSearch(input.value.trim()), 350);
      });
    }
    const remoteClear = document.getElementById("tvremote-search-clear");
    if (remoteClear) remoteClear.onclick = () => {
      const rInput = document.getElementById("tvremote-search");
      const results = document.getElementById("tvremote-results");
      if (rInput) rInput.value = "";
      if (results) results.innerHTML = '<div class="tvremote-empty">Search movies, TV, or people.</div>';
    };
  }

  function initTvRemotePanel() {
    renderCatalog();
    renderMyList();
    syncMiniPlayer();

    const search = document.getElementById("tvremote-search");
    const more = document.getElementById("tvremote-more");
    let timer = null;
    if (search) {
      search.addEventListener("input", () => {
        clearTimeout(timer);
        timer = setTimeout(() => doRemoteSearch(true).catch(console.error), 350);
      });
    }
    const moreHeader = document.getElementById("tvremote-more-header");
    const randomHeader = document.getElementById("tvremote-random-header");
    const doMore = () => { remoteSearchPage += 1; doRemoteSearch(false).catch(console.error); };
    if (more) more.onclick = doMore;
    if (moreHeader) moreHeader.onclick = doMore;
    if (randomHeader) randomHeader.onclick = async () => {
      const mode = remoteSearchFilter === "tv" ? "/trending/tv/week" : "/trending/movie/week";
      const data = await tmdb(mode);
      const pool = (data.results || []).filter(i => !HiddenList.has(i.id, i.media_type || (remoteSearchFilter==="tv"?"tv":"movie")));
      const pick = pool[Math.floor(Math.random() * Math.max(pool.length, 1))];
      if (pick) renderRemoteCards([pick], document.getElementById("tvremote-results"), true);
    };

    document.querySelectorAll("[data-remote-mode]").forEach(btn => {
      btn.onclick = async () => {
        document.querySelectorAll("[data-remote-tab]").forEach(x => x.classList.remove("active"));
        document.querySelectorAll(".tvremote-tab").forEach(x => x.classList.remove("active"));
        document.querySelector('[data-remote-tab="search"]')?.classList.add("active");
        document.getElementById("tvremote-tab-search")?.classList.add("active");
        if (btn.dataset.remoteMode === "home") {
          location.href = appHref("index.html");
          return;
        }
        remoteSearchFilter = btn.dataset.remoteMode;
        await doRemoteSearch(true).catch(console.error);
      };
    });
    document.querySelectorAll("[data-remote-tab]").forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll("[data-remote-tab]").forEach(x => x.classList.remove("active"));
        document.querySelectorAll(".tvremote-tab").forEach(x => x.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById(`tvremote-tab-${btn.dataset.remoteTab}`).classList.add("active");
        if (btn.dataset.remoteTab === "mylist") renderMyList();
      };
    });

    const msg = document.getElementById("tvremote-message");
    const say = (text) => { if (msg) msg.textContent = text; };

    const currentEpisodeParams = () => {
      const qs = new URLSearchParams(location.search);
      return {
        id: qs.get("id"),
        season: parseInt(qs.get("season") || "1", 10),
        episode: parseInt(qs.get("episode") || "1", 10)
      };
    };

    const nowBtn = document.getElementById("tvremote-nowplaying-toggle");
    if (nowBtn) nowBtn.onclick = () => {
      const wrap = document.getElementById("tvremote-mini-player");
      if (!wrap.hidden) {
        const frame = wrap.querySelector("iframe");
        if (frame) frame.src = "about:blank";
        wrap.hidden = true;
      } else {
        wrap.hidden = false;
        syncMiniPlayer();
      }
    };
    document.getElementById("tvremote-prev-episode").onclick = () => {
      if (PAGE !== "tv") return say("Prev Episode works on TV pages.");
      const p = currentEpisodeParams();
      const nextEpisode = Math.max(1, p.episode - 1);
      location.href = `tv.html?id=${p.id}&season=${p.season}&episode=${nextEpisode}`;
    };
    document.getElementById("tvremote-next-episode").onclick = () => {
      if (PAGE !== "tv") return say("Next Episode works on TV pages.");
      const p = currentEpisodeParams();
      location.href = `tv.html?id=${p.id}&season=${p.season}&episode=${p.episode + 1}`;
    };
    const setRemoteScale = (n) => {
      document.body.classList.remove("remote-scale-1x","remote-scale-2x","remote-scale-3x");
      document.body.classList.add(`remote-scale-${n}x`);
      localStorage.setItem("slwu_remote_scale", String(n));
      const btn = document.getElementById("tvremote-fullscreen");
      if (btn) btn.textContent = `${n}x`;
    };
    setRemoteScale(parseInt(localStorage.getItem("slwu_remote_scale") || "1", 10));
    document.getElementById("tvremote-fullscreen").onclick = () => {
      const current = parseInt(localStorage.getItem("slwu_remote_scale") || "1", 10);
      setRemoteScale(current === 3 ? 1 : current + 1);
    };
    const controlsToggle = document.getElementById("tvremote-controls-toggle");
    if (controlsToggle) {
      controlsToggle.onclick = () => document.body.classList.toggle("remote-controls-collapsed");
    }

    document.getElementById("tvremote-playpause").onclick = () => {
      tryControlIframe("playVideo"); 
      tryControlIframe("pauseVideo");
      pushRemoteAction("togglePlay");
      say("Sent Play / Pause.");
    };
    document.getElementById("tvremote-seek-back").onclick = () => { tryControlIframe("seekTo", [0, true]); pushRemoteAction("seekBack"); say("Sent -30s."); };
    document.getElementById("tvremote-seek-forward").onclick = () => { pushRemoteAction("seekForward"); say("Sent +30s."); };
    document.getElementById("tvremote-volume-down").onclick = () => { pushRemoteAction("volumeDown"); say("Sent volume down."); };
    document.getElementById("tvremote-volume-up").onclick = () => { pushRemoteAction("volumeUp"); say("Sent volume up."); };
    document.getElementById("tvremote-stop").onclick = () => { tryControlIframe("stopVideo"); pushRemoteAction("stop"); say("Sent stop."); };
    document.getElementById("tvremote-player-fullscreen").onclick = () => {
      const iframe = getCurrentPageIframe() || document.querySelector("#tvremote-mini-player iframe");
      if (iframe?.requestFullscreen) iframe.requestFullscreen().catch(() => {});
      pushRemoteAction("fullscreenOn");
      say("Fullscreen requested.");
    };
    document.getElementById("tvremote-player-window").onclick = () => {
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      pushRemoteAction("fullscreenOff");
      say("Returned to windowed mode.");
    };
    document.getElementById("tvremote-resolution").onclick = () => say(PAGE === "theater" ? "Use provider settings inside theater player." : "Open Theater to use player settings.");
    document.getElementById("tvremote-subtitles").onclick = () => say(PAGE === "theater" ? "Use provider subtitle settings inside theater player." : "Open Theater to use subtitle settings.");
  }

  function watchNowPlaying() {
    const target = document.getElementById("player-container");
    if (!target) return;
    const update = () => {
      const iframe = target.querySelector("iframe");
      if (iframe) setNowPlayingFromIframe(iframe, { page: PAGE });
    };
    update();
    const obs = new MutationObserver(update);
    obs.observe(target, { childList: true, subtree: true });
  }

  function initProfilePage() {
    if (!/profile\.html$|\/profile\/?$/.test(location.pathname)) return;
    document.body.className = "profile-page";
    document.body.innerHTML = `
      <div class="profile-shell">
        <a class="back-btn profile-back-link" href="${appUrl('index.html')}">← Return Back</a>
        <div class="profile-hero">
          <div class="tv-remote-kicker">PROFILE</div>
          <h1 id="profile-page-title">Create / Enter Profile</h1>
          <p class="profile-copy">Local profiles only. Name + pin are stored in your browser.</p>
        </div>
        <div id="profile-app" class="profile-app"></div>
      </div>
    `;
    const app = document.getElementById("profile-app");
    const params = new URLSearchParams(location.search);
    const nameQuery = params.get("name");
    const active = getActiveProfile();

    function renderList() {
      const profiles = getProfiles();
      const cards = profiles.map(p => `
        <div class="profile-local-card">
          <div>
            <div class="profile-local-name">${esc(p.name)}</div>
            <div class="profile-local-meta">Local profile</div>
          </div>
          <div class="profile-local-actions">
            <button class="remote-mini-btn" data-login="${esc(p.name)}">Enter</button>
            <button class="remote-mini-btn" data-delete="${esc(p.id)}">Delete</button>
          </div>
        </div>
      `).join("");
      app.innerHTML = `
        <div class="profile-form-card">
          <div class="auth-field">
            <input type="text" id="profile-name" placeholder=" " />
            <label for="profile-name">Name</label>
            <div class="auth-field-border"></div>
          </div>
          <div class="auth-field">
            <input type="password" id="profile-pin" placeholder=" " />
            <label for="profile-pin">Pin</label>
            <div class="auth-field-border"></div>
          </div>
          <div class="profile-form-actions">
            <button id="profile-save" class="btn btn-primary btn-3d">Save / Enter</button>
          </div>
        </div>
        <div class="profile-existing">
          <div class="sheet-title">Existing Profiles</div>
          ${cards || '<div class="tvremote-empty">No profiles yet.</div>'}
        </div>
      `;
      document.getElementById("profile-save").onclick = () => {
        const name = document.getElementById("profile-name").value.trim();
        const pin = document.getElementById("profile-pin").value.trim();
        if (!name || !pin) return alert("Enter name and pin.");
        const found = loginProfile(name, pin) || upsertProfile(name, pin);
        location.href = appUrl(`profile/?name=${encodeURIComponent(found.name)}`);
      };
      app.querySelectorAll("[data-delete]").forEach(btn => btn.onclick = () => {
        deleteProfile(btn.dataset.delete);
        renderList();
      });
      app.querySelectorAll("[data-login]").forEach(btn => btn.onclick = () => {
        const p = getProfiles().find(x => x.name === btn.dataset.login);
        const pin = prompt(`Enter pin for ${p.name}`);
        if (pin === null) return;
        if (!loginProfile(p.name, pin)) return alert("Wrong pin.");
        location.href = appUrl(`profile/?name=${encodeURIComponent(p.name)}`);
      });
    }

    function renderDashboard(profileName) {
      const profile = getProfiles().find(p => p.name.toLowerCase() === profileName.toLowerCase()) || active;
      document.getElementById("profile-page-title").textContent = profile ? profile.name : profileName;
      app.innerHTML = `
        <div class="profile-dashboard remote-look">
          <div class="remote-btn remote-btn-primary profile-dashboard-title">${esc(profileName)}</div>
          <a class="remote-btn" href="${appUrl('index.html')}">Home</a>
          <a class="remote-btn" href="${appUrl('theater/')}">Open Theater</a>
          <a class="remote-btn" href="${appUrl('profile/')}">Switch Profile</a>
          <button id="profile-delete-current" class="remote-btn">Delete Profile</button>
        </div>
      `;
      const del = document.getElementById("profile-delete-current");
      if (del && profile) del.onclick = () => {
        if (!confirm(`Delete ${profile.name}?`)) return;
        deleteProfile(profile.id);
        location.href = appUrl("profile/");
      };
    }

    if (nameQuery) renderDashboard(nameQuery);
    else renderList();
  }

  function initTheaterPage() {
    if (!/theater\.html$|\/theater\/?$/.test(location.pathname)) return;
    document.body.className = "theater-page";
    const now = getNowPlaying();
    const src = new URLSearchParams(location.search).get("src") || now?.src || "";
    document.body.innerHTML = `
      <div class="theater-layout" id="theater-layout">
        <aside class="theater-side open" id="theater-side">
          <div class="theater-side-toprow">
            <button class="remote-mini-btn theater-side-toggle" id="theater-side-toggle" aria-label="Toggle Sidebar">☰</button>
            <button class="remote-mini-btn" id="theater-tv-btn">TV</button>
            <a href="${appUrl('index.html')}" class="remote-mini-btn">Home</a>
            <a href="${appUrl('profile/')}" class="remote-mini-btn">Profile</a>
          </div>
          <div class="sheet-title">My List</div>
          <div id="theater-mylist" class="theater-mylist"></div>
        </aside>
        <main class="theater-main">
          <div class="theater-player-wrap">
            <iframe id="theater-player" src="${esc(src)}" allow="autoplay; fullscreen"></iframe>
          </div>
        </main>
      </div>
      <div id="theater-mobile-popup" class="slwu-modal ${window.innerWidth < 900 ? 'open' : ''}">
        <div class="slwu-modal-card">
          <button class="slwu-modal-close" data-close-modal="theater">×</button>
          <h2>CONNECT WITH THEATER</h2>
          <p>Use TV Remote and Profile from your mobile browser. Same-browser tabs sync instantly.</p>
        </div>
      </div>
    `;
    document.querySelectorAll("[data-close-modal='theater']").forEach(btn => btn.onclick = () => document.getElementById("theater-mobile-popup").classList.remove("open"));
    ensureGlobalUI();
    initGlobalButtons();
    initGlobalSearchDock();
    initTvRemotePanel();
    const render = () => {
      const box = document.getElementById("theater-mylist");
      const list = MyList.get();
      box.innerHTML = "";
      list.forEach(item => {
        const btn = document.createElement("button");
        btn.className = "global-search-list-item";
        const poster = item.poster ? posterUrl(item.poster) : "";
        btn.innerHTML = `${poster ? `<img src="${esc(poster)}" alt="${esc(item.title)}" loading="lazy">` : `<span class="global-search-list-thumb-fallback">${esc((item.title||"?").slice(0,1))}</span>`}<span class="global-search-list-label">${esc(item.title)}</span>`;
        btn.onclick = () => {
          const embedSrc = item.type === "tv" ? VIDKING_TV(item.id, 1, 1) : VIDKING_MOVIE(item.id);
          iframe.src = embedSrc;
          setNowPlaying({ src: embedSrc, title: item.title, type: item.type, id: item.id });
        };
        box.appendChild(btn);
      });
    };
    render();
    document.getElementById("theater-side-toggle").onclick = () => {
      const side = document.getElementById("theater-side");
      const layout = document.getElementById("theater-layout");
      side.classList.toggle("open");
      layout.classList.toggle("side-collapsed", !side.classList.contains("open"));
      requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
    };
    const tvLocalBtn = document.getElementById("theater-tv-btn");
    if (tvLocalBtn) tvLocalBtn.onclick = () => document.body.classList.toggle("remote-open");
    const iframe = document.getElementById("theater-player");

    const applyRemote = (data) => {
      if (!data || !iframe) return;
      try {
        if (data.action === "fullscreenOn" && iframe.requestFullscreen) iframe.requestFullscreen().catch(() => {});
        if (data.action === "fullscreenOff" && document.fullscreenElement) document.exitFullscreen().catch(() => {});
        iframe.contentWindow?.postMessage(JSON.stringify({ event: "command", func: "playVideo", args: [] }), "*");
      } catch (_) {}
    };
    window.addEventListener("storage", (e) => {
      if (e.key === REMOTE_STATE_KEY) {
        try { applyRemote(JSON.parse(e.newValue)); } catch (_) {}
      }
      if (e.key === NOW_PLAYING_KEY) {
        try {
          const now = JSON.parse(e.newValue || "null");
          if (now?.src) iframe.src = now.src;
        } catch (_) {}
      }
    });
    if (BC) BC.onmessage = (ev) => applyRemote(ev.data);
  }


  function initCategoriesPage() {
    document.body.className = "categories-page";
    document.body.innerHTML = `
      <div class="slwu-route-shell">
        <div class="slwu-route-card">
          <div class="slwu-route-top">
            <a href="${appUrl('index.html')}" class="slwu-back-link">← Back</a>
            <h1>Catalog</h1>
          </div>
          <div id="categories-grid" class="categories-grid"></div>
        </div>
      </div>
    `;
    const grid = document.getElementById("categories-grid");
    if (grid) {
      Object.entries(CATALOG_GENRES).forEach(([label, path]) => {
        const a = document.createElement("a");
        a.className = "remote-pill remote-pill--catalog";
        a.href = appHref(`search.html?category=${encodeURIComponent(label.toLowerCase())}`);
        a.textContent = label;
        grid.appendChild(a);
      });
    }
  }

  function initOwnerPage() {
    document.body.className = "owner-page";
    const key = "slwu_owner_gate";
    let saved = { name: "Sheliveswithme", pin: "654321" };
    try { saved = JSON.parse(localStorage.getItem(key) || JSON.stringify(saved)); } catch (_) {}
    document.body.innerHTML = `
      <div class="slwu-route-shell">
        <div class="slwu-route-card">
          <div class="slwu-route-top">
            <a href="${appUrl('index.html')}" class="slwu-back-link">← Back</a>
            <h1>Owner Portal</h1>
          </div>
          <p class="slwu-route-note">Local-only owner gate. Defaults are prefilled so the route works immediately.</p>
          <label class="slwu-field-label">Gate Name</label>
          <input id="owner-name" class="slwu-field-input" value="${esc(saved.name || "Sheliveswithme")}" />
          <label class="slwu-field-label">PIN</label>
          <input id="owner-pin" class="slwu-field-input" value="${esc(saved.pin || "654321")}" />
          <button id="owner-save" class="slwu-action-btn">Save Owner Gate</button>
          <div id="owner-msg" class="slwu-route-note"></div>
        </div>
      </div>
    `;
    const btn = document.getElementById("owner-save");
    if (btn) btn.addEventListener("click", () => {
      const payload = {
        name: document.getElementById("owner-name")?.value?.trim() || "Sheliveswithme",
        pin: document.getElementById("owner-pin")?.value?.trim() || "654321"
      };
      localStorage.setItem(key, JSON.stringify(payload));
      const msg = document.getElementById("owner-msg");
      if (msg) msg.textContent = `Saved owner gate for ${payload.name}.`;
    });
  }

  function initEnhancements() {
    if (/profile\.html$|\/profile\/?$/.test(location.pathname)) return initProfilePage();
    if (/theater\.html$|\/theater\/?$/.test(location.pathname)) return initTheaterPage();
    if (/categories\.html$|\/categories\/?$/.test(location.pathname)) return initCategoriesPage();
    if (/owner\.html$|\/owner\/?$/.test(location.pathname)) return initOwnerPage();

    ensureGlobalUI();
    initGlobalButtons();
    initGlobalSearchDock();
    initTvRemotePanel();
    watchNowPlaying();

    const gsInput = document.getElementById("global-search-input");
    if (gsInput) gsInput.addEventListener("input", () => {
      clearTimeout(window.__slwuGlobalSearch);
      window.__slwuGlobalSearch = setTimeout(() => runGlobalSearch(gsInput.value.trim()), 350);
    });
  }

  document.addEventListener("DOMContentLoaded", initEnhancements);
})();
