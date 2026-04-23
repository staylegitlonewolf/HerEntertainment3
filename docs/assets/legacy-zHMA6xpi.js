const Ft="d9f0568167a608d0700093444b0c2da7",Wt="https://api.themoviedb.org/3",le="https://image.tmdb.org/t/p/w500",be="https://image.tmdb.org/t/p/original",He=e=>`https://www.vidking.net/embed/movie/${e}?color=8B5CF6&autoPlay=false`,Ne=(e,o,t)=>`https://www.vidking.net/embed/tv/${e}/${o}/${t}?color=8B5CF6&autoPlay=false&nextEpisode=true&episodeSelector=true`,ft=location.pathname.split("/").filter(Boolean),Dt=window.__SLWU_BASE||(location.hostname.endsWith("github.io")&&ft.length?`/${ft[0]}/`:"/");function ee(e=""){return Dt+String(e).replace(/^\/+/,"")}function ae(e=""){return new URL(ee(e),location.origin).toString()}function me(e=""){const o=ae("");return e?`${o.replace(/#.*$/,"")}#${String(e).replace(/^#/,"")}`:o}function Re(e=""){const o=new URL(ae("search"),location.origin);if(typeof e=="string"){const t=e.replace(/^\?/,"");t&&(o.search=t)}else e&&typeof e=="object"&&Object.entries(e).forEach(([t,r])=>{r==null||r===""||o.searchParams.set(t,String(r))});return o.toString()}function ue(e,o={}){const t=new URL(ae("movie"),location.origin);return t.searchParams.set("id",String(e)),Object.entries(o||{}).forEach(([r,f])=>t.searchParams.set(r,String(f))),t.toString()}function oe(e,o={}){const t=new URL(ae("tv"),location.origin);return t.searchParams.set("id",String(e)),Object.entries(o||{}).forEach(([r,f])=>t.searchParams.set(r,String(f))),t.toString()}function U(e){try{const o=e instanceof URL?e:new URL(String(e),location.href);if(o.origin!==location.origin){location.href=o.toString();return}const t=`${o.pathname}${o.search}${o.hash}`;if(t===`${location.pathname}${location.search}${location.hash}`)return;history.pushState({},"",t),window.dispatchEvent(new PopStateEvent("popstate"))}catch{location.href=String(e)}}function Vt(){var e;(e=window.__slwu)!=null&&e._spaLinksWired||(window.__slwu=window.__slwu||{},window.__slwu._spaLinksWired=!0,document.addEventListener("click",o=>{var f,w;const t=(w=(f=o.target)==null?void 0:f.closest)==null?void 0:w.call(f,"a");if(!t||t.hasAttribute("data-spa-ignore")||t.target&&t.target!=="_self")return;const r=t.getAttribute("href")||"";if(!(!r||r.startsWith("#"))&&!/^(mailto:|tel:|javascript:)/i.test(r))try{const u=new URL(t.href,location.href);if(u.origin!==location.origin)return;o.preventDefault(),U(u.toString())}catch{}}))}const k=(e,o=document)=>o.querySelector(e),yt=(e,o=document)=>Array.from(o.querySelectorAll(e));async function V(e){const o=e.includes("?")?"&":"?",t=await fetch(`${Wt}${e}${o}api_key=${Ft}`);if(!t.ok)throw new Error(`TMDB ${t.status}: ${e}`);return t.json()}function te(e,o=le){return e?`${o}${e}`:null}function re(e){return e?e.slice(0,4):"N/A"}function Ae(e){if(!e)return"";const o=Math.floor(e/60),t=e%60;return o?`${o}h ${t}m`:`${t}m`}function d(e=""){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const J={_key(){return`pt_mylist_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"[]")}catch{return[]}},has(e,o){return this.get().some(t=>t.id===e&&t.type===o)},add(e){const o=this.get();this.has(e.id,e.type)||o.unshift(e),localStorage.setItem(this._key(),JSON.stringify(o))},remove(e,o){const t=this.get().filter(r=>!(r.id===e&&r.type===o));localStorage.setItem(this._key(),JSON.stringify(t))},toggle(e){return this.has(e.id,e.type)?(this.remove(e.id,e.type),!1):(this.add(e),!0)}},X={_key(){return`pt_hidden_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"[]")}catch{return[]}},has(e,o){return this.get().some(t=>t.id===e&&t.type===o)},add(e){const o=this.get();this.has(e.id,e.type)||o.unshift(e),localStorage.setItem(this._key(),JSON.stringify(o))},remove(e,o){const t=this.get().filter(r=>!(r.id===e&&r.type===o));localStorage.setItem(this._key(),JSON.stringify(t))},toggle(e){return this.has(e.id,e.type)?(this.remove(e.id,e.type),!1):(this.add(e),!0)}},Oe={_key(){return`pt_progress_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"{}")}catch{return{}}},save(e,o,t){const r=this.get();r[`${o}_${e}`]={...t,savedAt:Date.now()},localStorage.setItem(this._key(),JSON.stringify(r))},getAll(){return Object.values(this.get())}};window.addEventListener("message",function(e){try{if(typeof e.data!="string")return;const o=JSON.parse(e.data);if(o.type==="PLAYER_EVENT"&&o.data){const t=o.data,r=t.id,f=t.mediaType||"movie";r&&t.progress>1&&t.progress<98&&Oe.save(r,f,{id:r,type:f,progress:t.progress,timestamp:t.currentTime,season:t.season,episode:t.episode,title:document.title})}}catch{}});function wt(e=location.pathname){const o=String(e||"");return o.endsWith("movie.html")||/\/movie\/?$/.test(o)?"movie":o.endsWith("tv.html")||/\/tv\/?$/.test(o)?"tv":o.endsWith("search.html")||/\/search\/?$/.test(o)?"search":/profile\.html$|\/profile\/?$/.test(o)?"profile":/theater\.html$|\/theater\/?$/.test(o)?"theater":/categories\.html$|\/categories\/?$/.test(o)||/\/catalog\/?$/.test(o)?"catalog":/owner\.html$|\/owner\/?$/.test(o)?"owner":"home"}const ie=wt();function ye(){const e=k("#navbar");if(!e||e.dataset.wired)return;e.dataset.wired="1",e.classList.contains("navbar-solid")||window.addEventListener("scroll",()=>{e.classList.toggle("scrolled",window.scrollY>50)},{passive:!0});const o=k("#hamburger"),t=k(".nav-links");o&&t&&o.addEventListener("click",()=>{t.classList.toggle("mobile-open")});const r=k("#search-toggle"),f=k("#nav-search"),w=k("#search-input");if(r&&f&&w){r.addEventListener("click",()=>{f.classList.toggle("open"),f.classList.contains("open")&&w.focus()}),w.addEventListener("keydown",g=>{if(g.key==="Enter"&&w.value.trim()&&U(Re({q:w.value.trim()})),g.key==="Escape"){f.classList.remove("open"),w.value="";const h=document.getElementById("nav-search-dropdown");h&&h.remove()}});let u=null;async function T(){const g=w.value.trim(),h=document.getElementById("nav-search-dropdown");if(!g){h&&h.remove();return}let c=h;c||(c=document.createElement("div"),c.id="nav-search-dropdown",c.className="nav-search-dropdown",f.appendChild(c)),c.innerHTML='<div class="nav-search-dd-loading">Searching…</div>';try{const M=((await V(`/search/multi?query=${encodeURIComponent(g)}&page=1`)).results||[]).filter(p=>p&&(p.media_type==="movie"||p.media_type==="tv")).slice(0,4);if(!M.length){c.innerHTML='<div class="nav-search-dd-empty">No results.</div>';return}c.innerHTML="",M.forEach(p=>{const L=p.media_type==="tv"||p.first_air_date?"tv":"movie",E=p.title||p.name||"Untitled",v=te(p.poster_path)||"",y=document.createElement("button");y.type="button",y.className="nav-search-dd-card",y.innerHTML=`
            ${v?`<img src="${d(v)}" alt="${d(E)}" loading="lazy" />`:`<div class="nav-search-dd-fallback">${d(E.slice(0,1))}</div>`}
            <div class="nav-search-dd-meta">
              <div class="nav-search-dd-title">${d(E)}</div>
              <div class="nav-search-dd-sub">${L.toUpperCase()} · ${re(p.release_date||p.first_air_date||"")}</div>
            </div>
          `,y.onclick=()=>{c.remove(),f.classList.remove("open"),w.value="",U(L==="tv"?oe(p.id):ue(p.id))},c.appendChild(y)})}catch{c.innerHTML='<div class="nav-search-dd-empty">Search failed.</div>'}}w.addEventListener("input",()=>{clearTimeout(u),u=setTimeout(()=>T(),220)}),document.addEventListener("click",g=>{const h=document.getElementById("nav-search-dropdown");h&&(g.target===h||h.contains(g.target)||g.target===w||h.remove())})}}function we(e,o="movie"){const t=e.id,r=e.title||e.name||"Untitled",f=te(e.poster_path),w=e.release_date||e.first_air_date||"",u=e.vote_average?e.vote_average.toFixed(1):"",T=o==="tv"?oe(t):ue(t),g=J.has(t,o),h=f?`<img src="${d(f)}" alt="${d(r)}" loading="lazy" />`:`<div class="no-poster" style="aspect-ratio:2/3;background:var(--surface);display:flex;align-items:center;justify-content:center;">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:32px;height:32px;opacity:.3"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
       </div>`,c=document.createElement("div");c.className="movie-card",c.dataset.id=t,c.dataset.type=o,c.innerHTML=`
    ${h}
    <div class="movie-card-overlay">
      <div class="movie-card-title">${d(r)}</div>
      <div class="movie-card-meta">${re(w)}${u?` · ⭐ ${u}`:""}</div>
    </div>
    <div class="movie-card-actions">
      <button class="card-action-btn hide-btn${X.has(t,o)?" is-hidden":""}" title="${X.has(t,o)?"Unhide":"Hide"}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="19" y1="5" x2="5" y2="19"/><line x1="5" y1="5" x2="19" y2="19"/></svg>
      </button>
      <button class="card-action-btn list-btn${g?" in-list":""}" title="${g?"Remove from My List":"Add to My List"}">
        ${g?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'}
      </button>
    </div>
  `,c.addEventListener("click",p=>{p.target.closest(".card-action-btn")||U(T)});const B=c.querySelector(".list-btn");B.addEventListener("click",p=>{p.stopPropagation();const L=J.toggle({id:t,type:o,title:r,poster:e.poster_path});B.classList.toggle("in-list",L),B.innerHTML=L?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'});const M=c.querySelector(".hide-btn");return M&&M.addEventListener("click",p=>{p.stopPropagation();const L=X.toggle({id:t,type:o,title:r,poster:e.poster_path});M.classList.toggle("is-hidden",L),M.title=L?"Unhide":"Hide",L&&c.remove()}),c}function Jt(e=8){return Array.from({length:e},()=>{const o=document.createElement("div");return o.className="skeleton-card skeleton",o})}function bt(e,o,t="movie"){if(o=(o||[]).filter(h=>!X.has(h.id,h.media_type||t||"movie")),!o||o.length===0)return null;const r=document.createElement("div");r.className="row-wrapper";const f=ae(`categories/?q=${encodeURIComponent(e)}`);r.innerHTML=`
    <div class="row-header">
      <h2 class="row-title"><a href="${f}">${d(e)}</a></h2>
      <a class="row-viewall" href="${f}">View All</a>
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
  `;const w=r.querySelector(".row-track");o.forEach(h=>w.appendChild(we(h,t)));const u=r.querySelector(".arrow-left"),T=r.querySelector(".arrow-right"),g=600;return u.addEventListener("click",()=>w.scrollBy({left:-g,behavior:"smooth"})),T.addEventListener("click",()=>w.scrollBy({left:g,behavior:"smooth"})),r}async function Lt(){Gt();const e=k("#main-content");ye();const o=k("#categories");if(!o)return;["Trending Now","Top Rated","Popular on SheLivesWithUs","Now Playing","Action","Comedy","Horror","Sci-Fi"].forEach(g=>{const h=document.createElement("div");h.className="row-wrapper",h.innerHTML=`
      <div class="row-header"><h2 class="row-title">${d(g)}</h2></div>
      <div class="row-track-container">
        <div class="row-track" id="skel-${g.replace(/\s+/g,"-")}"></div>
      </div>
    `;const c=h.querySelector(".row-track");Jt(8).forEach(B=>c.appendChild(B)),o.appendChild(h)});const r=[{title:"Trending Now",path:"/trending/movie/week",type:"movie"},{title:"Top Rated",path:"/movie/top_rated",type:"movie"},{title:"Popular on SheLivesWithUs",path:"/movie/popular",type:"movie"},{title:"Now Playing",path:"/movie/now_playing",type:"movie"},{title:"Action",path:"/discover/movie?with_genres=28",type:"movie"},{title:"Comedy",path:"/discover/movie?with_genres=35",type:"movie"},{title:"Horror",path:"/discover/movie?with_genres=27",type:"movie"},{title:"Sci-Fi",path:"/discover/movie?with_genres=878",type:"movie"},{title:"Romance",path:"/discover/movie?with_genres=10749",type:"movie"},{title:"Documentary",path:"/discover/movie?with_genres=99",type:"movie"},{title:"Animation",path:"/discover/movie?with_genres=16",type:"movie"},{title:"Trending TV Shows",path:"/trending/tv/week",type:"tv"},{title:"Top Rated TV",path:"/tv/top_rated",type:"tv"}];let f=!1;const w=await Promise.allSettled(r.map(g=>V(g.path)));o.innerHTML="";const u=Oe.getAll();if(u.length>0){const h=(await Promise.allSettled(u.slice(0,10).map(c=>V(c.type==="tv"?`/tv/${c.id}`:`/movie/${c.id}`).then(B=>({...B,_mediaType:c.type,_progress:c.progress}))))).filter(c=>c.status==="fulfilled").map(c=>c.value);if(h.length>0){const c=bt("Continue Watching",h,"mixed");c&&(h.forEach((B,M)=>{const p=c.querySelectorAll(".movie-card");p[M]&&(p[M].dataset.type=B._mediaType)}),o.appendChild(c))}}const T=J.get();if(T.length>0){const h=(await Promise.allSettled(T.slice(0,20).map(c=>V(c.type==="tv"?`/tv/${c.id}`:`/movie/${c.id}`).then(B=>({...B,_mediaType:c.type}))))).filter(c=>c.status==="fulfilled").map(c=>c.value);if(h.length>0){const c=document.createElement("div");c.className="row-wrapper",c.id="my-list",c.innerHTML=`
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
      `;const B=c.querySelector(".row-track");h.forEach(L=>{B.appendChild(we(L,L._mediaType||"movie"))});const M=c.querySelector(".arrow-left"),p=c.querySelector(".arrow-right");M.addEventListener("click",()=>B.scrollBy({left:-600,behavior:"smooth"})),p.addEventListener("click",()=>B.scrollBy({left:600,behavior:"smooth"})),o.appendChild(c)}}w.forEach((g,h)=>{if(g.status!=="fulfilled")return;const B=g.value.results||[],M=r[h];if(!f&&h===0&&B.length>0){f=!0;const L=B[Math.floor(Math.random()*Math.min(5,B.length))];jt(L)}const p=bt(M.title,B,M.type);p&&o.appendChild(p)}),e&&(e.style.opacity="1")}async function jt(e){if(!e)return;const o=e.id,t=e.media_type==="tv"?"tv":"movie",r=e.title||e.name||"",f=e.overview||"",w=e.backdrop_path?`${be}${e.backdrop_path}`:"",u=k("#hero-backdrop"),T=k("#hero-title"),g=k("#hero-desc"),h=k("#hero-meta"),c=k("#hero-play-btn"),B=k("#hero-info-btn");u&&w&&(u.style.backgroundImage=`url(${w})`),T&&(T.textContent=r),g&&(g.textContent=f);try{const L=await V(`/${t}/${o}`),E=L.vote_average?L.vote_average.toFixed(1):"",v=(L.genres||[]).slice(0,3).map(R=>R.name).join(", "),y=L.runtime?Ae(L.runtime):L.episode_run_time?Ae(L.episode_run_time[0]):"",$=re(L.release_date||L.first_air_date);h&&(h.innerHTML=`
        ${E?`<span class="rating"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${E}</span>`:""}
        <span>${$}</span>
        ${y?`<span>${y}</span>`:""}
        ${v?`<span>${d(v)}</span>`:""}
      `)}catch{}const M=t==="tv"?oe(o):ue(o);c&&c.addEventListener("click",()=>{Yt(M,w,r)}),B&&B.addEventListener("click",()=>{U(M)});const p=document.querySelector(".hero-buttons");if(p&&!document.getElementById("hero-list-btn")){const L=document.createElement("button");L.id="hero-list-btn",L.className="btn btn-secondary btn-3d";const E=J.has(o,t);L.textContent=E?"In My List":"Add to My List",L.onclick=()=>{const v=J.toggle({id:o,type:t,title:r,poster:e.poster_path});L.textContent=v?"In My List":"Add to My List"},p.appendChild(L)}}function Gt(){const e=k("#splash-screen");if(!e)return;if(sessionStorage.getItem("pt_splash")){e.style.display="none";const t=k("#main-content");t&&(t.style.opacity="1");return}setTimeout(()=>{e.classList.add("fade-out"),setTimeout(()=>{e.style.display="none",sessionStorage.setItem("pt_splash","1")},800)},3e3)}async function Et(){ye(),await $t();const o=new URLSearchParams(location.search).get("id");if(!o){U(me());return}try{const t=await V(`/movie/${o}?append_to_response=credits,similar`);document.title=`SheLivesWithUs — ${t.title||"Movie"}`;const r=t.backdrop_path?`${be}${t.backdrop_path}`:"",f=k("#detail-backdrop");f&&r&&(f.style.backgroundImage=`url(${r})`);const w=k("#detail-header");if(w){const v=(t.genres||[]).map(j=>`<span class="genre-pill">${d(j.name)}</span>`).join(""),y=t.vote_average?t.vote_average.toFixed(1):"N/A",$=J.has(t.id,"movie");w.innerHTML=`
        <h1 class="detail-title">${d(t.title||"")}</h1>
        <div class="detail-meta">
          <span class="rating-badge">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${d(y)}
          </span>
          <span>${re(t.release_date)}</span>
          ${t.runtime?`<span>${Ae(t.runtime)}</span>`:""}
          ${v}
        </div>
        <p class="detail-overview">${d(t.overview||"")}</p>
        <div class="detail-action-row">
          <button class="detail-list-btn ${$?"in-list":""}" id="detail-list-btn">
            ${$?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'}
          </button>
          <button class="detail-list-btn" id="watch-in-theater-btn">Watch in Theater</button>
        </div>
      `;const R=w.querySelector("#detail-list-btn");R.addEventListener("click",()=>{const j=J.toggle({id:t.id,type:"movie",title:t.title,poster:t.poster_path});R.className=`detail-list-btn ${j?"in-list":""}`,R.innerHTML=j?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'});const A=w.querySelector("#watch-in-theater-btn");A&&A.addEventListener("click",()=>{const j=new URL(ae("theater/"));j.searchParams.set("src",He(o)),U(j.toString())})}const u=k("#player-container");u&&(u.innerHTML=`<iframe src="${He(o)}" allow="autoplay; fullscreen"></iframe>`);const T=k("#sidebar-poster");T&&t.poster_path&&(T.src=`${le}${t.poster_path}`,T.alt=t.title||"",T.style.display="");const g=k("#sidebar-list-btn");if(g){const v=()=>{const y=J.has(t.id,"movie");g.innerHTML=y?'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'};v(),g.addEventListener("click",()=>{J.toggle({id:t.id,type:"movie",title:t.title,poster:t.poster_path}),v()})}const h=k("#sidebar-share-btn");h&&h.addEventListener("click",()=>{navigator.share?navigator.share({title:`${t.title} — SheLivesWithUs`,url:location.href}):navigator.clipboard.writeText(location.href).then(()=>{h.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Link Copied!',setTimeout(()=>{h.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Share'},2e3)})});const c=document.querySelector('meta[property="og:title"]'),B=document.querySelector('meta[property="og:description"]'),M=document.querySelector('meta[property="og:image"]');c&&(c.content=`${t.title} — SheLivesWithUs`),B&&(B.content=t.overview||"Watch free on SheLivesWithUs"),M&&t.backdrop_path&&(M.content=`${be}${t.backdrop_path}`);const p=k("#detail-info");p&&t&&(p.innerHTML=`
        <div class="detail-info-grid">
          ${t.status?`<div class="info-item"><label>Status</label><span>${d(t.status)}</span></div>`:""}
          ${t.budget?`<div class="info-item"><label>Budget</label><span>$${(t.budget/1e6).toFixed(1)}M</span></div>`:""}
          ${t.revenue?`<div class="info-item"><label>Revenue</label><span>$${(t.revenue/1e6).toFixed(1)}M</span></div>`:""}
          ${t.original_language?`<div class="info-item"><label>Language</label><span>${d(t.original_language.toUpperCase())}</span></div>`:""}
          ${(t.production_companies||[]).length?`<div class="info-item"><label>Studio</label><span>${d(t.production_companies[0].name)}</span></div>`:""}
        </div>
      `);const L=(t.credits&&t.credits.cast||[]).slice(0,20);if(L.length>0){const v=k("#cast-section"),y=k("#cast-row");v&&y&&(v.style.display="",L.forEach($=>{const R=$.profile_path?`<img class="cast-img" src="${le}${$.profile_path}" alt="${d($.name)}" loading="lazy" />`:'<div class="cast-img" style="background:var(--bg4);border-radius:var(--radius-sm);"></div>',A=document.createElement("div");A.className="cast-card",A.innerHTML=`
            ${R}
            <div class="cast-name">${d($.name)}</div>
            <div class="cast-char">${d($.character||"")}</div>
          `,y.appendChild(A)}))}const E=(t.similar&&t.similar.results||[]).slice(0,20);if(E.length>0){const v=k("#similar-section"),y=k("#similar-row");v&&y&&(v.style.display="",E.forEach($=>y.appendChild(we($,"movie"))))}}catch(t){console.error("Movie detail error:",t);const r=k("#detail-header");r&&(r.innerHTML='<p style="color:var(--text-muted)">Failed to load movie details. Please try again.</p>')}}async function kt(){ye(),await $t();const e=new URLSearchParams(location.search),o=e.get("id"),t=parseInt(e.get("season")||"1",10),r=parseInt(e.get("episode")||"1",10);if(!o){U(me());return}let f=t,w=r;try{let c=function(E,v){const y=k("#player-container");y&&(y.innerHTML=`<iframe src="${Ne(o,E,v)}" allow="autoplay; fullscreen"></iframe>`);const $=new URL(location.href);$.searchParams.set("season",E),$.searchParams.set("episode",v),history.replaceState(null,"",$.toString())};const u=await V(`/tv/${o}?append_to_response=credits,similar`);document.title=`SheLivesWithUs — ${u.name||"TV Show"}`;const T=u.backdrop_path?`${be}${u.backdrop_path}`:"",g=k("#detail-backdrop");g&&T&&(g.style.backgroundImage=`url(${T})`);const h=k("#detail-header");if(h){const E=(u.genres||[]).map(A=>`<span class="genre-pill">${d(A.name)}</span>`).join(""),v=u.vote_average?u.vote_average.toFixed(1):"N/A",y=J.has(u.id,"tv");h.innerHTML=`
        <h1 class="detail-title">${d(u.name||"")}</h1>
        <div class="detail-meta">
          <span class="rating-badge">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${d(v)}
          </span>
          <span>${re(u.first_air_date)}</span>
          ${u.number_of_seasons?`<span>${u.number_of_seasons} Season${u.number_of_seasons!==1?"s":""}</span>`:""}
          ${E}
        </div>
        <p class="detail-overview">${d(u.overview||"")}</p>
        <div class="detail-action-row">
          <button class="detail-list-btn ${y?"in-list":""}" id="detail-list-btn">
            ${y?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'}
          </button>
          <button class="detail-list-btn" id="watch-in-theater-btn">Watch in Theater</button>
        </div>
      `;const $=h.querySelector("#detail-list-btn");$.addEventListener("click",()=>{const A=J.toggle({id:u.id,type:"tv",title:u.name,poster:u.poster_path});$.className=`detail-list-btn ${A?"in-list":""}`,$.innerHTML=A?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'});const R=h.querySelector("#watch-in-theater-btn");R&&R.addEventListener("click",()=>{const A=new URL(ae("theater/"));A.searchParams.set("src",Ne(o,f,w)),U(A.toString())})}c(f,w);const B=(u.seasons||[]).filter(E=>E.season_number>0);if(B.length>0){const E=k("#episode-selector"),v=k("#season-select"),y=k("#episodes-grid");if(E&&v&&y){E.style.display="",B.forEach(R=>{const A=document.createElement("option");A.value=R.season_number,A.textContent=`Season ${R.season_number}`,R.season_number===f&&(A.selected=!0),v.appendChild(A)});async function $(R){y.innerHTML='<div class="spinner" style="margin:20px auto;"></div>';try{const j=(await V(`/tv/${o}/season/${R}`)).episodes||[];y.innerHTML="",j.forEach(Y=>{const ne=Y.still_path?`${le}${Y.still_path}`:"",D=document.createElement("div");D.className=`episode-card${Y.episode_number===w&&R===f?" active":""}`,D.innerHTML=`
                ${ne?`<img class="episode-thumb" src="${d(ne)}" alt="Episode ${Y.episode_number}" loading="lazy" />`:'<div class="episode-thumb" style="background:var(--surface);flex:0 0 120px;"></div>'}
                <div class="episode-info">
                  <div class="episode-num">Episode ${Y.episode_number}</div>
                  <div class="episode-title">${d(Y.name||"")}</div>
                  <div class="episode-desc">${d(Y.overview||"No description available.")}</div>
                </div>
              `,D.addEventListener("click",()=>{f=R,w=Y.episode_number,yt(".episode-card").forEach(pe=>pe.classList.remove("active")),D.classList.add("active"),c(f,w);const ce=k("#player-container");ce&&ce.scrollIntoView({behavior:"smooth",block:"start"})}),y.appendChild(D)})}catch{y.innerHTML='<p style="color:var(--text-muted);padding:12px;">Failed to load episodes.</p>'}}$(f),v.addEventListener("change",()=>{f=parseInt(v.value,10),w=1,$(f),c(f,w)})}}const M=k("#detail-info");M&&(M.innerHTML=`
        <div class="detail-info-grid">
          ${u.status?`<div class="info-item"><label>Status</label><span>${d(u.status)}</span></div>`:""}
          ${u.type?`<div class="info-item"><label>Type</label><span>${d(u.type)}</span></div>`:""}
          ${u.number_of_episodes?`<div class="info-item"><label>Episodes</label><span>${u.number_of_episodes}</span></div>`:""}
          ${u.original_language?`<div class="info-item"><label>Language</label><span>${d(u.original_language.toUpperCase())}</span></div>`:""}
          ${u.networks&&u.networks[0]?`<div class="info-item"><label>Network</label><span>${d(u.networks[0].name)}</span></div>`:""}
        </div>
      `);const p=(u.credits&&u.credits.cast||[]).slice(0,20);if(p.length>0){const E=k("#cast-section"),v=k("#cast-row");E&&v&&(E.style.display="",p.forEach(y=>{const $=y.profile_path?`<img class="cast-img" src="${le}${y.profile_path}" alt="${d(y.name)}" loading="lazy" />`:'<div class="cast-img" style="background:var(--bg4);border-radius:var(--radius-sm);"></div>',R=document.createElement("div");R.className="cast-card",R.innerHTML=`
            ${$}
            <div class="cast-name">${d(y.name)}</div>
            <div class="cast-char">${d(y.character||"")}</div>
          `,v.appendChild(R)}))}const L=(u.similar&&u.similar.results||[]).slice(0,20);if(L.length>0){const E=k("#similar-section"),v=k("#similar-row");E&&v&&(E.style.display="",L.forEach(y=>v.appendChild(we(y,"tv"))))}}catch(u){console.error("TV detail error:",u);const T=k("#detail-header");T&&(T.innerHTML='<p style="color:var(--text-muted)">Failed to load show details. Please try again.</p>')}}function _t(){ye();const e=k("#main-search-input"),o=k("#search-clear"),t=k("#search-status"),r=k("#search-results"),f=yt(".filter-btn"),w=new URLSearchParams(location.search),u=w.get("q")||"",T=w.get("type")||"all";let g=T!=="all"?T:"all",h=null,c="";f.forEach(p=>{p.classList.toggle("active",p.dataset.filter===g)}),f.forEach(p=>{p.addEventListener("click",()=>{g=p.dataset.filter,f.forEach(L=>L.classList.toggle("active",L===p)),c?M(c):g!=="all"&&M("")})}),e&&(e.value=u,e.addEventListener("input",()=>{const p=e.value.trim();o.style.display=p?"flex":"none",clearTimeout(h),h=setTimeout(()=>M(p),500)}),u?(o.style.display="flex",M(u)):g!=="all"?M(""):B()),o&&o.addEventListener("click",()=>{e.value="",o.style.display="none",e.focus(),B()});function B(){t.textContent="",r.innerHTML=`
      <div class="no-results">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <h3>Search SheLivesWithUs</h3>
        <p>Find movies and TV shows</p>
      </div>
    `}async function M(p){if(c=p,!p&&g==="all"){B();return}t.textContent="Searching…",r.innerHTML="";const L=r;for(let E=0;E<12;E++){const v=document.createElement("div");v.className="skeleton-card skeleton",v.style.aspectRatio="2/3",L.appendChild(v)}try{let E=[];if(p){let v="/search/multi";g==="movie"?v="/search/movie":g==="tv"&&(v="/search/tv"),E=((await V(`${v}?query=${encodeURIComponent(p)}&page=1`)).results||[]).filter($=>!X.has($.id,$.media_type||g))}else E=(await V(`${g==="movie"?"/movie/popular":"/tv/popular"}`)).results||[];if(g!=="all"&&p&&(E=E.filter(v=>(v.media_type||g)===g)),r.innerHTML="",E.length===0){t.textContent="",r.innerHTML=`
          <div class="no-results" style="grid-column:1/-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <h3>No results found</h3>
            <p>Try a different search term or browse our categories on the home page.</p>
          </div>
        `;return}t.textContent=p?`${E.length} result${E.length!==1?"s":""} for "${p}"`:`Showing popular ${g==="tv"?"TV shows":"movies"}`,E.forEach(v=>{const y=v.media_type||g,$=v.id,R=v.title||v.name||"Untitled",A=te(v.poster_path),j=v.release_date||v.first_air_date||"",Y=v.vote_average?v.vote_average.toFixed(1):"",ne=y==="tv"?oe($):ue($),D=document.createElement("div");D.className="search-card fade-in",D.innerHTML=`
          ${A?`<img src="${d(A)}" alt="${d(R)}" loading="lazy" />`:`<div class="no-poster">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                 No Image
               </div>`}
          <div class="search-card-info">
            <div class="search-card-title">${d(R)}</div>
            <div class="search-card-meta">
              <span class="type-badge ${y==="tv"?"tv":"movie"}">${y==="tv"?"TV":"Movie"}</span>
              ${re(j)}
              ${Y?`· ⭐ ${Y}`:""}
            </div>
          </div>
        `,D.addEventListener("click",()=>{U(ne)}),r.appendChild(D)})}catch(E){console.error("Search error:",E),r.innerHTML='<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px">Search failed. Please try again.</p>',t.textContent=""}}}function St(e,o){return new Promise(t=>{const r=document.createElement("div");r.className="play-loader",r.innerHTML=`
      <div class="play-loader-backdrop" style="background-image:url(${d(e||"")})"></div>
      <div class="play-loader-overlay"></div>
      <div class="play-loader-content">
        <div class="play-loader-logo">SHELIVESWITHUS</div>
        <div class="play-loader-title">${d(o||"")}</div>
        <div class="play-loader-ring"></div>
      </div>
    `,document.body.appendChild(r),requestAnimationFrame(()=>{requestAnimationFrame(()=>{r.classList.add("active")})}),setTimeout(()=>{r.classList.add("fade-out"),setTimeout(()=>{r.remove(),t()},600)},2400)})}function Yt(e,o,t){sessionStorage.setItem("pt_play_loader",JSON.stringify({backdrop:o,title:t})),St(o,t).then(()=>{U(e)})}function $t(){const e=sessionStorage.getItem("pt_play_loader");if(e){sessionStorage.removeItem("pt_play_loader");try{const{backdrop:o,title:t}=JSON.parse(e);return St(o,t)}catch{}}return Promise.resolve()}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});document.addEventListener("DOMContentLoaded",()=>{switch(ie){case"home":Lt();break;case"movie":Et();break;case"tv":kt();break;case"search":_t();break}});(function(){const e="BroadcastChannel"in window?new BroadcastChannel("slwu_remote"):null,o="slwu_profiles",t="pt_active_profile",r="slwu_remote_state",f="slwu_now_playing",w="slwu_ui_scale_2x",u={"New Releases":"/movie/now_playing",Family:"/discover/movie?with_genres=10751",Comedy:"/discover/movie?with_genres=35",Action:"/discover/movie?with_genres=28",Horror:"/discover/movie?with_genres=27",Classics:"/discover/movie?primary_release_date.lte=1999-12-31&sort_by=popularity.desc",Cartoons:"/discover/movie?with_genres=16"};function T(){try{return JSON.parse(localStorage.getItem(o)||"[]")}catch{return[]}}function g(a){localStorage.setItem(o,JSON.stringify(a))}function h(){const a=localStorage.getItem(t);return T().find(l=>l.id===a)||null}function c(a,l=""){const s=T();let i=s.find(n=>n.name.toLowerCase()===String(a).trim().toLowerCase());return i?l&&(i.avatarPoster=String(l||"")):(i={id:"p_"+Date.now(),name:String(a).trim(),avatarPoster:String(l||""),createdAt:Date.now()},s.push(i)),g(s),localStorage.setItem(t,i.id),i}function B(a){const l=T().find(s=>s.name.toLowerCase()===String(a).trim().toLowerCase());return l&&localStorage.setItem(t,l.id),l}async function M(){try{const l=((await V("/trending/all/week")).results||[]).filter(i=>i&&i.poster_path),s=l[Math.floor(Math.random()*Math.max(l.length,1))];return(s==null?void 0:s.poster_path)||""}catch{return""}}function p(a){const l=a==null?void 0:a.avatarPoster;return l?/^https?:\/\//i.test(l)?l:te(l)||"":""}function L(a,l){const s=T(),i=s.findIndex(n=>n.id===a);i>=0&&(s[i].avatarPoster=String(l||""),g(s))}function E(a){const l=T().filter(s=>s.id!==a);g(l),localStorage.getItem(t)===a&&localStorage.removeItem(t)}function v(a,l={}){var n;if(!a||!a.src)return;const s=((n=document.querySelector("#sidebar-poster"))==null?void 0:n.src)||"",i={src:a.src,title:document.title,url:location.href,page:ie,poster:s,ts:Date.now(),...l};localStorage.setItem(f,JSON.stringify(i))}function y(){try{return JSON.parse(localStorage.getItem(f)||"null")}catch{return null}}function $(a,l={}){const s={action:a,payload:l,ts:Date.now()};localStorage.setItem(r,JSON.stringify(s)),e&&e.postMessage(s)}function R(){var a,l;return document.fullscreenElement?document.exitFullscreen().catch(()=>{}):(l=(a=document.documentElement).requestFullscreen)==null?void 0:l.call(a).catch(()=>{})}function A(){return document.querySelector("#player-container iframe, #theater-player")}function j(a,l=[]){const s=A();if(!s||!s.contentWindow)return!1;try{return s.contentWindow.postMessage(JSON.stringify({event:"command",func:a,args:l}),"*"),!0}catch{return!1}}function Y(){var l,s,i;document.querySelectorAll(".footer, .ad-container-native, .ad-container-banner, .ad-toggle-wrap").forEach(n=>n.remove());const a=document.querySelector("#navbar .nav-left");if(a){const n=a.querySelector(".nav-logo");n&&n.remove(),(l=a.querySelector(".nav-links"))==null||l.remove(),a.remove()}if(document.querySelector("#navbar .nav-right"),document.body.classList.add("top-search-only"),(s=document.getElementById("hamburger"))==null||s.remove(),(i=document.getElementById("nav-collapse-btn"))==null||i.remove(),!document.getElementById("global-action-stack")){const n=document.createElement("div");n.id="global-action-stack",n.className="global-action-stack",n.innerHTML=`
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
      `,document.body.appendChild(n)}if(!document.getElementById("slwu-brand-pin")){const n=document.createElement("div");n.id="slwu-brand-pin",n.textContent="SheLivesWithMe",document.body.appendChild(n)}if(!document.getElementById("slwu-profile-modal")){const n=document.createElement("div");n.id="slwu-profile-modal",n.className="slwu-modal",n.innerHTML=`
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
      `,document.body.appendChild(n)}if(!document.getElementById("slwu-avatar-pin")){const n=document.createElement("button");n.id="slwu-avatar-pin",n.type="button",n.className="slwu-avatar-pin",n.innerHTML='<span class="slwu-avatar-fallback">S</span>',document.body.appendChild(n)}if(!document.getElementById("tv-remote-panel")){const n=document.createElement("aside");n.id="tv-remote-panel",n.className="tv-remote-panel",n.innerHTML=`
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
      `,document.body.appendChild(n)}if(!document.getElementById("global-search-sheet")){const n=document.createElement("section");n.id="global-search-sheet",n.className="global-search-sheet",n.innerHTML=`
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
      `,document.body.appendChild(n)}if(!document.getElementById("global-hidden-sheet")){const n=document.createElement("section");n.id="global-hidden-sheet",n.className="global-search-sheet",n.innerHTML=`
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
      `,document.body.appendChild(n)}if(!document.getElementById("global-catalog-sheet")){const n=document.createElement("section");n.id="global-catalog-sheet",n.className="global-search-sheet",n.innerHTML=`
        <div class="global-search-sheet-inner">
          <div class="global-search-inputbar">
            <button id="global-catalog-more" class="remote-mini-btn" type="button">Load More</button>
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
      `,document.body.appendChild(n)}}function ne(){const a=document.body;if(window.__slwu=window.__slwu||{},window.__slwu._globalButtonsWired)return;window.__slwu._globalButtonsWired=!0;const l=document.getElementById("tvremote-close"),s=document.getElementById("profile-open-btn"),i=document.getElementById("slwu-profile-modal"),n=document.getElementById("slwu-avatar-pin"),C=document.getElementById("global-theater-btn"),P=document.getElementById("global-movies-btn"),W=document.getElementById("global-tvshows-btn"),O=document.getElementById("global-mylist-btn"),N=document.getElementById("global-hidden-btn"),x=document.getElementById("global-stack-toggle"),I=document.getElementById("global-home-btn"),_=document.getElementById("global-more-btn"),H=document.getElementById("global-layout-btn"),b=document.getElementById("global-nav-toggle-btn"),q=document.getElementById("global-server-btn"),G=document.getElementById("global-appfs-btn"),z=document.getElementById("global-scale-btn"),ge=document.getElementById("global-tv-btn"),Ve=document.getElementById("global-profile-btn"),Je=document.getElementById("global-catalog-btn"),je=document.getElementById("global-search-btn"),Be=document.getElementById("global-search-sheet"),xe=document.getElementById("global-hidden-sheet"),Te=document.getElementById("global-catalog-sheet"),K=()=>{a.classList.remove("sheet-open","hidden-open","catalog-open")},Ge=()=>{K(),a.classList.add("catalog-open"),Se()},Ht=(m="")=>Me({prefill:String(m||"")}),Ye=()=>{Me({prefill:""});const m=document.getElementById("global-search-results");m&&(m.innerHTML='<div class="tvremote-empty">Choose from My List or search.</div>')};window.__slwu.openCatalogSheet=Ge,window.__slwu.openSearchSheet=Ht,window.__slwu.openMyListSheet=Ye;const Ke="slwu_layout_mode",ze=()=>localStorage.getItem(Ke)||"classic",Qe=m=>{const S=m==="netflix"?"netflix":"classic";a.classList.toggle("layout-netflix",S==="netflix"),localStorage.setItem(Ke,S);const Q=S==="netflix"?"Netflix":"Classic";H&&(H.textContent=`Layout: ${Q}`)};Qe(ze());const Nt=()=>Qe(ze()==="netflix"?"classic":"netflix"),Xe="slwu_nav_collapsed",Ze=m=>{const S=!!m;a.classList.toggle("nav-collapsed",S),localStorage.setItem(Xe,S?"1":"0"),b&&(b.textContent=`Menu Bar: ${S?"Off":"On"}`)};Ze(localStorage.getItem(Xe)==="1");const et="slwu_server_mode",he=["auto","oxygen","helium","hydrogen","lithium","titanium"],Rt=m=>m==="oxygen"?"Oxygen":m==="helium"?"Helium":m==="hydrogen"?"Hydrogen":m==="lithium"?"Lithium":m==="titanium"?"Titanium":"Auto",tt=()=>localStorage.getItem(et)||"auto",ot=m=>{const S=he.includes(m)?m:"auto";localStorage.setItem(et,S),q&&(q.textContent=`Server: ${Rt(S)}`),window.__slwu.server=S};ot(tt());const Me=(m={})=>{K(),a.classList.add("sheet-open"),ve();const S=document.getElementById("global-search-input"),Q=document.getElementById("global-search-results");m.prefill&&S&&(S.value=String(m.prefill)),S&&S.focus(),Q&&!(S&&S.value.trim())&&(Q.innerHTML='<div class="tvremote-empty">Type to search.</div>'),S&&S.value.trim()&&Ie(S.value.trim())};l&&(l.onclick=()=>a.classList.remove("remote-open"));const fe=()=>{if(!n)return;const m=h(),S=p(m);if(S)n.innerHTML=`<img src="${d(S)}" alt="Profile" />`;else{const Q=((m==null?void 0:m.name)||"S").slice(0,1).toUpperCase();n.innerHTML=`<span class="slwu-avatar-fallback">${d(Q)}</span>`}},Ce=()=>{if(!i)return;const m=document.getElementById("slwu-profile-list"),S=document.getElementById("slwu-profile-name"),Q=document.getElementById("slwu-profile-avatar-preview"),se=h(),pt=T(),vt=F=>{const Z=F?p({avatarPoster:F}):"";i.dataset.avatarPoster=F||"",Q&&(Q.innerHTML=Z?`<img src="${d(Z)}" alt="Avatar" />`:'<span class="slwu-avatar-fallback">?</span>')};S&&(se!=null&&se.name)&&(S.value=se.name),vt((se==null?void 0:se.avatarPoster)||""),m&&(m.innerHTML=pt.length?pt.map(F=>`
          <div class="profile-local-card">
            <div style="display:flex;align-items:center;gap:10px">
              <div class="profile-modal-avatar" style="width:44px;height:64px;border-radius:12px">
                ${p(F)?`<img src="${d(p(F))}" alt="${d(F.name)}" />`:`<span class="slwu-avatar-fallback">${d(F.name.slice(0,1).toUpperCase())}</span>`}
              </div>
              <div>
                <div class="profile-local-name">${d(F.name)}</div>
                <div class="profile-local-meta">Local profile</div>
              </div>
            </div>
            <div class="profile-local-actions">
              <button class="remote-mini-btn" data-login="${d(F.name)}">Enter</button>
              <button class="remote-mini-btn" data-delete="${d(F.id)}">Delete</button>
            </div>
          </div>
        `).join(""):'<div class="tvremote-empty">No profiles yet.</div>',m.querySelectorAll("[data-delete]").forEach(F=>{F.onclick=()=>{E(F.dataset.delete),Ce(),fe()}}),m.querySelectorAll("[data-login]").forEach(F=>{F.onclick=()=>{B(F.dataset.login),Ce(),fe(),ve()}}));const gt=document.getElementById("slwu-profile-random");gt&&(gt.onclick=async()=>vt(await M()));const ht=document.getElementById("slwu-profile-enter");ht&&(ht.onclick=async()=>{const F=String((S==null?void 0:S.value)||"").trim();if(!F)return;let Z=i.dataset.avatarPoster||"";Z||(Z=await M());const Ot=T().find(qt=>qt.name.toLowerCase()===F.toLowerCase()),Ut=c(F,Z);Ot&&Z&&L(Ut.id,Z),fe(),ve(),i.classList.remove("open")})},Pe=()=>{Ce(),i==null||i.classList.add("open")};s&&(s.onclick=Pe),n&&(n.onclick=Pe),document.querySelectorAll("[data-close-modal='profile']").forEach(m=>m.onclick=()=>i.classList.remove("open")),i&&i.addEventListener("click",m=>{m.target===i&&i.classList.remove("open")}),fe(),C&&(C.onclick=()=>{const m=y(),S=new URL(ae("theater/"));m&&m.src&&S.searchParams.set("src",m.src),U(S.toString())}),I&&(I.onclick=()=>{K(),a.classList.remove("stack-open","remote-open"),a.classList.remove("more-open"),a.classList.remove("catalog-open","hidden-open","sheet-open"),U(me())}),P&&(P.onclick=()=>{K(),a.classList.remove("stack-open","remote-open","more-open"),U(Re({type:"movie"}))}),W&&(W.onclick=()=>{K(),a.classList.remove("stack-open","remote-open","more-open"),U(Re({type:"tv"}))}),H&&(H.onclick=()=>Nt()),b&&(b.onclick=()=>Ze(!a.classList.contains("nav-collapsed"))),q&&(q.onclick=()=>{const m=tt(),S=he.indexOf(m),Q=he[(S+1)%he.length];ot(Q)}),O&&(O.onclick=()=>Ye()),N&&(N.onclick=()=>{K(),a.classList.add("hidden-open"),qe()}),x&&(x.onclick=()=>{const m=!a.classList.contains("stack-open");a.classList.toggle("stack-open",m),m||a.classList.remove("more-open"),document.body.classList.toggle("search-collapsed",!m)}),_&&(_.onclick=()=>a.classList.toggle("more-open")),G&&(G.onclick=()=>R()),document.body.classList.toggle("search-collapsed",!a.classList.contains("stack-open"));const at=m=>{a.classList.remove("ui-scale-1x","ui-scale-2x","ui-scale-3x"),a.classList.add(`ui-scale-${m}x`),localStorage.setItem(w,String(m)),z&&(z.textContent=`${m}x`)},nt=parseInt(localStorage.getItem(w)||"1",10);at([1,2,3].includes(nt)?nt:1),z&&(z.onclick=()=>{const m=parseInt(localStorage.getItem(w)||"1",10);at(m===3?1:m+1)}),ge&&(ge.onclick=()=>a.classList.toggle("remote-open")),Ve&&(Ve.onclick=()=>Pe()),Je&&(Je.onclick=()=>Ge()),je&&(je.onclick=()=>Me());const st=document.getElementById("global-search-close");st&&(st.onclick=()=>K());const it=document.getElementById("global-search-clear");it&&(it.onclick=()=>{const m=document.getElementById("global-search-input"),S=document.getElementById("global-search-results");m&&(m.value=""),S&&(S.innerHTML='<div class="tvremote-empty">Type to search.</div>')});const lt=document.getElementById("global-hidden-close");lt&&(lt.onclick=()=>K());const rt=document.getElementById("global-catalog-close");rt&&(rt.onclick=()=>K());const ct=document.getElementById("global-catalog-more");ct&&(ct.onclick=()=>{try{Se(ke,{append:!0})}catch{}}),Be&&Be.addEventListener("click",m=>{m.target===Be&&K()}),xe&&xe.addEventListener("click",m=>{m.target===xe&&K()}),Te&&Te.addEventListener("click",m=>{m.target===Te&&K()}),document.addEventListener("keydown",m=>{m.key==="Escape"&&(K(),a.classList.remove("remote-open","more-open"))});const dt=document.getElementById("tv-remote-panel"),mt=document.getElementById("global-action-stack");document.addEventListener("pointerdown",m=>{if(!a.classList.contains("remote-open"))return;const S=m.target;dt&&dt.contains(S)||mt&&mt.contains(S)||a.classList.remove("remote-open")});const At=1e4;let de=null;const ut=()=>{if(a.classList.contains("stack-open")){a.classList.remove("stack-faded"),de&&clearTimeout(de),de=null;return}a.classList.remove("stack-faded"),de&&clearTimeout(de),de=setTimeout(()=>{a.classList.contains("stack-open")||a.classList.add("stack-faded")},At)};["mousemove","touchstart","pointerdown","keydown","scroll"].forEach(m=>{window.addEventListener(m,ut,{passive:!0})}),ut()}function D(a,l,s={}){if(!l)return;const i=!!s.append;if(i||(l.innerHTML=""),!a.length){i||(l.innerHTML='<div class="tvremote-empty">No items found.</div>');return}a.forEach(n=>{const C=n.media_type==="tv"||n.first_air_date?"tv":"movie",P=n.title||n.name||"Untitled",W=C==="tv"?oe(n.id):ue(n.id),O=J.has(n.id,C),N=document.createElement("article");N.className="tvremote-card";const x=te(n.poster_path)||"";N.innerHTML=`
        <button class="tvremote-card-wish ${O?"in-list":""}" aria-label="Wish List">❤</button>
        ${x?`<img src="${d(x)}" alt="${d(P)}" loading="lazy">`:`<div class="tvremote-card-fallback">${d(P.slice(0,1))}</div>`}
        <div class="tvremote-card-info">
          <div class="tvremote-card-title">${d(P)}</div>
          <div class="tvremote-card-meta">${C.toUpperCase()} · ${re(n.release_date||n.first_air_date||"")}</div>
        </div>
      `,N.addEventListener("click",_=>{_.target.closest(".tvremote-card-wish")||(document.body.classList.remove("remote-open"),U(W))});const I=N.querySelector(".tvremote-card-wish");I&&(I.onclick=_=>{_.stopPropagation();const H=J.toggle({id:n.id,type:C,title:P,poster:n.poster_path});_.currentTarget.classList.toggle("in-list",H),$e(),ve()}),l.appendChild(N)})}let ce=1,pe="all",Ue=null,Le=1;async function It(a,l=!0){const s=document.getElementById("tvremote-catalog-results");if(!s)return;const i=a||Ue||Object.keys(u)[0];Ue=i,l&&(Le=1,s.innerHTML='<div class="tvremote-empty">Loadingâ€¦</div>');const n=String(u[i]),C=`${n}${n.includes("?")?"&":"?"}page=${Le}`,W=((await V(C)).results||[]).slice(0,12);D(W,s,{append:!l}),Le+=1}async function Ee(a=!0){const l=document.getElementById("tvremote-search"),s=document.getElementById("tvremote-results");if(!l||!s)return;const i=l.value.trim();if(a&&(ce=1,s.innerHTML=""),!i){s.innerHTML='<div class="tvremote-empty">Search movies, TV, or people.</div>';return}const C=((await V(`/search/multi?query=${encodeURIComponent(i)}&page=${ce}`)).results||[]).filter(P=>P.media_type==="movie"||P.media_type==="tv");D(C,s,{append:!a})}async function Bt(){const a=document.getElementById("tvremote-catalog");a&&(a.innerHTML="",Object.keys(u).forEach(l=>{const s=document.createElement("button");s.className="remote-pill remote-pill--catalog",s.textContent=l,s.onclick=async()=>{a.querySelectorAll(".remote-pill").forEach(i=>i.classList.remove("active")),s.classList.add("active"),await It(l,!0).catch(console.error)},a.appendChild(s)}))}let ke=null,_e=1;async function Se(a=null,l={}){const s=document.getElementById("global-catalog-tabs"),i=document.getElementById("global-catalog-grid");if(!s||!i)return;s.innerHTML="";const n=Object.keys(u),C=a||ke||n[0];ke=C;const P=!!l.append;P||(_e=1);const W=P?i.innerHTML:"";n.forEach(O=>{const N=document.createElement("button");N.className="remote-pill remote-pill--catalog global-catalog-tab",N.textContent=O,O===C&&N.classList.add("active"),N.onclick=()=>Se(O,{append:!1}),s.appendChild(N)}),i.innerHTML='<div class="tvremote-empty">Loading…</div>',P&&(i.innerHTML=W);try{const O=String(u[C]),N=`${O}${O.includes("?")?"&":"?"}page=${_e}`,I=((await V(N)).results||[]).slice(0,24);D(I,i,{append:P}),_e+=1}catch{i.innerHTML='<div class="tvremote-empty">Could not load catalog.</div>'}}function $e(){const a=document.getElementById("tvremote-mylist");if(!a)return;const l=J.get();if(!l.length){a.innerHTML='<div class="tvremote-empty">My List is empty.</div>';return}Promise.all(l.slice(0,24).map(s=>V(s.type==="tv"?`/tv/${s.id}`:`/movie/${s.id}`).then(i=>({...i,media_type:s.type})).catch(()=>null))).then(s=>{D(s.filter(Boolean),a)})}function ve(){const a=document.getElementById("global-search-mylist");if(!a)return;const l=J.get();a.innerHTML=l.length?"":'<div class="tvremote-empty">Nothing saved yet.</div>',l.slice(0,30).forEach(s=>{const i=document.createElement("button");i.className="global-search-list-item";const n=s.title||s.name||"Saved Item",C=s.poster?`${le}${s.poster}`:te(s.poster_path||s.poster);i.innerHTML=`
        ${C?`<img src="${d(C)}" alt="${d(n)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${d(n.slice(0,1))}</span>`}
        <span class="global-search-list-label">${d(n)}</span>
      `,i.onclick=()=>{U(s.type==="tv"?oe(s.id):ue(s.id))},a.appendChild(i)})}function qe(){const a=document.getElementById("global-hidden-results");if(!a)return;const l=X.get();a.innerHTML=l.length?"":'<div class="tvremote-empty">Nothing hidden yet.</div>',l.slice(0,40).forEach(s=>{const i=document.createElement("button");i.className="global-search-list-item";const n=s.title||s.name||"Hidden Item",C=s.poster?`${le}${s.poster}`:te(s.poster_path||s.poster);i.innerHTML=`${C?`<img src="${d(C)}" alt="${d(n)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${d(n.slice(0,1))}</span>`}<span class="global-search-list-label">${d(n)}</span>`,i.onclick=()=>{X.remove(s.id,s.type),qe()},a.appendChild(i)})}let Fe=null;async function Ie(a){const l=document.getElementById("global-search-results");if(!l)return;if(!a){l.innerHTML='<div class="tvremote-empty">Type to search.</div>';return}l.innerHTML='<div class="tvremote-empty">Searching…</div>';const s=await V(`/search/multi?query=${encodeURIComponent(a)}&page=1`);D((s.results||[]).filter(i=>i.media_type==="movie"||i.media_type==="tv"),l)}function We(){if(window.__slwu=window.__slwu||{},window.__slwu._globalSearchWired)return;window.__slwu._globalSearchWired=!0,ve();const a=document.getElementById("global-search-input");a&&a.addEventListener("input",()=>{clearTimeout(Fe),Fe=setTimeout(()=>Ie(a.value.trim()),350)});const l=document.getElementById("tvremote-search-clear");l&&(l.onclick=()=>{const s=document.getElementById("tvremote-search"),i=document.getElementById("tvremote-results");s&&(s.value=""),i&&(i.innerHTML='<div class="tvremote-empty">Search movies, TV, or people.</div>')})}function De(){if(window.__slwu=window.__slwu||{},window.__slwu._tvRemoteWired)return;window.__slwu._tvRemoteWired=!0,Bt(),$e();const a=document.getElementById("tvremote-player-fullscreen"),l=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),s=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled);a&&(l||!s)&&(a.style.display="none");const i=document.getElementById("tvremote-search"),n=document.getElementById("tvremote-more");let C=null;i&&i.addEventListener("input",()=>{clearTimeout(C),C=setTimeout(()=>Ee(!0).catch(console.error),350)});const P=document.getElementById("tvremote-more-header"),W=document.getElementById("tvremote-random-header"),O=()=>{ce+=1,Ee(!1).catch(console.error)};n&&(n.onclick=O),P&&(P.onclick=O),W&&(W.onclick=async()=>{const G=((await V(pe==="tv"?"/trending/tv/week":"/trending/movie/week")).results||[]).filter(ge=>!X.has(ge.id,ge.media_type||(pe==="tv"?"tv":"movie"))),z=G[Math.floor(Math.random()*Math.max(G.length,1))];z&&D([z],document.getElementById("tvremote-results"),!0)}),document.querySelectorAll("[data-remote-mode]").forEach(b=>{b.onclick=async()=>{var q,G;if(document.querySelectorAll("[data-remote-tab]").forEach(z=>z.classList.remove("active")),document.querySelectorAll(".tvremote-tab").forEach(z=>z.classList.remove("active")),(q=document.querySelector('[data-remote-tab="search"]'))==null||q.classList.add("active"),(G=document.getElementById("tvremote-tab-search"))==null||G.classList.add("active"),b.dataset.remoteMode==="home"){document.body.classList.remove("remote-open"),U(me());return}pe=b.dataset.remoteMode,await Ee(!0).catch(console.error)}}),document.querySelectorAll("[data-remote-tab]").forEach(b=>{b.onclick=()=>{document.querySelectorAll("[data-remote-tab]").forEach(q=>q.classList.remove("active")),document.querySelectorAll(".tvremote-tab").forEach(q=>q.classList.remove("active")),b.classList.add("active"),document.getElementById(`tvremote-tab-${b.dataset.remoteTab}`).classList.add("active"),b.dataset.remoteTab==="mylist"&&$e()}});const N=document.getElementById("tvremote-message"),x=b=>{N&&(N.textContent=b)},I=()=>{const b=new URLSearchParams(location.search);return{id:b.get("id"),season:parseInt(b.get("season")||"1",10),episode:parseInt(b.get("episode")||"1",10)}};document.getElementById("tvremote-prev-episode").onclick=()=>{if(ie!=="tv")return x("Prev Episode works on TV pages.");const b=I(),q=Math.max(1,b.episode-1);U(oe(b.id,{season:b.season,episode:q}))},document.getElementById("tvremote-next-episode").onclick=()=>{if(ie!=="tv")return x("Next Episode works on TV pages.");const b=I();U(oe(b.id,{season:b.season,episode:b.episode+1}))};const _=b=>{document.body.classList.remove("remote-scale-1x","remote-scale-2x","remote-scale-3x"),document.body.classList.add(`remote-scale-${b}x`),localStorage.setItem("slwu_remote_scale",String(b));const q=document.getElementById("tvremote-fullscreen");q&&(q.textContent=`${b}x`)};_(parseInt(localStorage.getItem("slwu_remote_scale")||"1",10)),document.getElementById("tvremote-fullscreen").onclick=()=>{const b=parseInt(localStorage.getItem("slwu_remote_scale")||"1",10);_(b===3?1:b+1)};const H=document.getElementById("tvremote-controls-toggle");H&&(H.onclick=()=>document.body.classList.toggle("remote-controls-collapsed")),document.getElementById("tvremote-playpause").onclick=()=>{j("playVideo"),j("pauseVideo"),$("togglePlay"),x("Sent Play / Pause.")},document.getElementById("tvremote-seek-back").onclick=()=>{j("seekTo",[0,!0]),$("seekBack"),x("Sent -30s.")},document.getElementById("tvremote-seek-forward").onclick=()=>{$("seekForward"),x("Sent +30s.")},document.getElementById("tvremote-volume-down").onclick=()=>{$("volumeDown"),x("Sent volume down.")},document.getElementById("tvremote-volume-up").onclick=()=>{$("volumeUp"),x("Sent volume up.")},document.getElementById("tvremote-stop").onclick=()=>{j("stopVideo"),$("stop"),x("Sent stop.")},document.getElementById("tvremote-player-fullscreen").onclick=()=>{const b=A();b!=null&&b.requestFullscreen&&b.requestFullscreen().catch(()=>{}),$("fullscreenOn"),x("Fullscreen requested.")},document.getElementById("tvremote-player-window").onclick=()=>{document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),$("fullscreenOff"),x("Returned to windowed mode.")},document.getElementById("tvremote-resolution").onclick=()=>x(ie==="theater"?"Use provider settings inside theater player.":"Open Theater to use player settings."),document.getElementById("tvremote-subtitles").onclick=()=>x(ie==="theater"?"Use provider subtitle settings inside theater player.":"Open Theater to use subtitle settings.")}function xt(){if(window.__slwu=window.__slwu||{},window.__slwu._nowPlayingWired)return;window.__slwu._nowPlayingWired=!0;const a=document.getElementById("player-container");if(!a)return;const l=()=>{const i=a.querySelector("iframe");i&&v(i,{page:ie})};l(),new MutationObserver(l).observe(a,{childList:!0,subtree:!0})}function Tt(a={}){if(!/profile\.html$|\/profile\/?$/.test(location.pathname)&&a.page!=="profile")return;const l=a.mountId?document.getElementById(a.mountId):null,s=l||document.body;l||(document.body.className="profile-page"),s.innerHTML=`
      <div class="profile-shell">
        <a class="back-btn profile-back-link" href="${ee("index.html")}">← Return Back</a>
        <div class="profile-hero">
          <div class="tv-remote-kicker">PROFILE</div>
          <h1 id="profile-page-title">Create / Enter Profile</h1>
          <p class="profile-copy">Local profiles only. Pick a name + optional avatar.</p>
        </div>
        <div id="profile-app" class="profile-app"></div>
      </div>
    `;const i=s.querySelector("#profile-app"),C=new URLSearchParams(location.search).get("name"),P=h();function W(){const x=T().map(_=>`
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
      `;let I="";document.getElementById("profile-random").onclick=async()=>{I=await M(),alert("Random avatar picked. Press Create / Enter to save.")},document.getElementById("profile-enter").onclick=async()=>{const _=document.getElementById("profile-name").value.trim();if(!_)return alert("Enter a name.");const H=I||await M(),b=c(_,H);U(ee(`profile/?name=${encodeURIComponent(b.name)}`))},i.querySelectorAll("[data-delete]").forEach(_=>_.onclick=()=>{E(_.dataset.delete),W()}),i.querySelectorAll("[data-login]").forEach(_=>_.onclick=()=>{B(_.dataset.login),U(ee(`profile/?name=${encodeURIComponent(_.dataset.login)}`))})}function O(N){const x=T().find(H=>H.name.toLowerCase()===N.toLowerCase())||P;document.getElementById("profile-page-title").textContent=x?x.name:N,i.innerHTML=`
        <div class="profile-dashboard remote-look">
          <div class="remote-btn remote-btn-primary profile-dashboard-title">${d(N)}</div>
          <a class="remote-btn" href="${ee("index.html")}">Home</a>
          <a class="remote-btn" href="${ee("theater/")}">Open Theater</a>
          <a class="remote-btn" href="${ee("profile/")}">Switch Profile</a>
          <button id="profile-delete-current" class="remote-btn">Delete Profile</button>
          <button id="profile-export" class="remote-btn">Export Local Data</button>
        </div>
      `;const I=document.getElementById("profile-delete-current");I&&x&&(I.onclick=()=>{confirm(`Delete ${x.name}?`)&&(E(x.id),U(ee("profile/")))});const _=document.getElementById("profile-export");_&&(_.onclick=()=>{const H=localStorage.getItem(t)||"default",b={profile:x||null,myList:J.get(),hidden:X.get(),progress:Oe.get(),profileId:H,exportedAt:new Date().toISOString()},q=new Blob([JSON.stringify(b,null,2)],{type:"application/json"}),G=document.createElement("a");G.href=URL.createObjectURL(q),G.download=`slwu_${((x==null?void 0:x.name)||"profile").replace(/\\s+/g,"_")}_export.json`,G.click(),setTimeout(()=>URL.revokeObjectURL(G.href),2500)})}C?O(C):W(),document.getElementById("profile-pin-modal")}function Mt(a={}){var x;if(!/theater\.html$|\/theater\/?$/.test(location.pathname)&&a.page!=="theater")return;const l=a.mountId?document.getElementById(a.mountId):null,s=l||document.body;l||(document.body.className="theater-page");const i=y(),n=new URLSearchParams(location.search).get("src")||(i==null?void 0:i.src)||"";s.innerHTML=`
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
            <iframe id="theater-player" src="${d(n)}" allow="autoplay; fullscreen"></iframe>
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
    `,document.querySelectorAll("[data-close-modal='theater']").forEach(I=>I.onclick=()=>document.getElementById("theater-mobile-popup").classList.remove("open")),Y(),ne(),We(),De(),(()=>{const I=document.getElementById("theater-mylist"),_=J.get();I.innerHTML="",_.forEach(H=>{const b=document.createElement("button");b.className="global-search-list-item";const q=H.poster?te(H.poster):"";b.innerHTML=`${q?`<img src="${d(q)}" alt="${d(H.title)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${d((H.title||"?").slice(0,1))}</span>`}<span class="global-search-list-label">${d(H.title)}</span>`,b.onclick=()=>{const G=H.type==="tv"?Ne(H.id,1,1):He(H.id);O.src=G,setNowPlaying({src:G,title:H.title,type:H.type,id:H.id})},I.appendChild(b)})})(),document.getElementById("theater-controls-toggle").onclick=()=>{var H;const I=document.getElementById("theater-side"),_=document.getElementById("theater-layout");I.classList.toggle("open"),_.classList.toggle("side-collapsed",!I.classList.contains("open")),(H=document.getElementById("theater-controls"))==null||H.classList.toggle("faded",!I.classList.contains("open")),requestAnimationFrame(()=>window.dispatchEvent(new Event("resize")))};const P=document.getElementById("theater-controls");P&&P.classList.toggle("faded",!((x=document.getElementById("theater-side"))!=null&&x.classList.contains("open")));const W=document.getElementById("theater-home-btn");W&&(W.onclick=()=>U(me()));const O=document.getElementById("theater-player"),N=I=>{var _;if(!(!I||!O))try{I.action==="fullscreenOn"&&O.requestFullscreen&&O.requestFullscreen().catch(()=>{}),I.action==="fullscreenOff"&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),(_=O.contentWindow)==null||_.postMessage(JSON.stringify({event:"command",func:"playVideo",args:[]}),"*")}catch{}};window.addEventListener("storage",I=>{if(I.key===r)try{N(JSON.parse(I.newValue))}catch{}if(I.key===f)try{const _=JSON.parse(I.newValue||"null");_!=null&&_.src&&(O.src=_.src)}catch{}}),e&&(e.onmessage=I=>N(I.data))}function Ct(a={}){const l=a.mountId?document.getElementById(a.mountId):null,s=l||document.body;l||(document.body.className="owner-page");const i="slwu_owner_gate";let n={name:"Sheliveswithme",pin:"654321"};try{n=JSON.parse(localStorage.getItem(i)||JSON.stringify(n))}catch{}s.innerHTML=`
      <div class="slwu-route-shell">
        <div class="slwu-route-card">
          <div class="slwu-route-top">
            <a href="${me()}" class="slwu-back-link">← Back</a>
            <h1>Owner Portal</h1>
          </div>
          <p class="slwu-route-note">Local-only owner gate. Defaults are prefilled so the route works immediately.</p>
          <label class="slwu-field-label">Gate Name</label>
          <input id="owner-name" class="slwu-field-input" value="${d(n.name||"Sheliveswithme")}" />
          <label class="slwu-field-label">PIN</label>
          <input id="owner-pin" class="slwu-field-input" value="${d(n.pin||"654321")}" />
          <button id="owner-save" class="slwu-action-btn">Save Owner Gate</button>
          <div id="owner-msg" class="slwu-route-note"></div>
        </div>
      </div>
    `;const C=document.getElementById("owner-save");C&&C.addEventListener("click",()=>{var O,N,x,I;const P={name:((N=(O=document.getElementById("owner-name"))==null?void 0:O.value)==null?void 0:N.trim())||"Sheliveswithme",pin:((I=(x=document.getElementById("owner-pin"))==null?void 0:x.value)==null?void 0:I.trim())||"654321"};localStorage.setItem(i,JSON.stringify(P));const W=document.getElementById("owner-msg");W&&(W.textContent=`Saved owner gate for ${P.name}.`)})}function Pt(){Vt(),Y(),ne(),We(),De(),xt();const a=document.getElementById("global-search-input");a&&a.addEventListener("input",()=>{clearTimeout(window.__slwuGlobalSearch),window.__slwuGlobalSearch=setTimeout(()=>Ie(a.value.trim()),350)})}window.__slwu=window.__slwu||{},window.__slwu.boot=(a,l={})=>{var n,C;const s=a||wt(),i={...l||{},page:s};try{Pt()}catch{}try{switch(s){case"home":Lt();break;case"movie":Et();break;case"tv":kt();break;case"search":_t();break;case"catalog":try{(C=(n=window.__slwu).openCatalogSheet)==null||C.call(n)}catch{}break;case"profile":Tt(i);break;case"theater":Mt(i);break;case"owner":Ct(i);break;default:break}}catch{}},document.addEventListener("DOMContentLoaded",()=>window.__slwu.boot())})();function Kt(e,o){var t,r;(r=(t=window.__slwu)==null?void 0:t.boot)==null||r.call(t,e,o)}export{Kt as boot};
