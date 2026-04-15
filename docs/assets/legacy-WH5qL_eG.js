const wt="d9f0568167a608d0700093444b0c2da7",Et="https://api.themoviedb.org/3",le="https://image.tmdb.org/t/p/w500",be="https://image.tmdb.org/t/p/original",Se=e=>`https://www.vidking.net/embed/movie/${e}?color=8B5CF6&autoPlay=false`,$e=(e,o,t)=>`https://www.vidking.net/embed/tv/${e}/${o}/${t}?color=8B5CF6&autoPlay=false&nextEpisode=true&episodeSelector=true`,tt=location.pathname.split("/").filter(Boolean),Lt=location.hostname.endsWith("github.io")&&tt.length?`/${tt[0]}/`:"/";function ee(e=""){return Lt+String(e).replace(/^\/+/,"")}function te(e=""){return new URL(ee(e),location.origin).toString()}function ve(e=""){const o=te("");return e?`${o.replace(/#.*$/,"")}#${String(e).replace(/^#/,"")}`:o}function Ie(e=""){const o=new URL(te("search"),location.origin);if(typeof e=="string"){const t=e.replace(/^\?/,"");t&&(o.search=t)}else e&&typeof e=="object"&&Object.entries(e).forEach(([t,l])=>{l==null||l===""||o.searchParams.set(t,String(l))});return o.toString()}function ue(e,o={}){const t=new URL(te("movie"),location.origin);return t.searchParams.set("id",String(e)),Object.entries(o||{}).forEach(([l,f])=>t.searchParams.set(l,String(f))),t.toString()}function se(e,o={}){const t=new URL(te("tv"),location.origin);return t.searchParams.set("id",String(e)),Object.entries(o||{}).forEach(([l,f])=>t.searchParams.set(l,String(f))),t.toString()}function A(e){try{const o=e instanceof URL?e:new URL(String(e),location.href);if(o.origin!==location.origin){location.href=o.toString();return}const t=`${o.pathname}${o.search}${o.hash}`;if(t===`${location.pathname}${location.search}${location.hash}`)return;history.pushState({},"",t),window.dispatchEvent(new PopStateEvent("popstate"))}catch{location.href=String(e)}}function _t(){var e;(e=window.__slwu)!=null&&e._spaLinksWired||(window.__slwu=window.__slwu||{},window.__slwu._spaLinksWired=!0,document.addEventListener("click",o=>{var f,L;const t=(L=(f=o.target)==null?void 0:f.closest)==null?void 0:L.call(f,"a");if(!t||t.hasAttribute("data-spa-ignore")||t.target&&t.target!=="_self")return;const l=t.getAttribute("href")||"";if(!(!l||l.startsWith("#"))&&!/^(mailto:|tel:|javascript:)/i.test(l))try{const d=new URL(t.href,location.href);if(d.origin!==location.origin)return;o.preventDefault(),A(d.toString())}catch{}}))}const _=(e,o=document)=>o.querySelector(e),nt=(e,o=document)=>Array.from(o.querySelectorAll(e));async function j(e){const o=e.includes("?")?"&":"?",t=await fetch(`${Et}${e}${o}api_key=${wt}`);if(!t.ok)throw new Error(`TMDB ${t.status}: ${e}`);return t.json()}function ie(e,o=le){return e?`${o}${e}`:null}function re(e){return e?e.slice(0,4):"N/A"}function Be(e){if(!e)return"";const o=Math.floor(e/60),t=e%60;return o?`${o}h ${t}m`:`${t}m`}function m(e=""){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const D={_key(){return`pt_mylist_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"[]")}catch{return[]}},has(e,o){return this.get().some(t=>t.id===e&&t.type===o)},add(e){const o=this.get();this.has(e.id,e.type)||o.unshift(e),localStorage.setItem(this._key(),JSON.stringify(o))},remove(e,o){const t=this.get().filter(l=>!(l.id===e&&l.type===o));localStorage.setItem(this._key(),JSON.stringify(t))},toggle(e){return this.has(e.id,e.type)?(this.remove(e.id,e.type),!1):(this.add(e),!0)}},oe={_key(){return`pt_hidden_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"[]")}catch{return[]}},has(e,o){return this.get().some(t=>t.id===e&&t.type===o)},add(e){const o=this.get();this.has(e.id,e.type)||o.unshift(e),localStorage.setItem(this._key(),JSON.stringify(o))},remove(e,o){const t=this.get().filter(l=>!(l.id===e&&l.type===o));localStorage.setItem(this._key(),JSON.stringify(t))},toggle(e){return this.has(e.id,e.type)?(this.remove(e.id,e.type),!1):(this.add(e),!0)}},xe={_key(){return`pt_progress_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"{}")}catch{return{}}},save(e,o,t){const l=this.get();l[`${o}_${e}`]={...t,savedAt:Date.now()},localStorage.setItem(this._key(),JSON.stringify(l))},getAll(){return Object.values(this.get())}};window.addEventListener("message",function(e){try{if(typeof e.data!="string")return;const o=JSON.parse(e.data);if(o.type==="PLAYER_EVENT"&&o.data){const t=o.data,l=t.id,f=t.mediaType||"movie";l&&t.progress>1&&t.progress<98&&xe.save(l,f,{id:l,type:f,progress:t.progress,timestamp:t.currentTime,season:t.season,episode:t.episode,title:document.title})}}catch{}});function st(e=location.pathname){const o=String(e||"");return o.endsWith("movie.html")||/\/movie\/?$/.test(o)?"movie":o.endsWith("tv.html")||/\/tv\/?$/.test(o)?"tv":o.endsWith("search.html")||/\/search\/?$/.test(o)?"search":/profile\.html$|\/profile\/?$/.test(o)?"profile":/theater\.html$|\/theater\/?$/.test(o)?"theater":/categories\.html$|\/categories\/?$/.test(o)||/\/catalog\/?$/.test(o)?"catalog":/owner\.html$|\/owner\/?$/.test(o)?"owner":"home"}const ae=st();function ye(){const e=_("#navbar");if(!e||e.dataset.wired)return;e.dataset.wired="1",e.classList.contains("navbar-solid")||window.addEventListener("scroll",()=>{e.classList.toggle("scrolled",window.scrollY>50)},{passive:!0});const o=_("#hamburger"),t=_(".nav-links");o&&t&&o.addEventListener("click",()=>{t.classList.toggle("mobile-open")});const l=_("#search-toggle"),f=_("#nav-search"),L=_("#search-input");if(l&&f&&L){l.addEventListener("click",()=>{f.classList.toggle("open"),f.classList.contains("open")&&L.focus()}),L.addEventListener("keydown",h=>{if(h.key==="Enter"&&L.value.trim()&&A(Ie({q:L.value.trim()})),h.key==="Escape"){f.classList.remove("open"),L.value="";const b=document.getElementById("nav-search-dropdown");b&&b.remove()}});let d=null;async function x(){const h=L.value.trim(),b=document.getElementById("nav-search-dropdown");if(!h){b&&b.remove();return}let c=b;c||(c=document.createElement("div"),c.id="nav-search-dropdown",c.className="nav-search-dropdown",f.appendChild(c)),c.innerHTML='<div class="nav-search-dd-loading">Searching…</div>';try{const T=((await j(`/search/multi?query=${encodeURIComponent(h)}&page=1`)).results||[]).filter(g=>g&&(g.media_type==="movie"||g.media_type==="tv")).slice(0,4);if(!T.length){c.innerHTML='<div class="nav-search-dd-empty">No results.</div>';return}c.innerHTML="",T.forEach(g=>{const w=g.media_type==="tv"||g.first_air_date?"tv":"movie",y=g.title||g.name||"Untitled",v=ie(g.poster_path)||"",E=document.createElement("button");E.type="button",E.className="nav-search-dd-card",E.innerHTML=`
            ${v?`<img src="${m(v)}" alt="${m(y)}" loading="lazy" />`:`<div class="nav-search-dd-fallback">${m(y.slice(0,1))}</div>`}
            <div class="nav-search-dd-meta">
              <div class="nav-search-dd-title">${m(y)}</div>
              <div class="nav-search-dd-sub">${w.toUpperCase()} · ${re(g.release_date||g.first_air_date||"")}</div>
            </div>
          `,E.onclick=()=>{c.remove(),f.classList.remove("open"),L.value="",A(w==="tv"?se(g.id):ue(g.id))},c.appendChild(E)})}catch{c.innerHTML='<div class="nav-search-dd-empty">Search failed.</div>'}}L.addEventListener("input",()=>{clearTimeout(d),d=setTimeout(()=>x(),220)}),document.addEventListener("click",h=>{const b=document.getElementById("nav-search-dropdown");b&&(h.target===b||b.contains(h.target)||h.target===L||b.remove())})}}function we(e,o="movie"){const t=e.id,l=e.title||e.name||"Untitled",f=ie(e.poster_path),L=e.release_date||e.first_air_date||"",d=e.vote_average?e.vote_average.toFixed(1):"",x=o==="tv"?se(t):ue(t),h=D.has(t,o),b=f?`<img src="${m(f)}" alt="${m(l)}" loading="lazy" />`:`<div class="no-poster" style="aspect-ratio:2/3;background:var(--surface);display:flex;align-items:center;justify-content:center;">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:32px;height:32px;opacity:.3"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
       </div>`,c=document.createElement("div");c.className="movie-card",c.dataset.id=t,c.dataset.type=o,c.innerHTML=`
    ${b}
    <div class="movie-card-overlay">
      <div class="movie-card-title">${m(l)}</div>
      <div class="movie-card-meta">${re(L)}${d?` · ⭐ ${d}`:""}</div>
    </div>
    <div class="movie-card-actions">
      <button class="card-action-btn hide-btn${oe.has(t,o)?" is-hidden":""}" title="${oe.has(t,o)?"Unhide":"Hide"}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="19" y1="5" x2="5" y2="19"/><line x1="5" y1="5" x2="19" y2="19"/></svg>
      </button>
      <button class="card-action-btn list-btn${h?" in-list":""}" title="${h?"Remove from My List":"Add to My List"}">
        ${h?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'}
      </button>
    </div>
  `,c.addEventListener("click",g=>{g.target.closest(".card-action-btn")||A(x)});const S=c.querySelector(".list-btn");S.addEventListener("click",g=>{g.stopPropagation();const w=D.toggle({id:t,type:o,title:l,poster:e.poster_path});S.classList.toggle("in-list",w),S.innerHTML=w?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'});const T=c.querySelector(".hide-btn");return T&&T.addEventListener("click",g=>{g.stopPropagation();const w=oe.toggle({id:t,type:o,title:l,poster:e.poster_path});T.classList.toggle("is-hidden",w),T.title=w?"Unhide":"Hide",w&&c.remove()}),c}function kt(e=8){return Array.from({length:e},()=>{const o=document.createElement("div");return o.className="skeleton-card skeleton",o})}function ot(e,o,t="movie"){if(o=(o||[]).filter(b=>!oe.has(b.id,b.media_type||t||"movie")),!o||o.length===0)return null;const l=document.createElement("div");l.className="row-wrapper";const f=te(`categories/?q=${encodeURIComponent(e)}`);l.innerHTML=`
    <div class="row-header">
      <h2 class="row-title"><a href="${f}">${m(e)}</a></h2>
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
  `;const L=l.querySelector(".row-track");o.forEach(b=>L.appendChild(we(b,t)));const d=l.querySelector(".arrow-left"),x=l.querySelector(".arrow-right"),h=600;return d.addEventListener("click",()=>L.scrollBy({left:-h,behavior:"smooth"})),x.addEventListener("click",()=>L.scrollBy({left:h,behavior:"smooth"})),l}async function at(){$t();const e=_("#main-content");ye();const o=_("#categories");if(!o)return;["Trending Now","Top Rated","Popular on SheLivesWithUs","Now Playing","Action","Comedy","Horror","Sci-Fi"].forEach(h=>{const b=document.createElement("div");b.className="row-wrapper",b.innerHTML=`
      <div class="row-header"><h2 class="row-title">${m(h)}</h2></div>
      <div class="row-track-container">
        <div class="row-track" id="skel-${h.replace(/\s+/g,"-")}"></div>
      </div>
    `;const c=b.querySelector(".row-track");kt(8).forEach(S=>c.appendChild(S)),o.appendChild(b)});const l=[{title:"Trending Now",path:"/trending/movie/week",type:"movie"},{title:"Top Rated",path:"/movie/top_rated",type:"movie"},{title:"Popular on SheLivesWithUs",path:"/movie/popular",type:"movie"},{title:"Now Playing",path:"/movie/now_playing",type:"movie"},{title:"Action",path:"/discover/movie?with_genres=28",type:"movie"},{title:"Comedy",path:"/discover/movie?with_genres=35",type:"movie"},{title:"Horror",path:"/discover/movie?with_genres=27",type:"movie"},{title:"Sci-Fi",path:"/discover/movie?with_genres=878",type:"movie"},{title:"Romance",path:"/discover/movie?with_genres=10749",type:"movie"},{title:"Documentary",path:"/discover/movie?with_genres=99",type:"movie"},{title:"Animation",path:"/discover/movie?with_genres=16",type:"movie"},{title:"Trending TV Shows",path:"/trending/tv/week",type:"tv"},{title:"Top Rated TV",path:"/tv/top_rated",type:"tv"}];let f=!1;const L=await Promise.allSettled(l.map(h=>j(h.path)));o.innerHTML="";const d=xe.getAll();if(d.length>0){const b=(await Promise.allSettled(d.slice(0,10).map(c=>j(c.type==="tv"?`/tv/${c.id}`:`/movie/${c.id}`).then(S=>({...S,_mediaType:c.type,_progress:c.progress}))))).filter(c=>c.status==="fulfilled").map(c=>c.value);if(b.length>0){const c=ot("Continue Watching",b,"mixed");c&&(b.forEach((S,T)=>{const g=c.querySelectorAll(".movie-card");g[T]&&(g[T].dataset.type=S._mediaType)}),o.appendChild(c))}}const x=D.get();if(x.length>0){const b=(await Promise.allSettled(x.slice(0,20).map(c=>j(c.type==="tv"?`/tv/${c.id}`:`/movie/${c.id}`).then(S=>({...S,_mediaType:c.type}))))).filter(c=>c.status==="fulfilled").map(c=>c.value);if(b.length>0){const c=document.createElement("div");c.className="row-wrapper",c.id="my-list",c.innerHTML=`
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
      `;const S=c.querySelector(".row-track");b.forEach(w=>{S.appendChild(we(w,w._mediaType||"movie"))});const T=c.querySelector(".arrow-left"),g=c.querySelector(".arrow-right");T.addEventListener("click",()=>S.scrollBy({left:-600,behavior:"smooth"})),g.addEventListener("click",()=>S.scrollBy({left:600,behavior:"smooth"})),o.appendChild(c)}}L.forEach((h,b)=>{if(h.status!=="fulfilled")return;const S=h.value.results||[],T=l[b];if(!f&&b===0&&S.length>0){f=!0;const w=S[Math.floor(Math.random()*Math.min(5,S.length))];St(w)}const g=ot(T.title,S,T.type);g&&o.appendChild(g)}),e&&(e.style.opacity="1")}async function St(e){if(!e)return;const o=e.id,t=e.media_type==="tv"?"tv":"movie",l=e.title||e.name||"",f=e.overview||"",L=e.backdrop_path?`${be}${e.backdrop_path}`:"",d=_("#hero-backdrop"),x=_("#hero-title"),h=_("#hero-desc"),b=_("#hero-meta"),c=_("#hero-play-btn"),S=_("#hero-info-btn");d&&L&&(d.style.backgroundImage=`url(${L})`),x&&(x.textContent=l),h&&(h.textContent=f);try{const w=await j(`/${t}/${o}`),y=w.vote_average?w.vote_average.toFixed(1):"",v=(w.genres||[]).slice(0,3).map(N=>N.name).join(", "),E=w.runtime?Be(w.runtime):w.episode_run_time?Be(w.episode_run_time[0]):"",I=re(w.release_date||w.first_air_date);b&&(b.innerHTML=`
        ${y?`<span class="rating"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${y}</span>`:""}
        <span>${I}</span>
        ${E?`<span>${E}</span>`:""}
        ${v?`<span>${m(v)}</span>`:""}
      `)}catch{}const T=t==="tv"?se(o):ue(o);c&&c.addEventListener("click",()=>{It(T,L,l)}),S&&S.addEventListener("click",()=>{A(T)});const g=document.querySelector(".hero-buttons");if(g&&!document.getElementById("hero-list-btn")){const w=document.createElement("button");w.id="hero-list-btn",w.className="btn btn-secondary btn-3d";const y=D.has(o,t);w.textContent=y?"In My List":"Add to My List",w.onclick=()=>{const v=D.toggle({id:o,type:t,title:l,poster:e.poster_path});w.textContent=v?"In My List":"Add to My List"},g.appendChild(w)}}function $t(){const e=_("#splash-screen");if(!e)return;if(sessionStorage.getItem("pt_splash")){e.style.display="none";const t=_("#main-content");t&&(t.style.opacity="1");return}setTimeout(()=>{e.classList.add("fade-out"),setTimeout(()=>{e.style.display="none",sessionStorage.setItem("pt_splash","1")},800)},3e3)}async function it(){ye(),await dt();const o=new URLSearchParams(location.search).get("id");if(!o){A(ve());return}try{const t=await j(`/movie/${o}?append_to_response=credits,similar`);document.title=`SheLivesWithUs — ${t.title||"Movie"}`;const l=t.backdrop_path?`${be}${t.backdrop_path}`:"",f=_("#detail-backdrop");f&&l&&(f.style.backgroundImage=`url(${l})`);const L=_("#detail-header");if(L){const v=(t.genres||[]).map(W=>`<span class="genre-pill">${m(W.name)}</span>`).join(""),E=t.vote_average?t.vote_average.toFixed(1):"N/A",I=D.has(t.id,"movie");L.innerHTML=`
        <h1 class="detail-title">${m(t.title||"")}</h1>
        <div class="detail-meta">
          <span class="rating-badge">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${m(E)}
          </span>
          <span>${re(t.release_date)}</span>
          ${t.runtime?`<span>${Be(t.runtime)}</span>`:""}
          ${v}
        </div>
        <p class="detail-overview">${m(t.overview||"")}</p>
        <div class="detail-action-row">
          <button class="detail-list-btn ${I?"in-list":""}" id="detail-list-btn">
            ${I?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'}
          </button>
          <button class="detail-list-btn" id="watch-in-theater-btn">Watch in Theater</button>
        </div>
      `;const N=L.querySelector("#detail-list-btn");N.addEventListener("click",()=>{const W=D.toggle({id:t.id,type:"movie",title:t.title,poster:t.poster_path});N.className=`detail-list-btn ${W?"in-list":""}`,N.innerHTML=W?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'});const q=L.querySelector("#watch-in-theater-btn");q&&q.addEventListener("click",()=>{const W=new URL(te("theater/"));W.searchParams.set("src",Se(o)),A(W.toString())})}const d=_("#player-container");d&&(d.innerHTML=`<iframe src="${Se(o)}" allow="autoplay; fullscreen"></iframe>`);const x=_("#sidebar-poster");x&&t.poster_path&&(x.src=`${le}${t.poster_path}`,x.alt=t.title||"",x.style.display="");const h=_("#sidebar-list-btn");if(h){const v=()=>{const E=D.has(t.id,"movie");h.innerHTML=E?'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'};v(),h.addEventListener("click",()=>{D.toggle({id:t.id,type:"movie",title:t.title,poster:t.poster_path}),v()})}const b=_("#sidebar-share-btn");b&&b.addEventListener("click",()=>{navigator.share?navigator.share({title:`${t.title} — SheLivesWithUs`,url:location.href}):navigator.clipboard.writeText(location.href).then(()=>{b.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Link Copied!',setTimeout(()=>{b.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Share'},2e3)})});const c=document.querySelector('meta[property="og:title"]'),S=document.querySelector('meta[property="og:description"]'),T=document.querySelector('meta[property="og:image"]');c&&(c.content=`${t.title} — SheLivesWithUs`),S&&(S.content=t.overview||"Watch free on SheLivesWithUs"),T&&t.backdrop_path&&(T.content=`${be}${t.backdrop_path}`);const g=_("#detail-info");g&&t&&(g.innerHTML=`
        <div class="detail-info-grid">
          ${t.status?`<div class="info-item"><label>Status</label><span>${m(t.status)}</span></div>`:""}
          ${t.budget?`<div class="info-item"><label>Budget</label><span>$${(t.budget/1e6).toFixed(1)}M</span></div>`:""}
          ${t.revenue?`<div class="info-item"><label>Revenue</label><span>$${(t.revenue/1e6).toFixed(1)}M</span></div>`:""}
          ${t.original_language?`<div class="info-item"><label>Language</label><span>${m(t.original_language.toUpperCase())}</span></div>`:""}
          ${(t.production_companies||[]).length?`<div class="info-item"><label>Studio</label><span>${m(t.production_companies[0].name)}</span></div>`:""}
        </div>
      `);const w=(t.credits&&t.credits.cast||[]).slice(0,20);if(w.length>0){const v=_("#cast-section"),E=_("#cast-row");v&&E&&(v.style.display="",w.forEach(I=>{const N=I.profile_path?`<img class="cast-img" src="${le}${I.profile_path}" alt="${m(I.name)}" loading="lazy" />`:'<div class="cast-img" style="background:var(--bg4);border-radius:var(--radius-sm);"></div>',q=document.createElement("div");q.className="cast-card",q.innerHTML=`
            ${N}
            <div class="cast-name">${m(I.name)}</div>
            <div class="cast-char">${m(I.character||"")}</div>
          `,E.appendChild(q)}))}const y=(t.similar&&t.similar.results||[]).slice(0,20);if(y.length>0){const v=_("#similar-section"),E=_("#similar-row");v&&E&&(v.style.display="",y.forEach(I=>E.appendChild(we(I,"movie"))))}}catch(t){console.error("Movie detail error:",t);const l=_("#detail-header");l&&(l.innerHTML='<p style="color:var(--text-muted)">Failed to load movie details. Please try again.</p>')}}async function lt(){ye(),await dt();const e=new URLSearchParams(location.search),o=e.get("id"),t=parseInt(e.get("season")||"1",10),l=parseInt(e.get("episode")||"1",10);if(!o){A(ve());return}let f=t,L=l;try{let c=function(y,v){const E=_("#player-container");E&&(E.innerHTML=`<iframe src="${$e(o,y,v)}" allow="autoplay; fullscreen"></iframe>`);const I=new URL(location.href);I.searchParams.set("season",y),I.searchParams.set("episode",v),history.replaceState(null,"",I.toString())};const d=await j(`/tv/${o}?append_to_response=credits,similar`);document.title=`SheLivesWithUs — ${d.name||"TV Show"}`;const x=d.backdrop_path?`${be}${d.backdrop_path}`:"",h=_("#detail-backdrop");h&&x&&(h.style.backgroundImage=`url(${x})`);const b=_("#detail-header");if(b){const y=(d.genres||[]).map(q=>`<span class="genre-pill">${m(q.name)}</span>`).join(""),v=d.vote_average?d.vote_average.toFixed(1):"N/A",E=D.has(d.id,"tv");b.innerHTML=`
        <h1 class="detail-title">${m(d.name||"")}</h1>
        <div class="detail-meta">
          <span class="rating-badge">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${m(v)}
          </span>
          <span>${re(d.first_air_date)}</span>
          ${d.number_of_seasons?`<span>${d.number_of_seasons} Season${d.number_of_seasons!==1?"s":""}</span>`:""}
          ${y}
        </div>
        <p class="detail-overview">${m(d.overview||"")}</p>
        <div class="detail-action-row">
          <button class="detail-list-btn ${E?"in-list":""}" id="detail-list-btn">
            ${E?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'}
          </button>
          <button class="detail-list-btn" id="watch-in-theater-btn">Watch in Theater</button>
        </div>
      `;const I=b.querySelector("#detail-list-btn");I.addEventListener("click",()=>{const q=D.toggle({id:d.id,type:"tv",title:d.name,poster:d.poster_path});I.className=`detail-list-btn ${q?"in-list":""}`,I.innerHTML=q?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'});const N=b.querySelector("#watch-in-theater-btn");N&&N.addEventListener("click",()=>{const q=new URL(te("theater/"));q.searchParams.set("src",$e(o,f,L)),A(q.toString())})}c(f,L);const S=(d.seasons||[]).filter(y=>y.season_number>0);if(S.length>0){const y=_("#episode-selector"),v=_("#season-select"),E=_("#episodes-grid");if(y&&v&&E){y.style.display="",S.forEach(N=>{const q=document.createElement("option");q.value=N.season_number,q.textContent=`Season ${N.season_number}`,N.season_number===f&&(q.selected=!0),v.appendChild(q)});async function I(N){E.innerHTML='<div class="spinner" style="margin:20px auto;"></div>';try{const W=(await j(`/tv/${o}/season/${N}`)).episodes||[];E.innerHTML="",W.forEach(G=>{const ne=G.still_path?`${le}${G.still_path}`:"",z=document.createElement("div");z.className=`episode-card${G.episode_number===L&&N===f?" active":""}`,z.innerHTML=`
                ${ne?`<img class="episode-thumb" src="${m(ne)}" alt="Episode ${G.episode_number}" loading="lazy" />`:'<div class="episode-thumb" style="background:var(--surface);flex:0 0 120px;"></div>'}
                <div class="episode-info">
                  <div class="episode-num">Episode ${G.episode_number}</div>
                  <div class="episode-title">${m(G.name||"")}</div>
                  <div class="episode-desc">${m(G.overview||"No description available.")}</div>
                </div>
              `,z.addEventListener("click",()=>{f=N,L=G.episode_number,nt(".episode-card").forEach(he=>he.classList.remove("active")),z.classList.add("active"),c(f,L);const ge=_("#player-container");ge&&ge.scrollIntoView({behavior:"smooth",block:"start"})}),E.appendChild(z)})}catch{E.innerHTML='<p style="color:var(--text-muted);padding:12px;">Failed to load episodes.</p>'}}I(f),v.addEventListener("change",()=>{f=parseInt(v.value,10),L=1,I(f),c(f,L)})}}const T=_("#detail-info");T&&(T.innerHTML=`
        <div class="detail-info-grid">
          ${d.status?`<div class="info-item"><label>Status</label><span>${m(d.status)}</span></div>`:""}
          ${d.type?`<div class="info-item"><label>Type</label><span>${m(d.type)}</span></div>`:""}
          ${d.number_of_episodes?`<div class="info-item"><label>Episodes</label><span>${d.number_of_episodes}</span></div>`:""}
          ${d.original_language?`<div class="info-item"><label>Language</label><span>${m(d.original_language.toUpperCase())}</span></div>`:""}
          ${d.networks&&d.networks[0]?`<div class="info-item"><label>Network</label><span>${m(d.networks[0].name)}</span></div>`:""}
        </div>
      `);const g=(d.credits&&d.credits.cast||[]).slice(0,20);if(g.length>0){const y=_("#cast-section"),v=_("#cast-row");y&&v&&(y.style.display="",g.forEach(E=>{const I=E.profile_path?`<img class="cast-img" src="${le}${E.profile_path}" alt="${m(E.name)}" loading="lazy" />`:'<div class="cast-img" style="background:var(--bg4);border-radius:var(--radius-sm);"></div>',N=document.createElement("div");N.className="cast-card",N.innerHTML=`
            ${I}
            <div class="cast-name">${m(E.name)}</div>
            <div class="cast-char">${m(E.character||"")}</div>
          `,v.appendChild(N)}))}const w=(d.similar&&d.similar.results||[]).slice(0,20);if(w.length>0){const y=_("#similar-section"),v=_("#similar-row");y&&v&&(y.style.display="",w.forEach(E=>v.appendChild(we(E,"tv"))))}}catch(d){console.error("TV detail error:",d);const x=_("#detail-header");x&&(x.innerHTML='<p style="color:var(--text-muted)">Failed to load show details. Please try again.</p>')}}function rt(){ye();const e=_("#main-search-input"),o=_("#search-clear"),t=_("#search-status"),l=_("#search-results"),f=nt(".filter-btn"),L=new URLSearchParams(location.search),d=L.get("q")||"",x=L.get("type")||"all";let h=x!=="all"?x:"all",b=null,c="";f.forEach(g=>{g.classList.toggle("active",g.dataset.filter===h)}),f.forEach(g=>{g.addEventListener("click",()=>{h=g.dataset.filter,f.forEach(w=>w.classList.toggle("active",w===g)),c?T(c):h!=="all"&&T("")})}),e&&(e.value=d,e.addEventListener("input",()=>{const g=e.value.trim();o.style.display=g?"flex":"none",clearTimeout(b),b=setTimeout(()=>T(g),500)}),d?(o.style.display="flex",T(d)):h!=="all"?T(""):S()),o&&o.addEventListener("click",()=>{e.value="",o.style.display="none",e.focus(),S()});function S(){t.textContent="",l.innerHTML=`
      <div class="no-results">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <h3>Search SheLivesWithUs</h3>
        <p>Find movies and TV shows</p>
      </div>
    `}async function T(g){if(c=g,!g&&h==="all"){S();return}t.textContent="Searching…",l.innerHTML="";const w=l;for(let y=0;y<12;y++){const v=document.createElement("div");v.className="skeleton-card skeleton",v.style.aspectRatio="2/3",w.appendChild(v)}try{let y=[];if(g){let v="/search/multi";h==="movie"?v="/search/movie":h==="tv"&&(v="/search/tv"),y=((await j(`${v}?query=${encodeURIComponent(g)}&page=1`)).results||[]).filter(I=>!oe.has(I.id,I.media_type||h))}else y=(await j(`${h==="movie"?"/movie/popular":"/tv/popular"}`)).results||[];if(h!=="all"&&g&&(y=y.filter(v=>(v.media_type||h)===h)),l.innerHTML="",y.length===0){t.textContent="",l.innerHTML=`
          <div class="no-results" style="grid-column:1/-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <h3>No results found</h3>
            <p>Try a different search term or browse our categories on the home page.</p>
          </div>
        `;return}t.textContent=g?`${y.length} result${y.length!==1?"s":""} for "${g}"`:`Showing popular ${h==="tv"?"TV shows":"movies"}`,y.forEach(v=>{const E=v.media_type||h,I=v.id,N=v.title||v.name||"Untitled",q=ie(v.poster_path),W=v.release_date||v.first_air_date||"",G=v.vote_average?v.vote_average.toFixed(1):"",ne=E==="tv"?se(I):ue(I),z=document.createElement("div");z.className="search-card fade-in",z.innerHTML=`
          ${q?`<img src="${m(q)}" alt="${m(N)}" loading="lazy" />`:`<div class="no-poster">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                 No Image
               </div>`}
          <div class="search-card-info">
            <div class="search-card-title">${m(N)}</div>
            <div class="search-card-meta">
              <span class="type-badge ${E==="tv"?"tv":"movie"}">${E==="tv"?"TV":"Movie"}</span>
              ${re(W)}
              ${G?`· ⭐ ${G}`:""}
            </div>
          </div>
        `,z.addEventListener("click",()=>{A(ne)}),l.appendChild(z)})}catch(y){console.error("Search error:",y),l.innerHTML='<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px">Search failed. Please try again.</p>',t.textContent=""}}}function ct(e,o){return new Promise(t=>{const l=document.createElement("div");l.className="play-loader",l.innerHTML=`
      <div class="play-loader-backdrop" style="background-image:url(${m(e||"")})"></div>
      <div class="play-loader-overlay"></div>
      <div class="play-loader-content">
        <div class="play-loader-logo">SHELIVESWITHUS</div>
        <div class="play-loader-title">${m(o||"")}</div>
        <div class="play-loader-ring"></div>
      </div>
    `,document.body.appendChild(l),requestAnimationFrame(()=>{requestAnimationFrame(()=>{l.classList.add("active")})}),setTimeout(()=>{l.classList.add("fade-out"),setTimeout(()=>{l.remove(),t()},600)},2400)})}function It(e,o,t){sessionStorage.setItem("pt_play_loader",JSON.stringify({backdrop:o,title:t})),ct(o,t).then(()=>{A(e)})}function dt(){const e=sessionStorage.getItem("pt_play_loader");if(e){sessionStorage.removeItem("pt_play_loader");try{const{backdrop:o,title:t}=JSON.parse(e);return ct(o,t)}catch{}}return Promise.resolve()}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});document.addEventListener("DOMContentLoaded",()=>{switch(ae){case"home":at();break;case"movie":it();break;case"tv":lt();break;case"search":rt();break}});(function(){const e="BroadcastChannel"in window?new BroadcastChannel("slwu_remote"):null,o="slwu_profiles",t="pt_active_profile",l="slwu_remote_state",f="slwu_now_playing",L="slwu_ui_scale_2x",d={"New Releases":"/movie/now_playing",Family:"/discover/movie?with_genres=10751",Comedy:"/discover/movie?with_genres=35",Action:"/discover/movie?with_genres=28",Horror:"/discover/movie?with_genres=27",Classics:"/discover/movie?primary_release_date.lte=1999-12-31&sort_by=popularity.desc",Cartoons:"/discover/movie?with_genres=16"};function x(){try{return JSON.parse(localStorage.getItem(o)||"[]")}catch{return[]}}function h(n){localStorage.setItem(o,JSON.stringify(n))}function b(){const n=localStorage.getItem(t);return x().find(r=>r.id===n)||null}function c(n,r){const a=x();let i=a.find(s=>s.name.toLowerCase()===String(n).trim().toLowerCase());return i?i.pin=String(r).trim():(i={id:"p_"+Date.now(),name:String(n).trim(),pin:String(r).trim(),createdAt:Date.now()},a.push(i)),h(a),localStorage.setItem(t,i.id),i}function S(n,r){const a=x().find(i=>i.name.toLowerCase()===String(n).trim().toLowerCase()&&String(i.pin)===String(r).trim());return a&&localStorage.setItem(t,a.id),a}function T(n){const r=x().filter(a=>a.id!==n);h(r),localStorage.getItem(t)===n&&localStorage.removeItem(t)}function g(n,r={}){var s;if(!n||!n.src)return;const a=((s=document.querySelector("#sidebar-poster"))==null?void 0:s.src)||"",i={src:n.src,title:document.title,url:location.href,page:ae,poster:a,ts:Date.now(),...r};localStorage.setItem(f,JSON.stringify(i))}function w(){try{return JSON.parse(localStorage.getItem(f)||"null")}catch{return null}}function y(n,r={}){const a={action:n,payload:r,ts:Date.now()};localStorage.setItem(l,JSON.stringify(a)),e&&e.postMessage(a)}function v(){var n,r;return document.fullscreenElement?document.exitFullscreen().catch(()=>{}):(r=(n=document.documentElement).requestFullscreen)==null?void 0:r.call(n).catch(()=>{})}function E(){return document.querySelector("#player-container iframe, #theater-player")}function I(n,r=[]){const a=E()||document.querySelector("#tvremote-mini-player iframe");if(!a||!a.contentWindow)return!1;try{return a.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:r}),"*"),!0}catch{return!1}}function N(){var r,a,i;document.querySelectorAll(".footer, .ad-container-native, .ad-container-banner, .ad-toggle-wrap").forEach(s=>s.remove());const n=document.querySelector("#navbar .nav-left");if(n){const s=n.querySelector(".nav-logo");s&&s.remove(),(r=n.querySelector(".nav-links"))==null||r.remove(),n.remove()}if(document.querySelector("#navbar .nav-right"),document.body.classList.add("top-search-only"),(a=document.getElementById("hamburger"))==null||a.remove(),(i=document.getElementById("nav-collapse-btn"))==null||i.remove(),!document.getElementById("global-action-stack")){const s=document.createElement("div");s.id="global-action-stack",s.className="global-action-stack",s.innerHTML=`
        <button id="global-stack-toggle" class="global-fab global-fab--toggle" aria-label="Menu">☰</button>
        <div class="global-action-stack-menu">
          <button id="global-home-btn" class="global-fab global-fab--stack" aria-label="Home">Home</button>
          <button id="global-movies-btn" class="global-fab global-fab--stack">Movies</button>
          <button id="global-tvshows-btn" class="global-fab global-fab--stack">TV Shows</button>
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
      `,document.body.appendChild(s)}if(!document.getElementById("slwu-brand-pin")){const s=document.createElement("div");s.id="slwu-brand-pin",s.textContent="SheLivesWithMe",document.body.appendChild(s)}if(!document.getElementById("slwu-profile-modal")){const s=document.createElement("div");s.id="slwu-profile-modal",s.className="slwu-modal",s.innerHTML=`
        <div class="slwu-modal-card">
          <button class="slwu-modal-close" data-close-modal="profile">×</button>
          <h2>PROFILE</h2>
          <p>Scan to open the local profile page.</p>
          <img id="slwu-profile-qr" alt="Profile QR Code" />
          <div class="slwu-modal-actions">
            <a class="btn btn-primary btn-3d" href="${ee("profile/")}">Open Profile</a>
          </div>
        </div>
      `,document.body.appendChild(s)}if(!document.getElementById("tv-remote-panel")){const s=document.createElement("aside");s.id="tv-remote-panel",s.className="tv-remote-panel",s.innerHTML=`
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
      `,document.body.appendChild(s)}if(!document.getElementById("global-search-sheet")){const s=document.createElement("section");s.id="global-search-sheet",s.className="global-search-sheet",s.innerHTML=`
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
      `,document.body.appendChild(s)}if(!document.getElementById("global-hidden-sheet")){const s=document.createElement("section");s.id="global-hidden-sheet",s.className="global-search-sheet",s.innerHTML=`
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
      `,document.body.appendChild(s)}if(!document.getElementById("global-catalog-sheet")){const s=document.createElement("section");s.id="global-catalog-sheet",s.className="global-search-sheet",s.innerHTML=`
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
      `,document.body.appendChild(s)}}function q(){const n=document.body;if(window.__slwu=window.__slwu||{},window.__slwu._globalButtonsWired)return;window.__slwu._globalButtonsWired=!0;const r=document.getElementById("tvremote-close"),a=document.getElementById("profile-open-btn"),i=document.getElementById("slwu-profile-modal"),s=document.getElementById("global-theater-btn"),C=document.getElementById("global-movies-btn"),$=document.getElementById("global-tvshows-btn"),Y=document.getElementById("global-mylist-btn"),M=document.getElementById("global-hidden-btn"),H=document.getElementById("global-stack-toggle"),k=document.getElementById("global-home-btn"),U=document.getElementById("global-more-btn"),V=document.getElementById("global-layout-btn"),J=document.getElementById("global-nav-toggle-btn"),F=document.getElementById("global-server-btn"),p=document.getElementById("global-appfs-btn"),R=document.getElementById("global-scale-btn"),P=document.getElementById("global-tv-btn"),O=document.getElementById("global-profile-btn"),Q=document.getElementById("global-catalog-btn"),Z=document.getElementById("global-search-btn"),X=document.getElementById("global-search-sheet"),ce=document.getElementById("global-hidden-sheet"),pe=document.getElementById("global-catalog-sheet"),K=()=>{n.classList.remove("sheet-open","hidden-open","catalog-open")},Re=()=>{K(),n.classList.add("catalog-open"),Te()},ht=(u="")=>ke({prefill:String(u||"")}),qe=()=>{ke({prefill:""});const u=document.getElementById("global-search-results");u&&(u.innerHTML='<div class="tvremote-empty">Choose from My List or search.</div>')};window.__slwu.openCatalogSheet=Re,window.__slwu.openSearchSheet=ht,window.__slwu.openMyListSheet=qe;const Ae="slwu_layout_mode",Oe=()=>localStorage.getItem(Ae)||"classic",Ue=u=>{const B=u==="netflix"?"netflix":"classic";n.classList.toggle("layout-netflix",B==="netflix"),localStorage.setItem(Ae,B);const me=B==="netflix"?"Netflix":"Classic";V&&(V.textContent=`Layout: ${me}`)};Ue(Oe());const ft=()=>Ue(Oe()==="netflix"?"classic":"netflix"),Fe="slwu_nav_collapsed",We=u=>{const B=!!u;n.classList.toggle("nav-collapsed",B),localStorage.setItem(Fe,B?"1":"0"),J&&(J.textContent=`Menu Bar: ${B?"Off":"On"}`)};We(localStorage.getItem(Fe)==="1");const Ve="slwu_server_mode",fe=["auto","oxygen","hydrogen","lithium"],bt=u=>u==="oxygen"?"Oxygen":u==="hydrogen"?"Hydrogen":u==="lithium"?"Lithium":"Auto",De=()=>localStorage.getItem(Ve)||"auto",Je=u=>{const B=fe.includes(u)?u:"auto";localStorage.setItem(Ve,B),F&&(F.textContent=`Server: ${bt(B)}`),window.__slwu.server=B};Je(De());const ke=(u={})=>{K(),n.classList.add("sheet-open"),Le();const B=document.getElementById("global-search-input"),me=document.getElementById("global-search-results");u.prefill&&B&&(B.value=String(u.prefill)),B&&B.focus(),me&&!(B&&B.value.trim())&&(me.innerHTML='<div class="tvremote-empty">Type to search.</div>'),B&&B.value.trim()&&_e(B.value.trim())};r&&(r.onclick=()=>n.classList.remove("remote-open")),a&&(a.onclick=()=>{const u=document.getElementById("slwu-profile-qr"),B=te("profile/");u&&(u.src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data="+encodeURIComponent(B)),i.classList.add("open")}),document.querySelectorAll("[data-close-modal='profile']").forEach(u=>u.onclick=()=>i.classList.remove("open")),i&&i.addEventListener("click",u=>{u.target===i&&i.classList.remove("open")}),s&&(s.onclick=()=>{const u=w(),B=new URL(te("theater/"));u&&u.src&&B.searchParams.set("src",u.src),A(B.toString())}),k&&(k.onclick=()=>{K(),n.classList.remove("stack-open","remote-open"),n.classList.remove("more-open"),n.classList.remove("catalog-open","hidden-open","sheet-open"),A(ve())}),C&&(C.onclick=()=>{K(),n.classList.remove("stack-open","remote-open","more-open"),A(Ie({type:"movie"}))}),$&&($.onclick=()=>{K(),n.classList.remove("stack-open","remote-open","more-open"),A(Ie({type:"tv"}))}),V&&(V.onclick=()=>ft()),J&&(J.onclick=()=>We(!n.classList.contains("nav-collapsed"))),F&&(F.onclick=()=>{const u=De(),B=fe.indexOf(u),me=fe[(B+1)%fe.length];Je(me)}),Y&&(Y.onclick=()=>qe()),M&&(M.onclick=()=>{K(),n.classList.add("hidden-open"),Me()}),H&&(H.onclick=()=>{const u=!n.classList.contains("stack-open");n.classList.toggle("stack-open",u),u||n.classList.remove("more-open"),document.body.classList.toggle("search-collapsed",!u)}),U&&(U.onclick=()=>n.classList.toggle("more-open")),p&&(p.onclick=()=>v()),document.body.classList.toggle("search-collapsed",!n.classList.contains("stack-open"));const je=u=>{n.classList.remove("ui-scale-1x","ui-scale-2x","ui-scale-3x"),n.classList.add(`ui-scale-${u}x`),localStorage.setItem(L,String(u)),R&&(R.textContent=`${u}x`)},Ge=parseInt(localStorage.getItem(L)||"1",10);je([1,2,3].includes(Ge)?Ge:1),R&&(R.onclick=()=>{const u=parseInt(localStorage.getItem(L)||"1",10);je(u===3?1:u+1)}),P&&(P.onclick=()=>n.classList.toggle("remote-open")),O&&(O.onclick=()=>{const u=document.getElementById("slwu-profile-qr"),B=te("profile/");u&&(u.src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data="+encodeURIComponent(B)),i==null||i.classList.add("open")}),Q&&(Q.onclick=()=>Re()),Z&&(Z.onclick=()=>ke());const Ye=document.getElementById("global-search-close");Ye&&(Ye.onclick=()=>K());const ze=document.getElementById("global-search-clear");ze&&(ze.onclick=()=>{const u=document.getElementById("global-search-input"),B=document.getElementById("global-search-results");u&&(u.value=""),B&&(B.innerHTML='<div class="tvremote-empty">Type to search.</div>')});const Ke=document.getElementById("global-hidden-close");Ke&&(Ke.onclick=()=>K());const Qe=document.getElementById("global-catalog-close");Qe&&(Qe.onclick=()=>K()),X&&X.addEventListener("click",u=>{u.target===X&&K()}),ce&&ce.addEventListener("click",u=>{u.target===ce&&K()}),pe&&pe.addEventListener("click",u=>{u.target===pe&&K()}),document.addEventListener("keydown",u=>{u.key==="Escape"&&(K(),n.classList.remove("remote-open","more-open"))});const Xe=document.getElementById("tv-remote-panel"),Ze=document.getElementById("global-action-stack");document.addEventListener("pointerdown",u=>{if(!n.classList.contains("remote-open"))return;const B=u.target;Xe&&Xe.contains(B)||Ze&&Ze.contains(B)||n.classList.remove("remote-open")});const yt=1e4;let de=null;const et=()=>{if(n.classList.contains("stack-open")){n.classList.remove("stack-faded"),de&&clearTimeout(de),de=null;return}n.classList.remove("stack-faded"),de&&clearTimeout(de),de=setTimeout(()=>{n.classList.contains("stack-open")||n.classList.add("stack-faded")},yt)};["mousemove","touchstart","pointerdown","keydown","scroll"].forEach(u=>{window.addEventListener(u,et,{passive:!0})}),et()}function W(n,r,a={}){if(!r)return;const i=!!a.append;if(i||(r.innerHTML=""),!n.length){i||(r.innerHTML='<div class="tvremote-empty">No items found.</div>');return}n.forEach(s=>{const C=s.media_type==="tv"||s.first_air_date?"tv":"movie",$=s.title||s.name||"Untitled",Y=C==="tv"?se(s.id):ue(s.id),M=D.has(s.id,C),H=document.createElement("article");H.className="tvremote-card";const k=ie(s.poster_path)||"";H.innerHTML=`
        <button class="tvremote-card-wish ${M?"in-list":""}" aria-label="Wish List">❤</button>
        ${k?`<img src="${m(k)}" alt="${m($)}" loading="lazy">`:`<div class="tvremote-card-fallback">${m($.slice(0,1))}</div>`}
        <div class="tvremote-card-info">
          <div class="tvremote-card-title">${m($)}</div>
          <div class="tvremote-card-meta">${C.toUpperCase()} · ${re(s.release_date||s.first_air_date||"")}</div>
        </div>
      `,H.addEventListener("click",V=>{V.target.closest(".tvremote-card-wish")||(document.body.classList.remove("remote-open"),A(Y))});const U=H.querySelector(".tvremote-card-wish");U&&(U.onclick=V=>{V.stopPropagation();const J=D.toggle({id:s.id,type:C,title:$,poster:s.poster_path});V.currentTarget.classList.toggle("in-list",J),Ee(),Le()}),r.appendChild(H)})}let G=1,ne="all";async function z(n=!0){const r=document.getElementById("tvremote-search"),a=document.getElementById("tvremote-results");if(!r||!a)return;const i=r.value.trim();if(n&&(G=1,a.innerHTML=""),!i){a.innerHTML='<div class="tvremote-empty">Search movies, TV, or people.</div>';return}const C=((await j(`/search/multi?query=${encodeURIComponent(i)}&page=${G}`)).results||[]).filter($=>$.media_type==="movie"||$.media_type==="tv");W(C,a,{append:!n})}async function ge(){const n=document.getElementById("tvremote-catalog");n&&(n.innerHTML="",Object.keys(d).forEach(r=>{const a=document.createElement("button");a.className="remote-pill remote-pill--catalog",a.textContent=r,a.onclick=async()=>{n.querySelectorAll(".remote-pill").forEach(s=>s.classList.remove("active")),a.classList.add("active");const i=await j(d[r]);W((i.results||[]).slice(0,12),document.getElementById("tvremote-catalog-results"))},n.appendChild(a)}))}let he=null;async function Te(n=null){const r=document.getElementById("global-catalog-tabs"),a=document.getElementById("global-catalog-grid");if(!r||!a)return;r.innerHTML="";const i=Object.keys(d),s=n||he||i[0];he=s,i.forEach(C=>{const $=document.createElement("button");$.className="remote-pill remote-pill--catalog global-catalog-tab",$.textContent=C,C===s&&$.classList.add("active"),$.onclick=()=>Te(C),r.appendChild($)}),a.innerHTML='<div class="tvremote-empty">Loading…</div>';try{const $=((await j(d[s])).results||[]).slice(0,24);W($,a)}catch{a.innerHTML='<div class="tvremote-empty">Could not load catalog.</div>'}}function Ee(){const n=document.getElementById("tvremote-mylist");if(!n)return;const r=D.get();if(!r.length){n.innerHTML='<div class="tvremote-empty">My List is empty.</div>';return}Promise.all(r.slice(0,24).map(a=>j(a.type==="tv"?`/tv/${a.id}`:`/movie/${a.id}`).then(i=>({...i,media_type:a.type})).catch(()=>null))).then(a=>{W(a.filter(Boolean),n)})}function Ce(){const n=document.getElementById("tvremote-mini-player");if(!n)return;const r=n.querySelector("iframe"),a=document.querySelector("#player-container iframe"),i=w(),s=(a==null?void 0:a.src)||(i==null?void 0:i.src)||"";s&&r.src!==s&&(r.src=s)}function Le(){const n=document.getElementById("global-search-mylist");if(!n)return;const r=D.get();n.innerHTML=r.length?"":'<div class="tvremote-empty">Nothing saved yet.</div>',r.slice(0,30).forEach(a=>{const i=document.createElement("button");i.className="global-search-list-item";const s=a.title||a.name||"Saved Item",C=a.poster?`${le}${a.poster}`:ie(a.poster_path||a.poster);i.innerHTML=`
        ${C?`<img src="${m(C)}" alt="${m(s)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${m(s.slice(0,1))}</span>`}
        <span class="global-search-list-label">${m(s)}</span>
      `,i.onclick=()=>{A(a.type==="tv"?se(a.id):ue(a.id))},n.appendChild(i)})}function Me(){const n=document.getElementById("global-hidden-results");if(!n)return;const r=oe.get();n.innerHTML=r.length?"":'<div class="tvremote-empty">Nothing hidden yet.</div>',r.slice(0,40).forEach(a=>{const i=document.createElement("button");i.className="global-search-list-item";const s=a.title||a.name||"Hidden Item",C=a.poster?`${le}${a.poster}`:ie(a.poster_path||a.poster);i.innerHTML=`${C?`<img src="${m(C)}" alt="${m(s)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${m(s.slice(0,1))}</span>`}<span class="global-search-list-label">${m(s)}</span>`,i.onclick=()=>{oe.remove(a.id,a.type),Me()},n.appendChild(i)})}let Pe=null;async function _e(n){const r=document.getElementById("global-search-results");if(!r)return;if(!n){r.innerHTML='<div class="tvremote-empty">Type to search.</div>';return}r.innerHTML='<div class="tvremote-empty">Searching…</div>';const a=await j(`/search/multi?query=${encodeURIComponent(n)}&page=1`);W((a.results||[]).filter(i=>i.media_type==="movie"||i.media_type==="tv"),r)}function He(){if(window.__slwu=window.__slwu||{},window.__slwu._globalSearchWired)return;window.__slwu._globalSearchWired=!0,Le();const n=document.getElementById("global-search-input");n&&n.addEventListener("input",()=>{clearTimeout(Pe),Pe=setTimeout(()=>_e(n.value.trim()),350)});const r=document.getElementById("tvremote-search-clear");r&&(r.onclick=()=>{const a=document.getElementById("tvremote-search"),i=document.getElementById("tvremote-results");a&&(a.value=""),i&&(i.innerHTML='<div class="tvremote-empty">Search movies, TV, or people.</div>')})}function Ne(){if(window.__slwu=window.__slwu||{},window.__slwu._tvRemoteWired)return;window.__slwu._tvRemoteWired=!0,ge(),Ee(),Ce();const n=document.getElementById("tvremote-player-fullscreen"),r=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),a=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled);n&&(r||!a)&&(n.style.display="none");const i=document.getElementById("tvremote-search"),s=document.getElementById("tvremote-more");let C=null;i&&i.addEventListener("input",()=>{clearTimeout(C),C=setTimeout(()=>z(!0).catch(console.error),350)});const $=document.getElementById("tvremote-more-header"),Y=document.getElementById("tvremote-random-header"),M=()=>{G+=1,z(!1).catch(console.error)};s&&(s.onclick=M),$&&($.onclick=M),Y&&(Y.onclick=async()=>{const P=((await j(ne==="tv"?"/trending/tv/week":"/trending/movie/week")).results||[]).filter(Q=>!oe.has(Q.id,Q.media_type||(ne==="tv"?"tv":"movie"))),O=P[Math.floor(Math.random()*Math.max(P.length,1))];O&&W([O],document.getElementById("tvremote-results"),!0)}),document.querySelectorAll("[data-remote-mode]").forEach(p=>{p.onclick=async()=>{var R,P;if(document.querySelectorAll("[data-remote-tab]").forEach(O=>O.classList.remove("active")),document.querySelectorAll(".tvremote-tab").forEach(O=>O.classList.remove("active")),(R=document.querySelector('[data-remote-tab="search"]'))==null||R.classList.add("active"),(P=document.getElementById("tvremote-tab-search"))==null||P.classList.add("active"),p.dataset.remoteMode==="home"){document.body.classList.remove("remote-open"),A(ve());return}ne=p.dataset.remoteMode,await z(!0).catch(console.error)}}),document.querySelectorAll("[data-remote-tab]").forEach(p=>{p.onclick=()=>{document.querySelectorAll("[data-remote-tab]").forEach(R=>R.classList.remove("active")),document.querySelectorAll(".tvremote-tab").forEach(R=>R.classList.remove("active")),p.classList.add("active"),document.getElementById(`tvremote-tab-${p.dataset.remoteTab}`).classList.add("active"),p.dataset.remoteTab==="mylist"&&Ee()}});const H=document.getElementById("tvremote-message"),k=p=>{H&&(H.textContent=p)},U=()=>{const p=new URLSearchParams(location.search);return{id:p.get("id"),season:parseInt(p.get("season")||"1",10),episode:parseInt(p.get("episode")||"1",10)}},V=document.getElementById("tvremote-nowplaying-toggle");V&&(V.onclick=()=>{const p=document.getElementById("tvremote-mini-player");if(p.hidden)p.hidden=!1,Ce();else{const R=p.querySelector("iframe");R&&(R.src="about:blank"),p.hidden=!0}}),document.getElementById("tvremote-prev-episode").onclick=()=>{if(ae!=="tv")return k("Prev Episode works on TV pages.");const p=U(),R=Math.max(1,p.episode-1);A(se(p.id,{season:p.season,episode:R}))},document.getElementById("tvremote-next-episode").onclick=()=>{if(ae!=="tv")return k("Next Episode works on TV pages.");const p=U();A(se(p.id,{season:p.season,episode:p.episode+1}))};const J=p=>{document.body.classList.remove("remote-scale-1x","remote-scale-2x","remote-scale-3x"),document.body.classList.add(`remote-scale-${p}x`),localStorage.setItem("slwu_remote_scale",String(p));const R=document.getElementById("tvremote-fullscreen");R&&(R.textContent=`${p}x`)};J(parseInt(localStorage.getItem("slwu_remote_scale")||"1",10)),document.getElementById("tvremote-fullscreen").onclick=()=>{const p=parseInt(localStorage.getItem("slwu_remote_scale")||"1",10);J(p===3?1:p+1)};const F=document.getElementById("tvremote-controls-toggle");F&&(F.onclick=()=>document.body.classList.toggle("remote-controls-collapsed")),document.getElementById("tvremote-playpause").onclick=()=>{I("playVideo"),I("pauseVideo"),y("togglePlay"),k("Sent Play / Pause.")},document.getElementById("tvremote-seek-back").onclick=()=>{I("seekTo",[0,!0]),y("seekBack"),k("Sent -30s.")},document.getElementById("tvremote-seek-forward").onclick=()=>{y("seekForward"),k("Sent +30s.")},document.getElementById("tvremote-volume-down").onclick=()=>{y("volumeDown"),k("Sent volume down.")},document.getElementById("tvremote-volume-up").onclick=()=>{y("volumeUp"),k("Sent volume up.")},document.getElementById("tvremote-stop").onclick=()=>{I("stopVideo"),y("stop"),k("Sent stop.")},document.getElementById("tvremote-player-fullscreen").onclick=()=>{const p=E()||document.querySelector("#tvremote-mini-player iframe");p!=null&&p.requestFullscreen&&p.requestFullscreen().catch(()=>{}),y("fullscreenOn"),k("Fullscreen requested.")},document.getElementById("tvremote-player-window").onclick=()=>{document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),y("fullscreenOff"),k("Returned to windowed mode.")},document.getElementById("tvremote-resolution").onclick=()=>k(ae==="theater"?"Use provider settings inside theater player.":"Open Theater to use player settings."),document.getElementById("tvremote-subtitles").onclick=()=>k(ae==="theater"?"Use provider subtitle settings inside theater player.":"Open Theater to use subtitle settings.")}function mt(){if(window.__slwu=window.__slwu||{},window.__slwu._nowPlayingWired)return;window.__slwu._nowPlayingWired=!0;const n=document.getElementById("player-container");if(!n)return;const r=()=>{const i=n.querySelector("iframe");i&&g(i,{page:ae})};r(),new MutationObserver(r).observe(n,{childList:!0,subtree:!0})}function ut(n={}){if(!/profile\.html$|\/profile\/?$/.test(location.pathname)&&n.page!=="profile")return;const r=n.mountId?document.getElementById(n.mountId):null,a=r||document.body;r||(document.body.className="profile-page"),a.innerHTML=`
      <div class="profile-shell">
        <a class="back-btn profile-back-link" href="${ee("index.html")}">← Return Back</a>
        <div class="profile-hero">
          <div class="tv-remote-kicker">PROFILE</div>
          <h1 id="profile-page-title">Create / Enter Profile</h1>
          <p class="profile-copy">Local profiles only. Name + pin are stored in your browser.</p>
        </div>
        <div id="profile-app" class="profile-app"></div>
      </div>
    `;const i=a.querySelector("#profile-app"),s=document.createElement("div");s.id="profile-pin-modal",s.className="slwu-modal",s.innerHTML=`
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
    `,a.appendChild(s);const $=new URLSearchParams(location.search).get("name"),Y=b();function M(){const p=x().map(P=>`
        <div class="profile-local-card">
          <div>
            <div class="profile-local-name">${m(P.name)}</div>
            <div class="profile-local-meta">Local profile</div>
          </div>
          <div class="profile-local-actions">
            <button class="remote-mini-btn" data-login="${m(P.name)}">Enter</button>
            <button class="remote-mini-btn" data-delete="${m(P.id)}">Delete</button>
          </div>
        </div>
      `).join("");i.innerHTML=`
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
          ${p||'<div class="tvremote-empty">No profiles yet.</div>'}
        </div>
      `;const R=()=>({name:document.getElementById("profile-name").value.trim(),pin:document.getElementById("profile-pin").value.trim()});document.getElementById("profile-login").onclick=()=>{const{name:P,pin:O}=R();if(!P||!O)return alert("Enter name and pin.");if(!S(P,O))return alert("Wrong name or pin.");A(ee(`profile/?name=${encodeURIComponent(P)}`))},document.getElementById("profile-signup").onclick=()=>{const P=document.getElementById("profile-name").value.trim(),O=document.getElementById("profile-pin").value.trim();if(!P||!O)return alert("Enter name and pin.");const Q=c(P,O);A(ee(`profile/?name=${encodeURIComponent(Q.name)}`))},i.querySelectorAll("[data-delete]").forEach(P=>P.onclick=()=>{T(P.dataset.delete),M()}),i.querySelectorAll("[data-login]").forEach(P=>P.onclick=()=>{const O=x().find(pe=>pe.name===P.dataset.login);if(!O)return;const Q=document.getElementById("profile-pin-modal"),Z=document.getElementById("profile-pin-modal-input"),X=document.getElementById("profile-pin-copy"),ce=document.getElementById("profile-pin-error");X&&(X.textContent=`Enter pin for ${O.name}.`),ce&&(ce.style.display="none"),Z&&(Z.value=""),Q.dataset.profile=O.name,Q.classList.add("open"),setTimeout(()=>Z==null?void 0:Z.focus(),20)})}function H(F){const p=x().find(O=>O.name.toLowerCase()===F.toLowerCase())||Y;document.getElementById("profile-page-title").textContent=p?p.name:F,i.innerHTML=`
        <div class="profile-dashboard remote-look">
          <div class="remote-btn remote-btn-primary profile-dashboard-title">${m(F)}</div>
          <a class="remote-btn" href="${ee("index.html")}">Home</a>
          <a class="remote-btn" href="${ee("theater/")}">Open Theater</a>
          <a class="remote-btn" href="${ee("profile/")}">Switch Profile</a>
          <button id="profile-delete-current" class="remote-btn">Delete Profile</button>
          <button id="profile-export" class="remote-btn">Export Local Data</button>
        </div>
      `;const R=document.getElementById("profile-delete-current");R&&p&&(R.onclick=()=>{J(`Delete ${p.name}?`)&&(T(p.id),A(ee("profile/")))});const P=document.getElementById("profile-export");P&&(P.onclick=()=>{const O=localStorage.getItem(t)||"default",Q={profile:p||null,myList:D.get(),hidden:oe.get(),progress:xe.get(),profileId:O,exportedAt:new Date().toISOString()},Z=new Blob([JSON.stringify(Q,null,2)],{type:"application/json"}),X=document.createElement("a");X.href=URL.createObjectURL(Z),X.download=`slwu_${((p==null?void 0:p.name)||"profile").replace(/\\s+/g,"_")}_export.json`,X.click(),setTimeout(()=>URL.revokeObjectURL(X.href),2500)})}$?H($):M();const k=document.getElementById("profile-pin-modal"),U=()=>k==null?void 0:k.classList.remove("open");a.querySelectorAll("[data-close-modal='pin']").forEach(F=>F.onclick=U);const V=document.getElementById("profile-pin-cancel");V&&(V.onclick=U);const J=document.getElementById("profile-pin-confirm");J&&(J.onclick=()=>{if(!k)return;const F=k.dataset.profile||"",p=document.getElementById("profile-pin-modal-input"),R=document.getElementById("profile-pin-error"),P=String((p==null?void 0:p.value)||"").trim();if(!(!F||!P)){if(!S(F,P)){R&&(R.style.display="block");return}U(),A(ee(`profile/?name=${encodeURIComponent(F)}`))}}),k&&k.addEventListener("click",F=>{F.target===k&&U()})}function pt(n={}){if(!/theater\.html$|\/theater\/?$/.test(location.pathname)&&n.page!=="theater")return;const r=n.mountId?document.getElementById(n.mountId):null,a=r||document.body;r||(document.body.className="theater-page");const i=w(),s=new URLSearchParams(location.search).get("src")||(i==null?void 0:i.src)||"";a.innerHTML=`
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
            <iframe id="theater-player" src="${m(s)}" allow="autoplay; fullscreen"></iframe>
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
    `,document.querySelectorAll("[data-close-modal='theater']").forEach(M=>M.onclick=()=>document.getElementById("theater-mobile-popup").classList.remove("open")),N(),q(),He(),Ne(),(()=>{const M=document.getElementById("theater-mylist"),H=D.get();M.innerHTML="",H.forEach(k=>{const U=document.createElement("button");U.className="global-search-list-item";const V=k.poster?ie(k.poster):"";U.innerHTML=`${V?`<img src="${m(V)}" alt="${m(k.title)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${m((k.title||"?").slice(0,1))}</span>`}<span class="global-search-list-label">${m(k.title)}</span>`,U.onclick=()=>{const J=k.type==="tv"?$e(k.id,1,1):Se(k.id);$.src=J,setNowPlaying({src:J,title:k.title,type:k.type,id:k.id})},M.appendChild(U)})})(),document.getElementById("theater-side-toggle").onclick=()=>{const M=document.getElementById("theater-side"),H=document.getElementById("theater-layout");M.classList.toggle("open"),H.classList.toggle("side-collapsed",!M.classList.contains("open")),requestAnimationFrame(()=>window.dispatchEvent(new Event("resize")))};const $=document.getElementById("theater-player"),Y=M=>{var H;if(!(!M||!$))try{M.action==="fullscreenOn"&&$.requestFullscreen&&$.requestFullscreen().catch(()=>{}),M.action==="fullscreenOff"&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),(H=$.contentWindow)==null||H.postMessage(JSON.stringify({event:"command",func:"playVideo",args:[]}),"*")}catch{}};window.addEventListener("storage",M=>{if(M.key===l)try{Y(JSON.parse(M.newValue))}catch{}if(M.key===f)try{const H=JSON.parse(M.newValue||"null");H!=null&&H.src&&($.src=H.src)}catch{}}),e&&(e.onmessage=M=>Y(M.data))}function vt(n={}){const r=n.mountId?document.getElementById(n.mountId):null,a=r||document.body;r||(document.body.className="owner-page");const i="slwu_owner_gate";let s={name:"Sheliveswithme",pin:"654321"};try{s=JSON.parse(localStorage.getItem(i)||JSON.stringify(s))}catch{}a.innerHTML=`
      <div class="slwu-route-shell">
        <div class="slwu-route-card">
          <div class="slwu-route-top">
            <a href="${ve()}" class="slwu-back-link">← Back</a>
            <h1>Owner Portal</h1>
          </div>
          <p class="slwu-route-note">Local-only owner gate. Defaults are prefilled so the route works immediately.</p>
          <label class="slwu-field-label">Gate Name</label>
          <input id="owner-name" class="slwu-field-input" value="${m(s.name||"Sheliveswithme")}" />
          <label class="slwu-field-label">PIN</label>
          <input id="owner-pin" class="slwu-field-input" value="${m(s.pin||"654321")}" />
          <button id="owner-save" class="slwu-action-btn">Save Owner Gate</button>
          <div id="owner-msg" class="slwu-route-note"></div>
        </div>
      </div>
    `;const C=document.getElementById("owner-save");C&&C.addEventListener("click",()=>{var M,H,k,U;const $={name:((H=(M=document.getElementById("owner-name"))==null?void 0:M.value)==null?void 0:H.trim())||"Sheliveswithme",pin:((U=(k=document.getElementById("owner-pin"))==null?void 0:k.value)==null?void 0:U.trim())||"654321"};localStorage.setItem(i,JSON.stringify($));const Y=document.getElementById("owner-msg");Y&&(Y.textContent=`Saved owner gate for ${$.name}.`)})}function gt(){_t(),N(),q(),He(),Ne(),mt();const n=document.getElementById("global-search-input");n&&n.addEventListener("input",()=>{clearTimeout(window.__slwuGlobalSearch),window.__slwuGlobalSearch=setTimeout(()=>_e(n.value.trim()),350)})}window.__slwu=window.__slwu||{},window.__slwu.boot=(n,r={})=>{var s,C;const a=n||st(),i={...r||{},page:a};try{gt()}catch{}try{switch(a){case"home":at();break;case"movie":it();break;case"tv":lt();break;case"search":rt();break;case"catalog":try{(C=(s=window.__slwu).openCatalogSheet)==null||C.call(s)}catch{}break;case"profile":ut(i);break;case"theater":pt(i);break;case"owner":vt(i);break;default:break}}catch{}},document.addEventListener("DOMContentLoaded",()=>window.__slwu.boot())})();function Bt(e,o){var t,l;(l=(t=window.__slwu)==null?void 0:t.boot)==null||l.call(t,e,o)}export{Bt as boot};
