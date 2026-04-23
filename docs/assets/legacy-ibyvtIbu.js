const Dt="d9f0568167a608d0700093444b0c2da7",Vt="https://api.themoviedb.org/3",Z="https://image.tmdb.org/t/p/w500",be="https://image.tmdb.org/t/p/original",He=t=>`https://www.vidking.net/embed/movie/${t}?color=8B5CF6&autoPlay=false`,Ne=(t,o,e)=>`https://www.vidking.net/embed/tv/${t}/${o}/${e}?color=8B5CF6&autoPlay=false&nextEpisode=true&episodeSelector=true`,yt=location.pathname.split("/").filter(Boolean),Jt=window.__SLWU_BASE||(location.hostname.endsWith("github.io")&&yt.length?`/${yt[0]}/`:"/");function te(t=""){return Jt+String(t).replace(/^\/+/,"")}function ae(t=""){return new URL(te(t),location.origin).toString()}function me(t=""){const o=ae("");return t?`${o.replace(/#.*$/,"")}#${String(t).replace(/^#/,"")}`:o}function Re(t=""){const o=new URL(ae("search"),location.origin);if(typeof t=="string"){const e=t.replace(/^\?/,"");e&&(o.search=e)}else t&&typeof t=="object"&&Object.entries(t).forEach(([e,r])=>{r==null||r===""||o.searchParams.set(e,String(r))});return o.toString()}function ue(t,o={}){const e=new URL(ae("movie"),location.origin);return e.searchParams.set("id",String(t)),Object.entries(o||{}).forEach(([r,h])=>e.searchParams.set(r,String(h))),e.toString()}function ne(t,o={}){const e=new URL(ae("tv"),location.origin);return e.searchParams.set("id",String(t)),Object.entries(o||{}).forEach(([r,h])=>e.searchParams.set(r,String(h))),e.toString()}function O(t){try{const o=t instanceof URL?t:new URL(String(t),location.href);if(o.origin!==location.origin){location.href=o.toString();return}const e=`${o.pathname}${o.search}${o.hash}`;if(e===`${location.pathname}${location.search}${location.hash}`)return;history.pushState({},"",e),window.dispatchEvent(new PopStateEvent("popstate"))}catch{location.href=String(t)}}function Oe(t){var r,h;const o=t||"https://via.placeholder.com/320x180?text=Torrent+Preview",e=document.createElement("div");e.className="torrent-modal",e.innerHTML=`
    <div class="torrent-modal-content">
      <h2>Download Torrent</h2>
      <input type="text" id="magnet-link" placeholder="Enter magnet link" />
      <button id="download-torrent-btn">Download</button>
      <div id="torrent-preview"><img src="${o}" alt="Torrent Preview" /></div>
      <button id="close-torrent-modal">Close</button>
    </div>
  `,document.body.appendChild(e),(r=e.querySelector("#close-torrent-modal"))==null||r.addEventListener("click",()=>e.remove()),(h=e.querySelector("#download-torrent-btn"))==null||h.addEventListener("click",()=>{const b=e.querySelector("#magnet-link").value.trim();if(!b)return;window.open(b,"_blank");const m=e.querySelector("#torrent-preview");m&&(m.innerHTML=`<img src="${o}" alt="Torrent Preview" />`)})}function jt(){var t;(t=window.__slwu)!=null&&t._spaLinksWired||(window.__slwu=window.__slwu||{},window.__slwu._spaLinksWired=!0,document.addEventListener("click",o=>{var h,b;const e=(b=(h=o.target)==null?void 0:h.closest)==null?void 0:b.call(h,"a");if(!e||e.hasAttribute("data-spa-ignore")||e.target&&e.target!=="_self")return;const r=e.getAttribute("href")||"";if(!(!r||r.startsWith("#"))&&!/^(mailto:|tel:|javascript:)/i.test(r))try{const m=new URL(e.href,location.href);if(m.origin!==location.origin)return;o.preventDefault(),O(m.toString())}catch{}}))}const k=(t,o=document)=>o.querySelector(t),Lt=(t,o=document)=>Array.from(o.querySelectorAll(t));async function j(t){const o=t.includes("?")?"&":"?",e=await fetch(`${Vt}${t}${o}api_key=${Dt}`);if(!e.ok)throw new Error(`TMDB ${e.status}: ${t}`);return e.json()}function oe(t,o=Z){return t?`${o}${t}`:null}function re(t){return t?t.slice(0,4):"N/A"}function Ae(t){if(!t)return"";const o=Math.floor(t/60),e=t%60;return o?`${o}h ${e}m`:`${e}m`}function d(t=""){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const G={_key(){return`pt_mylist_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"[]")}catch{return[]}},has(t,o){return this.get().some(e=>e.id===t&&e.type===o)},add(t){const o=this.get();this.has(t.id,t.type)||o.unshift(t),localStorage.setItem(this._key(),JSON.stringify(o))},remove(t,o){const e=this.get().filter(r=>!(r.id===t&&r.type===o));localStorage.setItem(this._key(),JSON.stringify(e))},toggle(t){return this.has(t.id,t.type)?(this.remove(t.id,t.type),!1):(this.add(t),!0)}},X={_key(){return`pt_hidden_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"[]")}catch{return[]}},has(t,o){return this.get().some(e=>e.id===t&&e.type===o)},add(t){const o=this.get();this.has(t.id,t.type)||o.unshift(t),localStorage.setItem(this._key(),JSON.stringify(o))},remove(t,o){const e=this.get().filter(r=>!(r.id===t&&r.type===o));localStorage.setItem(this._key(),JSON.stringify(e))},toggle(t){return this.has(t.id,t.type)?(this.remove(t.id,t.type),!1):(this.add(t),!0)}},qe={_key(){return`pt_progress_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"{}")}catch{return{}}},save(t,o,e){const r=this.get();r[`${o}_${t}`]={...e,savedAt:Date.now()},localStorage.setItem(this._key(),JSON.stringify(r))},getAll(){return Object.values(this.get())}};window.addEventListener("message",function(t){try{if(typeof t.data!="string")return;const o=JSON.parse(t.data);if(o.type==="PLAYER_EVENT"&&o.data){const e=o.data,r=e.id,h=e.mediaType||"movie";r&&e.progress>1&&e.progress<98&&qe.save(r,h,{id:r,type:h,progress:e.progress,timestamp:e.currentTime,season:e.season,episode:e.episode,title:document.title})}}catch{}});function Et(t=location.pathname){const o=String(t||"");return o.endsWith("movie.html")||/\/movie\/?$/.test(o)?"movie":o.endsWith("tv.html")||/\/tv\/?$/.test(o)?"tv":o.endsWith("search.html")||/\/search\/?$/.test(o)?"search":/profile\.html$|\/profile\/?$/.test(o)?"profile":/theater\.html$|\/theater\/?$/.test(o)?"theater":/categories\.html$|\/categories\/?$/.test(o)||/\/catalog\/?$/.test(o)?"catalog":/owner\.html$|\/owner\/?$/.test(o)?"owner":"home"}const le=Et();function ye(){const t=k("#navbar");if(!t||t.dataset.wired)return;t.dataset.wired="1",t.classList.contains("navbar-solid")||window.addEventListener("scroll",()=>{t.classList.toggle("scrolled",window.scrollY>50)},{passive:!0});const o=k("#hamburger"),e=k(".nav-links");o&&e&&o.addEventListener("click",()=>{e.classList.toggle("mobile-open")});const r=k("#search-toggle"),h=k("#nav-search"),b=k("#search-input");if(r&&h&&b){r.addEventListener("click",()=>{h.classList.toggle("open"),h.classList.contains("open")&&b.focus()}),b.addEventListener("keydown",g=>{if(g.key==="Enter"&&b.value.trim()&&O(Re({q:b.value.trim()})),g.key==="Escape"){h.classList.remove("open"),b.value="";const f=document.getElementById("nav-search-dropdown");f&&f.remove()}});let m=null;async function T(){const g=b.value.trim(),f=document.getElementById("nav-search-dropdown");if(!g){f&&f.remove();return}let c=f;c||(c=document.createElement("div"),c.id="nav-search-dropdown",c.className="nav-search-dropdown",h.appendChild(c)),c.innerHTML='<div class="nav-search-dd-loading">Searching…</div>';try{const M=((await j(`/search/multi?query=${encodeURIComponent(g)}&page=1`)).results||[]).filter(p=>p&&(p.media_type==="movie"||p.media_type==="tv")).slice(0,4);if(!M.length){c.innerHTML='<div class="nav-search-dd-empty">No results.</div>';return}c.innerHTML="",M.forEach(p=>{const L=p.media_type==="tv"||p.first_air_date?"tv":"movie",E=p.title||p.name||"Untitled",v=oe(p.poster_path)||"",w=document.createElement("button");w.type="button",w.className="nav-search-dd-card",w.innerHTML=`
            ${v?`<img src="${d(v)}" alt="${d(E)}" loading="lazy" />`:`<div class="nav-search-dd-fallback">${d(E.slice(0,1))}</div>`}
            <div class="nav-search-dd-meta">
              <div class="nav-search-dd-title">${d(E)}</div>
              <div class="nav-search-dd-sub">${L.toUpperCase()} · ${re(p.release_date||p.first_air_date||"")}</div>
            </div>
          `,w.onclick=()=>{c.remove(),h.classList.remove("open"),b.value="",O(L==="tv"?ne(p.id):ue(p.id))},c.appendChild(w)})}catch{c.innerHTML='<div class="nav-search-dd-empty">Search failed.</div>'}}b.addEventListener("input",()=>{clearTimeout(m),m=setTimeout(()=>T(),220)}),document.addEventListener("click",g=>{const f=document.getElementById("nav-search-dropdown");f&&(g.target===f||f.contains(g.target)||g.target===b||f.remove())})}}function we(t,o="movie"){const e=t.id,r=t.title||t.name||"Untitled",h=oe(t.poster_path),b=t.release_date||t.first_air_date||"",m=t.vote_average?t.vote_average.toFixed(1):"",T=o==="tv"?ne(e):ue(e),g=G.has(e,o),f=h?`<img src="${d(h)}" alt="${d(r)}" loading="lazy" />`:`<div class="no-poster" style="aspect-ratio:2/3;background:var(--surface);display:flex;align-items:center;justify-content:center;">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:32px;height:32px;opacity:.3"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
       </div>`,c=document.createElement("div");c.className="movie-card",c.dataset.id=e,c.dataset.type=o,c.innerHTML=`
    ${f}
    <div class="movie-card-overlay">
      <div class="movie-card-title">${d(r)}</div>
      <div class="movie-card-meta">${re(b)}${m?` · ⭐ ${m}`:""}</div>
    </div>
    <div class="movie-card-actions">
      <button class="card-action-btn hide-btn${X.has(e,o)?" is-hidden":""}" title="${X.has(e,o)?"Unhide":"Hide"}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="19" y1="5" x2="5" y2="19"/><line x1="5" y1="5" x2="19" y2="19"/></svg>
      </button>
      <button class="card-action-btn list-btn${g?" in-list":""}" title="${g?"Remove from My List":"Add to My List"}">
        ${g?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'}
      </button>
    </div>
  `,c.addEventListener("click",p=>{p.target.closest(".card-action-btn")||O(T)});const B=c.querySelector(".list-btn");B.addEventListener("click",p=>{p.stopPropagation();const L=G.toggle({id:e,type:o,title:r,poster:t.poster_path});B.classList.toggle("in-list",L),B.innerHTML=L?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'});const M=c.querySelector(".hide-btn");return M&&M.addEventListener("click",p=>{p.stopPropagation();const L=X.toggle({id:e,type:o,title:r,poster:t.poster_path});M.classList.toggle("is-hidden",L),M.title=L?"Unhide":"Hide",L&&c.remove()}),c}function Gt(t=8){return Array.from({length:t},()=>{const o=document.createElement("div");return o.className="skeleton-card skeleton",o})}function wt(t,o,e="movie"){if(o=(o||[]).filter(f=>!X.has(f.id,f.media_type||e||"movie")),!o||o.length===0)return null;const r=document.createElement("div");r.className="row-wrapper";const h=ae(`categories/?q=${encodeURIComponent(t)}`);r.innerHTML=`
    <div class="row-header">
      <h2 class="row-title"><a href="${h}">${d(t)}</a></h2>
      <a class="row-viewall" href="${h}">View All</a>
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
  `;const b=r.querySelector(".row-track");o.forEach(f=>b.appendChild(we(f,e)));const m=r.querySelector(".arrow-left"),T=r.querySelector(".arrow-right"),g=600;return m.addEventListener("click",()=>b.scrollBy({left:-g,behavior:"smooth"})),T.addEventListener("click",()=>b.scrollBy({left:g,behavior:"smooth"})),r}async function kt(){Kt();const t=k("#main-content");ye();const o=k("#categories");if(!o)return;["Trending Now","Top Rated","Popular on SheLivesWithUs","Now Playing","Action","Comedy","Horror","Sci-Fi"].forEach(g=>{const f=document.createElement("div");f.className="row-wrapper",f.innerHTML=`
      <div class="row-header"><h2 class="row-title">${d(g)}</h2></div>
      <div class="row-track-container">
        <div class="row-track" id="skel-${g.replace(/\s+/g,"-")}"></div>
      </div>
    `;const c=f.querySelector(".row-track");Gt(8).forEach(B=>c.appendChild(B)),o.appendChild(f)});const r=[{title:"Trending Now",path:"/trending/movie/week",type:"movie"},{title:"Top Rated",path:"/movie/top_rated",type:"movie"},{title:"Popular on SheLivesWithUs",path:"/movie/popular",type:"movie"},{title:"Now Playing",path:"/movie/now_playing",type:"movie"},{title:"Action",path:"/discover/movie?with_genres=28",type:"movie"},{title:"Comedy",path:"/discover/movie?with_genres=35",type:"movie"},{title:"Horror",path:"/discover/movie?with_genres=27",type:"movie"},{title:"Sci-Fi",path:"/discover/movie?with_genres=878",type:"movie"},{title:"Romance",path:"/discover/movie?with_genres=10749",type:"movie"},{title:"Documentary",path:"/discover/movie?with_genres=99",type:"movie"},{title:"Animation",path:"/discover/movie?with_genres=16",type:"movie"},{title:"Trending TV Shows",path:"/trending/tv/week",type:"tv"},{title:"Top Rated TV",path:"/tv/top_rated",type:"tv"}];let h=!1;const b=await Promise.allSettled(r.map(g=>j(g.path)));o.innerHTML="";const m=qe.getAll();if(m.length>0){const f=(await Promise.allSettled(m.slice(0,10).map(c=>j(c.type==="tv"?`/tv/${c.id}`:`/movie/${c.id}`).then(B=>({...B,_mediaType:c.type,_progress:c.progress}))))).filter(c=>c.status==="fulfilled").map(c=>c.value);if(f.length>0){const c=wt("Continue Watching",f,"mixed");c&&(f.forEach((B,M)=>{const p=c.querySelectorAll(".movie-card");p[M]&&(p[M].dataset.type=B._mediaType)}),o.appendChild(c))}}const T=G.get();if(T.length>0){const f=(await Promise.allSettled(T.slice(0,20).map(c=>j(c.type==="tv"?`/tv/${c.id}`:`/movie/${c.id}`).then(B=>({...B,_mediaType:c.type}))))).filter(c=>c.status==="fulfilled").map(c=>c.value);if(f.length>0){const c=document.createElement("div");c.className="row-wrapper",c.id="my-list",c.innerHTML=`
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
      `;const B=c.querySelector(".row-track");f.forEach(L=>{B.appendChild(we(L,L._mediaType||"movie"))});const M=c.querySelector(".arrow-left"),p=c.querySelector(".arrow-right");M.addEventListener("click",()=>B.scrollBy({left:-600,behavior:"smooth"})),p.addEventListener("click",()=>B.scrollBy({left:600,behavior:"smooth"})),o.appendChild(c)}}b.forEach((g,f)=>{if(g.status!=="fulfilled")return;const B=g.value.results||[],M=r[f];if(!h&&f===0&&B.length>0){h=!0;const L=B[Math.floor(Math.random()*Math.min(5,B.length))];Yt(L)}const p=wt(M.title,B,M.type);p&&o.appendChild(p)}),t&&(t.style.opacity="1")}async function Yt(t){if(!t)return;const o=t.id,e=t.media_type==="tv"?"tv":"movie",r=t.title||t.name||"",h=t.overview||"",b=t.backdrop_path?`${be}${t.backdrop_path}`:"",m=k("#hero-backdrop"),T=k("#hero-title"),g=k("#hero-desc"),f=k("#hero-meta"),c=k("#hero-play-btn"),B=k("#hero-info-btn");m&&b&&(m.style.backgroundImage=`url(${b})`),T&&(T.textContent=r),g&&(g.textContent=h);try{const L=await j(`/${e}/${o}`),E=L.vote_average?L.vote_average.toFixed(1):"",v=(L.genres||[]).slice(0,3).map(R=>R.name).join(", "),w=L.runtime?Ae(L.runtime):L.episode_run_time?Ae(L.episode_run_time[0]):"",$=re(L.release_date||L.first_air_date);f&&(f.innerHTML=`
        ${E?`<span class="rating"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${E}</span>`:""}
        <span>${$}</span>
        ${w?`<span>${w}</span>`:""}
        ${v?`<span>${d(v)}</span>`:""}
      `)}catch{}const M=e==="tv"?ne(o):ue(o);c&&c.addEventListener("click",()=>{zt(M,b,r)}),B&&B.addEventListener("click",()=>{O(M)});const p=document.querySelector(".hero-buttons");if(p&&!document.getElementById("hero-list-btn")){const L=document.createElement("button");L.id="hero-list-btn",L.className="btn btn-secondary btn-3d";const E=G.has(o,e);L.textContent=E?"In My List":"Add to My List",L.onclick=()=>{const v=G.toggle({id:o,type:e,title:r,poster:t.poster_path});L.textContent=v?"In My List":"Add to My List"},p.appendChild(L)}}function Kt(){const t=k("#splash-screen");if(!t)return;if(sessionStorage.getItem("pt_splash")){t.style.display="none";const e=k("#main-content");e&&(e.style.opacity="1");return}setTimeout(()=>{t.classList.add("fade-out"),setTimeout(()=>{t.style.display="none",sessionStorage.setItem("pt_splash","1")},800)},3e3)}async function _t(){ye(),await Bt();const o=new URLSearchParams(location.search).get("id");if(!o){O(me());return}try{const e=await j(`/movie/${o}?append_to_response=credits,similar`);document.title=`SheLivesWithUs — ${e.title||"Movie"}`;const r=e.backdrop_path?`${be}${e.backdrop_path}`:"",h=k("#detail-backdrop");h&&r&&(h.style.backgroundImage=`url(${r})`);const b=k("#detail-header");if(b){const v=(e.genres||[]).map(U=>`<span class="genre-pill">${d(U.name)}</span>`).join(""),w=e.vote_average?e.vote_average.toFixed(1):"N/A",$=G.has(e.id,"movie");b.innerHTML=`
        <h1 class="detail-title">${d(e.title||"")}</h1>
        <div class="detail-meta">
          <span class="rating-badge">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${d(w)}
          </span>
          <span>${re(e.release_date)}</span>
          ${e.runtime?`<span>${Ae(e.runtime)}</span>`:""}
          ${v}
        </div>
        <p class="detail-overview">${d(e.overview||"")}</p>
        <div class="detail-action-row">
          <button class="detail-list-btn ${$?"in-list":""}" id="detail-list-btn">
            ${$?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'}
          </button>
          <button class="detail-list-btn" id="watch-in-theater-btn">Watch in Theater</button>
          <button class="detail-list-btn" id="download-btn">Download</button>
        </div>
      `;const R=b.querySelector("#detail-list-btn");R.addEventListener("click",()=>{const U=G.toggle({id:e.id,type:"movie",title:e.title,poster:e.poster_path});R.className=`detail-list-btn ${U?"in-list":""}`,R.innerHTML=U?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'});const q=b.querySelector("#watch-in-theater-btn");q&&q.addEventListener("click",()=>{const U=new URL(ae("theater/"));U.searchParams.set("src",He(o)),O(U.toString())});const V=b.querySelector("#download-btn");V&&V.addEventListener("click",()=>Oe(e.poster_path?`${Z}${e.poster_path}`:void 0))}const m=k("#player-container");m&&(m.innerHTML=`<iframe src="${He(o)}" allow="autoplay; fullscreen"></iframe>`);const T=k("#sidebar-poster");T&&e.poster_path&&(T.src=`${Z}${e.poster_path}`,T.alt=e.title||"",T.style.display="");const g=k("#sidebar-list-btn");if(g){const v=()=>{const w=G.has(e.id,"movie");g.innerHTML=w?'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'};v(),g.addEventListener("click",()=>{G.toggle({id:e.id,type:"movie",title:e.title,poster:e.poster_path}),v()})}const f=k("#sidebar-share-btn");f&&f.addEventListener("click",()=>{navigator.share?navigator.share({title:`${e.title} — SheLivesWithUs`,url:location.href}):navigator.clipboard.writeText(location.href).then(()=>{f.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Link Copied!',setTimeout(()=>{f.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Share'},2e3)})});const c=document.querySelector('meta[property="og:title"]'),B=document.querySelector('meta[property="og:description"]'),M=document.querySelector('meta[property="og:image"]');c&&(c.content=`${e.title} — SheLivesWithUs`),B&&(B.content=e.overview||"Watch free on SheLivesWithUs"),M&&e.backdrop_path&&(M.content=`${be}${e.backdrop_path}`);const p=k("#detail-info");p&&e&&(p.innerHTML=`
        <div class="detail-info-grid">
          ${e.status?`<div class="info-item"><label>Status</label><span>${d(e.status)}</span></div>`:""}
          ${e.budget?`<div class="info-item"><label>Budget</label><span>$${(e.budget/1e6).toFixed(1)}M</span></div>`:""}
          ${e.revenue?`<div class="info-item"><label>Revenue</label><span>$${(e.revenue/1e6).toFixed(1)}M</span></div>`:""}
          ${e.original_language?`<div class="info-item"><label>Language</label><span>${d(e.original_language.toUpperCase())}</span></div>`:""}
          ${(e.production_companies||[]).length?`<div class="info-item"><label>Studio</label><span>${d(e.production_companies[0].name)}</span></div>`:""}
        </div>
      `);const L=(e.credits&&e.credits.cast||[]).slice(0,20);if(L.length>0){const v=k("#cast-section"),w=k("#cast-row");v&&w&&(v.style.display="",L.forEach($=>{const R=$.profile_path?`<img class="cast-img" src="${Z}${$.profile_path}" alt="${d($.name)}" loading="lazy" />`:'<div class="cast-img" style="background:var(--bg4);border-radius:var(--radius-sm);"></div>',q=document.createElement("div");q.className="cast-card",q.innerHTML=`
            ${R}
            <div class="cast-name">${d($.name)}</div>
            <div class="cast-char">${d($.character||"")}</div>
          `,w.appendChild(q)}))}const E=(e.similar&&e.similar.results||[]).slice(0,20);if(E.length>0){const v=k("#similar-section"),w=k("#similar-row");v&&w&&(v.style.display="",E.forEach($=>w.appendChild(we($,"movie"))))}}catch(e){console.error("Movie detail error:",e);const r=k("#detail-header");r&&(r.innerHTML='<p style="color:var(--text-muted)">Failed to load movie details. Please try again.</p>')}}async function St(){ye(),await Bt();const t=new URLSearchParams(location.search),o=t.get("id"),e=parseInt(t.get("season")||"1",10),r=parseInt(t.get("episode")||"1",10);if(!o){O(me());return}let h=e,b=r;try{let c=function(E,v){const w=k("#player-container");w&&(w.innerHTML=`<iframe src="${Ne(o,E,v)}" allow="autoplay; fullscreen"></iframe>`);const $=new URL(location.href);$.searchParams.set("season",E),$.searchParams.set("episode",v),history.replaceState(null,"",$.toString())};const m=await j(`/tv/${o}?append_to_response=credits,similar`);document.title=`SheLivesWithUs — ${m.name||"TV Show"}`;const T=m.backdrop_path?`${be}${m.backdrop_path}`:"",g=k("#detail-backdrop");g&&T&&(g.style.backgroundImage=`url(${T})`);const f=k("#detail-header");if(f){const E=(m.genres||[]).map(V=>`<span class="genre-pill">${d(V.name)}</span>`).join(""),v=m.vote_average?m.vote_average.toFixed(1):"N/A",w=G.has(m.id,"tv");f.innerHTML=`
        <h1 class="detail-title">${d(m.name||"")}</h1>
        <div class="detail-meta">
          <span class="rating-badge">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${d(v)}
          </span>
          <span>${re(m.first_air_date)}</span>
          ${m.number_of_seasons?`<span>${m.number_of_seasons} Season${m.number_of_seasons!==1?"s":""}</span>`:""}
          ${E}
        </div>
        <p class="detail-overview">${d(m.overview||"")}</p>
        <div class="detail-action-row">
          <button class="detail-list-btn ${w?"in-list":""}" id="detail-list-btn">
            ${w?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'}
          </button>
          <button class="detail-list-btn" id="watch-in-theater-btn">Watch in Theater</button>
          <button class="detail-list-btn" id="download-btn">Download</button>
        </div>
      `;const $=f.querySelector("#detail-list-btn");$.addEventListener("click",()=>{const V=G.toggle({id:m.id,type:"tv",title:m.name,poster:m.poster_path});$.className=`detail-list-btn ${V?"in-list":""}`,$.innerHTML=V?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'});const R=f.querySelector("#watch-in-theater-btn");R&&R.addEventListener("click",()=>{const V=new URL(ae("theater/"));V.searchParams.set("src",Ne(o,h,b)),O(V.toString())});const q=f.querySelector("#download-btn");q&&q.addEventListener("click",()=>Oe(m.poster_path?`${Z}${m.poster_path}`:void 0))}c(h,b);const B=(m.seasons||[]).filter(E=>E.season_number>0);if(B.length>0){const E=k("#episode-selector"),v=k("#season-select"),w=k("#episodes-grid");if(E&&v&&w){E.style.display="",B.forEach(R=>{const q=document.createElement("option");q.value=R.season_number,q.textContent=`Season ${R.season_number}`,R.season_number===h&&(q.selected=!0),v.appendChild(q)});async function $(R){w.innerHTML='<div class="spinner" style="margin:20px auto;"></div>';try{const V=(await j(`/tv/${o}/season/${R}`)).episodes||[];w.innerHTML="",V.forEach(U=>{const se=U.still_path?`${Z}${U.still_path}`:"",J=document.createElement("div");J.className=`episode-card${U.episode_number===b&&R===h?" active":""}`,J.innerHTML=`
                ${se?`<img class="episode-thumb" src="${d(se)}" alt="Episode ${U.episode_number}" loading="lazy" />`:'<div class="episode-thumb" style="background:var(--surface);flex:0 0 120px;"></div>'}
                <div class="episode-info">
                  <div class="episode-num">Episode ${U.episode_number}</div>
                  <div class="episode-title">${d(U.name||"")}</div>
                  <div class="episode-desc">${d(U.overview||"No description available.")}</div>
                </div>
              `,J.addEventListener("click",()=>{h=R,b=U.episode_number,Lt(".episode-card").forEach(pe=>pe.classList.remove("active")),J.classList.add("active"),c(h,b);const ce=k("#player-container");ce&&ce.scrollIntoView({behavior:"smooth",block:"start"})}),w.appendChild(J)})}catch{w.innerHTML='<p style="color:var(--text-muted);padding:12px;">Failed to load episodes.</p>'}}$(h),v.addEventListener("change",()=>{h=parseInt(v.value,10),b=1,$(h),c(h,b)})}}const M=k("#detail-info");M&&(M.innerHTML=`
        <div class="detail-info-grid">
          ${m.status?`<div class="info-item"><label>Status</label><span>${d(m.status)}</span></div>`:""}
          ${m.type?`<div class="info-item"><label>Type</label><span>${d(m.type)}</span></div>`:""}
          ${m.number_of_episodes?`<div class="info-item"><label>Episodes</label><span>${m.number_of_episodes}</span></div>`:""}
          ${m.original_language?`<div class="info-item"><label>Language</label><span>${d(m.original_language.toUpperCase())}</span></div>`:""}
          ${m.networks&&m.networks[0]?`<div class="info-item"><label>Network</label><span>${d(m.networks[0].name)}</span></div>`:""}
        </div>
      `);const p=(m.credits&&m.credits.cast||[]).slice(0,20);if(p.length>0){const E=k("#cast-section"),v=k("#cast-row");E&&v&&(E.style.display="",p.forEach(w=>{const $=w.profile_path?`<img class="cast-img" src="${Z}${w.profile_path}" alt="${d(w.name)}" loading="lazy" />`:'<div class="cast-img" style="background:var(--bg4);border-radius:var(--radius-sm);"></div>',R=document.createElement("div");R.className="cast-card",R.innerHTML=`
            ${$}
            <div class="cast-name">${d(w.name)}</div>
            <div class="cast-char">${d(w.character||"")}</div>
          `,v.appendChild(R)}))}const L=(m.similar&&m.similar.results||[]).slice(0,20);if(L.length>0){const E=k("#similar-section"),v=k("#similar-row");E&&v&&(E.style.display="",L.forEach(w=>v.appendChild(we(w,"tv"))))}}catch(m){console.error("TV detail error:",m);const T=k("#detail-header");T&&(T.innerHTML='<p style="color:var(--text-muted)">Failed to load show details. Please try again.</p>')}}function $t(){ye();const t=k("#main-search-input"),o=k("#search-clear"),e=k("#search-status"),r=k("#search-results"),h=Lt(".filter-btn"),b=new URLSearchParams(location.search),m=b.get("q")||"",T=b.get("type")||"all";let g=T!=="all"?T:"all",f=null,c="";h.forEach(p=>{p.classList.toggle("active",p.dataset.filter===g)}),h.forEach(p=>{p.addEventListener("click",()=>{g=p.dataset.filter,h.forEach(L=>L.classList.toggle("active",L===p)),c?M(c):g!=="all"&&M("")})}),t&&(t.value=m,t.addEventListener("input",()=>{const p=t.value.trim();o.style.display=p?"flex":"none",clearTimeout(f),f=setTimeout(()=>M(p),500)}),m?(o.style.display="flex",M(m)):g!=="all"?M(""):B()),o&&o.addEventListener("click",()=>{t.value="",o.style.display="none",t.focus(),B()});function B(){e.textContent="",r.innerHTML=`
      <div class="no-results">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <h3>Search SheLivesWithUs</h3>
        <p>Find movies and TV shows</p>
      </div>
    `}async function M(p){if(c=p,!p&&g==="all"){B();return}e.textContent="Searching…",r.innerHTML="";const L=r;for(let E=0;E<12;E++){const v=document.createElement("div");v.className="skeleton-card skeleton",v.style.aspectRatio="2/3",L.appendChild(v)}try{let E=[];if(p){let v="/search/multi";g==="movie"?v="/search/movie":g==="tv"&&(v="/search/tv"),E=((await j(`${v}?query=${encodeURIComponent(p)}&page=1`)).results||[]).filter($=>!X.has($.id,$.media_type||g))}else E=(await j(`${g==="movie"?"/movie/popular":"/tv/popular"}`)).results||[];if(g!=="all"&&p&&(E=E.filter(v=>(v.media_type||g)===g)),r.innerHTML="",E.length===0){e.textContent="",r.innerHTML=`
          <div class="no-results" style="grid-column:1/-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <h3>No results found</h3>
            <p>Try a different search term or browse our categories on the home page.</p>
          </div>
        `;return}e.textContent=p?`${E.length} result${E.length!==1?"s":""} for "${p}"`:`Showing popular ${g==="tv"?"TV shows":"movies"}`,E.forEach(v=>{const w=v.media_type||g,$=v.id,R=v.title||v.name||"Untitled",q=oe(v.poster_path),V=v.release_date||v.first_air_date||"",U=v.vote_average?v.vote_average.toFixed(1):"",se=w==="tv"?ne($):ue($),J=document.createElement("div");J.className="search-card fade-in",J.innerHTML=`
          ${q?`<img src="${d(q)}" alt="${d(R)}" loading="lazy" />`:`<div class="no-poster">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                 No Image
               </div>`}
          <div class="search-card-info">
            <div class="search-card-title">${d(R)}</div>
            <div class="search-card-meta">
              <span class="type-badge ${w==="tv"?"tv":"movie"}">${w==="tv"?"TV":"Movie"}</span>
              ${re(V)}
              ${U?`· ⭐ ${U}`:""}
            </div>
          </div>
        `,J.addEventListener("click",()=>{O(se)}),r.appendChild(J)})}catch(E){console.error("Search error:",E),r.innerHTML='<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px">Search failed. Please try again.</p>',e.textContent=""}}}function It(t,o){return new Promise(e=>{const r=document.createElement("div");r.className="play-loader",r.innerHTML=`
      <div class="play-loader-backdrop" style="background-image:url(${d(t||"")})"></div>
      <div class="play-loader-overlay"></div>
      <div class="play-loader-content">
        <div class="play-loader-logo">SHELIVESWITHUS</div>
        <div class="play-loader-title">${d(o||"")}</div>
        <div class="play-loader-ring"></div>
      </div>
    `,document.body.appendChild(r),requestAnimationFrame(()=>{requestAnimationFrame(()=>{r.classList.add("active")})}),setTimeout(()=>{r.classList.add("fade-out"),setTimeout(()=>{r.remove(),e()},600)},2400)})}function zt(t,o,e){sessionStorage.setItem("pt_play_loader",JSON.stringify({backdrop:o,title:e})),It(o,e).then(()=>{O(t)})}function Bt(){const t=sessionStorage.getItem("pt_play_loader");if(t){sessionStorage.removeItem("pt_play_loader");try{const{backdrop:o,title:e}=JSON.parse(t);return It(o,e)}catch{}}return Promise.resolve()}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});document.addEventListener("DOMContentLoaded",()=>{switch(le){case"home":kt();break;case"movie":_t();break;case"tv":St();break;case"search":$t();break}});(function(){const t="BroadcastChannel"in window?new BroadcastChannel("slwu_remote"):null,o="slwu_profiles",e="pt_active_profile",r="slwu_remote_state",h="slwu_now_playing",b="slwu_ui_scale_2x",m={"New Releases":"/movie/now_playing",Family:"/discover/movie?with_genres=10751",Comedy:"/discover/movie?with_genres=35",Action:"/discover/movie?with_genres=28",Horror:"/discover/movie?with_genres=27",Classics:"/discover/movie?primary_release_date.lte=1999-12-31&sort_by=popularity.desc",Cartoons:"/discover/movie?with_genres=16"};function T(){try{return JSON.parse(localStorage.getItem(o)||"[]")}catch{return[]}}function g(n){localStorage.setItem(o,JSON.stringify(n))}function f(){const n=localStorage.getItem(e);return T().find(l=>l.id===n)||null}function c(n,l=""){const s=T();let i=s.find(a=>a.name.toLowerCase()===String(n).trim().toLowerCase());return i?l&&(i.avatarPoster=String(l||"")):(i={id:"p_"+Date.now(),name:String(n).trim(),avatarPoster:String(l||""),createdAt:Date.now()},s.push(i)),g(s),localStorage.setItem(e,i.id),i}function B(n){const l=T().find(s=>s.name.toLowerCase()===String(n).trim().toLowerCase());return l&&localStorage.setItem(e,l.id),l}async function M(){try{const l=((await j("/trending/all/week")).results||[]).filter(i=>i&&i.poster_path),s=l[Math.floor(Math.random()*Math.max(l.length,1))];return(s==null?void 0:s.poster_path)||""}catch{return""}}function p(n){const l=n==null?void 0:n.avatarPoster;return l?/^https?:\/\//i.test(l)?l:oe(l)||"":""}function L(n,l){const s=T(),i=s.findIndex(a=>a.id===n);i>=0&&(s[i].avatarPoster=String(l||""),g(s))}function E(n){const l=T().filter(s=>s.id!==n);g(l),localStorage.getItem(e)===n&&localStorage.removeItem(e)}function v(n,l={}){var a;if(!n||!n.src)return;const s=((a=document.querySelector("#sidebar-poster"))==null?void 0:a.src)||"",i={src:n.src,title:document.title,url:location.href,page:le,poster:s,ts:Date.now(),...l};localStorage.setItem(h,JSON.stringify(i))}function w(){try{return JSON.parse(localStorage.getItem(h)||"null")}catch{return null}}function $(n,l={}){const s={action:n,payload:l,ts:Date.now()};localStorage.setItem(r,JSON.stringify(s)),t&&t.postMessage(s)}function R(){var n,l;return document.fullscreenElement?document.exitFullscreen().catch(()=>{}):(l=(n=document.documentElement).requestFullscreen)==null?void 0:l.call(n).catch(()=>{})}function q(){return document.querySelector("#player-container iframe, #theater-player")}function V(n,l=[]){const s=q();if(!s||!s.contentWindow)return!1;try{return s.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:l}),"*"),!0}catch{return!1}}function U(){var l,s,i;document.querySelectorAll(".footer, .ad-container-native, .ad-container-banner, .ad-toggle-wrap").forEach(a=>a.remove());const n=document.querySelector("#navbar .nav-left");if(n){const a=n.querySelector(".nav-logo");a&&a.remove(),(l=n.querySelector(".nav-links"))==null||l.remove(),n.remove()}if(document.querySelector("#navbar .nav-right"),document.body.classList.add("top-search-only"),(s=document.getElementById("hamburger"))==null||s.remove(),(i=document.getElementById("nav-collapse-btn"))==null||i.remove(),!document.getElementById("global-action-stack")){const a=document.createElement("div");a.id="global-action-stack",a.className="global-action-stack",a.innerHTML=`
        <button id="global-stack-toggle" class="global-fab global-fab--toggle" aria-label="Menu">☰</button>
        <div class="global-action-stack-menu">
          <div id="global-more-menu" class="global-more-menu">
            <button id="global-nav-toggle-btn" class="global-fab global-fab--stack">Menu</button>
            <button id="global-layout-btn" class="global-fab global-fab--stack">Layout: Classic</button>
            <button id="global-server-btn" class="global-fab global-fab--stack">Server: Auto</button>
            <button id="global-profile-btn" class="global-fab global-fab--stack">Profile</button>
            <button id="global-hidden-btn" class="global-fab global-fab--stack">Hidden</button>
            <button id="global-appfs-btn" class="global-fab global-fab--stack">Full</button>
            <button id="global-tv-btn" class="global-fab global-fab--stack">TV</button>
            <button id="global-scale-btn" class="global-fab global-fab--stack">1x</button>
          </div>
          <div class="global-action-primary">
            <button id="global-home-btn" class="global-fab global-fab--stack" aria-label="Home">Home</button>
            <button id="global-movies-btn" class="global-fab global-fab--stack">Movies</button>
            <button id="global-tvshows-btn" class="global-fab global-fab--stack">TV Shows</button>
            <button id="global-search-btn" class="global-fab global-fab--stack global-fab--search" aria-label="Search">Search</button>
            <button id="global-mylist-btn" class="global-fab global-fab--stack">My List</button>
            <button id="global-catalog-btn" class="global-fab global-fab--stack">Catalog</button>
            <button id="global-theater-btn" class="global-fab global-fab--stack">Theater</button>
            <button id="global-more-btn" class="global-fab global-fab--stack">More</button>
          </div>
        </div>
      `,document.body.appendChild(a)}if(!document.getElementById("slwu-brand-pin")){const a=document.createElement("div");a.id="slwu-brand-pin",a.textContent="SheLivesWithMe",document.body.appendChild(a)}if(!document.getElementById("slwu-profile-modal")){const a=document.createElement("div");a.id="slwu-profile-modal",a.className="slwu-modal",a.innerHTML=`
        <div class="slwu-modal-card">
          <button class="slwu-modal-close" data-close-modal="profile">×</button>
          <h2>PROFILE</h2>
          <p>Local profiles only. Pick a name + optional avatar.</p>
          <div class="profile-modal-row">
            <div class="profile-modal-avatar" id="slwu-profile-avatar-preview"></div>
            <div style="flex:1;display:flex;flex-direction:column;gap:10px">
              <div class="auth-field">
                <input type="text" id="slwu-profile-name" placeholder=" " />
                <label for="slwu-profile-name">Name</label>
                <div class="auth-field-border"></div>
              </div>
              <div style="display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap">
                <button id="slwu-profile-random" class="remote-mini-btn" type="button">Random Photo</button>
                <button id="slwu-profile-enter" class="remote-mini-btn remote-mini-btn--primary" type="button">Create / Enter</button>
              </div>
            </div>
          </div>
          <div class="sheet-title" style="margin-top:14px">Existing Profiles</div>
          <div id="slwu-profile-list" class="profile-existing"></div>
        </div>
      `,document.body.appendChild(a)}if(!document.getElementById("slwu-avatar-pin")){const a=document.createElement("button");a.id="slwu-avatar-pin",a.type="button",a.className="slwu-avatar-pin",a.innerHTML='<span class="slwu-avatar-fallback">S</span>',document.body.appendChild(a)}if(!document.getElementById("tv-remote-panel")){const a=document.createElement("aside");a.id="tv-remote-panel",a.className="tv-remote-panel",a.innerHTML=`
        <div class="tv-remote-header">
          <div class="tv-remote-header-actions tv-remote-header-actions--split">
            <div class="tv-remote-header-actions">
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
          <div id="tvremote-nowplaying-meta" class="tvremote-nowplaying-meta" hidden></div>
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
      `,document.body.appendChild(a)}if(!document.getElementById("global-search-sheet")){const a=document.createElement("section");a.id="global-search-sheet",a.className="global-search-sheet",a.innerHTML=`
        <div class="global-search-sheet-inner">
          <div class="global-search-inputbar">
            <div class="global-search-inputwrap">
              <input id="global-search-input" type="text" placeholder="Search anything..." />
              <button id="global-search-clear" class="remote-mini-btn" type="button">Clear</button>
            </div>
            <button id="global-search-close" class="remote-mini-btn">Close</button>
          </div>
          <div class="global-search-results-wrap">
            <aside class="global-search-side">
              <div class="sheet-title">My List</div>
              <div id="global-search-mylist" class="global-search-mylist"></div>
            </aside>
            <section class="global-search-main">
              <div id="global-search-results" class="global-search-results"></div>
            </section>
          </div>
        </div>
      `,document.body.appendChild(a)}if(!document.getElementById("global-hidden-sheet")){const a=document.createElement("section");a.id="global-hidden-sheet",a.className="global-search-sheet",a.innerHTML=`
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
      `,document.body.appendChild(a)}if(!document.getElementById("global-catalog-sheet")){const a=document.createElement("section");a.id="global-catalog-sheet",a.className="global-search-sheet",a.innerHTML=`
        <div class="global-search-sheet-inner">
          <div class="global-search-inputbar">
            <button id="global-catalog-more" class="remote-mini-btn" type="button">Load More</button>
            <button id="global-catalog-torrent-btn" class="remote-mini-btn" type="button">Torrent</button>
            <div></div>
            <button id="global-catalog-close" class="remote-mini-btn">Close</button>
          </div>
          <div class="global-catalog-wrap">
            <aside class="global-catalog-tabs">
              <div class="sheet-title">Catalog</div>
              <div id="global-catalog-tabs" class="global-catalog-tabs-list"></div>
            </aside>
            <section class="global-catalog-main">
              <div id="global-catalog-grid" class="global-search-results"></div>
            </section>
          </div>
        </div>
      `,document.body.appendChild(a)}}function se(){const n=document.body;if(window.__slwu=window.__slwu||{},window.__slwu._globalButtonsWired)return;window.__slwu._globalButtonsWired=!0;const l=document.getElementById("tvremote-close"),s=document.getElementById("profile-open-btn"),i=document.getElementById("slwu-profile-modal"),a=document.getElementById("slwu-avatar-pin"),C=document.getElementById("global-theater-btn"),P=document.getElementById("global-movies-btn"),D=document.getElementById("global-tvshows-btn"),A=document.getElementById("global-mylist-btn"),N=document.getElementById("global-hidden-btn"),x=document.getElementById("global-stack-toggle"),I=document.getElementById("global-home-btn"),_=document.getElementById("global-more-btn"),H=document.getElementById("global-layout-btn"),y=document.getElementById("global-nav-toggle-btn"),F=document.getElementById("global-server-btn"),Y=document.getElementById("global-appfs-btn"),z=document.getElementById("global-scale-btn"),ge=document.getElementById("global-tv-btn"),Je=document.getElementById("global-profile-btn"),je=document.getElementById("global-catalog-btn"),Ge=document.getElementById("global-search-btn"),Be=document.getElementById("global-search-sheet"),xe=document.getElementById("global-hidden-sheet"),Te=document.getElementById("global-catalog-sheet"),K=()=>{n.classList.remove("sheet-open","hidden-open","catalog-open")},Ye=()=>{K(),n.classList.add("catalog-open"),Se()},Rt=(u="")=>Me({prefill:String(u||"")}),Ke=()=>{Me({prefill:""});const u=document.getElementById("global-search-results");u&&(u.innerHTML='<div class="tvremote-empty">Choose from My List or search.</div>')};window.__slwu.openCatalogSheet=Ye,window.__slwu.openSearchSheet=Rt,window.__slwu.openMyListSheet=Ke;const ze="slwu_layout_mode",Qe=()=>localStorage.getItem(ze)||"classic",Xe=u=>{const S=u==="netflix"?"netflix":"classic";n.classList.toggle("layout-netflix",S==="netflix"),localStorage.setItem(ze,S);const Q=S==="netflix"?"Netflix":"Classic";H&&(H.textContent=`Layout: ${Q}`)};Xe(Qe());const At=()=>Xe(Qe()==="netflix"?"classic":"netflix"),Ze="slwu_nav_collapsed",et=u=>{const S=!!u;n.classList.toggle("nav-collapsed",S),localStorage.setItem(Ze,S?"1":"0"),y&&(y.textContent=`Menu Bar: ${S?"Off":"On"}`)};et(localStorage.getItem(Ze)==="1");const tt="slwu_server_mode",he=["auto","oxygen","helium","hydrogen","lithium","titanium"],Ot=u=>u==="oxygen"?"Oxygen":u==="helium"?"Helium":u==="hydrogen"?"Hydrogen":u==="lithium"?"Lithium":u==="titanium"?"Titanium":"Auto",ot=()=>localStorage.getItem(tt)||"auto",nt=u=>{const S=he.includes(u)?u:"auto";localStorage.setItem(tt,S),F&&(F.textContent=`Server: ${Ot(S)}`),window.__slwu.server=S};nt(ot());const Me=(u={})=>{K(),n.classList.add("sheet-open"),ve();const S=document.getElementById("global-search-input"),Q=document.getElementById("global-search-results");u.prefill&&S&&(S.value=String(u.prefill)),S&&S.focus(),Q&&!(S&&S.value.trim())&&(Q.innerHTML='<div class="tvremote-empty">Type to search.</div>'),S&&S.value.trim()&&Ie(S.value.trim())};l&&(l.onclick=()=>n.classList.remove("remote-open"));const fe=()=>{if(!a)return;const u=f(),S=p(u);if(S)a.innerHTML=`<img src="${d(S)}" alt="Profile" />`;else{const Q=((u==null?void 0:u.name)||"S").slice(0,1).toUpperCase();a.innerHTML=`<span class="slwu-avatar-fallback">${d(Q)}</span>`}},Ce=()=>{if(!i)return;const u=document.getElementById("slwu-profile-list"),S=document.getElementById("slwu-profile-name"),Q=document.getElementById("slwu-profile-avatar-preview"),ie=f(),gt=T(),ht=W=>{const ee=W?p({avatarPoster:W}):"";i.dataset.avatarPoster=W||"",Q&&(Q.innerHTML=ee?`<img src="${d(ee)}" alt="Avatar" />`:'<span class="slwu-avatar-fallback">?</span>')};S&&(ie!=null&&ie.name)&&(S.value=ie.name),ht((ie==null?void 0:ie.avatarPoster)||""),u&&(u.innerHTML=gt.length?gt.map(W=>`
          <div class="profile-local-card">
            <div style="display:flex;align-items:center;gap:10px">
              <div class="profile-modal-avatar" style="width:44px;height:64px;border-radius:12px">
                ${p(W)?`<img src="${d(p(W))}" alt="${d(W.name)}" />`:`<span class="slwu-avatar-fallback">${d(W.name.slice(0,1).toUpperCase())}</span>`}
              </div>
              <div>
                <div class="profile-local-name">${d(W.name)}</div>
                <div class="profile-local-meta">Local profile</div>
              </div>
            </div>
            <div class="profile-local-actions">
              <button class="remote-mini-btn" data-login="${d(W.name)}">Enter</button>
              <button class="remote-mini-btn" data-delete="${d(W.id)}">Delete</button>
            </div>
          </div>
        `).join(""):'<div class="tvremote-empty">No profiles yet.</div>',u.querySelectorAll("[data-delete]").forEach(W=>{W.onclick=()=>{E(W.dataset.delete),Ce(),fe()}}),u.querySelectorAll("[data-login]").forEach(W=>{W.onclick=()=>{B(W.dataset.login),Ce(),fe(),ve()}}));const ft=document.getElementById("slwu-profile-random");ft&&(ft.onclick=async()=>ht(await M()));const bt=document.getElementById("slwu-profile-enter");bt&&(bt.onclick=async()=>{const W=String((S==null?void 0:S.value)||"").trim();if(!W)return;let ee=i.dataset.avatarPoster||"";ee||(ee=await M());const Ut=T().find(Wt=>Wt.name.toLowerCase()===W.toLowerCase()),Ft=c(W,ee);Ut&&ee&&L(Ft.id,ee),fe(),ve(),i.classList.remove("open")})},Pe=()=>{Ce(),i==null||i.classList.add("open")};s&&(s.onclick=Pe),a&&(a.onclick=Pe),document.querySelectorAll("[data-close-modal='profile']").forEach(u=>u.onclick=()=>i.classList.remove("open")),i&&i.addEventListener("click",u=>{u.target===i&&i.classList.remove("open")}),fe(),C&&(C.onclick=()=>{const u=w(),S=new URL(ae("theater/"));u&&u.src&&S.searchParams.set("src",u.src),O(S.toString())}),I&&(I.onclick=()=>{K(),n.classList.remove("stack-open","remote-open"),n.classList.remove("more-open"),n.classList.remove("catalog-open","hidden-open","sheet-open"),O(me())}),P&&(P.onclick=()=>{K(),n.classList.remove("stack-open","remote-open","more-open"),O(Re({type:"movie"}))}),D&&(D.onclick=()=>{K(),n.classList.remove("stack-open","remote-open","more-open"),O(Re({type:"tv"}))}),H&&(H.onclick=()=>At()),y&&(y.onclick=()=>et(!n.classList.contains("nav-collapsed"))),F&&(F.onclick=()=>{const u=ot(),S=he.indexOf(u),Q=he[(S+1)%he.length];nt(Q)}),A&&(A.onclick=()=>Ke()),N&&(N.onclick=()=>{K(),n.classList.add("hidden-open"),Fe()}),x&&(x.onclick=()=>{const u=!n.classList.contains("stack-open");n.classList.toggle("stack-open",u),u||n.classList.remove("more-open"),document.body.classList.toggle("search-collapsed",!u)}),_&&(_.onclick=()=>n.classList.toggle("more-open")),Y&&(Y.onclick=()=>R()),document.body.classList.toggle("search-collapsed",!n.classList.contains("stack-open"));const at=u=>{n.classList.remove("ui-scale-1x","ui-scale-2x","ui-scale-3x"),n.classList.add(`ui-scale-${u}x`),localStorage.setItem(b,String(u)),z&&(z.textContent=`${u}x`)},st=parseInt(localStorage.getItem(b)||"1",10);at([1,2,3].includes(st)?st:1),z&&(z.onclick=()=>{const u=parseInt(localStorage.getItem(b)||"1",10);at(u===3?1:u+1)}),ge&&(ge.onclick=()=>n.classList.toggle("remote-open")),Je&&(Je.onclick=()=>Pe()),je&&(je.onclick=()=>Ye()),Ge&&(Ge.onclick=()=>Me());const it=document.getElementById("global-search-close");it&&(it.onclick=()=>K());const lt=document.getElementById("global-search-clear");lt&&(lt.onclick=()=>{const u=document.getElementById("global-search-input"),S=document.getElementById("global-search-results");u&&(u.value=""),S&&(S.innerHTML='<div class="tvremote-empty">Type to search.</div>')});const rt=document.getElementById("global-hidden-close");rt&&(rt.onclick=()=>K());const ct=document.getElementById("global-catalog-close");ct&&(ct.onclick=()=>K());const dt=document.getElementById("global-catalog-torrent-btn");dt&&(dt.onclick=()=>Oe());const mt=document.getElementById("global-catalog-more");mt&&(mt.onclick=()=>{try{Se(ke,{append:!0})}catch{}}),Be&&Be.addEventListener("click",u=>{u.target===Be&&K()}),xe&&xe.addEventListener("click",u=>{u.target===xe&&K()}),Te&&Te.addEventListener("click",u=>{u.target===Te&&K()}),document.addEventListener("keydown",u=>{u.key==="Escape"&&(K(),n.classList.remove("remote-open","more-open"))});const ut=document.getElementById("tv-remote-panel"),pt=document.getElementById("global-action-stack");document.addEventListener("pointerdown",u=>{if(!n.classList.contains("remote-open"))return;const S=u.target;ut&&ut.contains(S)||pt&&pt.contains(S)||n.classList.remove("remote-open")});const qt=1e4;let de=null;const vt=()=>{if(n.classList.contains("stack-open")){n.classList.remove("stack-faded"),de&&clearTimeout(de),de=null;return}n.classList.remove("stack-faded"),de&&clearTimeout(de),de=setTimeout(()=>{n.classList.contains("stack-open")||n.classList.add("stack-faded")},qt)};["mousemove","touchstart","pointerdown","keydown","scroll"].forEach(u=>{window.addEventListener(u,vt,{passive:!0})}),vt()}function J(n,l,s={}){if(!l)return;const i=!!s.append;if(i||(l.innerHTML=""),!n.length){i||(l.innerHTML='<div class="tvremote-empty">No items found.</div>');return}n.forEach(a=>{const C=a.media_type==="tv"||a.first_air_date?"tv":"movie",P=a.title||a.name||"Untitled",D=C==="tv"?ne(a.id):ue(a.id),A=G.has(a.id,C),N=document.createElement("article");N.className="tvremote-card";const x=oe(a.poster_path)||"";N.innerHTML=`
        <button class="tvremote-card-wish ${A?"in-list":""}" aria-label="Wish List">❤</button>
        ${x?`<img src="${d(x)}" alt="${d(P)}" loading="lazy">`:`<div class="tvremote-card-fallback">${d(P.slice(0,1))}</div>`}
        <div class="tvremote-card-info">
          <div class="tvremote-card-title">${d(P)}</div>
          <div class="tvremote-card-meta">${C.toUpperCase()} · ${re(a.release_date||a.first_air_date||"")}</div>
        </div>
      `,N.addEventListener("click",_=>{_.target.closest(".tvremote-card-wish")||(document.body.classList.remove("remote-open"),O(D))});const I=N.querySelector(".tvremote-card-wish");I&&(I.onclick=_=>{_.stopPropagation();const H=G.toggle({id:a.id,type:C,title:P,poster:a.poster_path});_.currentTarget.classList.toggle("in-list",H),$e(),ve()}),l.appendChild(N)})}let ce=1,pe="all",Ue=null,Le=1;async function xt(n,l=!0){const s=document.getElementById("tvremote-catalog-results");if(!s)return;const i=n||Ue||Object.keys(m)[0];Ue=i,l&&(Le=1,s.innerHTML='<div class="tvremote-empty">Loadingâ€¦</div>');const a=String(m[i]),C=`${a}${a.includes("?")?"&":"?"}page=${Le}`,D=((await j(C)).results||[]).slice(0,12);J(D,s,{append:!l}),Le+=1}async function Ee(n=!0){const l=document.getElementById("tvremote-search"),s=document.getElementById("tvremote-results");if(!l||!s)return;const i=l.value.trim();if(n&&(ce=1,s.innerHTML=""),!i){s.innerHTML='<div class="tvremote-empty">Search movies, TV, or people.</div>';return}const C=((await j(`/search/multi?query=${encodeURIComponent(i)}&page=${ce}`)).results||[]).filter(P=>P.media_type==="movie"||P.media_type==="tv");J(C,s,{append:!n})}async function Tt(){const n=document.getElementById("tvremote-catalog");n&&(n.innerHTML="",Object.keys(m).forEach(l=>{const s=document.createElement("button");s.className="remote-pill remote-pill--catalog",s.textContent=l,s.onclick=async()=>{n.querySelectorAll(".remote-pill").forEach(i=>i.classList.remove("active")),s.classList.add("active"),await xt(l,!0).catch(console.error)},n.appendChild(s)}))}let ke=null,_e=1;async function Se(n=null,l={}){const s=document.getElementById("global-catalog-tabs"),i=document.getElementById("global-catalog-grid");if(!s||!i)return;s.innerHTML="";const a=Object.keys(m),C=n||ke||a[0];ke=C;const P=!!l.append;P||(_e=1);const D=P?i.innerHTML:"";a.forEach(A=>{const N=document.createElement("button");N.className="remote-pill remote-pill--catalog global-catalog-tab",N.textContent=A,A===C&&N.classList.add("active"),N.onclick=()=>Se(A,{append:!1}),s.appendChild(N)}),i.innerHTML='<div class="tvremote-empty">Loading…</div>',P&&(i.innerHTML=D);try{const A=String(m[C]),N=`${A}${A.includes("?")?"&":"?"}page=${_e}`,I=((await j(N)).results||[]).slice(0,24);J(I,i,{append:P}),_e+=1}catch{i.innerHTML='<div class="tvremote-empty">Could not load catalog.</div>'}}function $e(){const n=document.getElementById("tvremote-mylist");if(!n)return;const l=G.get();if(!l.length){n.innerHTML='<div class="tvremote-empty">My List is empty.</div>';return}Promise.all(l.slice(0,24).map(s=>j(s.type==="tv"?`/tv/${s.id}`:`/movie/${s.id}`).then(i=>({...i,media_type:s.type})).catch(()=>null))).then(s=>{J(s.filter(Boolean),n)})}function ve(){const n=document.getElementById("global-search-mylist");if(!n)return;const l=G.get();n.innerHTML=l.length?"":'<div class="tvremote-empty">Nothing saved yet.</div>',l.slice(0,30).forEach(s=>{const i=document.createElement("button");i.className="global-search-list-item";const a=s.title||s.name||"Saved Item",C=s.poster?`${Z}${s.poster}`:oe(s.poster_path||s.poster);i.innerHTML=`
        ${C?`<img src="${d(C)}" alt="${d(a)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${d(a.slice(0,1))}</span>`}
        <span class="global-search-list-label">${d(a)}</span>
      `,i.onclick=()=>{O(s.type==="tv"?ne(s.id):ue(s.id))},n.appendChild(i)})}function Fe(){const n=document.getElementById("global-hidden-results");if(!n)return;const l=X.get();n.innerHTML=l.length?"":'<div class="tvremote-empty">Nothing hidden yet.</div>',l.slice(0,40).forEach(s=>{const i=document.createElement("button");i.className="global-search-list-item";const a=s.title||s.name||"Hidden Item",C=s.poster?`${Z}${s.poster}`:oe(s.poster_path||s.poster);i.innerHTML=`${C?`<img src="${d(C)}" alt="${d(a)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${d(a.slice(0,1))}</span>`}<span class="global-search-list-label">${d(a)}</span>`,i.onclick=()=>{X.remove(s.id,s.type),Fe()},n.appendChild(i)})}let We=null;async function Ie(n){const l=document.getElementById("global-search-results");if(!l)return;if(!n){l.innerHTML='<div class="tvremote-empty">Type to search.</div>';return}l.innerHTML='<div class="tvremote-empty">Searching…</div>';const s=await j(`/search/multi?query=${encodeURIComponent(n)}&page=1`);J((s.results||[]).filter(i=>i.media_type==="movie"||i.media_type==="tv"),l)}function De(){if(window.__slwu=window.__slwu||{},window.__slwu._globalSearchWired)return;window.__slwu._globalSearchWired=!0,ve();const n=document.getElementById("global-search-input");n&&n.addEventListener("input",()=>{clearTimeout(We),We=setTimeout(()=>Ie(n.value.trim()),350)});const l=document.getElementById("tvremote-search-clear");l&&(l.onclick=()=>{const s=document.getElementById("tvremote-search"),i=document.getElementById("tvremote-results");s&&(s.value=""),i&&(i.innerHTML='<div class="tvremote-empty">Search movies, TV, or people.</div>')})}function Ve(){if(window.__slwu=window.__slwu||{},window.__slwu._tvRemoteWired)return;window.__slwu._tvRemoteWired=!0,Tt(),$e();const n=document.getElementById("tvremote-player-fullscreen"),l=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),s=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled);n&&(l||!s)&&(n.style.display="none");const i=document.getElementById("tvremote-search"),a=document.getElementById("tvremote-more");let C=null;i&&i.addEventListener("input",()=>{clearTimeout(C),C=setTimeout(()=>Ee(!0).catch(console.error),350)});const P=document.getElementById("tvremote-more-header"),D=document.getElementById("tvremote-random-header"),A=()=>{ce+=1,Ee(!1).catch(console.error)};a&&(a.onclick=A),P&&(P.onclick=A),D&&(D.onclick=async()=>{const Y=((await j(pe==="tv"?"/trending/tv/week":"/trending/movie/week")).results||[]).filter(ge=>!X.has(ge.id,ge.media_type||(pe==="tv"?"tv":"movie"))),z=Y[Math.floor(Math.random()*Math.max(Y.length,1))];z&&J([z],document.getElementById("tvremote-results"),!0)}),document.querySelectorAll("[data-remote-mode]").forEach(y=>{y.onclick=async()=>{var F,Y;if(document.querySelectorAll("[data-remote-tab]").forEach(z=>z.classList.remove("active")),document.querySelectorAll(".tvremote-tab").forEach(z=>z.classList.remove("active")),(F=document.querySelector('[data-remote-tab="search"]'))==null||F.classList.add("active"),(Y=document.getElementById("tvremote-tab-search"))==null||Y.classList.add("active"),y.dataset.remoteMode==="home"){document.body.classList.remove("remote-open"),O(me());return}pe=y.dataset.remoteMode,await Ee(!0).catch(console.error)}}),document.querySelectorAll("[data-remote-tab]").forEach(y=>{y.onclick=()=>{document.querySelectorAll("[data-remote-tab]").forEach(F=>F.classList.remove("active")),document.querySelectorAll(".tvremote-tab").forEach(F=>F.classList.remove("active")),y.classList.add("active"),document.getElementById(`tvremote-tab-${y.dataset.remoteTab}`).classList.add("active"),y.dataset.remoteTab==="mylist"&&$e()}});const N=document.getElementById("tvremote-message"),x=y=>{N&&(N.textContent=y)},I=()=>{const y=new URLSearchParams(location.search);return{id:y.get("id"),season:parseInt(y.get("season")||"1",10),episode:parseInt(y.get("episode")||"1",10)}};document.getElementById("tvremote-prev-episode").onclick=()=>{if(le!=="tv")return x("Prev Episode works on TV pages.");const y=I(),F=Math.max(1,y.episode-1);O(ne(y.id,{season:y.season,episode:F}))},document.getElementById("tvremote-next-episode").onclick=()=>{if(le!=="tv")return x("Next Episode works on TV pages.");const y=I();O(ne(y.id,{season:y.season,episode:y.episode+1}))};const _=y=>{document.body.classList.remove("remote-scale-1x","remote-scale-2x","remote-scale-3x"),document.body.classList.add(`remote-scale-${y}x`),localStorage.setItem("slwu_remote_scale",String(y));const F=document.getElementById("tvremote-fullscreen");F&&(F.textContent=`${y}x`)};_(parseInt(localStorage.getItem("slwu_remote_scale")||"1",10)),document.getElementById("tvremote-fullscreen").onclick=()=>{const y=parseInt(localStorage.getItem("slwu_remote_scale")||"1",10);_(y===3?1:y+1)};const H=document.getElementById("tvremote-controls-toggle");H&&(H.onclick=()=>document.body.classList.toggle("remote-controls-collapsed")),document.getElementById("tvremote-playpause").onclick=()=>{V("playVideo"),V("pauseVideo"),$("togglePlay"),x("Sent Play / Pause.")},document.getElementById("tvremote-seek-back").onclick=()=>{V("seekTo",[0,!0]),$("seekBack"),x("Sent -30s.")},document.getElementById("tvremote-seek-forward").onclick=()=>{$("seekForward"),x("Sent +30s.")},document.getElementById("tvremote-volume-down").onclick=()=>{$("volumeDown"),x("Sent volume down.")},document.getElementById("tvremote-volume-up").onclick=()=>{$("volumeUp"),x("Sent volume up.")},document.getElementById("tvremote-stop").onclick=()=>{V("stopVideo"),$("stop"),x("Sent stop.")},document.getElementById("tvremote-player-fullscreen").onclick=()=>{const y=q();y!=null&&y.requestFullscreen&&y.requestFullscreen().catch(()=>{}),$("fullscreenOn"),x("Fullscreen requested.")},document.getElementById("tvremote-player-window").onclick=()=>{document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),$("fullscreenOff"),x("Returned to windowed mode.")},document.getElementById("tvremote-resolution").onclick=()=>x(le==="theater"?"Use provider settings inside theater player.":"Open Theater to use player settings."),document.getElementById("tvremote-subtitles").onclick=()=>x(le==="theater"?"Use provider subtitle settings inside theater player.":"Open Theater to use subtitle settings.")}function Mt(){if(window.__slwu=window.__slwu||{},window.__slwu._nowPlayingWired)return;window.__slwu._nowPlayingWired=!0;const n=document.getElementById("player-container");if(!n)return;const l=()=>{const i=n.querySelector("iframe");i&&v(i,{page:le})};l(),new MutationObserver(l).observe(n,{childList:!0,subtree:!0})}function Ct(n={}){if(!/profile\.html$|\/profile\/?$/.test(location.pathname)&&n.page!=="profile")return;const l=n.mountId?document.getElementById(n.mountId):null,s=l||document.body;l||(document.body.className="profile-page"),s.innerHTML=`
      <div class="profile-shell">
        <a class="back-btn profile-back-link" href="${te("index.html")}">← Return Back</a>
        <div class="profile-hero">
          <div class="tv-remote-kicker">PROFILE</div>
          <h1 id="profile-page-title">Create / Enter Profile</h1>
          <p class="profile-copy">Local profiles only. Pick a name + optional avatar.</p>
        </div>
        <div id="profile-app" class="profile-app"></div>
      </div>
    `;const i=s.querySelector("#profile-app"),C=new URLSearchParams(location.search).get("name"),P=f();function D(){const x=T().map(_=>`
        <div class="profile-local-card">
          <div>
            <div class="profile-local-name">${d(_.name)}</div>
            <div class="profile-local-meta">Local profile</div>
          </div>
          <div class="profile-local-actions">
            <button class="remote-mini-btn" data-login="${d(_.name)}">Enter</button>
            <button class="remote-mini-btn" data-delete="${d(_.id)}">Delete</button>
          </div>
        </div>
      `).join("");i.innerHTML=`
        <div class="profile-form-card">
          <div class="auth-field">
            <input type="text" id="profile-name" placeholder=" " />
            <label for="profile-name">Name</label>
            <div class="auth-field-border"></div>
          </div>
          <div class="profile-form-actions">
            <button id="profile-random" class="btn btn-secondary btn-3d" type="button">Random Photo</button>
            <button id="profile-enter" class="btn btn-primary btn-3d" type="button">Create / Enter</button>
          </div>
        </div>
        <div class="profile-existing">
          <div class="sheet-title">Existing Profiles</div>
          ${x||'<div class="tvremote-empty">No profiles yet.</div>'}
        </div>
      `;let I="";document.getElementById("profile-random").onclick=async()=>{I=await M(),alert("Random avatar picked. Press Create / Enter to save.")},document.getElementById("profile-enter").onclick=async()=>{const _=document.getElementById("profile-name").value.trim();if(!_)return alert("Enter a name.");const H=I||await M(),y=c(_,H);O(te(`profile/?name=${encodeURIComponent(y.name)}`))},i.querySelectorAll("[data-delete]").forEach(_=>_.onclick=()=>{E(_.dataset.delete),D()}),i.querySelectorAll("[data-login]").forEach(_=>_.onclick=()=>{B(_.dataset.login),O(te(`profile/?name=${encodeURIComponent(_.dataset.login)}`))})}function A(N){const x=T().find(H=>H.name.toLowerCase()===N.toLowerCase())||P;document.getElementById("profile-page-title").textContent=x?x.name:N,i.innerHTML=`
        <div class="profile-dashboard remote-look">
          <div class="remote-btn remote-btn-primary profile-dashboard-title">${d(N)}</div>
          <a class="remote-btn" href="${te("index.html")}">Home</a>
          <a class="remote-btn" href="${te("theater/")}">Open Theater</a>
          <a class="remote-btn" href="${te("profile/")}">Switch Profile</a>
          <button id="profile-delete-current" class="remote-btn">Delete Profile</button>
          <button id="profile-export" class="remote-btn">Export Local Data</button>
        </div>
      `;const I=document.getElementById("profile-delete-current");I&&x&&(I.onclick=()=>{confirm(`Delete ${x.name}?`)&&(E(x.id),O(te("profile/")))});const _=document.getElementById("profile-export");_&&(_.onclick=()=>{const H=localStorage.getItem(e)||"default",y={profile:x||null,myList:G.get(),hidden:X.get(),progress:qe.get(),profileId:H,exportedAt:new Date().toISOString()},F=new Blob([JSON.stringify(y,null,2)],{type:"application/json"}),Y=document.createElement("a");Y.href=URL.createObjectURL(F),Y.download=`slwu_${((x==null?void 0:x.name)||"profile").replace(/\\s+/g,"_")}_export.json`,Y.click(),setTimeout(()=>URL.revokeObjectURL(Y.href),2500)})}C?A(C):D(),document.getElementById("profile-pin-modal")}function Pt(n={}){var x;if(!/theater\.html$|\/theater\/?$/.test(location.pathname)&&n.page!=="theater")return;const l=n.mountId?document.getElementById(n.mountId):null,s=l||document.body;l||(document.body.className="theater-page");const i=w(),a=new URLSearchParams(location.search).get("src")||(i==null?void 0:i.src)||"";s.innerHTML=`
      <div class="theater-controls" id="theater-controls">
        <button class="remote-mini-btn theater-side-toggle" id="theater-controls-toggle" aria-label="Toggle Sidebar">☰</button>
        <button class="remote-mini-btn" id="theater-home-btn" type="button">Home</button>
      </div>
      <div class="theater-layout" id="theater-layout">
        <aside class="theater-side open" id="theater-side">
          <div class="sheet-title">My List</div>
          <div id="theater-mylist" class="theater-mylist"></div>
        </aside>
        <main class="theater-main">
          <div class="theater-player-wrap">
            <iframe id="theater-player" src="${d(a)}" allow="autoplay; fullscreen"></iframe>
          </div>
        </main>
      </div>
      <div id="theater-mobile-popup" class="slwu-modal ${window.innerWidth<900?"open":""}">
        <div class="slwu-modal-card">
          <button class="slwu-modal-close" data-close-modal="theater">×</button>
          <h2>CONNECT WITH THEATER</h2>
          <p>Use TV Remote and Profile from your mobile browser. Same-browser tabs sync instantly.</p>
        </div>
      </div>
    `,document.querySelectorAll("[data-close-modal='theater']").forEach(I=>I.onclick=()=>document.getElementById("theater-mobile-popup").classList.remove("open")),U(),se(),De(),Ve(),(()=>{const I=document.getElementById("theater-mylist"),_=G.get();I.innerHTML="",_.forEach(H=>{const y=document.createElement("button");y.className="global-search-list-item";const F=H.poster?oe(H.poster):"";y.innerHTML=`${F?`<img src="${d(F)}" alt="${d(H.title)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${d((H.title||"?").slice(0,1))}</span>`}<span class="global-search-list-label">${d(H.title)}</span>`,y.onclick=()=>{const Y=H.type==="tv"?Ne(H.id,1,1):He(H.id);A.src=Y,setNowPlaying({src:Y,title:H.title,type:H.type,id:H.id})},I.appendChild(y)})})(),document.getElementById("theater-controls-toggle").onclick=()=>{var H;const I=document.getElementById("theater-side"),_=document.getElementById("theater-layout");I.classList.toggle("open"),_.classList.toggle("side-collapsed",!I.classList.contains("open")),(H=document.getElementById("theater-controls"))==null||H.classList.toggle("faded",!I.classList.contains("open")),requestAnimationFrame(()=>window.dispatchEvent(new Event("resize")))};const P=document.getElementById("theater-controls");P&&P.classList.toggle("faded",!((x=document.getElementById("theater-side"))!=null&&x.classList.contains("open")));const D=document.getElementById("theater-home-btn");D&&(D.onclick=()=>O(me()));const A=document.getElementById("theater-player"),N=I=>{var _;if(!(!I||!A))try{I.action==="fullscreenOn"&&A.requestFullscreen&&A.requestFullscreen().catch(()=>{}),I.action==="fullscreenOff"&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),(_=A.contentWindow)==null||_.postMessage(JSON.stringify({event:"command",func:"playVideo",args:[]}),"*")}catch{}};window.addEventListener("storage",I=>{if(I.key===r)try{N(JSON.parse(I.newValue))}catch{}if(I.key===h)try{const _=JSON.parse(I.newValue||"null");_!=null&&_.src&&(A.src=_.src)}catch{}}),t&&(t.onmessage=I=>N(I.data))}function Ht(n={}){const l=n.mountId?document.getElementById(n.mountId):null,s=l||document.body;l||(document.body.className="owner-page");const i="slwu_owner_gate";let a={name:"Sheliveswithme",pin:"654321"};try{a=JSON.parse(localStorage.getItem(i)||JSON.stringify(a))}catch{}s.innerHTML=`
      <div class="slwu-route-shell">
        <div class="slwu-route-card">
          <div class="slwu-route-top">
            <a href="${me()}" class="slwu-back-link">← Back</a>
            <h1>Owner Portal</h1>
          </div>
          <p class="slwu-route-note">Local-only owner gate. Defaults are prefilled so the route works immediately.</p>
          <label class="slwu-field-label">Gate Name</label>
          <input id="owner-name" class="slwu-field-input" value="${d(a.name||"Sheliveswithme")}" />
          <label class="slwu-field-label">PIN</label>
          <input id="owner-pin" class="slwu-field-input" value="${d(a.pin||"654321")}" />
          <button id="owner-save" class="slwu-action-btn">Save Owner Gate</button>
          <div id="owner-msg" class="slwu-route-note"></div>
        </div>
      </div>
    `;const C=document.getElementById("owner-save");C&&C.addEventListener("click",()=>{var A,N,x,I;const P={name:((N=(A=document.getElementById("owner-name"))==null?void 0:A.value)==null?void 0:N.trim())||"Sheliveswithme",pin:((I=(x=document.getElementById("owner-pin"))==null?void 0:x.value)==null?void 0:I.trim())||"654321"};localStorage.setItem(i,JSON.stringify(P));const D=document.getElementById("owner-msg");D&&(D.textContent=`Saved owner gate for ${P.name}.`)})}function Nt(){jt(),U(),se(),De(),Ve(),Mt();const n=document.getElementById("global-search-input");n&&n.addEventListener("input",()=>{clearTimeout(window.__slwuGlobalSearch),window.__slwuGlobalSearch=setTimeout(()=>Ie(n.value.trim()),350)})}window.__slwu=window.__slwu||{},window.__slwu.boot=(n,l={})=>{var a,C;const s=n||Et(),i={...l||{},page:s};try{Nt()}catch{}try{switch(s){case"home":kt();break;case"movie":_t();break;case"tv":St();break;case"search":$t();break;case"catalog":try{(C=(a=window.__slwu).openCatalogSheet)==null||C.call(a)}catch{}break;case"profile":Ct(i);break;case"theater":Pt(i);break;case"owner":Ht(i);break;default:break}}catch{}},document.addEventListener("DOMContentLoaded",()=>window.__slwu.boot())})();function Qt(t,o){var e,r;(r=(e=window.__slwu)==null?void 0:e.boot)==null||r.call(e,t,o)}export{Qt as boot};
