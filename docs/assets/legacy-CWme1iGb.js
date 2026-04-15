const Ze="d9f0568167a608d0700093444b0c2da7",et="https://api.themoviedb.org/3",se="https://image.tmdb.org/t/p/w500",ve="https://image.tmdb.org/t/p/original",we=e=>`https://www.vidking.net/embed/movie/${e}?color=8B5CF6&autoPlay=false`,Ee=(e,n,t)=>`https://www.vidking.net/embed/tv/${e}/${n}/${t}?color=8B5CF6&autoPlay=false&nextEpisode=true&episodeSelector=true`,Ae=location.pathname.split("/").filter(Boolean),tt=location.hostname.endsWith("github.io")&&Ae.length?`/${Ae[0]}/`:"/";function Q(e=""){return tt+String(e).replace(/^\/+/,"")}function Z(e=""){return new URL(Q(e),location.origin).toString()}function le(e=""){const n=Z("");return e?`${n.replace(/#.*$/,"")}#${String(e).replace(/^#/,"")}`:n}function ot(e=""){const n=new URL(Z("search"),location.origin);if(typeof e=="string"){const t=e.replace(/^\?/,"");t&&(n.search=t)}else e&&typeof e=="object"&&Object.entries(e).forEach(([t,l])=>{l==null||l===""||n.searchParams.set(t,String(l))});return n.toString()}function re(e,n={}){const t=new URL(Z("movie"),location.origin);return t.searchParams.set("id",String(e)),Object.entries(n||{}).forEach(([l,w])=>t.searchParams.set(l,String(w))),t.toString()}function oe(e,n={}){const t=new URL(Z("tv"),location.origin);return t.searchParams.set("id",String(e)),Object.entries(n||{}).forEach(([l,w])=>t.searchParams.set(l,String(w))),t.toString()}const L=(e,n=document)=>n.querySelector(e),Ue=(e,n=document)=>Array.from(n.querySelectorAll(e));async function j(e){const n=e.includes("?")?"&":"?",t=await fetch(`${et}${e}${n}api_key=${Ze}`);if(!t.ok)throw new Error(`TMDB ${t.status}: ${e}`);return t.json()}function ae(e,n=se){return e?`${n}${e}`:null}function ie(e){return e?e.slice(0,4):"N/A"}function Le(e){if(!e)return"";const n=Math.floor(e/60),t=e%60;return n?`${n}h ${t}m`:`${t}m`}function c(e=""){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const D={_key(){return`pt_mylist_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"[]")}catch{return[]}},has(e,n){return this.get().some(t=>t.id===e&&t.type===n)},add(e){const n=this.get();this.has(e.id,e.type)||n.unshift(e),localStorage.setItem(this._key(),JSON.stringify(n))},remove(e,n){const t=this.get().filter(l=>!(l.id===e&&l.type===n));localStorage.setItem(this._key(),JSON.stringify(t))},toggle(e){return this.has(e.id,e.type)?(this.remove(e.id,e.type),!1):(this.add(e),!0)}},ee={_key(){return`pt_hidden_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"[]")}catch{return[]}},has(e,n){return this.get().some(t=>t.id===e&&t.type===n)},add(e){const n=this.get();this.has(e.id,e.type)||n.unshift(e),localStorage.setItem(this._key(),JSON.stringify(n))},remove(e,n){const t=this.get().filter(l=>!(l.id===e&&l.type===n));localStorage.setItem(this._key(),JSON.stringify(t))},toggle(e){return this.has(e.id,e.type)?(this.remove(e.id,e.type),!1):(this.add(e),!0)}},ke={_key(){return`pt_progress_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"{}")}catch{return{}}},save(e,n,t){const l=this.get();l[`${n}_${e}`]={...t,savedAt:Date.now()},localStorage.setItem(this._key(),JSON.stringify(l))},getAll(){return Object.values(this.get())}};window.addEventListener("message",function(e){try{if(typeof e.data!="string")return;const n=JSON.parse(e.data);if(n.type==="PLAYER_EVENT"&&n.data){const t=n.data,l=t.id,w=t.mediaType||"movie";l&&t.progress>1&&t.progress<98&&ke.save(l,w,{id:l,type:w,progress:t.progress,timestamp:t.currentTime,season:t.season,episode:t.episode,title:document.title})}}catch{}});function Fe(e=location.pathname){const n=String(e||"");return n.endsWith("movie.html")||/\/movie\/?$/.test(n)?"movie":n.endsWith("tv.html")||/\/tv\/?$/.test(n)?"tv":n.endsWith("search.html")||/\/search\/?$/.test(n)?"search":/profile\.html$|\/profile\/?$/.test(n)?"profile":/theater\.html$|\/theater\/?$/.test(n)?"theater":/categories\.html$|\/categories\/?$/.test(n)||/\/catalog\/?$/.test(n)?"catalog":/owner\.html$|\/owner\/?$/.test(n)?"owner":"home"}const ne=Fe();function ge(){const e=L("#navbar");if(!e||e.dataset.wired)return;e.dataset.wired="1",e.classList.contains("navbar-solid")||window.addEventListener("scroll",()=>{e.classList.toggle("scrolled",window.scrollY>50)},{passive:!0});const n=L("#hamburger"),t=L(".nav-links");n&&t&&n.addEventListener("click",()=>{t.classList.toggle("mobile-open")});const l=L("#search-toggle"),w=L("#nav-search"),k=L("#search-input");if(l&&w&&k){l.addEventListener("click",()=>{w.classList.toggle("open"),w.classList.contains("open")&&k.focus()}),k.addEventListener("keydown",g=>{if(g.key==="Enter"&&k.value.trim()&&(location.href=ot({q:k.value.trim()})),g.key==="Escape"){w.classList.remove("open"),k.value="";const h=document.getElementById("nav-search-dropdown");h&&h.remove()}});let d=null;async function B(){const g=k.value.trim(),h=document.getElementById("nav-search-dropdown");if(!g){h&&h.remove();return}let r=h;r||(r=document.createElement("div"),r.id="nav-search-dropdown",r.className="nav-search-dropdown",w.appendChild(r)),r.innerHTML='<div class="nav-search-dd-loading">Searching…</div>';try{const x=((await j(`/search/multi?query=${encodeURIComponent(g)}&page=1`)).results||[]).filter(p=>p&&(p.media_type==="movie"||p.media_type==="tv")).slice(0,4);if(!x.length){r.innerHTML='<div class="nav-search-dd-empty">No results.</div>';return}r.innerHTML="",x.forEach(p=>{const b=p.media_type==="tv"||p.first_air_date?"tv":"movie",f=p.title||p.name||"Untitled",u=ae(p.poster_path)||"",y=document.createElement("button");y.type="button",y.className="nav-search-dd-card",y.innerHTML=`
            ${u?`<img src="${c(u)}" alt="${c(f)}" loading="lazy" />`:`<div class="nav-search-dd-fallback">${c(f.slice(0,1))}</div>`}
            <div class="nav-search-dd-meta">
              <div class="nav-search-dd-title">${c(f)}</div>
              <div class="nav-search-dd-sub">${b.toUpperCase()} · ${ie(p.release_date||p.first_air_date||"")}</div>
            </div>
          `,y.onclick=()=>{r.remove(),w.classList.remove("open"),k.value="",location.href=b==="tv"?oe(p.id):re(p.id)},r.appendChild(y)})}catch{r.innerHTML='<div class="nav-search-dd-empty">Search failed.</div>'}}k.addEventListener("input",()=>{clearTimeout(d),d=setTimeout(()=>B(),220)}),document.addEventListener("click",g=>{const h=document.getElementById("nav-search-dropdown");h&&(g.target===h||h.contains(g.target)||g.target===k||h.remove())})}}function he(e,n="movie"){const t=e.id,l=e.title||e.name||"Untitled",w=ae(e.poster_path),k=e.release_date||e.first_air_date||"",d=e.vote_average?e.vote_average.toFixed(1):"",B=n==="tv"?oe(t):re(t),g=D.has(t,n),h=w?`<img src="${c(w)}" alt="${c(l)}" loading="lazy" />`:`<div class="no-poster" style="aspect-ratio:2/3;background:var(--surface);display:flex;align-items:center;justify-content:center;">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:32px;height:32px;opacity:.3"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
       </div>`,r=document.createElement("div");r.className="movie-card",r.dataset.id=t,r.dataset.type=n,r.innerHTML=`
    ${h}
    <div class="movie-card-overlay">
      <div class="movie-card-title">${c(l)}</div>
      <div class="movie-card-meta">${ie(k)}${d?` · ⭐ ${d}`:""}</div>
    </div>
    <div class="movie-card-actions">
      <button class="card-action-btn hide-btn${ee.has(t,n)?" is-hidden":""}" title="${ee.has(t,n)?"Unhide":"Hide"}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="19" y1="5" x2="5" y2="19"/><line x1="5" y1="5" x2="19" y2="19"/></svg>
      </button>
      <button class="card-action-btn list-btn${g?" in-list":""}" title="${g?"Remove from My List":"Add to My List"}">
        ${g?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'}
      </button>
    </div>
  `,r.addEventListener("click",p=>{p.target.closest(".card-action-btn")||(location.href=B)});const S=r.querySelector(".list-btn");S.addEventListener("click",p=>{p.stopPropagation();const b=D.toggle({id:t,type:n,title:l,poster:e.poster_path});S.classList.toggle("in-list",b),S.innerHTML=b?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'});const x=r.querySelector(".hide-btn");return x&&x.addEventListener("click",p=>{p.stopPropagation();const b=ee.toggle({id:t,type:n,title:l,poster:e.poster_path});x.classList.toggle("is-hidden",b),x.title=b?"Unhide":"Hide",b&&r.remove()}),r}function nt(e=8){return Array.from({length:e},()=>{const n=document.createElement("div");return n.className="skeleton-card skeleton",n})}function Oe(e,n,t="movie"){if(n=(n||[]).filter(h=>!ee.has(h.id,h.media_type||t||"movie")),!n||n.length===0)return null;const l=document.createElement("div");l.className="row-wrapper";const w=Z(`categories/?q=${encodeURIComponent(e)}`);l.innerHTML=`
    <div class="row-header">
      <h2 class="row-title"><a href="${w}">${c(e)}</a></h2>
      <a class="row-viewall" href="${w}">View All</a>
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
  `;const k=l.querySelector(".row-track");n.forEach(h=>k.appendChild(he(h,t)));const d=l.querySelector(".arrow-left"),B=l.querySelector(".arrow-right"),g=600;return d.addEventListener("click",()=>k.scrollBy({left:-g,behavior:"smooth"})),B.addEventListener("click",()=>k.scrollBy({left:g,behavior:"smooth"})),l}async function We(){st();const e=L("#main-content");ge();const n=L("#categories");if(!n)return;["Trending Now","Top Rated","Popular on SheLivesWithUs","Now Playing","Action","Comedy","Horror","Sci-Fi"].forEach(g=>{const h=document.createElement("div");h.className="row-wrapper",h.innerHTML=`
      <div class="row-header"><h2 class="row-title">${c(g)}</h2></div>
      <div class="row-track-container">
        <div class="row-track" id="skel-${g.replace(/\s+/g,"-")}"></div>
      </div>
    `;const r=h.querySelector(".row-track");nt(8).forEach(S=>r.appendChild(S)),n.appendChild(h)});const l=[{title:"Trending Now",path:"/trending/movie/week",type:"movie"},{title:"Top Rated",path:"/movie/top_rated",type:"movie"},{title:"Popular on SheLivesWithUs",path:"/movie/popular",type:"movie"},{title:"Now Playing",path:"/movie/now_playing",type:"movie"},{title:"Action",path:"/discover/movie?with_genres=28",type:"movie"},{title:"Comedy",path:"/discover/movie?with_genres=35",type:"movie"},{title:"Horror",path:"/discover/movie?with_genres=27",type:"movie"},{title:"Sci-Fi",path:"/discover/movie?with_genres=878",type:"movie"},{title:"Romance",path:"/discover/movie?with_genres=10749",type:"movie"},{title:"Documentary",path:"/discover/movie?with_genres=99",type:"movie"},{title:"Animation",path:"/discover/movie?with_genres=16",type:"movie"},{title:"Trending TV Shows",path:"/trending/tv/week",type:"tv"},{title:"Top Rated TV",path:"/tv/top_rated",type:"tv"}];let w=!1;const k=await Promise.allSettled(l.map(g=>j(g.path)));n.innerHTML="";const d=ke.getAll();if(d.length>0){const h=(await Promise.allSettled(d.slice(0,10).map(r=>j(r.type==="tv"?`/tv/${r.id}`:`/movie/${r.id}`).then(S=>({...S,_mediaType:r.type,_progress:r.progress}))))).filter(r=>r.status==="fulfilled").map(r=>r.value);if(h.length>0){const r=Oe("Continue Watching",h,"mixed");r&&(h.forEach((S,x)=>{const p=r.querySelectorAll(".movie-card");p[x]&&(p[x].dataset.type=S._mediaType)}),n.appendChild(r))}}const B=D.get();if(B.length>0){const h=(await Promise.allSettled(B.slice(0,20).map(r=>j(r.type==="tv"?`/tv/${r.id}`:`/movie/${r.id}`).then(S=>({...S,_mediaType:r.type}))))).filter(r=>r.status==="fulfilled").map(r=>r.value);if(h.length>0){const r=document.createElement("div");r.className="row-wrapper",r.id="my-list",r.innerHTML=`
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
      `;const S=r.querySelector(".row-track");h.forEach(b=>{S.appendChild(he(b,b._mediaType||"movie"))});const x=r.querySelector(".arrow-left"),p=r.querySelector(".arrow-right");x.addEventListener("click",()=>S.scrollBy({left:-600,behavior:"smooth"})),p.addEventListener("click",()=>S.scrollBy({left:600,behavior:"smooth"})),n.appendChild(r)}}k.forEach((g,h)=>{if(g.status!=="fulfilled")return;const S=g.value.results||[],x=l[h];if(!w&&h===0&&S.length>0){w=!0;const b=S[Math.floor(Math.random()*Math.min(5,S.length))];at(b)}const p=Oe(x.title,S,x.type);p&&n.appendChild(p)}),e&&(e.style.opacity="1")}async function at(e){if(!e)return;const n=e.id,t=e.media_type==="tv"?"tv":"movie",l=e.title||e.name||"",w=e.overview||"",k=e.backdrop_path?`${ve}${e.backdrop_path}`:"",d=L("#hero-backdrop"),B=L("#hero-title"),g=L("#hero-desc"),h=L("#hero-meta"),r=L("#hero-play-btn"),S=L("#hero-info-btn");d&&k&&(d.style.backgroundImage=`url(${k})`),B&&(B.textContent=l),g&&(g.textContent=w);try{const b=await j(`/${t}/${n}`),f=b.vote_average?b.vote_average.toFixed(1):"",u=(b.genres||[]).slice(0,3).map(H=>H.name).join(", "),y=b.runtime?Le(b.runtime):b.episode_run_time?Le(b.episode_run_time[0]):"",I=ie(b.release_date||b.first_air_date);h&&(h.innerHTML=`
        ${f?`<span class="rating"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${f}</span>`:""}
        <span>${I}</span>
        ${y?`<span>${y}</span>`:""}
        ${u?`<span>${c(u)}</span>`:""}
      `)}catch{}const x=t==="tv"?oe(n):re(n);r&&r.addEventListener("click",()=>{it(x,k,l)}),S&&S.addEventListener("click",()=>{location.href=x});const p=document.querySelector(".hero-buttons");if(p&&!document.getElementById("hero-list-btn")){const b=document.createElement("button");b.id="hero-list-btn",b.className="btn btn-secondary btn-3d";const f=D.has(n,t);b.textContent=f?"In My List":"Add to My List",b.onclick=()=>{const u=D.toggle({id:n,type:t,title:l,poster:e.poster_path});b.textContent=u?"In My List":"Add to My List"},p.appendChild(b)}}function st(){const e=L("#splash-screen");if(!e)return;if(sessionStorage.getItem("pt_splash")){e.style.display="none";const t=L("#main-content");t&&(t.style.opacity="1");return}setTimeout(()=>{e.classList.add("fade-out"),setTimeout(()=>{e.style.display="none",sessionStorage.setItem("pt_splash","1")},800)},3e3)}async function Ve(){ge(),await Ge();const n=new URLSearchParams(location.search).get("id");if(!n){location.href=le();return}try{const t=await j(`/movie/${n}?append_to_response=credits,similar`);document.title=`SheLivesWithUs — ${t.title||"Movie"}`;const l=t.backdrop_path?`${ve}${t.backdrop_path}`:"",w=L("#detail-backdrop");w&&l&&(w.style.backgroundImage=`url(${l})`);const k=L("#detail-header");if(k){const u=(t.genres||[]).map(V=>`<span class="genre-pill">${c(V.name)}</span>`).join(""),y=t.vote_average?t.vote_average.toFixed(1):"N/A",I=D.has(t.id,"movie");k.innerHTML=`
        <h1 class="detail-title">${c(t.title||"")}</h1>
        <div class="detail-meta">
          <span class="rating-badge">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${c(y)}
          </span>
          <span>${ie(t.release_date)}</span>
          ${t.runtime?`<span>${Le(t.runtime)}</span>`:""}
          ${u}
        </div>
        <p class="detail-overview">${c(t.overview||"")}</p>
        <div class="detail-action-row">
          <button class="detail-list-btn ${I?"in-list":""}" id="detail-list-btn">
            ${I?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'}
          </button>
          <button class="detail-list-btn" id="watch-in-theater-btn">Watch in Theater</button>
        </div>
      `;const H=k.querySelector("#detail-list-btn");H.addEventListener("click",()=>{const V=D.toggle({id:t.id,type:"movie",title:t.title,poster:t.poster_path});H.className=`detail-list-btn ${V?"in-list":""}`,H.innerHTML=V?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'});const N=k.querySelector("#watch-in-theater-btn");N&&N.addEventListener("click",()=>{const V=new URL(Z("theater/"));V.searchParams.set("src",we(n)),location.href=V.toString()})}const d=L("#player-container");d&&(d.innerHTML=`<iframe src="${we(n)}" allow="autoplay; fullscreen"></iframe>`);const B=L("#sidebar-poster");B&&t.poster_path&&(B.src=`${se}${t.poster_path}`,B.alt=t.title||"",B.style.display="");const g=L("#sidebar-list-btn");if(g){const u=()=>{const y=D.has(t.id,"movie");g.innerHTML=y?'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'};u(),g.addEventListener("click",()=>{D.toggle({id:t.id,type:"movie",title:t.title,poster:t.poster_path}),u()})}const h=L("#sidebar-share-btn");h&&h.addEventListener("click",()=>{navigator.share?navigator.share({title:`${t.title} — SheLivesWithUs`,url:location.href}):navigator.clipboard.writeText(location.href).then(()=>{h.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Link Copied!',setTimeout(()=>{h.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Share'},2e3)})});const r=document.querySelector('meta[property="og:title"]'),S=document.querySelector('meta[property="og:description"]'),x=document.querySelector('meta[property="og:image"]');r&&(r.content=`${t.title} — SheLivesWithUs`),S&&(S.content=t.overview||"Watch free on SheLivesWithUs"),x&&t.backdrop_path&&(x.content=`${ve}${t.backdrop_path}`);const p=L("#detail-info");p&&t&&(p.innerHTML=`
        <div class="detail-info-grid">
          ${t.status?`<div class="info-item"><label>Status</label><span>${c(t.status)}</span></div>`:""}
          ${t.budget?`<div class="info-item"><label>Budget</label><span>$${(t.budget/1e6).toFixed(1)}M</span></div>`:""}
          ${t.revenue?`<div class="info-item"><label>Revenue</label><span>$${(t.revenue/1e6).toFixed(1)}M</span></div>`:""}
          ${t.original_language?`<div class="info-item"><label>Language</label><span>${c(t.original_language.toUpperCase())}</span></div>`:""}
          ${(t.production_companies||[]).length?`<div class="info-item"><label>Studio</label><span>${c(t.production_companies[0].name)}</span></div>`:""}
        </div>
      `);const b=(t.credits&&t.credits.cast||[]).slice(0,20);if(b.length>0){const u=L("#cast-section"),y=L("#cast-row");u&&y&&(u.style.display="",b.forEach(I=>{const H=I.profile_path?`<img class="cast-img" src="${se}${I.profile_path}" alt="${c(I.name)}" loading="lazy" />`:'<div class="cast-img" style="background:var(--bg4);border-radius:var(--radius-sm);"></div>',N=document.createElement("div");N.className="cast-card",N.innerHTML=`
            ${H}
            <div class="cast-name">${c(I.name)}</div>
            <div class="cast-char">${c(I.character||"")}</div>
          `,y.appendChild(N)}))}const f=(t.similar&&t.similar.results||[]).slice(0,20);if(f.length>0){const u=L("#similar-section"),y=L("#similar-row");u&&y&&(u.style.display="",f.forEach(I=>y.appendChild(he(I,"movie"))))}}catch(t){console.error("Movie detail error:",t);const l=L("#detail-header");l&&(l.innerHTML='<p style="color:var(--text-muted)">Failed to load movie details. Please try again.</p>')}}async function De(){ge(),await Ge();const e=new URLSearchParams(location.search),n=e.get("id"),t=parseInt(e.get("season")||"1",10),l=parseInt(e.get("episode")||"1",10);if(!n){location.href=le();return}let w=t,k=l;try{let r=function(f,u){const y=L("#player-container");y&&(y.innerHTML=`<iframe src="${Ee(n,f,u)}" allow="autoplay; fullscreen"></iframe>`);const I=new URL(location.href);I.searchParams.set("season",f),I.searchParams.set("episode",u),history.replaceState(null,"",I.toString())};const d=await j(`/tv/${n}?append_to_response=credits,similar`);document.title=`SheLivesWithUs — ${d.name||"TV Show"}`;const B=d.backdrop_path?`${ve}${d.backdrop_path}`:"",g=L("#detail-backdrop");g&&B&&(g.style.backgroundImage=`url(${B})`);const h=L("#detail-header");if(h){const f=(d.genres||[]).map(N=>`<span class="genre-pill">${c(N.name)}</span>`).join(""),u=d.vote_average?d.vote_average.toFixed(1):"N/A",y=D.has(d.id,"tv");h.innerHTML=`
        <h1 class="detail-title">${c(d.name||"")}</h1>
        <div class="detail-meta">
          <span class="rating-badge">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${c(u)}
          </span>
          <span>${ie(d.first_air_date)}</span>
          ${d.number_of_seasons?`<span>${d.number_of_seasons} Season${d.number_of_seasons!==1?"s":""}</span>`:""}
          ${f}
        </div>
        <p class="detail-overview">${c(d.overview||"")}</p>
        <div class="detail-action-row">
          <button class="detail-list-btn ${y?"in-list":""}" id="detail-list-btn">
            ${y?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'}
          </button>
          <button class="detail-list-btn" id="watch-in-theater-btn">Watch in Theater</button>
        </div>
      `;const I=h.querySelector("#detail-list-btn");I.addEventListener("click",()=>{const N=D.toggle({id:d.id,type:"tv",title:d.name,poster:d.poster_path});I.className=`detail-list-btn ${N?"in-list":""}`,I.innerHTML=N?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'});const H=h.querySelector("#watch-in-theater-btn");H&&H.addEventListener("click",()=>{const N=new URL(Z("theater/"));N.searchParams.set("src",Ee(n,w,k)),location.href=N.toString()})}r(w,k);const S=(d.seasons||[]).filter(f=>f.season_number>0);if(S.length>0){const f=L("#episode-selector"),u=L("#season-select"),y=L("#episodes-grid");if(f&&u&&y){f.style.display="",S.forEach(H=>{const N=document.createElement("option");N.value=H.season_number,N.textContent=`Season ${H.season_number}`,H.season_number===w&&(N.selected=!0),u.appendChild(N)});async function I(H){y.innerHTML='<div class="spinner" style="margin:20px auto;"></div>';try{const V=(await j(`/tv/${n}/season/${H}`)).episodes||[];y.innerHTML="",V.forEach(G=>{const te=G.still_path?`${se}${G.still_path}`:"",z=document.createElement("div");z.className=`episode-card${G.episode_number===k&&H===w?" active":""}`,z.innerHTML=`
                ${te?`<img class="episode-thumb" src="${c(te)}" alt="Episode ${G.episode_number}" loading="lazy" />`:'<div class="episode-thumb" style="background:var(--surface);flex:0 0 120px;"></div>'}
                <div class="episode-info">
                  <div class="episode-num">Episode ${G.episode_number}</div>
                  <div class="episode-title">${c(G.name||"")}</div>
                  <div class="episode-desc">${c(G.overview||"No description available.")}</div>
                </div>
              `,z.addEventListener("click",()=>{w=H,k=G.episode_number,Ue(".episode-card").forEach(ue=>ue.classList.remove("active")),z.classList.add("active"),r(w,k);const me=L("#player-container");me&&me.scrollIntoView({behavior:"smooth",block:"start"})}),y.appendChild(z)})}catch{y.innerHTML='<p style="color:var(--text-muted);padding:12px;">Failed to load episodes.</p>'}}I(w),u.addEventListener("change",()=>{w=parseInt(u.value,10),k=1,I(w),r(w,k)})}}const x=L("#detail-info");x&&(x.innerHTML=`
        <div class="detail-info-grid">
          ${d.status?`<div class="info-item"><label>Status</label><span>${c(d.status)}</span></div>`:""}
          ${d.type?`<div class="info-item"><label>Type</label><span>${c(d.type)}</span></div>`:""}
          ${d.number_of_episodes?`<div class="info-item"><label>Episodes</label><span>${d.number_of_episodes}</span></div>`:""}
          ${d.original_language?`<div class="info-item"><label>Language</label><span>${c(d.original_language.toUpperCase())}</span></div>`:""}
          ${d.networks&&d.networks[0]?`<div class="info-item"><label>Network</label><span>${c(d.networks[0].name)}</span></div>`:""}
        </div>
      `);const p=(d.credits&&d.credits.cast||[]).slice(0,20);if(p.length>0){const f=L("#cast-section"),u=L("#cast-row");f&&u&&(f.style.display="",p.forEach(y=>{const I=y.profile_path?`<img class="cast-img" src="${se}${y.profile_path}" alt="${c(y.name)}" loading="lazy" />`:'<div class="cast-img" style="background:var(--bg4);border-radius:var(--radius-sm);"></div>',H=document.createElement("div");H.className="cast-card",H.innerHTML=`
            ${I}
            <div class="cast-name">${c(y.name)}</div>
            <div class="cast-char">${c(y.character||"")}</div>
          `,u.appendChild(H)}))}const b=(d.similar&&d.similar.results||[]).slice(0,20);if(b.length>0){const f=L("#similar-section"),u=L("#similar-row");f&&u&&(f.style.display="",b.forEach(y=>u.appendChild(he(y,"tv"))))}}catch(d){console.error("TV detail error:",d);const B=L("#detail-header");B&&(B.innerHTML='<p style="color:var(--text-muted)">Failed to load show details. Please try again.</p>')}}function Je(){ge();const e=L("#main-search-input"),n=L("#search-clear"),t=L("#search-status"),l=L("#search-results"),w=Ue(".filter-btn"),k=new URLSearchParams(location.search),d=k.get("q")||"",B=k.get("type")||"all";let g=B!=="all"?B:"all",h=null,r="";w.forEach(p=>{p.classList.toggle("active",p.dataset.filter===g)}),w.forEach(p=>{p.addEventListener("click",()=>{g=p.dataset.filter,w.forEach(b=>b.classList.toggle("active",b===p)),r?x(r):g!=="all"&&x("")})}),e&&(e.value=d,e.addEventListener("input",()=>{const p=e.value.trim();n.style.display=p?"flex":"none",clearTimeout(h),h=setTimeout(()=>x(p),500)}),d?(n.style.display="flex",x(d)):g!=="all"?x(""):S()),n&&n.addEventListener("click",()=>{e.value="",n.style.display="none",e.focus(),S()});function S(){t.textContent="",l.innerHTML=`
      <div class="no-results">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <h3>Search SheLivesWithUs</h3>
        <p>Find movies and TV shows</p>
      </div>
    `}async function x(p){if(r=p,!p&&g==="all"){S();return}t.textContent="Searching…",l.innerHTML="";const b=l;for(let f=0;f<12;f++){const u=document.createElement("div");u.className="skeleton-card skeleton",u.style.aspectRatio="2/3",b.appendChild(u)}try{let f=[];if(p){let u="/search/multi";g==="movie"?u="/search/movie":g==="tv"&&(u="/search/tv"),f=((await j(`${u}?query=${encodeURIComponent(p)}&page=1`)).results||[]).filter(I=>!ee.has(I.id,I.media_type||g))}else f=(await j(`${g==="movie"?"/movie/popular":"/tv/popular"}`)).results||[];if(g!=="all"&&p&&(f=f.filter(u=>(u.media_type||g)===g)),l.innerHTML="",f.length===0){t.textContent="",l.innerHTML=`
          <div class="no-results" style="grid-column:1/-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <h3>No results found</h3>
            <p>Try a different search term or browse our categories on the home page.</p>
          </div>
        `;return}t.textContent=p?`${f.length} result${f.length!==1?"s":""} for "${p}"`:`Showing popular ${g==="tv"?"TV shows":"movies"}`,f.forEach(u=>{const y=u.media_type||g,I=u.id,H=u.title||u.name||"Untitled",N=ae(u.poster_path),V=u.release_date||u.first_air_date||"",G=u.vote_average?u.vote_average.toFixed(1):"",te=y==="tv"?oe(I):re(I),z=document.createElement("div");z.className="search-card fade-in",z.innerHTML=`
          ${N?`<img src="${c(N)}" alt="${c(H)}" loading="lazy" />`:`<div class="no-poster">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                 No Image
               </div>`}
          <div class="search-card-info">
            <div class="search-card-title">${c(H)}</div>
            <div class="search-card-meta">
              <span class="type-badge ${y==="tv"?"tv":"movie"}">${y==="tv"?"TV":"Movie"}</span>
              ${ie(V)}
              ${G?`· ⭐ ${G}`:""}
            </div>
          </div>
        `,z.addEventListener("click",()=>{location.href=te}),l.appendChild(z)})}catch(f){console.error("Search error:",f),l.innerHTML='<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px">Search failed. Please try again.</p>',t.textContent=""}}}function je(e,n){return new Promise(t=>{const l=document.createElement("div");l.className="play-loader",l.innerHTML=`
      <div class="play-loader-backdrop" style="background-image:url(${c(e||"")})"></div>
      <div class="play-loader-overlay"></div>
      <div class="play-loader-content">
        <div class="play-loader-logo">SHELIVESWITHUS</div>
        <div class="play-loader-title">${c(n||"")}</div>
        <div class="play-loader-ring"></div>
      </div>
    `,document.body.appendChild(l),requestAnimationFrame(()=>{requestAnimationFrame(()=>{l.classList.add("active")})}),setTimeout(()=>{l.classList.add("fade-out"),setTimeout(()=>{l.remove(),t()},600)},2400)})}function it(e,n,t){sessionStorage.setItem("pt_play_loader",JSON.stringify({backdrop:n,title:t})),je(n,t).then(()=>{location.href=e})}function Ge(){const e=sessionStorage.getItem("pt_play_loader");if(e){sessionStorage.removeItem("pt_play_loader");try{const{backdrop:n,title:t}=JSON.parse(e);return je(n,t)}catch{}}return Promise.resolve()}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});document.addEventListener("DOMContentLoaded",()=>{switch(ne){case"home":We();break;case"movie":Ve();break;case"tv":De();break;case"search":Je();break}});(function(){const e="BroadcastChannel"in window?new BroadcastChannel("slwu_remote"):null,n="slwu_profiles",t="pt_active_profile",l="slwu_remote_state",w="slwu_now_playing",k="slwu_ui_scale_2x",d={"New Releases":"/movie/now_playing",Family:"/discover/movie?with_genres=10751",Comedy:"/discover/movie?with_genres=35",Action:"/discover/movie?with_genres=28",Horror:"/discover/movie?with_genres=27",Classics:"/discover/movie?primary_release_date.lte=1999-12-31&sort_by=popularity.desc",Cartoons:"/discover/movie?with_genres=16"};function B(){try{return JSON.parse(localStorage.getItem(n)||"[]")}catch{return[]}}function g(a){localStorage.setItem(n,JSON.stringify(a))}function h(){const a=localStorage.getItem(t);return B().find(i=>i.id===a)||null}function r(a,i){const o=B();let s=o.find(v=>v.name.toLowerCase()===String(a).trim().toLowerCase());return s?s.pin=String(i).trim():(s={id:"p_"+Date.now(),name:String(a).trim(),pin:String(i).trim(),createdAt:Date.now()},o.push(s)),g(o),localStorage.setItem(t,s.id),s}function S(a,i){const o=B().find(s=>s.name.toLowerCase()===String(a).trim().toLowerCase()&&String(s.pin)===String(i).trim());return o&&localStorage.setItem(t,o.id),o}function x(a){const i=B().filter(o=>o.id!==a);g(i),localStorage.getItem(t)===a&&localStorage.removeItem(t)}function p(a,i={}){var v;if(!a||!a.src)return;const o=((v=document.querySelector("#sidebar-poster"))==null?void 0:v.src)||"",s={src:a.src,title:document.title,url:location.href,page:ne,poster:o,ts:Date.now(),...i};localStorage.setItem(w,JSON.stringify(s))}function b(){try{return JSON.parse(localStorage.getItem(w)||"null")}catch{return null}}function f(a,i={}){const o={action:a,payload:i,ts:Date.now()};localStorage.setItem(l,JSON.stringify(o)),e&&e.postMessage(o)}function u(){var a,i;return document.fullscreenElement?document.exitFullscreen().catch(()=>{}):(i=(a=document.documentElement).requestFullscreen)==null?void 0:i.call(a).catch(()=>{})}function y(){return document.querySelector("#player-container iframe, #theater-player")}function I(a,i=[]){const o=y()||document.querySelector("#tvremote-mini-player iframe");if(!o||!o.contentWindow)return!1;try{return o.contentWindow.postMessage(JSON.stringify({event:"command",func:a,args:i}),"*"),!0}catch{return!1}}function H(){var i;document.querySelectorAll(".footer, .ad-container-native, .ad-container-banner, .ad-toggle-wrap").forEach(o=>o.remove());const a=document.querySelector("#navbar .nav-left");if(a){const o=a.querySelector(".nav-logo");o&&o.remove()}if(document.querySelector("#navbar .nav-right"),(i=document.getElementById("nav-collapse-btn"))==null||i.remove(),!document.getElementById("global-action-stack")){const o=document.createElement("div");o.id="global-action-stack",o.className="global-action-stack",o.innerHTML=`
        <button id="global-stack-toggle" class="global-fab global-fab--toggle" aria-label="Menu">☰</button>
        <button id="global-home-btn" class="global-fab global-fab--stack" aria-label="Home">Home</button>
        <button id="global-search-btn" class="global-fab global-fab--stack global-fab--search" aria-label="Search">Search</button>
        <div class="global-action-stack-menu">
          <button id="global-layout-btn" class="global-fab global-fab--stack">Layout</button>
          <button id="global-appfs-btn" class="global-fab global-fab--stack">Full</button>
          <button id="global-tv-btn" class="global-fab global-fab--stack">TV</button>
          <button id="global-scale-btn" class="global-fab global-fab--stack">1x</button>
          <button id="global-profile-btn" class="global-fab global-fab--stack">Profile</button>
          <button id="global-mylist-btn" class="global-fab global-fab--stack">My List</button>
          <button id="global-hidden-btn" class="global-fab global-fab--stack">Hidden</button>
          <button id="global-theater-btn" class="global-fab global-fab--stack">Theater</button>
          <button id="global-catalog-btn" class="global-fab global-fab--stack">Catalog</button>
        </div>
      `,document.body.appendChild(o)}if(!document.getElementById("slwu-brand-pin")){const o=document.createElement("div");o.id="slwu-brand-pin",o.textContent="SheLivesWithMe",document.body.appendChild(o)}if(!document.getElementById("slwu-layout-pin")){const o=document.createElement("button");o.id="slwu-layout-pin",o.type="button",o.className="slwu-layout-pin",o.textContent="Layout: Classic",document.body.appendChild(o)}if(!document.getElementById("slwu-profile-modal")){const o=document.createElement("div");o.id="slwu-profile-modal",o.className="slwu-modal",o.innerHTML=`
        <div class="slwu-modal-card">
          <button class="slwu-modal-close" data-close-modal="profile">×</button>
          <h2>PROFILE</h2>
          <p>Scan to open the local profile page.</p>
          <img id="slwu-profile-qr" alt="Profile QR Code" />
          <div class="slwu-modal-actions">
            <a class="btn btn-primary btn-3d" href="${Q("profile/")}">Open Profile</a>
          </div>
        </div>
      `,document.body.appendChild(o)}if(!document.getElementById("tv-remote-panel")){const o=document.createElement("aside");o.id="tv-remote-panel",o.className="tv-remote-panel",o.innerHTML=`
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
      `,document.body.appendChild(o)}if(!document.getElementById("global-search-sheet")){const o=document.createElement("section");o.id="global-search-sheet",o.className="global-search-sheet",o.innerHTML=`
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
      `,document.body.appendChild(o)}if(!document.getElementById("global-hidden-sheet")){const o=document.createElement("section");o.id="global-hidden-sheet",o.className="global-search-sheet",o.innerHTML=`
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
      `,document.body.appendChild(o)}if(!document.getElementById("global-catalog-sheet")){const o=document.createElement("section");o.id="global-catalog-sheet",o.className="global-search-sheet",o.innerHTML=`
        <div class="global-search-sheet-inner">
          <div class="global-catalog-wrap">
            <aside class="global-catalog-tabs">
              <div class="sheet-title">Catalog</div>
              <div id="global-catalog-tabs" class="global-catalog-tabs-list"></div>
            </aside>
            <section class="global-catalog-main">
              <div id="global-catalog-grid" class="global-search-results"></div>
            </section>
          </div>
          <div class="global-search-inputbar">
            <div></div>
            <button id="global-catalog-close" class="remote-mini-btn">Close</button>
          </div>
        </div>
      `,document.body.appendChild(o)}}function N(){const a=document.body;if(window.__slwu=window.__slwu||{},window.__slwu._globalButtonsWired)return;window.__slwu._globalButtonsWired=!0;const i=document.getElementById("tvremote-close"),o=document.getElementById("profile-open-btn"),s=document.getElementById("slwu-profile-modal"),v=document.getElementById("global-theater-btn"),M=document.getElementById("global-mylist-btn"),C=document.getElementById("global-hidden-btn"),F=document.getElementById("global-stack-toggle"),J=document.getElementById("global-home-btn"),$=document.getElementById("global-layout-btn"),E=document.getElementById("slwu-layout-pin"),P=document.getElementById("global-appfs-btn"),U=document.getElementById("global-scale-btn"),Y=document.getElementById("global-tv-btn"),O=document.getElementById("global-profile-btn"),m=document.getElementById("global-catalog-btn"),R=document.getElementById("global-search-btn"),T=document.getElementById("global-search-sheet"),q=document.getElementById("global-hidden-sheet"),K=document.getElementById("global-catalog-sheet"),W=()=>{a.classList.remove("sheet-open","hidden-open","catalog-open")},X="slwu_layout_mode",ce=()=>localStorage.getItem(X)||"classic",pe=_=>{const A=_==="netflix"?"netflix":"classic";a.classList.toggle("layout-netflix",A==="netflix"),localStorage.setItem(X,A);const de=A==="netflix"?"Netflix":"Classic";E&&(E.textContent=`Layout: ${de}`),$&&($.textContent=`Layout: ${de}`)};pe(ce());const Te=()=>pe(ce()==="netflix"?"classic":"netflix"),Ce=(_={})=>{W(),a.classList.add("sheet-open"),be();const A=document.getElementById("global-search-input"),de=document.getElementById("global-search-results");_.prefill&&A&&(A.value=String(_.prefill)),A&&A.focus(),de&&!(A&&A.value.trim())&&(de.innerHTML='<div class="tvremote-empty">Type to search.</div>'),A&&A.value.trim()&&ye(A.value.trim())};i&&(i.onclick=()=>a.classList.remove("remote-open")),o&&(o.onclick=()=>{const _=document.getElementById("slwu-profile-qr"),A=Z("profile/");_&&(_.src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data="+encodeURIComponent(A)),s.classList.add("open")}),document.querySelectorAll("[data-close-modal='profile']").forEach(_=>_.onclick=()=>s.classList.remove("open")),s&&s.addEventListener("click",_=>{_.target===s&&s.classList.remove("open")}),v&&(v.onclick=()=>{const _=b(),A=new URL(Z("theater/"));_&&_.src&&A.searchParams.set("src",_.src),location.href=A.toString()}),J&&(J.onclick=()=>{W(),a.classList.remove("stack-open","remote-open"),location.href=le()}),$&&($.onclick=()=>Te()),E&&(E.onclick=()=>Te()),M&&(M.onclick=()=>{Ce({prefill:""});const _=document.getElementById("global-search-results");_&&(_.innerHTML='<div class="tvremote-empty">Choose from My List or search.</div>')}),C&&(C.onclick=()=>{W(),a.classList.add("hidden-open"),$e()}),F&&(F.onclick=()=>a.classList.toggle("stack-open")),P&&(P.onclick=()=>u());const Me=_=>{a.classList.remove("ui-scale-1x","ui-scale-2x","ui-scale-3x"),a.classList.add(`ui-scale-${_}x`),localStorage.setItem(k,String(_)),U&&(U.textContent=`${_}x`)},Pe=parseInt(localStorage.getItem(k)||"1",10);Me([1,2,3].includes(Pe)?Pe:1),U&&(U.onclick=()=>{const _=parseInt(localStorage.getItem(k)||"1",10);Me(_===3?1:_+1)}),Y&&(Y.onclick=()=>a.classList.toggle("remote-open")),O&&(O.onclick=()=>{const _=document.getElementById("slwu-profile-qr"),A=Z("profile/");_&&(_.src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data="+encodeURIComponent(A)),s==null||s.classList.add("open")}),m&&(m.onclick=()=>{W(),a.classList.add("catalog-open"),_e()}),R&&(R.onclick=()=>Ce());const He=document.getElementById("global-search-close");He&&(He.onclick=()=>W());const Ne=document.getElementById("global-search-clear");Ne&&(Ne.onclick=()=>{const _=document.getElementById("global-search-input"),A=document.getElementById("global-search-results");_&&(_.value=""),A&&(A.innerHTML='<div class="tvremote-empty">Type to search.</div>')});const Re=document.getElementById("global-hidden-close");Re&&(Re.onclick=()=>W());const qe=document.getElementById("global-catalog-close");qe&&(qe.onclick=()=>W()),T&&T.addEventListener("click",_=>{_.target===T&&W()}),q&&q.addEventListener("click",_=>{_.target===q&&W()}),K&&K.addEventListener("click",_=>{_.target===K&&W()}),document.addEventListener("keydown",_=>{_.key==="Escape"&&W()})}function V(a,i,o={}){if(!i)return;const s=!!o.append;if(s||(i.innerHTML=""),!a.length){s||(i.innerHTML='<div class="tvremote-empty">No items found.</div>');return}a.forEach(v=>{const M=v.media_type==="tv"||v.first_air_date?"tv":"movie",C=v.title||v.name||"Untitled",F=M==="tv"?oe(v.id):re(v.id),J=D.has(v.id,M),$=document.createElement("article");$.className="tvremote-card";const E=ae(v.poster_path)||"";$.innerHTML=`
        <button class="tvremote-card-wish ${J?"in-list":""}" aria-label="Wish List">❤</button>
        ${E?`<img src="${c(E)}" alt="${c(C)}" loading="lazy">`:`<div class="tvremote-card-fallback">${c(C.slice(0,1))}</div>`}
        <div class="tvremote-card-info">
          <div class="tvremote-card-title">${c(C)}</div>
          <div class="tvremote-card-meta">${M.toUpperCase()} · ${ie(v.release_date||v.first_air_date||"")}</div>
        </div>
      `,$.addEventListener("click",U=>{U.target.closest(".tvremote-card-wish")||(location.href=F)});const P=$.querySelector(".tvremote-card-wish");P&&(P.onclick=U=>{U.stopPropagation();const Y=D.toggle({id:v.id,type:M,title:C,poster:v.poster_path});U.currentTarget.classList.toggle("in-list",Y),fe(),be()}),i.appendChild($)})}let G=1,te="all";async function z(a=!0){const i=document.getElementById("tvremote-search"),o=document.getElementById("tvremote-results");if(!i||!o)return;const s=i.value.trim();if(a&&(G=1,o.innerHTML=""),!s){o.innerHTML='<div class="tvremote-empty">Search movies, TV, or people.</div>';return}const M=((await j(`/search/multi?query=${encodeURIComponent(s)}&page=${G}`)).results||[]).filter(C=>C.media_type==="movie"||C.media_type==="tv");V(M,o,{append:!a})}async function me(){const a=document.getElementById("tvremote-catalog");a&&(a.innerHTML="",Object.keys(d).forEach(i=>{const o=document.createElement("button");o.className="remote-pill remote-pill--catalog",o.textContent=i,o.onclick=async()=>{a.querySelectorAll(".remote-pill").forEach(v=>v.classList.remove("active")),o.classList.add("active");const s=await j(d[i]);V((s.results||[]).slice(0,12),document.getElementById("tvremote-catalog-results"))},a.appendChild(o)}))}let ue=null;async function _e(a=null){const i=document.getElementById("global-catalog-tabs"),o=document.getElementById("global-catalog-grid");if(!i||!o)return;i.innerHTML="";const s=Object.keys(d),v=a||ue||s[0];ue=v,s.forEach(M=>{const C=document.createElement("button");C.className="remote-pill remote-pill--catalog global-catalog-tab",C.textContent=M,M===v&&C.classList.add("active"),C.onclick=()=>_e(M),i.appendChild(C)}),o.innerHTML='<div class="tvremote-empty">Loading…</div>';try{const C=((await j(d[v])).results||[]).slice(0,24);V(C,o)}catch{o.innerHTML='<div class="tvremote-empty">Could not load catalog.</div>'}}function fe(){const a=document.getElementById("tvremote-mylist");if(!a)return;const i=D.get();if(!i.length){a.innerHTML='<div class="tvremote-empty">My List is empty.</div>';return}Promise.all(i.slice(0,24).map(o=>j(o.type==="tv"?`/tv/${o.id}`:`/movie/${o.id}`).then(s=>({...s,media_type:o.type})).catch(()=>null))).then(o=>{V(o.filter(Boolean),a)})}function Se(){const a=document.getElementById("tvremote-mini-player");if(!a)return;const i=a.querySelector("iframe"),o=document.querySelector("#player-container iframe"),s=b(),v=(o==null?void 0:o.src)||(s==null?void 0:s.src)||"";v&&i.src!==v&&(i.src=v)}function be(){const a=document.getElementById("global-search-mylist");if(!a)return;const i=D.get();a.innerHTML=i.length?"":'<div class="tvremote-empty">Nothing saved yet.</div>',i.slice(0,30).forEach(o=>{const s=document.createElement("button");s.className="global-search-list-item";const v=o.title||o.name||"Saved Item",M=o.poster?`${se}${o.poster}`:ae(o.poster_path||o.poster);s.innerHTML=`
        ${M?`<img src="${c(M)}" alt="${c(v)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${c(v.slice(0,1))}</span>`}
        <span class="global-search-list-label">${c(v)}</span>
      `,s.onclick=()=>{location.href=o.type==="tv"?oe(o.id):re(o.id)},a.appendChild(s)})}function $e(){const a=document.getElementById("global-hidden-results");if(!a)return;const i=ee.get();a.innerHTML=i.length?"":'<div class="tvremote-empty">Nothing hidden yet.</div>',i.slice(0,40).forEach(o=>{const s=document.createElement("button");s.className="global-search-list-item";const v=o.title||o.name||"Hidden Item",M=o.poster?`${se}${o.poster}`:ae(o.poster_path||o.poster);s.innerHTML=`${M?`<img src="${c(M)}" alt="${c(v)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${c(v.slice(0,1))}</span>`}<span class="global-search-list-label">${c(v)}</span>`,s.onclick=()=>{ee.remove(o.id,o.type),$e()},a.appendChild(s)})}let Ie=null;async function ye(a){const i=document.getElementById("global-search-results");if(!i)return;if(!a){i.innerHTML='<div class="tvremote-empty">Type to search.</div>';return}i.innerHTML='<div class="tvremote-empty">Searching…</div>';const o=await j(`/search/multi?query=${encodeURIComponent(a)}&page=1`);V((o.results||[]).filter(s=>s.media_type==="movie"||s.media_type==="tv"),i)}function Be(){if(window.__slwu=window.__slwu||{},window.__slwu._globalSearchWired)return;window.__slwu._globalSearchWired=!0,be();const a=document.getElementById("global-search-input");a&&a.addEventListener("input",()=>{clearTimeout(Ie),Ie=setTimeout(()=>ye(a.value.trim()),350)});const i=document.getElementById("tvremote-search-clear");i&&(i.onclick=()=>{const o=document.getElementById("tvremote-search"),s=document.getElementById("tvremote-results");o&&(o.value=""),s&&(s.innerHTML='<div class="tvremote-empty">Search movies, TV, or people.</div>')})}function xe(){if(window.__slwu=window.__slwu||{},window.__slwu._tvRemoteWired)return;window.__slwu._tvRemoteWired=!0,me(),fe(),Se();const a=document.getElementById("tvremote-player-fullscreen"),i=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),o=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled);a&&(i||!o)&&(a.style.display="none");const s=document.getElementById("tvremote-search"),v=document.getElementById("tvremote-more");let M=null;s&&s.addEventListener("input",()=>{clearTimeout(M),M=setTimeout(()=>z(!0).catch(console.error),350)});const C=document.getElementById("tvremote-more-header"),F=document.getElementById("tvremote-random-header"),J=()=>{G+=1,z(!1).catch(console.error)};v&&(v.onclick=J),C&&(C.onclick=J),F&&(F.onclick=async()=>{const T=((await j(te==="tv"?"/trending/tv/week":"/trending/movie/week")).results||[]).filter(K=>!ee.has(K.id,K.media_type||(te==="tv"?"tv":"movie"))),q=T[Math.floor(Math.random()*Math.max(T.length,1))];q&&V([q],document.getElementById("tvremote-results"),!0)}),document.querySelectorAll("[data-remote-mode]").forEach(m=>{m.onclick=async()=>{var R,T;if(document.querySelectorAll("[data-remote-tab]").forEach(q=>q.classList.remove("active")),document.querySelectorAll(".tvremote-tab").forEach(q=>q.classList.remove("active")),(R=document.querySelector('[data-remote-tab="search"]'))==null||R.classList.add("active"),(T=document.getElementById("tvremote-tab-search"))==null||T.classList.add("active"),m.dataset.remoteMode==="home"){location.href=le();return}te=m.dataset.remoteMode,await z(!0).catch(console.error)}}),document.querySelectorAll("[data-remote-tab]").forEach(m=>{m.onclick=()=>{document.querySelectorAll("[data-remote-tab]").forEach(R=>R.classList.remove("active")),document.querySelectorAll(".tvremote-tab").forEach(R=>R.classList.remove("active")),m.classList.add("active"),document.getElementById(`tvremote-tab-${m.dataset.remoteTab}`).classList.add("active"),m.dataset.remoteTab==="mylist"&&fe()}});const $=document.getElementById("tvremote-message"),E=m=>{$&&($.textContent=m)},P=()=>{const m=new URLSearchParams(location.search);return{id:m.get("id"),season:parseInt(m.get("season")||"1",10),episode:parseInt(m.get("episode")||"1",10)}},U=document.getElementById("tvremote-nowplaying-toggle");U&&(U.onclick=()=>{const m=document.getElementById("tvremote-mini-player");if(m.hidden)m.hidden=!1,Se();else{const R=m.querySelector("iframe");R&&(R.src="about:blank"),m.hidden=!0}}),document.getElementById("tvremote-prev-episode").onclick=()=>{if(ne!=="tv")return E("Prev Episode works on TV pages.");const m=P(),R=Math.max(1,m.episode-1);location.href=oe(m.id,{season:m.season,episode:R})},document.getElementById("tvremote-next-episode").onclick=()=>{if(ne!=="tv")return E("Next Episode works on TV pages.");const m=P();location.href=oe(m.id,{season:m.season,episode:m.episode+1})};const Y=m=>{document.body.classList.remove("remote-scale-1x","remote-scale-2x","remote-scale-3x"),document.body.classList.add(`remote-scale-${m}x`),localStorage.setItem("slwu_remote_scale",String(m));const R=document.getElementById("tvremote-fullscreen");R&&(R.textContent=`${m}x`)};Y(parseInt(localStorage.getItem("slwu_remote_scale")||"1",10)),document.getElementById("tvremote-fullscreen").onclick=()=>{const m=parseInt(localStorage.getItem("slwu_remote_scale")||"1",10);Y(m===3?1:m+1)};const O=document.getElementById("tvremote-controls-toggle");O&&(O.onclick=()=>document.body.classList.toggle("remote-controls-collapsed")),document.getElementById("tvremote-playpause").onclick=()=>{I("playVideo"),I("pauseVideo"),f("togglePlay"),E("Sent Play / Pause.")},document.getElementById("tvremote-seek-back").onclick=()=>{I("seekTo",[0,!0]),f("seekBack"),E("Sent -30s.")},document.getElementById("tvremote-seek-forward").onclick=()=>{f("seekForward"),E("Sent +30s.")},document.getElementById("tvremote-volume-down").onclick=()=>{f("volumeDown"),E("Sent volume down.")},document.getElementById("tvremote-volume-up").onclick=()=>{f("volumeUp"),E("Sent volume up.")},document.getElementById("tvremote-stop").onclick=()=>{I("stopVideo"),f("stop"),E("Sent stop.")},document.getElementById("tvremote-player-fullscreen").onclick=()=>{const m=y()||document.querySelector("#tvremote-mini-player iframe");m!=null&&m.requestFullscreen&&m.requestFullscreen().catch(()=>{}),f("fullscreenOn"),E("Fullscreen requested.")},document.getElementById("tvremote-player-window").onclick=()=>{document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),f("fullscreenOff"),E("Returned to windowed mode.")},document.getElementById("tvremote-resolution").onclick=()=>E(ne==="theater"?"Use provider settings inside theater player.":"Open Theater to use player settings."),document.getElementById("tvremote-subtitles").onclick=()=>E(ne==="theater"?"Use provider subtitle settings inside theater player.":"Open Theater to use subtitle settings.")}function ze(){if(window.__slwu=window.__slwu||{},window.__slwu._nowPlayingWired)return;window.__slwu._nowPlayingWired=!0;const a=document.getElementById("player-container");if(!a)return;const i=()=>{const s=a.querySelector("iframe");s&&p(s,{page:ne})};i(),new MutationObserver(i).observe(a,{childList:!0,subtree:!0})}function Ye(a={}){if(!/profile\.html$|\/profile\/?$/.test(location.pathname)&&a.page!=="profile")return;const i=a.mountId?document.getElementById(a.mountId):null,o=i||document.body;i||(document.body.className="profile-page"),o.innerHTML=`
      <div class="profile-shell">
        <a class="back-btn profile-back-link" href="${Q("index.html")}">← Return Back</a>
        <div class="profile-hero">
          <div class="tv-remote-kicker">PROFILE</div>
          <h1 id="profile-page-title">Create / Enter Profile</h1>
          <p class="profile-copy">Local profiles only. Name + pin are stored in your browser.</p>
        </div>
        <div id="profile-app" class="profile-app"></div>
      </div>
    `;const s=o.querySelector("#profile-app"),v=document.createElement("div");v.id="profile-pin-modal",v.className="slwu-modal",v.innerHTML=`
      <div class="slwu-modal-card">
        <button class="slwu-modal-close" data-close-modal="pin">×</button>
        <h2>ENTER PIN</h2>
        <p id="profile-pin-copy">Enter your PIN to continue.</p>
        <div class="auth-field">
          <input type="password" id="profile-pin-modal-input" placeholder=" " />
          <label for="profile-pin-modal-input">Pin</label>
          <div class="auth-field-border"></div>
        </div>
        <div class="slwu-modal-actions" style="display:flex;gap:10px;justify-content:flex-end">
          <button id="profile-pin-cancel" class="remote-mini-btn" type="button">Cancel</button>
          <button id="profile-pin-confirm" class="remote-mini-btn remote-mini-btn--primary" type="button">Confirm</button>
        </div>
        <div id="profile-pin-error" class="tvremote-empty" style="display:none;margin-top:10px">Wrong pin.</div>
      </div>
    `,o.appendChild(v);const C=new URLSearchParams(location.search).get("name"),F=h();function J(){const m=B().map(T=>`
        <div class="profile-local-card">
          <div>
            <div class="profile-local-name">${c(T.name)}</div>
            <div class="profile-local-meta">Local profile</div>
          </div>
          <div class="profile-local-actions">
            <button class="remote-mini-btn" data-login="${c(T.name)}">Enter</button>
            <button class="remote-mini-btn" data-delete="${c(T.id)}">Delete</button>
          </div>
        </div>
      `).join("");s.innerHTML=`
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
            <button id="profile-login" class="btn btn-secondary btn-3d" type="button">Login</button>
            <button id="profile-signup" class="btn btn-primary btn-3d" type="button">Sign Up</button>
          </div>
        </div>
        <div class="profile-existing">
          <div class="sheet-title">Existing Profiles</div>
          ${m||'<div class="tvremote-empty">No profiles yet.</div>'}
        </div>
      `;const R=()=>({name:document.getElementById("profile-name").value.trim(),pin:document.getElementById("profile-pin").value.trim()});document.getElementById("profile-login").onclick=()=>{const{name:T,pin:q}=R();if(!T||!q)return alert("Enter name and pin.");if(!S(T,q))return alert("Wrong name or pin.");location.href=Q(`profile/?name=${encodeURIComponent(T)}`)},document.getElementById("profile-signup").onclick=()=>{const T=document.getElementById("profile-name").value.trim(),q=document.getElementById("profile-pin").value.trim();if(!T||!q)return alert("Enter name and pin.");const K=r(T,q);location.href=Q(`profile/?name=${encodeURIComponent(K.name)}`)},s.querySelectorAll("[data-delete]").forEach(T=>T.onclick=()=>{x(T.dataset.delete),J()}),s.querySelectorAll("[data-login]").forEach(T=>T.onclick=()=>{const q=B().find(pe=>pe.name===T.dataset.login);if(!q)return;const K=document.getElementById("profile-pin-modal"),W=document.getElementById("profile-pin-modal-input"),X=document.getElementById("profile-pin-copy"),ce=document.getElementById("profile-pin-error");X&&(X.textContent=`Enter pin for ${q.name}.`),ce&&(ce.style.display="none"),W&&(W.value=""),K.dataset.profile=q.name,K.classList.add("open"),setTimeout(()=>W==null?void 0:W.focus(),20)})}function $(O){const m=B().find(q=>q.name.toLowerCase()===O.toLowerCase())||F;document.getElementById("profile-page-title").textContent=m?m.name:O,s.innerHTML=`
        <div class="profile-dashboard remote-look">
          <div class="remote-btn remote-btn-primary profile-dashboard-title">${c(O)}</div>
          <a class="remote-btn" href="${Q("index.html")}">Home</a>
          <a class="remote-btn" href="${Q("theater/")}">Open Theater</a>
          <a class="remote-btn" href="${Q("profile/")}">Switch Profile</a>
          <button id="profile-delete-current" class="remote-btn">Delete Profile</button>
          <button id="profile-export" class="remote-btn">Export Local Data</button>
        </div>
      `;const R=document.getElementById("profile-delete-current");R&&m&&(R.onclick=()=>{Y(`Delete ${m.name}?`)&&(x(m.id),location.href=Q("profile/"))});const T=document.getElementById("profile-export");T&&(T.onclick=()=>{const q=localStorage.getItem(t)||"default",K={profile:m||null,myList:D.get(),hidden:ee.get(),progress:ke.get(),profileId:q,exportedAt:new Date().toISOString()},W=new Blob([JSON.stringify(K,null,2)],{type:"application/json"}),X=document.createElement("a");X.href=URL.createObjectURL(W),X.download=`slwu_${((m==null?void 0:m.name)||"profile").replace(/\\s+/g,"_")}_export.json`,X.click(),setTimeout(()=>URL.revokeObjectURL(X.href),2500)})}C?$(C):J();const E=document.getElementById("profile-pin-modal"),P=()=>E==null?void 0:E.classList.remove("open");o.querySelectorAll("[data-close-modal='pin']").forEach(O=>O.onclick=P);const U=document.getElementById("profile-pin-cancel");U&&(U.onclick=P);const Y=document.getElementById("profile-pin-confirm");Y&&(Y.onclick=()=>{if(!E)return;const O=E.dataset.profile||"",m=document.getElementById("profile-pin-modal-input"),R=document.getElementById("profile-pin-error"),T=String((m==null?void 0:m.value)||"").trim();if(!(!O||!T)){if(!S(O,T)){R&&(R.style.display="block");return}P(),location.href=Q(`profile/?name=${encodeURIComponent(O)}`)}}),E&&E.addEventListener("click",O=>{O.target===E&&P()})}function Ke(a={}){if(!/theater\.html$|\/theater\/?$/.test(location.pathname)&&a.page!=="theater")return;const i=a.mountId?document.getElementById(a.mountId):null,o=i||document.body;i||(document.body.className="theater-page");const s=b(),v=new URLSearchParams(location.search).get("src")||(s==null?void 0:s.src)||"";o.innerHTML=`
      <div class="theater-layout" id="theater-layout">
        <aside class="theater-side open" id="theater-side">
          <div class="theater-side-toprow">
            <button class="remote-mini-btn theater-side-toggle" id="theater-side-toggle" aria-label="Toggle Sidebar">☰</button>
            <button class="remote-mini-btn" id="theater-tv-btn">TV</button>
            <a href="${le()}" class="remote-mini-btn">Home</a>
            <a href="${Q("profile/")}" class="remote-mini-btn">Profile</a>
          </div>
          <div class="sheet-title">My List</div>
          <div id="theater-mylist" class="theater-mylist"></div>
        </aside>
        <main class="theater-main">
          <div class="theater-player-wrap">
            <iframe id="theater-player" src="${c(v)}" allow="autoplay; fullscreen"></iframe>
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
    `,document.querySelectorAll("[data-close-modal='theater']").forEach($=>$.onclick=()=>document.getElementById("theater-mobile-popup").classList.remove("open")),H(),N(),Be(),xe(),(()=>{const $=document.getElementById("theater-mylist"),E=D.get();$.innerHTML="",E.forEach(P=>{const U=document.createElement("button");U.className="global-search-list-item";const Y=P.poster?ae(P.poster):"";U.innerHTML=`${Y?`<img src="${c(Y)}" alt="${c(P.title)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${c((P.title||"?").slice(0,1))}</span>`}<span class="global-search-list-label">${c(P.title)}</span>`,U.onclick=()=>{const O=P.type==="tv"?Ee(P.id,1,1):we(P.id);F.src=O,setNowPlaying({src:O,title:P.title,type:P.type,id:P.id})},$.appendChild(U)})})(),document.getElementById("theater-side-toggle").onclick=()=>{const $=document.getElementById("theater-side"),E=document.getElementById("theater-layout");$.classList.toggle("open"),E.classList.toggle("side-collapsed",!$.classList.contains("open")),requestAnimationFrame(()=>window.dispatchEvent(new Event("resize")))};const C=document.getElementById("theater-tv-btn");C&&(C.onclick=()=>document.body.classList.toggle("remote-open"));const F=document.getElementById("theater-player"),J=$=>{var E;if(!(!$||!F))try{$.action==="fullscreenOn"&&F.requestFullscreen&&F.requestFullscreen().catch(()=>{}),$.action==="fullscreenOff"&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),(E=F.contentWindow)==null||E.postMessage(JSON.stringify({event:"command",func:"playVideo",args:[]}),"*")}catch{}};window.addEventListener("storage",$=>{if($.key===l)try{J(JSON.parse($.newValue))}catch{}if($.key===w)try{const E=JSON.parse($.newValue||"null");E!=null&&E.src&&(F.src=E.src)}catch{}}),e&&(e.onmessage=$=>J($.data))}function Qe(a={}){const i=a.mountId?document.getElementById(a.mountId):null,o=i||document.body;i||(document.body.className="owner-page");const s="slwu_owner_gate";let v={name:"Sheliveswithme",pin:"654321"};try{v=JSON.parse(localStorage.getItem(s)||JSON.stringify(v))}catch{}o.innerHTML=`
      <div class="slwu-route-shell">
        <div class="slwu-route-card">
          <div class="slwu-route-top">
            <a href="${le()}" class="slwu-back-link">← Back</a>
            <h1>Owner Portal</h1>
          </div>
          <p class="slwu-route-note">Local-only owner gate. Defaults are prefilled so the route works immediately.</p>
          <label class="slwu-field-label">Gate Name</label>
          <input id="owner-name" class="slwu-field-input" value="${c(v.name||"Sheliveswithme")}" />
          <label class="slwu-field-label">PIN</label>
          <input id="owner-pin" class="slwu-field-input" value="${c(v.pin||"654321")}" />
          <button id="owner-save" class="slwu-action-btn">Save Owner Gate</button>
          <div id="owner-msg" class="slwu-route-note"></div>
        </div>
      </div>
    `;const M=document.getElementById("owner-save");M&&M.addEventListener("click",()=>{var J,$,E,P;const C={name:(($=(J=document.getElementById("owner-name"))==null?void 0:J.value)==null?void 0:$.trim())||"Sheliveswithme",pin:((P=(E=document.getElementById("owner-pin"))==null?void 0:E.value)==null?void 0:P.trim())||"654321"};localStorage.setItem(s,JSON.stringify(C));const F=document.getElementById("owner-msg");F&&(F.textContent=`Saved owner gate for ${C.name}.`)})}function Xe(){H(),N(),Be(),xe(),ze();const a=document.getElementById("global-search-input");a&&a.addEventListener("input",()=>{clearTimeout(window.__slwuGlobalSearch),window.__slwuGlobalSearch=setTimeout(()=>ye(a.value.trim()),350)})}window.__slwu=window.__slwu||{},window.__slwu.boot=(a,i={})=>{const o=a||Fe(),s={...i||{},page:o};try{Xe()}catch{}try{switch(o){case"home":We();break;case"movie":Ve();break;case"tv":De();break;case"search":Je();break;case"catalog":break;case"profile":Ye(s);break;case"theater":Ke(s);break;case"owner":Qe(s);break;default:break}}catch{}},document.addEventListener("DOMContentLoaded",()=>window.__slwu.boot())})();function lt(e,n){var t,l;(l=(t=window.__slwu)==null?void 0:t.boot)==null||l.call(t,e,n)}export{lt as boot};
