const vt="d9f0568167a608d0700093444b0c2da7",gt="https://api.themoviedb.org/3",le="https://image.tmdb.org/t/p/w500",fe="https://image.tmdb.org/t/p/original",_e=e=>`https://www.vidking.net/embed/movie/${e}?color=8B5CF6&autoPlay=false`,ke=(e,o,t)=>`https://www.vidking.net/embed/tv/${e}/${o}/${t}?color=8B5CF6&autoPlay=false&nextEpisode=true&episodeSelector=true`,Ke=location.pathname.split("/").filter(Boolean),ht=location.hostname.endsWith("github.io")&&Ke.length?`/${Ke[0]}/`:"/";function ee(e=""){return ht+String(e).replace(/^\/+/,"")}function te(e=""){return new URL(ee(e),location.origin).toString()}function ue(e=""){const o=te("");return e?`${o.replace(/#.*$/,"")}#${String(e).replace(/^#/,"")}`:o}function ft(e=""){const o=new URL(te("search"),location.origin);if(typeof e=="string"){const t=e.replace(/^\?/,"");t&&(o.search=t)}else e&&typeof e=="object"&&Object.entries(e).forEach(([t,i])=>{i==null||i===""||o.searchParams.set(t,String(i))});return o.toString()}function me(e,o={}){const t=new URL(te("movie"),location.origin);return t.searchParams.set("id",String(e)),Object.entries(o||{}).forEach(([i,f])=>t.searchParams.set(i,String(f))),t.toString()}function se(e,o={}){const t=new URL(te("tv"),location.origin);return t.searchParams.set("id",String(e)),Object.entries(o||{}).forEach(([i,f])=>t.searchParams.set(i,String(f))),t.toString()}function U(e){try{const o=e instanceof URL?e:new URL(String(e),location.href);if(o.origin!==location.origin){location.href=o.toString();return}const t=`${o.pathname}${o.search}${o.hash}`;if(t===`${location.pathname}${location.search}${location.hash}`)return;history.pushState({},"",t),window.dispatchEvent(new PopStateEvent("popstate"))}catch{location.href=String(e)}}function bt(){var e;(e=window.__slwu)!=null&&e._spaLinksWired||(window.__slwu=window.__slwu||{},window.__slwu._spaLinksWired=!0,document.addEventListener("click",o=>{var f,L;const t=(L=(f=o.target)==null?void 0:f.closest)==null?void 0:L.call(f,"a");if(!t||t.hasAttribute("data-spa-ignore")||t.target&&t.target!=="_self")return;const i=t.getAttribute("href")||"";if(!(!i||i.startsWith("#"))&&!/^(mailto:|tel:|javascript:)/i.test(i))try{const c=new URL(t.href,location.href);if(c.origin!==location.origin)return;o.preventDefault(),U(c.toString())}catch{}}))}const k=(e,o=document)=>o.querySelector(e),Xe=(e,o=document)=>Array.from(o.querySelectorAll(e));async function j(e){const o=e.includes("?")?"&":"?",t=await fetch(`${gt}${e}${o}api_key=${vt}`);if(!t.ok)throw new Error(`TMDB ${t.status}: ${e}`);return t.json()}function ie(e,o=le){return e?`${o}${e}`:null}function re(e){return e?e.slice(0,4):"N/A"}function Se(e){if(!e)return"";const o=Math.floor(e/60),t=e%60;return o?`${o}h ${t}m`:`${t}m`}function d(e=""){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const J={_key(){return`pt_mylist_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"[]")}catch{return[]}},has(e,o){return this.get().some(t=>t.id===e&&t.type===o)},add(e){const o=this.get();this.has(e.id,e.type)||o.unshift(e),localStorage.setItem(this._key(),JSON.stringify(o))},remove(e,o){const t=this.get().filter(i=>!(i.id===e&&i.type===o));localStorage.setItem(this._key(),JSON.stringify(t))},toggle(e){return this.has(e.id,e.type)?(this.remove(e.id,e.type),!1):(this.add(e),!0)}},oe={_key(){return`pt_hidden_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"[]")}catch{return[]}},has(e,o){return this.get().some(t=>t.id===e&&t.type===o)},add(e){const o=this.get();this.has(e.id,e.type)||o.unshift(e),localStorage.setItem(this._key(),JSON.stringify(o))},remove(e,o){const t=this.get().filter(i=>!(i.id===e&&i.type===o));localStorage.setItem(this._key(),JSON.stringify(t))},toggle(e){return this.has(e.id,e.type)?(this.remove(e.id,e.type),!1):(this.add(e),!0)}},$e={_key(){return`pt_progress_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"{}")}catch{return{}}},save(e,o,t){const i=this.get();i[`${o}_${e}`]={...t,savedAt:Date.now()},localStorage.setItem(this._key(),JSON.stringify(i))},getAll(){return Object.values(this.get())}};window.addEventListener("message",function(e){try{if(typeof e.data!="string")return;const o=JSON.parse(e.data);if(o.type==="PLAYER_EVENT"&&o.data){const t=o.data,i=t.id,f=t.mediaType||"movie";i&&t.progress>1&&t.progress<98&&$e.save(i,f,{id:i,type:f,progress:t.progress,timestamp:t.currentTime,season:t.season,episode:t.episode,title:document.title})}}catch{}});function Ze(e=location.pathname){const o=String(e||"");return o.endsWith("movie.html")||/\/movie\/?$/.test(o)?"movie":o.endsWith("tv.html")||/\/tv\/?$/.test(o)?"tv":o.endsWith("search.html")||/\/search\/?$/.test(o)?"search":/profile\.html$|\/profile\/?$/.test(o)?"profile":/theater\.html$|\/theater\/?$/.test(o)?"theater":/categories\.html$|\/categories\/?$/.test(o)||/\/catalog\/?$/.test(o)?"catalog":/owner\.html$|\/owner\/?$/.test(o)?"owner":"home"}const ae=Ze();function be(){const e=k("#navbar");if(!e||e.dataset.wired)return;e.dataset.wired="1",e.classList.contains("navbar-solid")||window.addEventListener("scroll",()=>{e.classList.toggle("scrolled",window.scrollY>50)},{passive:!0});const o=k("#hamburger"),t=k(".nav-links");o&&t&&o.addEventListener("click",()=>{t.classList.toggle("mobile-open")});const i=k("#search-toggle"),f=k("#nav-search"),L=k("#search-input");if(i&&f&&L){i.addEventListener("click",()=>{f.classList.toggle("open"),f.classList.contains("open")&&L.focus()}),L.addEventListener("keydown",g=>{if(g.key==="Enter"&&L.value.trim()&&U(ft({q:L.value.trim()})),g.key==="Escape"){f.classList.remove("open"),L.value="";const b=document.getElementById("nav-search-dropdown");b&&b.remove()}});let c=null;async function x(){const g=L.value.trim(),b=document.getElementById("nav-search-dropdown");if(!g){b&&b.remove();return}let r=b;r||(r=document.createElement("div"),r.id="nav-search-dropdown",r.className="nav-search-dropdown",f.appendChild(r)),r.innerHTML='<div class="nav-search-dd-loading">Searching…</div>';try{const T=((await j(`/search/multi?query=${encodeURIComponent(g)}&page=1`)).results||[]).filter(p=>p&&(p.media_type==="movie"||p.media_type==="tv")).slice(0,4);if(!T.length){r.innerHTML='<div class="nav-search-dd-empty">No results.</div>';return}r.innerHTML="",T.forEach(p=>{const w=p.media_type==="tv"||p.first_air_date?"tv":"movie",y=p.title||p.name||"Untitled",u=ie(p.poster_path)||"",E=document.createElement("button");E.type="button",E.className="nav-search-dd-card",E.innerHTML=`
            ${u?`<img src="${d(u)}" alt="${d(y)}" loading="lazy" />`:`<div class="nav-search-dd-fallback">${d(y.slice(0,1))}</div>`}
            <div class="nav-search-dd-meta">
              <div class="nav-search-dd-title">${d(y)}</div>
              <div class="nav-search-dd-sub">${w.toUpperCase()} · ${re(p.release_date||p.first_air_date||"")}</div>
            </div>
          `,E.onclick=()=>{r.remove(),f.classList.remove("open"),L.value="",U(w==="tv"?se(p.id):me(p.id))},r.appendChild(E)})}catch{r.innerHTML='<div class="nav-search-dd-empty">Search failed.</div>'}}L.addEventListener("input",()=>{clearTimeout(c),c=setTimeout(()=>x(),220)}),document.addEventListener("click",g=>{const b=document.getElementById("nav-search-dropdown");b&&(g.target===b||b.contains(g.target)||g.target===L||b.remove())})}}function ye(e,o="movie"){const t=e.id,i=e.title||e.name||"Untitled",f=ie(e.poster_path),L=e.release_date||e.first_air_date||"",c=e.vote_average?e.vote_average.toFixed(1):"",x=o==="tv"?se(t):me(t),g=J.has(t,o),b=f?`<img src="${d(f)}" alt="${d(i)}" loading="lazy" />`:`<div class="no-poster" style="aspect-ratio:2/3;background:var(--surface);display:flex;align-items:center;justify-content:center;">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:32px;height:32px;opacity:.3"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
       </div>`,r=document.createElement("div");r.className="movie-card",r.dataset.id=t,r.dataset.type=o,r.innerHTML=`
    ${b}
    <div class="movie-card-overlay">
      <div class="movie-card-title">${d(i)}</div>
      <div class="movie-card-meta">${re(L)}${c?` · ⭐ ${c}`:""}</div>
    </div>
    <div class="movie-card-actions">
      <button class="card-action-btn hide-btn${oe.has(t,o)?" is-hidden":""}" title="${oe.has(t,o)?"Unhide":"Hide"}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="19" y1="5" x2="5" y2="19"/><line x1="5" y1="5" x2="19" y2="19"/></svg>
      </button>
      <button class="card-action-btn list-btn${g?" in-list":""}" title="${g?"Remove from My List":"Add to My List"}">
        ${g?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'}
      </button>
    </div>
  `,r.addEventListener("click",p=>{p.target.closest(".card-action-btn")||U(x)});const S=r.querySelector(".list-btn");S.addEventListener("click",p=>{p.stopPropagation();const w=J.toggle({id:t,type:o,title:i,poster:e.poster_path});S.classList.toggle("in-list",w),S.innerHTML=w?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'});const T=r.querySelector(".hide-btn");return T&&T.addEventListener("click",p=>{p.stopPropagation();const w=oe.toggle({id:t,type:o,title:i,poster:e.poster_path});T.classList.toggle("is-hidden",w),T.title=w?"Unhide":"Hide",w&&r.remove()}),r}function yt(e=8){return Array.from({length:e},()=>{const o=document.createElement("div");return o.className="skeleton-card skeleton",o})}function Qe(e,o,t="movie"){if(o=(o||[]).filter(b=>!oe.has(b.id,b.media_type||t||"movie")),!o||o.length===0)return null;const i=document.createElement("div");i.className="row-wrapper";const f=te(`categories/?q=${encodeURIComponent(e)}`);i.innerHTML=`
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
  `;const L=i.querySelector(".row-track");o.forEach(b=>L.appendChild(ye(b,t)));const c=i.querySelector(".arrow-left"),x=i.querySelector(".arrow-right"),g=600;return c.addEventListener("click",()=>L.scrollBy({left:-g,behavior:"smooth"})),x.addEventListener("click",()=>L.scrollBy({left:g,behavior:"smooth"})),i}async function et(){Et();const e=k("#main-content");be();const o=k("#categories");if(!o)return;["Trending Now","Top Rated","Popular on SheLivesWithUs","Now Playing","Action","Comedy","Horror","Sci-Fi"].forEach(g=>{const b=document.createElement("div");b.className="row-wrapper",b.innerHTML=`
      <div class="row-header"><h2 class="row-title">${d(g)}</h2></div>
      <div class="row-track-container">
        <div class="row-track" id="skel-${g.replace(/\s+/g,"-")}"></div>
      </div>
    `;const r=b.querySelector(".row-track");yt(8).forEach(S=>r.appendChild(S)),o.appendChild(b)});const i=[{title:"Trending Now",path:"/trending/movie/week",type:"movie"},{title:"Top Rated",path:"/movie/top_rated",type:"movie"},{title:"Popular on SheLivesWithUs",path:"/movie/popular",type:"movie"},{title:"Now Playing",path:"/movie/now_playing",type:"movie"},{title:"Action",path:"/discover/movie?with_genres=28",type:"movie"},{title:"Comedy",path:"/discover/movie?with_genres=35",type:"movie"},{title:"Horror",path:"/discover/movie?with_genres=27",type:"movie"},{title:"Sci-Fi",path:"/discover/movie?with_genres=878",type:"movie"},{title:"Romance",path:"/discover/movie?with_genres=10749",type:"movie"},{title:"Documentary",path:"/discover/movie?with_genres=99",type:"movie"},{title:"Animation",path:"/discover/movie?with_genres=16",type:"movie"},{title:"Trending TV Shows",path:"/trending/tv/week",type:"tv"},{title:"Top Rated TV",path:"/tv/top_rated",type:"tv"}];let f=!1;const L=await Promise.allSettled(i.map(g=>j(g.path)));o.innerHTML="";const c=$e.getAll();if(c.length>0){const b=(await Promise.allSettled(c.slice(0,10).map(r=>j(r.type==="tv"?`/tv/${r.id}`:`/movie/${r.id}`).then(S=>({...S,_mediaType:r.type,_progress:r.progress}))))).filter(r=>r.status==="fulfilled").map(r=>r.value);if(b.length>0){const r=Qe("Continue Watching",b,"mixed");r&&(b.forEach((S,T)=>{const p=r.querySelectorAll(".movie-card");p[T]&&(p[T].dataset.type=S._mediaType)}),o.appendChild(r))}}const x=J.get();if(x.length>0){const b=(await Promise.allSettled(x.slice(0,20).map(r=>j(r.type==="tv"?`/tv/${r.id}`:`/movie/${r.id}`).then(S=>({...S,_mediaType:r.type}))))).filter(r=>r.status==="fulfilled").map(r=>r.value);if(b.length>0){const r=document.createElement("div");r.className="row-wrapper",r.id="my-list",r.innerHTML=`
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
      `;const S=r.querySelector(".row-track");b.forEach(w=>{S.appendChild(ye(w,w._mediaType||"movie"))});const T=r.querySelector(".arrow-left"),p=r.querySelector(".arrow-right");T.addEventListener("click",()=>S.scrollBy({left:-600,behavior:"smooth"})),p.addEventListener("click",()=>S.scrollBy({left:600,behavior:"smooth"})),o.appendChild(r)}}L.forEach((g,b)=>{if(g.status!=="fulfilled")return;const S=g.value.results||[],T=i[b];if(!f&&b===0&&S.length>0){f=!0;const w=S[Math.floor(Math.random()*Math.min(5,S.length))];wt(w)}const p=Qe(T.title,S,T.type);p&&o.appendChild(p)}),e&&(e.style.opacity="1")}async function wt(e){if(!e)return;const o=e.id,t=e.media_type==="tv"?"tv":"movie",i=e.title||e.name||"",f=e.overview||"",L=e.backdrop_path?`${fe}${e.backdrop_path}`:"",c=k("#hero-backdrop"),x=k("#hero-title"),g=k("#hero-desc"),b=k("#hero-meta"),r=k("#hero-play-btn"),S=k("#hero-info-btn");c&&L&&(c.style.backgroundImage=`url(${L})`),x&&(x.textContent=i),g&&(g.textContent=f);try{const w=await j(`/${t}/${o}`),y=w.vote_average?w.vote_average.toFixed(1):"",u=(w.genres||[]).slice(0,3).map(N=>N.name).join(", "),E=w.runtime?Se(w.runtime):w.episode_run_time?Se(w.episode_run_time[0]):"",$=re(w.release_date||w.first_air_date);b&&(b.innerHTML=`
        ${y?`<span class="rating"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${y}</span>`:""}
        <span>${$}</span>
        ${E?`<span>${E}</span>`:""}
        ${u?`<span>${d(u)}</span>`:""}
      `)}catch{}const T=t==="tv"?se(o):me(o);r&&r.addEventListener("click",()=>{Lt(T,L,i)}),S&&S.addEventListener("click",()=>{U(T)});const p=document.querySelector(".hero-buttons");if(p&&!document.getElementById("hero-list-btn")){const w=document.createElement("button");w.id="hero-list-btn",w.className="btn btn-secondary btn-3d";const y=J.has(o,t);w.textContent=y?"In My List":"Add to My List",w.onclick=()=>{const u=J.toggle({id:o,type:t,title:i,poster:e.poster_path});w.textContent=u?"In My List":"Add to My List"},p.appendChild(w)}}function Et(){const e=k("#splash-screen");if(!e)return;if(sessionStorage.getItem("pt_splash")){e.style.display="none";const t=k("#main-content");t&&(t.style.opacity="1");return}setTimeout(()=>{e.classList.add("fade-out"),setTimeout(()=>{e.style.display="none",sessionStorage.setItem("pt_splash","1")},800)},3e3)}async function tt(){be(),await at();const o=new URLSearchParams(location.search).get("id");if(!o){U(ue());return}try{const t=await j(`/movie/${o}?append_to_response=credits,similar`);document.title=`SheLivesWithUs — ${t.title||"Movie"}`;const i=t.backdrop_path?`${fe}${t.backdrop_path}`:"",f=k("#detail-backdrop");f&&i&&(f.style.backgroundImage=`url(${i})`);const L=k("#detail-header");if(L){const u=(t.genres||[]).map(W=>`<span class="genre-pill">${d(W.name)}</span>`).join(""),E=t.vote_average?t.vote_average.toFixed(1):"N/A",$=J.has(t.id,"movie");L.innerHTML=`
        <h1 class="detail-title">${d(t.title||"")}</h1>
        <div class="detail-meta">
          <span class="rating-badge">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${d(E)}
          </span>
          <span>${re(t.release_date)}</span>
          ${t.runtime?`<span>${Se(t.runtime)}</span>`:""}
          ${u}
        </div>
        <p class="detail-overview">${d(t.overview||"")}</p>
        <div class="detail-action-row">
          <button class="detail-list-btn ${$?"in-list":""}" id="detail-list-btn">
            ${$?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'}
          </button>
          <button class="detail-list-btn" id="watch-in-theater-btn">Watch in Theater</button>
        </div>
      `;const N=L.querySelector("#detail-list-btn");N.addEventListener("click",()=>{const W=J.toggle({id:t.id,type:"movie",title:t.title,poster:t.poster_path});N.className=`detail-list-btn ${W?"in-list":""}`,N.innerHTML=W?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'});const R=L.querySelector("#watch-in-theater-btn");R&&R.addEventListener("click",()=>{const W=new URL(te("theater/"));W.searchParams.set("src",_e(o)),U(W.toString())})}const c=k("#player-container");c&&(c.innerHTML=`<iframe src="${_e(o)}" allow="autoplay; fullscreen"></iframe>`);const x=k("#sidebar-poster");x&&t.poster_path&&(x.src=`${le}${t.poster_path}`,x.alt=t.title||"",x.style.display="");const g=k("#sidebar-list-btn");if(g){const u=()=>{const E=J.has(t.id,"movie");g.innerHTML=E?'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'};u(),g.addEventListener("click",()=>{J.toggle({id:t.id,type:"movie",title:t.title,poster:t.poster_path}),u()})}const b=k("#sidebar-share-btn");b&&b.addEventListener("click",()=>{navigator.share?navigator.share({title:`${t.title} — SheLivesWithUs`,url:location.href}):navigator.clipboard.writeText(location.href).then(()=>{b.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Link Copied!',setTimeout(()=>{b.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Share'},2e3)})});const r=document.querySelector('meta[property="og:title"]'),S=document.querySelector('meta[property="og:description"]'),T=document.querySelector('meta[property="og:image"]');r&&(r.content=`${t.title} — SheLivesWithUs`),S&&(S.content=t.overview||"Watch free on SheLivesWithUs"),T&&t.backdrop_path&&(T.content=`${fe}${t.backdrop_path}`);const p=k("#detail-info");p&&t&&(p.innerHTML=`
        <div class="detail-info-grid">
          ${t.status?`<div class="info-item"><label>Status</label><span>${d(t.status)}</span></div>`:""}
          ${t.budget?`<div class="info-item"><label>Budget</label><span>$${(t.budget/1e6).toFixed(1)}M</span></div>`:""}
          ${t.revenue?`<div class="info-item"><label>Revenue</label><span>$${(t.revenue/1e6).toFixed(1)}M</span></div>`:""}
          ${t.original_language?`<div class="info-item"><label>Language</label><span>${d(t.original_language.toUpperCase())}</span></div>`:""}
          ${(t.production_companies||[]).length?`<div class="info-item"><label>Studio</label><span>${d(t.production_companies[0].name)}</span></div>`:""}
        </div>
      `);const w=(t.credits&&t.credits.cast||[]).slice(0,20);if(w.length>0){const u=k("#cast-section"),E=k("#cast-row");u&&E&&(u.style.display="",w.forEach($=>{const N=$.profile_path?`<img class="cast-img" src="${le}${$.profile_path}" alt="${d($.name)}" loading="lazy" />`:'<div class="cast-img" style="background:var(--bg4);border-radius:var(--radius-sm);"></div>',R=document.createElement("div");R.className="cast-card",R.innerHTML=`
            ${N}
            <div class="cast-name">${d($.name)}</div>
            <div class="cast-char">${d($.character||"")}</div>
          `,E.appendChild(R)}))}const y=(t.similar&&t.similar.results||[]).slice(0,20);if(y.length>0){const u=k("#similar-section"),E=k("#similar-row");u&&E&&(u.style.display="",y.forEach($=>E.appendChild(ye($,"movie"))))}}catch(t){console.error("Movie detail error:",t);const i=k("#detail-header");i&&(i.innerHTML='<p style="color:var(--text-muted)">Failed to load movie details. Please try again.</p>')}}async function ot(){be(),await at();const e=new URLSearchParams(location.search),o=e.get("id"),t=parseInt(e.get("season")||"1",10),i=parseInt(e.get("episode")||"1",10);if(!o){U(ue());return}let f=t,L=i;try{let r=function(y,u){const E=k("#player-container");E&&(E.innerHTML=`<iframe src="${ke(o,y,u)}" allow="autoplay; fullscreen"></iframe>`);const $=new URL(location.href);$.searchParams.set("season",y),$.searchParams.set("episode",u),history.replaceState(null,"",$.toString())};const c=await j(`/tv/${o}?append_to_response=credits,similar`);document.title=`SheLivesWithUs — ${c.name||"TV Show"}`;const x=c.backdrop_path?`${fe}${c.backdrop_path}`:"",g=k("#detail-backdrop");g&&x&&(g.style.backgroundImage=`url(${x})`);const b=k("#detail-header");if(b){const y=(c.genres||[]).map(R=>`<span class="genre-pill">${d(R.name)}</span>`).join(""),u=c.vote_average?c.vote_average.toFixed(1):"N/A",E=J.has(c.id,"tv");b.innerHTML=`
        <h1 class="detail-title">${d(c.name||"")}</h1>
        <div class="detail-meta">
          <span class="rating-badge">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${d(u)}
          </span>
          <span>${re(c.first_air_date)}</span>
          ${c.number_of_seasons?`<span>${c.number_of_seasons} Season${c.number_of_seasons!==1?"s":""}</span>`:""}
          ${y}
        </div>
        <p class="detail-overview">${d(c.overview||"")}</p>
        <div class="detail-action-row">
          <button class="detail-list-btn ${E?"in-list":""}" id="detail-list-btn">
            ${E?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'}
          </button>
          <button class="detail-list-btn" id="watch-in-theater-btn">Watch in Theater</button>
        </div>
      `;const $=b.querySelector("#detail-list-btn");$.addEventListener("click",()=>{const R=J.toggle({id:c.id,type:"tv",title:c.name,poster:c.poster_path});$.className=`detail-list-btn ${R?"in-list":""}`,$.innerHTML=R?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'});const N=b.querySelector("#watch-in-theater-btn");N&&N.addEventListener("click",()=>{const R=new URL(te("theater/"));R.searchParams.set("src",ke(o,f,L)),U(R.toString())})}r(f,L);const S=(c.seasons||[]).filter(y=>y.season_number>0);if(S.length>0){const y=k("#episode-selector"),u=k("#season-select"),E=k("#episodes-grid");if(y&&u&&E){y.style.display="",S.forEach(N=>{const R=document.createElement("option");R.value=N.season_number,R.textContent=`Season ${N.season_number}`,N.season_number===f&&(R.selected=!0),u.appendChild(R)});async function $(N){E.innerHTML='<div class="spinner" style="margin:20px auto;"></div>';try{const W=(await j(`/tv/${o}/season/${N}`)).episodes||[];E.innerHTML="",W.forEach(G=>{const ne=G.still_path?`${le}${G.still_path}`:"",Y=document.createElement("div");Y.className=`episode-card${G.episode_number===L&&N===f?" active":""}`,Y.innerHTML=`
                ${ne?`<img class="episode-thumb" src="${d(ne)}" alt="Episode ${G.episode_number}" loading="lazy" />`:'<div class="episode-thumb" style="background:var(--surface);flex:0 0 120px;"></div>'}
                <div class="episode-info">
                  <div class="episode-num">Episode ${G.episode_number}</div>
                  <div class="episode-title">${d(G.name||"")}</div>
                  <div class="episode-desc">${d(G.overview||"No description available.")}</div>
                </div>
              `,Y.addEventListener("click",()=>{f=N,L=G.episode_number,Xe(".episode-card").forEach(ve=>ve.classList.remove("active")),Y.classList.add("active"),r(f,L);const pe=k("#player-container");pe&&pe.scrollIntoView({behavior:"smooth",block:"start"})}),E.appendChild(Y)})}catch{E.innerHTML='<p style="color:var(--text-muted);padding:12px;">Failed to load episodes.</p>'}}$(f),u.addEventListener("change",()=>{f=parseInt(u.value,10),L=1,$(f),r(f,L)})}}const T=k("#detail-info");T&&(T.innerHTML=`
        <div class="detail-info-grid">
          ${c.status?`<div class="info-item"><label>Status</label><span>${d(c.status)}</span></div>`:""}
          ${c.type?`<div class="info-item"><label>Type</label><span>${d(c.type)}</span></div>`:""}
          ${c.number_of_episodes?`<div class="info-item"><label>Episodes</label><span>${c.number_of_episodes}</span></div>`:""}
          ${c.original_language?`<div class="info-item"><label>Language</label><span>${d(c.original_language.toUpperCase())}</span></div>`:""}
          ${c.networks&&c.networks[0]?`<div class="info-item"><label>Network</label><span>${d(c.networks[0].name)}</span></div>`:""}
        </div>
      `);const p=(c.credits&&c.credits.cast||[]).slice(0,20);if(p.length>0){const y=k("#cast-section"),u=k("#cast-row");y&&u&&(y.style.display="",p.forEach(E=>{const $=E.profile_path?`<img class="cast-img" src="${le}${E.profile_path}" alt="${d(E.name)}" loading="lazy" />`:'<div class="cast-img" style="background:var(--bg4);border-radius:var(--radius-sm);"></div>',N=document.createElement("div");N.className="cast-card",N.innerHTML=`
            ${$}
            <div class="cast-name">${d(E.name)}</div>
            <div class="cast-char">${d(E.character||"")}</div>
          `,u.appendChild(N)}))}const w=(c.similar&&c.similar.results||[]).slice(0,20);if(w.length>0){const y=k("#similar-section"),u=k("#similar-row");y&&u&&(y.style.display="",w.forEach(E=>u.appendChild(ye(E,"tv"))))}}catch(c){console.error("TV detail error:",c);const x=k("#detail-header");x&&(x.innerHTML='<p style="color:var(--text-muted)">Failed to load show details. Please try again.</p>')}}function nt(){be();const e=k("#main-search-input"),o=k("#search-clear"),t=k("#search-status"),i=k("#search-results"),f=Xe(".filter-btn"),L=new URLSearchParams(location.search),c=L.get("q")||"",x=L.get("type")||"all";let g=x!=="all"?x:"all",b=null,r="";f.forEach(p=>{p.classList.toggle("active",p.dataset.filter===g)}),f.forEach(p=>{p.addEventListener("click",()=>{g=p.dataset.filter,f.forEach(w=>w.classList.toggle("active",w===p)),r?T(r):g!=="all"&&T("")})}),e&&(e.value=c,e.addEventListener("input",()=>{const p=e.value.trim();o.style.display=p?"flex":"none",clearTimeout(b),b=setTimeout(()=>T(p),500)}),c?(o.style.display="flex",T(c)):g!=="all"?T(""):S()),o&&o.addEventListener("click",()=>{e.value="",o.style.display="none",e.focus(),S()});function S(){t.textContent="",i.innerHTML=`
      <div class="no-results">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <h3>Search SheLivesWithUs</h3>
        <p>Find movies and TV shows</p>
      </div>
    `}async function T(p){if(r=p,!p&&g==="all"){S();return}t.textContent="Searching…",i.innerHTML="";const w=i;for(let y=0;y<12;y++){const u=document.createElement("div");u.className="skeleton-card skeleton",u.style.aspectRatio="2/3",w.appendChild(u)}try{let y=[];if(p){let u="/search/multi";g==="movie"?u="/search/movie":g==="tv"&&(u="/search/tv"),y=((await j(`${u}?query=${encodeURIComponent(p)}&page=1`)).results||[]).filter($=>!oe.has($.id,$.media_type||g))}else y=(await j(`${g==="movie"?"/movie/popular":"/tv/popular"}`)).results||[];if(g!=="all"&&p&&(y=y.filter(u=>(u.media_type||g)===g)),i.innerHTML="",y.length===0){t.textContent="",i.innerHTML=`
          <div class="no-results" style="grid-column:1/-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <h3>No results found</h3>
            <p>Try a different search term or browse our categories on the home page.</p>
          </div>
        `;return}t.textContent=p?`${y.length} result${y.length!==1?"s":""} for "${p}"`:`Showing popular ${g==="tv"?"TV shows":"movies"}`,y.forEach(u=>{const E=u.media_type||g,$=u.id,N=u.title||u.name||"Untitled",R=ie(u.poster_path),W=u.release_date||u.first_air_date||"",G=u.vote_average?u.vote_average.toFixed(1):"",ne=E==="tv"?se($):me($),Y=document.createElement("div");Y.className="search-card fade-in",Y.innerHTML=`
          ${R?`<img src="${d(R)}" alt="${d(N)}" loading="lazy" />`:`<div class="no-poster">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                 No Image
               </div>`}
          <div class="search-card-info">
            <div class="search-card-title">${d(N)}</div>
            <div class="search-card-meta">
              <span class="type-badge ${E==="tv"?"tv":"movie"}">${E==="tv"?"TV":"Movie"}</span>
              ${re(W)}
              ${G?`· ⭐ ${G}`:""}
            </div>
          </div>
        `,Y.addEventListener("click",()=>{U(ne)}),i.appendChild(Y)})}catch(y){console.error("Search error:",y),i.innerHTML='<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px">Search failed. Please try again.</p>',t.textContent=""}}}function st(e,o){return new Promise(t=>{const i=document.createElement("div");i.className="play-loader",i.innerHTML=`
      <div class="play-loader-backdrop" style="background-image:url(${d(e||"")})"></div>
      <div class="play-loader-overlay"></div>
      <div class="play-loader-content">
        <div class="play-loader-logo">SHELIVESWITHUS</div>
        <div class="play-loader-title">${d(o||"")}</div>
        <div class="play-loader-ring"></div>
      </div>
    `,document.body.appendChild(i),requestAnimationFrame(()=>{requestAnimationFrame(()=>{i.classList.add("active")})}),setTimeout(()=>{i.classList.add("fade-out"),setTimeout(()=>{i.remove(),t()},600)},2400)})}function Lt(e,o,t){sessionStorage.setItem("pt_play_loader",JSON.stringify({backdrop:o,title:t})),st(o,t).then(()=>{U(e)})}function at(){const e=sessionStorage.getItem("pt_play_loader");if(e){sessionStorage.removeItem("pt_play_loader");try{const{backdrop:o,title:t}=JSON.parse(e);return st(o,t)}catch{}}return Promise.resolve()}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});document.addEventListener("DOMContentLoaded",()=>{switch(ae){case"home":et();break;case"movie":tt();break;case"tv":ot();break;case"search":nt();break}});(function(){const e="BroadcastChannel"in window?new BroadcastChannel("slwu_remote"):null,o="slwu_profiles",t="pt_active_profile",i="slwu_remote_state",f="slwu_now_playing",L="slwu_ui_scale_2x",c={"New Releases":"/movie/now_playing",Family:"/discover/movie?with_genres=10751",Comedy:"/discover/movie?with_genres=35",Action:"/discover/movie?with_genres=28",Horror:"/discover/movie?with_genres=27",Classics:"/discover/movie?primary_release_date.lte=1999-12-31&sort_by=popularity.desc",Cartoons:"/discover/movie?with_genres=16"};function x(){try{return JSON.parse(localStorage.getItem(o)||"[]")}catch{return[]}}function g(s){localStorage.setItem(o,JSON.stringify(s))}function b(){const s=localStorage.getItem(t);return x().find(l=>l.id===s)||null}function r(s,l){const n=x();let a=n.find(v=>v.name.toLowerCase()===String(s).trim().toLowerCase());return a?a.pin=String(l).trim():(a={id:"p_"+Date.now(),name:String(s).trim(),pin:String(l).trim(),createdAt:Date.now()},n.push(a)),g(n),localStorage.setItem(t,a.id),a}function S(s,l){const n=x().find(a=>a.name.toLowerCase()===String(s).trim().toLowerCase()&&String(a.pin)===String(l).trim());return n&&localStorage.setItem(t,n.id),n}function T(s){const l=x().filter(n=>n.id!==s);g(l),localStorage.getItem(t)===s&&localStorage.removeItem(t)}function p(s,l={}){var v;if(!s||!s.src)return;const n=((v=document.querySelector("#sidebar-poster"))==null?void 0:v.src)||"",a={src:s.src,title:document.title,url:location.href,page:ae,poster:n,ts:Date.now(),...l};localStorage.setItem(f,JSON.stringify(a))}function w(){try{return JSON.parse(localStorage.getItem(f)||"null")}catch{return null}}function y(s,l={}){const n={action:s,payload:l,ts:Date.now()};localStorage.setItem(i,JSON.stringify(n)),e&&e.postMessage(n)}function u(){var s,l;return document.fullscreenElement?document.exitFullscreen().catch(()=>{}):(l=(s=document.documentElement).requestFullscreen)==null?void 0:l.call(s).catch(()=>{})}function E(){return document.querySelector("#player-container iframe, #theater-player")}function $(s,l=[]){const n=E()||document.querySelector("#tvremote-mini-player iframe");if(!n||!n.contentWindow)return!1;try{return n.contentWindow.postMessage(JSON.stringify({event:"command",func:s,args:l}),"*"),!0}catch{return!1}}function N(){var l;document.querySelectorAll(".footer, .ad-container-native, .ad-container-banner, .ad-toggle-wrap").forEach(n=>n.remove());const s=document.querySelector("#navbar .nav-left");if(s){const n=s.querySelector(".nav-logo");n&&n.remove()}if(document.querySelector("#navbar .nav-right"),(l=document.getElementById("nav-collapse-btn"))==null||l.remove(),!document.getElementById("global-action-stack")){const n=document.createElement("div");n.id="global-action-stack",n.className="global-action-stack",n.innerHTML=`
        <button id="global-stack-toggle" class="global-fab global-fab--toggle" aria-label="Menu">☰</button>
        <div class="global-action-stack-menu">
          <button id="global-home-btn" class="global-fab global-fab--stack" aria-label="Home">Home</button>
          <button id="global-search-btn" class="global-fab global-fab--stack global-fab--search" aria-label="Search">Search</button>
          <button id="global-mylist-btn" class="global-fab global-fab--stack">My List</button>
          <button id="global-catalog-btn" class="global-fab global-fab--stack">Catalog</button>
          <button id="global-theater-btn" class="global-fab global-fab--stack">Theater</button>
          <button id="global-more-btn" class="global-fab global-fab--stack">More</button>

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
        </div>
      `,document.body.appendChild(n)}if(!document.getElementById("slwu-brand-pin")){const n=document.createElement("div");n.id="slwu-brand-pin",n.textContent="SheLivesWithMe",document.body.appendChild(n)}if(!document.getElementById("slwu-profile-modal")){const n=document.createElement("div");n.id="slwu-profile-modal",n.className="slwu-modal",n.innerHTML=`
        <div class="slwu-modal-card">
          <button class="slwu-modal-close" data-close-modal="profile">×</button>
          <h2>PROFILE</h2>
          <p>Scan to open the local profile page.</p>
          <img id="slwu-profile-qr" alt="Profile QR Code" />
          <div class="slwu-modal-actions">
            <a class="btn btn-primary btn-3d" href="${ee("profile/")}">Open Profile</a>
          </div>
        </div>
      `,document.body.appendChild(n)}if(!document.getElementById("tv-remote-panel")){const n=document.createElement("aside");n.id="tv-remote-panel",n.className="tv-remote-panel",n.innerHTML=`
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
      `,document.body.appendChild(n)}if(!document.getElementById("global-search-sheet")){const n=document.createElement("section");n.id="global-search-sheet",n.className="global-search-sheet",n.innerHTML=`
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
      `,document.body.appendChild(n)}}function R(){const s=document.body;if(window.__slwu=window.__slwu||{},window.__slwu._globalButtonsWired)return;window.__slwu._globalButtonsWired=!0;const l=document.getElementById("tvremote-close"),n=document.getElementById("profile-open-btn"),a=document.getElementById("slwu-profile-modal"),v=document.getElementById("global-theater-btn"),H=document.getElementById("global-mylist-btn"),B=document.getElementById("global-hidden-btn"),V=document.getElementById("global-stack-toggle"),C=document.getElementById("global-home-btn"),P=document.getElementById("global-more-btn"),_=document.getElementById("global-layout-btn"),A=document.getElementById("global-nav-toggle-btn"),D=document.getElementById("global-server-btn"),z=document.getElementById("global-appfs-btn"),F=document.getElementById("global-scale-btn"),m=document.getElementById("global-tv-btn"),q=document.getElementById("global-profile-btn"),M=document.getElementById("global-catalog-btn"),O=document.getElementById("global-search-btn"),Q=document.getElementById("global-search-sheet"),X=document.getElementById("global-hidden-sheet"),Z=document.getElementById("global-catalog-sheet"),K=()=>{s.classList.remove("sheet-open","hidden-open","catalog-open")},ge="slwu_layout_mode",Pe=()=>localStorage.getItem(ge)||"classic",He=h=>{const I=h==="netflix"?"netflix":"classic";s.classList.toggle("layout-netflix",I==="netflix"),localStorage.setItem(ge,I);const de=I==="netflix"?"Netflix":"Classic";_&&(_.textContent=`Layout: ${de}`)};He(Pe());const mt=()=>He(Pe()==="netflix"?"classic":"netflix"),Ne="slwu_nav_collapsed",Re=h=>{const I=!!h;s.classList.toggle("nav-collapsed",I),localStorage.setItem(Ne,I?"1":"0"),A&&(A.textContent=`Menu Bar: ${I?"Off":"On"}`)};Re(localStorage.getItem(Ne)==="1");const qe="slwu_server_mode",he=["auto","oxygen","hydrogen","lithium"],ut=h=>h==="oxygen"?"Oxygen":h==="hydrogen"?"Hydrogen":h==="lithium"?"Lithium":"Auto",Ae=()=>localStorage.getItem(qe)||"auto",Oe=h=>{const I=he.includes(h)?h:"auto";localStorage.setItem(qe,I),D&&(D.textContent=`Server: ${ut(I)}`),window.__slwu.server=I};Oe(Ae());const Ue=(h={})=>{K(),s.classList.add("sheet-open"),Ee();const I=document.getElementById("global-search-input"),de=document.getElementById("global-search-results");h.prefill&&I&&(I.value=String(h.prefill)),I&&I.focus(),de&&!(I&&I.value.trim())&&(de.innerHTML='<div class="tvremote-empty">Type to search.</div>'),I&&I.value.trim()&&Le(I.value.trim())};l&&(l.onclick=()=>s.classList.remove("remote-open")),n&&(n.onclick=()=>{const h=document.getElementById("slwu-profile-qr"),I=te("profile/");h&&(h.src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data="+encodeURIComponent(I)),a.classList.add("open")}),document.querySelectorAll("[data-close-modal='profile']").forEach(h=>h.onclick=()=>a.classList.remove("open")),a&&a.addEventListener("click",h=>{h.target===a&&a.classList.remove("open")}),v&&(v.onclick=()=>{const h=w(),I=new URL(te("theater/"));h&&h.src&&I.searchParams.set("src",h.src),U(I.toString())}),C&&(C.onclick=()=>{K(),s.classList.remove("stack-open","remote-open"),s.classList.remove("more-open"),U(ue())}),_&&(_.onclick=()=>mt()),A&&(A.onclick=()=>Re(!s.classList.contains("nav-collapsed"))),D&&(D.onclick=()=>{const h=Ae(),I=he.indexOf(h),de=he[(I+1)%he.length];Oe(de)}),H&&(H.onclick=()=>{Ue({prefill:""});const h=document.getElementById("global-search-results");h&&(h.innerHTML='<div class="tvremote-empty">Choose from My List or search.</div>')}),B&&(B.onclick=()=>{K(),s.classList.add("hidden-open"),xe()}),V&&(V.onclick=()=>s.classList.toggle("stack-open")),V&&V.addEventListener("click",()=>{s.classList.contains("stack-open")||s.classList.remove("more-open")}),P&&(P.onclick=()=>s.classList.toggle("more-open")),z&&(z.onclick=()=>u());const Fe=h=>{s.classList.remove("ui-scale-1x","ui-scale-2x","ui-scale-3x"),s.classList.add(`ui-scale-${h}x`),localStorage.setItem(L,String(h)),F&&(F.textContent=`${h}x`)},We=parseInt(localStorage.getItem(L)||"1",10);Fe([1,2,3].includes(We)?We:1),F&&(F.onclick=()=>{const h=parseInt(localStorage.getItem(L)||"1",10);Fe(h===3?1:h+1)}),m&&(m.onclick=()=>s.classList.toggle("remote-open")),q&&(q.onclick=()=>{const h=document.getElementById("slwu-profile-qr"),I=te("profile/");h&&(h.src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data="+encodeURIComponent(I)),a==null||a.classList.add("open")}),M&&(M.onclick=()=>{K(),s.classList.add("catalog-open"),Ie()}),O&&(O.onclick=()=>Ue());const De=document.getElementById("global-search-close");De&&(De.onclick=()=>K());const Ve=document.getElementById("global-search-clear");Ve&&(Ve.onclick=()=>{const h=document.getElementById("global-search-input"),I=document.getElementById("global-search-results");h&&(h.value=""),I&&(I.innerHTML='<div class="tvremote-empty">Type to search.</div>')});const Je=document.getElementById("global-hidden-close");Je&&(Je.onclick=()=>K());const je=document.getElementById("global-catalog-close");je&&(je.onclick=()=>K()),Q&&Q.addEventListener("click",h=>{h.target===Q&&K()}),X&&X.addEventListener("click",h=>{h.target===X&&K()}),Z&&Z.addEventListener("click",h=>{h.target===Z&&K()}),document.addEventListener("keydown",h=>{h.key==="Escape"&&(K(),s.classList.remove("remote-open","more-open"))});const Ge=document.getElementById("tv-remote-panel"),Ye=document.getElementById("global-action-stack");document.addEventListener("pointerdown",h=>{if(!s.classList.contains("remote-open"))return;const I=h.target;Ge&&Ge.contains(I)||Ye&&Ye.contains(I)||s.classList.remove("remote-open")});const pt=1e4;let ce=null;const ze=()=>{if(s.classList.contains("stack-open")){s.classList.remove("stack-faded"),ce&&clearTimeout(ce),ce=null;return}s.classList.remove("stack-faded"),ce&&clearTimeout(ce),ce=setTimeout(()=>{s.classList.contains("stack-open")||s.classList.add("stack-faded")},pt)};["mousemove","touchstart","pointerdown","keydown","scroll"].forEach(h=>{window.addEventListener(h,ze,{passive:!0})}),ze()}function W(s,l,n={}){if(!l)return;const a=!!n.append;if(a||(l.innerHTML=""),!s.length){a||(l.innerHTML='<div class="tvremote-empty">No items found.</div>');return}s.forEach(v=>{const H=v.media_type==="tv"||v.first_air_date?"tv":"movie",B=v.title||v.name||"Untitled",V=H==="tv"?se(v.id):me(v.id),C=J.has(v.id,H),P=document.createElement("article");P.className="tvremote-card";const _=ie(v.poster_path)||"";P.innerHTML=`
        <button class="tvremote-card-wish ${C?"in-list":""}" aria-label="Wish List">❤</button>
        ${_?`<img src="${d(_)}" alt="${d(B)}" loading="lazy">`:`<div class="tvremote-card-fallback">${d(B.slice(0,1))}</div>`}
        <div class="tvremote-card-info">
          <div class="tvremote-card-title">${d(B)}</div>
          <div class="tvremote-card-meta">${H.toUpperCase()} · ${re(v.release_date||v.first_air_date||"")}</div>
        </div>
      `,P.addEventListener("click",D=>{D.target.closest(".tvremote-card-wish")||U(V)});const A=P.querySelector(".tvremote-card-wish");A&&(A.onclick=D=>{D.stopPropagation();const z=J.toggle({id:v.id,type:H,title:B,poster:v.poster_path});D.currentTarget.classList.toggle("in-list",z),we(),Ee()}),l.appendChild(P)})}let G=1,ne="all";async function Y(s=!0){const l=document.getElementById("tvremote-search"),n=document.getElementById("tvremote-results");if(!l||!n)return;const a=l.value.trim();if(s&&(G=1,n.innerHTML=""),!a){n.innerHTML='<div class="tvremote-empty">Search movies, TV, or people.</div>';return}const H=((await j(`/search/multi?query=${encodeURIComponent(a)}&page=${G}`)).results||[]).filter(B=>B.media_type==="movie"||B.media_type==="tv");W(H,n,{append:!s})}async function pe(){const s=document.getElementById("tvremote-catalog");s&&(s.innerHTML="",Object.keys(c).forEach(l=>{const n=document.createElement("button");n.className="remote-pill remote-pill--catalog",n.textContent=l,n.onclick=async()=>{s.querySelectorAll(".remote-pill").forEach(v=>v.classList.remove("active")),n.classList.add("active");const a=await j(c[l]);W((a.results||[]).slice(0,12),document.getElementById("tvremote-catalog-results"))},s.appendChild(n)}))}let ve=null;async function Ie(s=null){const l=document.getElementById("global-catalog-tabs"),n=document.getElementById("global-catalog-grid");if(!l||!n)return;l.innerHTML="";const a=Object.keys(c),v=s||ve||a[0];ve=v,a.forEach(H=>{const B=document.createElement("button");B.className="remote-pill remote-pill--catalog global-catalog-tab",B.textContent=H,H===v&&B.classList.add("active"),B.onclick=()=>Ie(H),l.appendChild(B)}),n.innerHTML='<div class="tvremote-empty">Loading…</div>';try{const B=((await j(c[v])).results||[]).slice(0,24);W(B,n)}catch{n.innerHTML='<div class="tvremote-empty">Could not load catalog.</div>'}}function we(){const s=document.getElementById("tvremote-mylist");if(!s)return;const l=J.get();if(!l.length){s.innerHTML='<div class="tvremote-empty">My List is empty.</div>';return}Promise.all(l.slice(0,24).map(n=>j(n.type==="tv"?`/tv/${n.id}`:`/movie/${n.id}`).then(a=>({...a,media_type:n.type})).catch(()=>null))).then(n=>{W(n.filter(Boolean),s)})}function Be(){const s=document.getElementById("tvremote-mini-player");if(!s)return;const l=s.querySelector("iframe"),n=document.querySelector("#player-container iframe"),a=w(),v=(n==null?void 0:n.src)||(a==null?void 0:a.src)||"";v&&l.src!==v&&(l.src=v)}function Ee(){const s=document.getElementById("global-search-mylist");if(!s)return;const l=J.get();s.innerHTML=l.length?"":'<div class="tvremote-empty">Nothing saved yet.</div>',l.slice(0,30).forEach(n=>{const a=document.createElement("button");a.className="global-search-list-item";const v=n.title||n.name||"Saved Item",H=n.poster?`${le}${n.poster}`:ie(n.poster_path||n.poster);a.innerHTML=`
        ${H?`<img src="${d(H)}" alt="${d(v)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${d(v.slice(0,1))}</span>`}
        <span class="global-search-list-label">${d(v)}</span>
      `,a.onclick=()=>{U(n.type==="tv"?se(n.id):me(n.id))},s.appendChild(a)})}function xe(){const s=document.getElementById("global-hidden-results");if(!s)return;const l=oe.get();s.innerHTML=l.length?"":'<div class="tvremote-empty">Nothing hidden yet.</div>',l.slice(0,40).forEach(n=>{const a=document.createElement("button");a.className="global-search-list-item";const v=n.title||n.name||"Hidden Item",H=n.poster?`${le}${n.poster}`:ie(n.poster_path||n.poster);a.innerHTML=`${H?`<img src="${d(H)}" alt="${d(v)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${d(v.slice(0,1))}</span>`}<span class="global-search-list-label">${d(v)}</span>`,a.onclick=()=>{oe.remove(n.id,n.type),xe()},s.appendChild(a)})}let Te=null;async function Le(s){const l=document.getElementById("global-search-results");if(!l)return;if(!s){l.innerHTML='<div class="tvremote-empty">Type to search.</div>';return}l.innerHTML='<div class="tvremote-empty">Searching…</div>';const n=await j(`/search/multi?query=${encodeURIComponent(s)}&page=1`);W((n.results||[]).filter(a=>a.media_type==="movie"||a.media_type==="tv"),l)}function Ce(){if(window.__slwu=window.__slwu||{},window.__slwu._globalSearchWired)return;window.__slwu._globalSearchWired=!0,Ee();const s=document.getElementById("global-search-input");s&&s.addEventListener("input",()=>{clearTimeout(Te),Te=setTimeout(()=>Le(s.value.trim()),350)});const l=document.getElementById("tvremote-search-clear");l&&(l.onclick=()=>{const n=document.getElementById("tvremote-search"),a=document.getElementById("tvremote-results");n&&(n.value=""),a&&(a.innerHTML='<div class="tvremote-empty">Search movies, TV, or people.</div>')})}function Me(){if(window.__slwu=window.__slwu||{},window.__slwu._tvRemoteWired)return;window.__slwu._tvRemoteWired=!0,pe(),we(),Be();const s=document.getElementById("tvremote-player-fullscreen"),l=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),n=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled);s&&(l||!n)&&(s.style.display="none");const a=document.getElementById("tvremote-search"),v=document.getElementById("tvremote-more");let H=null;a&&a.addEventListener("input",()=>{clearTimeout(H),H=setTimeout(()=>Y(!0).catch(console.error),350)});const B=document.getElementById("tvremote-more-header"),V=document.getElementById("tvremote-random-header"),C=()=>{G+=1,Y(!1).catch(console.error)};v&&(v.onclick=C),B&&(B.onclick=C),V&&(V.onclick=async()=>{const M=((await j(ne==="tv"?"/trending/tv/week":"/trending/movie/week")).results||[]).filter(Q=>!oe.has(Q.id,Q.media_type||(ne==="tv"?"tv":"movie"))),O=M[Math.floor(Math.random()*Math.max(M.length,1))];O&&W([O],document.getElementById("tvremote-results"),!0)}),document.querySelectorAll("[data-remote-mode]").forEach(m=>{m.onclick=async()=>{var q,M;if(document.querySelectorAll("[data-remote-tab]").forEach(O=>O.classList.remove("active")),document.querySelectorAll(".tvremote-tab").forEach(O=>O.classList.remove("active")),(q=document.querySelector('[data-remote-tab="search"]'))==null||q.classList.add("active"),(M=document.getElementById("tvremote-tab-search"))==null||M.classList.add("active"),m.dataset.remoteMode==="home"){U(ue());return}ne=m.dataset.remoteMode,await Y(!0).catch(console.error)}}),document.querySelectorAll("[data-remote-tab]").forEach(m=>{m.onclick=()=>{document.querySelectorAll("[data-remote-tab]").forEach(q=>q.classList.remove("active")),document.querySelectorAll(".tvremote-tab").forEach(q=>q.classList.remove("active")),m.classList.add("active"),document.getElementById(`tvremote-tab-${m.dataset.remoteTab}`).classList.add("active"),m.dataset.remoteTab==="mylist"&&we()}});const P=document.getElementById("tvremote-message"),_=m=>{P&&(P.textContent=m)},A=()=>{const m=new URLSearchParams(location.search);return{id:m.get("id"),season:parseInt(m.get("season")||"1",10),episode:parseInt(m.get("episode")||"1",10)}},D=document.getElementById("tvremote-nowplaying-toggle");D&&(D.onclick=()=>{const m=document.getElementById("tvremote-mini-player");if(m.hidden)m.hidden=!1,Be();else{const q=m.querySelector("iframe");q&&(q.src="about:blank"),m.hidden=!0}}),document.getElementById("tvremote-prev-episode").onclick=()=>{if(ae!=="tv")return _("Prev Episode works on TV pages.");const m=A(),q=Math.max(1,m.episode-1);U(se(m.id,{season:m.season,episode:q}))},document.getElementById("tvremote-next-episode").onclick=()=>{if(ae!=="tv")return _("Next Episode works on TV pages.");const m=A();U(se(m.id,{season:m.season,episode:m.episode+1}))};const z=m=>{document.body.classList.remove("remote-scale-1x","remote-scale-2x","remote-scale-3x"),document.body.classList.add(`remote-scale-${m}x`),localStorage.setItem("slwu_remote_scale",String(m));const q=document.getElementById("tvremote-fullscreen");q&&(q.textContent=`${m}x`)};z(parseInt(localStorage.getItem("slwu_remote_scale")||"1",10)),document.getElementById("tvremote-fullscreen").onclick=()=>{const m=parseInt(localStorage.getItem("slwu_remote_scale")||"1",10);z(m===3?1:m+1)};const F=document.getElementById("tvremote-controls-toggle");F&&(F.onclick=()=>document.body.classList.toggle("remote-controls-collapsed")),document.getElementById("tvremote-playpause").onclick=()=>{$("playVideo"),$("pauseVideo"),y("togglePlay"),_("Sent Play / Pause.")},document.getElementById("tvremote-seek-back").onclick=()=>{$("seekTo",[0,!0]),y("seekBack"),_("Sent -30s.")},document.getElementById("tvremote-seek-forward").onclick=()=>{y("seekForward"),_("Sent +30s.")},document.getElementById("tvremote-volume-down").onclick=()=>{y("volumeDown"),_("Sent volume down.")},document.getElementById("tvremote-volume-up").onclick=()=>{y("volumeUp"),_("Sent volume up.")},document.getElementById("tvremote-stop").onclick=()=>{$("stopVideo"),y("stop"),_("Sent stop.")},document.getElementById("tvremote-player-fullscreen").onclick=()=>{const m=E()||document.querySelector("#tvremote-mini-player iframe");m!=null&&m.requestFullscreen&&m.requestFullscreen().catch(()=>{}),y("fullscreenOn"),_("Fullscreen requested.")},document.getElementById("tvremote-player-window").onclick=()=>{document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),y("fullscreenOff"),_("Returned to windowed mode.")},document.getElementById("tvremote-resolution").onclick=()=>_(ae==="theater"?"Use provider settings inside theater player.":"Open Theater to use player settings."),document.getElementById("tvremote-subtitles").onclick=()=>_(ae==="theater"?"Use provider subtitle settings inside theater player.":"Open Theater to use subtitle settings.")}function it(){if(window.__slwu=window.__slwu||{},window.__slwu._nowPlayingWired)return;window.__slwu._nowPlayingWired=!0;const s=document.getElementById("player-container");if(!s)return;const l=()=>{const a=s.querySelector("iframe");a&&p(a,{page:ae})};l(),new MutationObserver(l).observe(s,{childList:!0,subtree:!0})}function lt(s={}){if(!/profile\.html$|\/profile\/?$/.test(location.pathname)&&s.page!=="profile")return;const l=s.mountId?document.getElementById(s.mountId):null,n=l||document.body;l||(document.body.className="profile-page"),n.innerHTML=`
      <div class="profile-shell">
        <a class="back-btn profile-back-link" href="${ee("index.html")}">← Return Back</a>
        <div class="profile-hero">
          <div class="tv-remote-kicker">PROFILE</div>
          <h1 id="profile-page-title">Create / Enter Profile</h1>
          <p class="profile-copy">Local profiles only. Name + pin are stored in your browser.</p>
        </div>
        <div id="profile-app" class="profile-app"></div>
      </div>
    `;const a=n.querySelector("#profile-app"),v=document.createElement("div");v.id="profile-pin-modal",v.className="slwu-modal",v.innerHTML=`
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
    `,n.appendChild(v);const B=new URLSearchParams(location.search).get("name"),V=b();function C(){const m=x().map(M=>`
        <div class="profile-local-card">
          <div>
            <div class="profile-local-name">${d(M.name)}</div>
            <div class="profile-local-meta">Local profile</div>
          </div>
          <div class="profile-local-actions">
            <button class="remote-mini-btn" data-login="${d(M.name)}">Enter</button>
            <button class="remote-mini-btn" data-delete="${d(M.id)}">Delete</button>
          </div>
        </div>
      `).join("");a.innerHTML=`
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
      `;const q=()=>({name:document.getElementById("profile-name").value.trim(),pin:document.getElementById("profile-pin").value.trim()});document.getElementById("profile-login").onclick=()=>{const{name:M,pin:O}=q();if(!M||!O)return alert("Enter name and pin.");if(!S(M,O))return alert("Wrong name or pin.");U(ee(`profile/?name=${encodeURIComponent(M)}`))},document.getElementById("profile-signup").onclick=()=>{const M=document.getElementById("profile-name").value.trim(),O=document.getElementById("profile-pin").value.trim();if(!M||!O)return alert("Enter name and pin.");const Q=r(M,O);U(ee(`profile/?name=${encodeURIComponent(Q.name)}`))},a.querySelectorAll("[data-delete]").forEach(M=>M.onclick=()=>{T(M.dataset.delete),C()}),a.querySelectorAll("[data-login]").forEach(M=>M.onclick=()=>{const O=x().find(ge=>ge.name===M.dataset.login);if(!O)return;const Q=document.getElementById("profile-pin-modal"),X=document.getElementById("profile-pin-modal-input"),Z=document.getElementById("profile-pin-copy"),K=document.getElementById("profile-pin-error");Z&&(Z.textContent=`Enter pin for ${O.name}.`),K&&(K.style.display="none"),X&&(X.value=""),Q.dataset.profile=O.name,Q.classList.add("open"),setTimeout(()=>X==null?void 0:X.focus(),20)})}function P(F){const m=x().find(O=>O.name.toLowerCase()===F.toLowerCase())||V;document.getElementById("profile-page-title").textContent=m?m.name:F,a.innerHTML=`
        <div class="profile-dashboard remote-look">
          <div class="remote-btn remote-btn-primary profile-dashboard-title">${d(F)}</div>
          <a class="remote-btn" href="${ee("index.html")}">Home</a>
          <a class="remote-btn" href="${ee("theater/")}">Open Theater</a>
          <a class="remote-btn" href="${ee("profile/")}">Switch Profile</a>
          <button id="profile-delete-current" class="remote-btn">Delete Profile</button>
          <button id="profile-export" class="remote-btn">Export Local Data</button>
        </div>
      `;const q=document.getElementById("profile-delete-current");q&&m&&(q.onclick=()=>{z(`Delete ${m.name}?`)&&(T(m.id),U(ee("profile/")))});const M=document.getElementById("profile-export");M&&(M.onclick=()=>{const O=localStorage.getItem(t)||"default",Q={profile:m||null,myList:J.get(),hidden:oe.get(),progress:$e.get(),profileId:O,exportedAt:new Date().toISOString()},X=new Blob([JSON.stringify(Q,null,2)],{type:"application/json"}),Z=document.createElement("a");Z.href=URL.createObjectURL(X),Z.download=`slwu_${((m==null?void 0:m.name)||"profile").replace(/\\s+/g,"_")}_export.json`,Z.click(),setTimeout(()=>URL.revokeObjectURL(Z.href),2500)})}B?P(B):C();const _=document.getElementById("profile-pin-modal"),A=()=>_==null?void 0:_.classList.remove("open");n.querySelectorAll("[data-close-modal='pin']").forEach(F=>F.onclick=A);const D=document.getElementById("profile-pin-cancel");D&&(D.onclick=A);const z=document.getElementById("profile-pin-confirm");z&&(z.onclick=()=>{if(!_)return;const F=_.dataset.profile||"",m=document.getElementById("profile-pin-modal-input"),q=document.getElementById("profile-pin-error"),M=String((m==null?void 0:m.value)||"").trim();if(!(!F||!M)){if(!S(F,M)){q&&(q.style.display="block");return}A(),U(ee(`profile/?name=${encodeURIComponent(F)}`))}}),_&&_.addEventListener("click",F=>{F.target===_&&A()})}function rt(s={}){if(!/theater\.html$|\/theater\/?$/.test(location.pathname)&&s.page!=="theater")return;const l=s.mountId?document.getElementById(s.mountId):null,n=l||document.body;l||(document.body.className="theater-page");const a=w(),v=new URLSearchParams(location.search).get("src")||(a==null?void 0:a.src)||"";n.innerHTML=`
      <div class="theater-layout" id="theater-layout">
        <aside class="theater-side open" id="theater-side">
          <div class="theater-side-toprow">
            <button class="remote-mini-btn theater-side-toggle" id="theater-side-toggle" aria-label="Toggle Sidebar">☰</button>
          </div>
          <div class="sheet-title">My List</div>
          <div id="theater-mylist" class="theater-mylist"></div>
        </aside>
        <main class="theater-main">
          <div class="theater-player-wrap">
            <iframe id="theater-player" src="${d(v)}" allow="autoplay; fullscreen"></iframe>
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
    `,document.querySelectorAll("[data-close-modal='theater']").forEach(C=>C.onclick=()=>document.getElementById("theater-mobile-popup").classList.remove("open")),N(),R(),Ce(),Me(),(()=>{const C=document.getElementById("theater-mylist"),P=J.get();C.innerHTML="",P.forEach(_=>{const A=document.createElement("button");A.className="global-search-list-item";const D=_.poster?ie(_.poster):"";A.innerHTML=`${D?`<img src="${d(D)}" alt="${d(_.title)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${d((_.title||"?").slice(0,1))}</span>`}<span class="global-search-list-label">${d(_.title)}</span>`,A.onclick=()=>{const z=_.type==="tv"?ke(_.id,1,1):_e(_.id);B.src=z,setNowPlaying({src:z,title:_.title,type:_.type,id:_.id})},C.appendChild(A)})})(),document.getElementById("theater-side-toggle").onclick=()=>{const C=document.getElementById("theater-side"),P=document.getElementById("theater-layout");C.classList.toggle("open"),P.classList.toggle("side-collapsed",!C.classList.contains("open")),requestAnimationFrame(()=>window.dispatchEvent(new Event("resize")))};const B=document.getElementById("theater-player"),V=C=>{var P;if(!(!C||!B))try{C.action==="fullscreenOn"&&B.requestFullscreen&&B.requestFullscreen().catch(()=>{}),C.action==="fullscreenOff"&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),(P=B.contentWindow)==null||P.postMessage(JSON.stringify({event:"command",func:"playVideo",args:[]}),"*")}catch{}};window.addEventListener("storage",C=>{if(C.key===i)try{V(JSON.parse(C.newValue))}catch{}if(C.key===f)try{const P=JSON.parse(C.newValue||"null");P!=null&&P.src&&(B.src=P.src)}catch{}}),e&&(e.onmessage=C=>V(C.data))}function ct(s={}){const l=s.mountId?document.getElementById(s.mountId):null,n=l||document.body;l||(document.body.className="owner-page");const a="slwu_owner_gate";let v={name:"Sheliveswithme",pin:"654321"};try{v=JSON.parse(localStorage.getItem(a)||JSON.stringify(v))}catch{}n.innerHTML=`
      <div class="slwu-route-shell">
        <div class="slwu-route-card">
          <div class="slwu-route-top">
            <a href="${ue()}" class="slwu-back-link">← Back</a>
            <h1>Owner Portal</h1>
          </div>
          <p class="slwu-route-note">Local-only owner gate. Defaults are prefilled so the route works immediately.</p>
          <label class="slwu-field-label">Gate Name</label>
          <input id="owner-name" class="slwu-field-input" value="${d(v.name||"Sheliveswithme")}" />
          <label class="slwu-field-label">PIN</label>
          <input id="owner-pin" class="slwu-field-input" value="${d(v.pin||"654321")}" />
          <button id="owner-save" class="slwu-action-btn">Save Owner Gate</button>
          <div id="owner-msg" class="slwu-route-note"></div>
        </div>
      </div>
    `;const H=document.getElementById("owner-save");H&&H.addEventListener("click",()=>{var C,P,_,A;const B={name:((P=(C=document.getElementById("owner-name"))==null?void 0:C.value)==null?void 0:P.trim())||"Sheliveswithme",pin:((A=(_=document.getElementById("owner-pin"))==null?void 0:_.value)==null?void 0:A.trim())||"654321"};localStorage.setItem(a,JSON.stringify(B));const V=document.getElementById("owner-msg");V&&(V.textContent=`Saved owner gate for ${B.name}.`)})}function dt(){bt(),N(),R(),Ce(),Me(),it();const s=document.getElementById("global-search-input");s&&s.addEventListener("input",()=>{clearTimeout(window.__slwuGlobalSearch),window.__slwuGlobalSearch=setTimeout(()=>Le(s.value.trim()),350)})}window.__slwu=window.__slwu||{},window.__slwu.boot=(s,l={})=>{const n=s||Ze(),a={...l||{},page:n};try{dt()}catch{}try{switch(n){case"home":et();break;case"movie":tt();break;case"tv":ot();break;case"search":nt();break;case"catalog":break;case"profile":lt(a);break;case"theater":rt(a);break;case"owner":ct(a);break;default:break}}catch{}},document.addEventListener("DOMContentLoaded",()=>window.__slwu.boot())})();function _t(e,o){var t,i;(i=(t=window.__slwu)==null?void 0:t.boot)==null||i.call(t,e,o)}export{_t as boot};
