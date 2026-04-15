const ct="d9f0568167a608d0700093444b0c2da7",dt="https://api.themoviedb.org/3",le="https://image.tmdb.org/t/p/w500",fe="https://image.tmdb.org/t/p/original",je="slwu_server_mode";function Se(){const e=localStorage.getItem(je)||"vidking";return["vidking","vidsrc"].includes(e)?e:"vidking"}function mt(e){const o=e==="vidsrc"?"vidsrc":"vidking";localStorage.setItem(je,o)}function me(e){const o=String(e);switch(Se()){case"vidsrc":return`https://vidsrc.to/embed/movie/${encodeURIComponent(o)}`;case"vidking":default:return`https://www.vidking.net/embed/movie/${encodeURIComponent(o)}?color=8B5CF6&autoPlay=false`}}function ue(e,o=1,t=1){const i=String(e),y=Math.max(1,parseInt(o,10)||1),L=Math.max(1,parseInt(t,10)||1);switch(Se()){case"vidsrc":return`https://vidsrc.to/embed/tv/${encodeURIComponent(i)}/${y}/${L}`;case"vidking":default:return`https://www.vidking.net/embed/tv/${encodeURIComponent(i)}/${y}/${L}?color=8B5CF6&autoPlay=false&nextEpisode=true&episodeSelector=true`}}const De=location.pathname.split("/").filter(Boolean),ut=location.hostname.endsWith("github.io")&&De.length?`/${De[0]}/`:"/";function ee(e=""){return ut+String(e).replace(/^\/+/,"")}function oe(e=""){return new URL(ee(e),location.origin).toString()}function ce(e=""){const o=oe("");return e?`${o.replace(/#.*$/,"")}#${String(e).replace(/^#/,"")}`:o}function pt(e=""){const o=new URL(oe("search"),location.origin);if(typeof e=="string"){const t=e.replace(/^\?/,"");t&&(o.search=t)}else e&&typeof e=="object"&&Object.entries(e).forEach(([t,i])=>{i==null||i===""||o.searchParams.set(t,String(i))});return o.toString()}function de(e,o={}){const t=new URL(oe("movie"),location.origin);return t.searchParams.set("id",String(e)),Object.entries(o||{}).forEach(([i,y])=>t.searchParams.set(i,String(y))),t.toString()}function ae(e,o={}){const t=new URL(oe("tv"),location.origin);return t.searchParams.set("id",String(e)),Object.entries(o||{}).forEach(([i,y])=>t.searchParams.set(i,String(y))),t.toString()}const _=(e,o=document)=>o.querySelector(e),Ge=(e,o=document)=>Array.from(o.querySelectorAll(e));async function G(e){const o=e.includes("?")?"&":"?",t=await fetch(`${dt}${e}${o}api_key=${ct}`);if(!t.ok)throw new Error(`TMDB ${t.status}: ${e}`);return t.json()}function ie(e,o=le){return e?`${o}${e}`:null}function re(e){return e?e.slice(0,4):"N/A"}function _e(e){if(!e)return"";const o=Math.floor(e/60),t=e%60;return o?`${o}h ${t}m`:`${t}m`}function c(e=""){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const D={_key(){return`pt_mylist_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"[]")}catch{return[]}},has(e,o){return this.get().some(t=>t.id===e&&t.type===o)},add(e){const o=this.get();this.has(e.id,e.type)||o.unshift(e),localStorage.setItem(this._key(),JSON.stringify(o))},remove(e,o){const t=this.get().filter(i=>!(i.id===e&&i.type===o));localStorage.setItem(this._key(),JSON.stringify(t))},toggle(e){return this.has(e.id,e.type)?(this.remove(e.id,e.type),!1):(this.add(e),!0)}},ne={_key(){return`pt_hidden_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"[]")}catch{return[]}},has(e,o){return this.get().some(t=>t.id===e&&t.type===o)},add(e){const o=this.get();this.has(e.id,e.type)||o.unshift(e),localStorage.setItem(this._key(),JSON.stringify(o))},remove(e,o){const t=this.get().filter(i=>!(i.id===e&&i.type===o));localStorage.setItem(this._key(),JSON.stringify(t))},toggle(e){return this.has(e.id,e.type)?(this.remove(e.id,e.type),!1):(this.add(e),!0)}},$e={_key(){return`pt_progress_${localStorage.getItem("pt_active_profile")||"default"}`},get(){try{return JSON.parse(localStorage.getItem(this._key())||"{}")}catch{return{}}},save(e,o,t){const i=this.get();i[`${o}_${e}`]={...t,savedAt:Date.now()},localStorage.setItem(this._key(),JSON.stringify(i))},getAll(){return Object.values(this.get())}};window.addEventListener("message",function(e){try{if(typeof e.data!="string")return;const o=JSON.parse(e.data);if(o.type==="PLAYER_EVENT"&&o.data){const t=o.data,i=t.id,y=t.mediaType||"movie";i&&t.progress>1&&t.progress<98&&$e.save(i,y,{id:i,type:y,progress:t.progress,timestamp:t.currentTime,season:t.season,episode:t.episode,title:document.title})}}catch{}});function ze(e=location.pathname){const o=String(e||"");return o.endsWith("movie.html")||/\/movie\/?$/.test(o)?"movie":o.endsWith("tv.html")||/\/tv\/?$/.test(o)?"tv":o.endsWith("search.html")||/\/search\/?$/.test(o)?"search":/profile\.html$|\/profile\/?$/.test(o)?"profile":/theater\.html$|\/theater\/?$/.test(o)?"theater":/categories\.html$|\/categories\/?$/.test(o)||/\/catalog\/?$/.test(o)?"catalog":/owner\.html$|\/owner\/?$/.test(o)?"owner":"home"}const te=ze();function be(){const e=_("#navbar");if(!e||e.dataset.wired)return;e.dataset.wired="1",e.classList.contains("navbar-solid")||window.addEventListener("scroll",()=>{e.classList.toggle("scrolled",window.scrollY>50)},{passive:!0});const o=_("#hamburger"),t=_(".nav-links");o&&t&&o.addEventListener("click",()=>{t.classList.toggle("mobile-open")});const i=_("#search-toggle"),y=_("#nav-search"),L=_("#search-input");if(i&&y&&L){i.addEventListener("click",()=>{y.classList.toggle("open"),y.classList.contains("open")&&L.focus()}),L.addEventListener("keydown",h=>{if(h.key==="Enter"&&L.value.trim()&&(location.href=pt({q:L.value.trim()})),h.key==="Escape"){y.classList.remove("open"),L.value="";const f=document.getElementById("nav-search-dropdown");f&&f.remove()}});let d=null;async function x(){const h=L.value.trim(),f=document.getElementById("nav-search-dropdown");if(!h){f&&f.remove();return}let r=f;r||(r=document.createElement("div"),r.id="nav-search-dropdown",r.className="nav-search-dropdown",y.appendChild(r)),r.innerHTML='<div class="nav-search-dd-loading">Searching…</div>';try{const T=((await G(`/search/multi?query=${encodeURIComponent(h)}&page=1`)).results||[]).filter(v=>v&&(v.media_type==="movie"||v.media_type==="tv")).slice(0,4);if(!T.length){r.innerHTML='<div class="nav-search-dd-empty">No results.</div>';return}r.innerHTML="",T.forEach(v=>{const w=v.media_type==="tv"||v.first_air_date?"tv":"movie",b=v.title||v.name||"Untitled",u=ie(v.poster_path)||"",E=document.createElement("button");E.type="button",E.className="nav-search-dd-card",E.innerHTML=`
            ${u?`<img src="${c(u)}" alt="${c(b)}" loading="lazy" />`:`<div class="nav-search-dd-fallback">${c(b.slice(0,1))}</div>`}
            <div class="nav-search-dd-meta">
              <div class="nav-search-dd-title">${c(b)}</div>
              <div class="nav-search-dd-sub">${w.toUpperCase()} · ${re(v.release_date||v.first_air_date||"")}</div>
            </div>
          `,E.onclick=()=>{r.remove(),y.classList.remove("open"),L.value="",location.href=w==="tv"?ae(v.id):de(v.id)},r.appendChild(E)})}catch{r.innerHTML='<div class="nav-search-dd-empty">Search failed.</div>'}}L.addEventListener("input",()=>{clearTimeout(d),d=setTimeout(()=>x(),220)}),document.addEventListener("click",h=>{const f=document.getElementById("nav-search-dropdown");f&&(h.target===f||f.contains(h.target)||h.target===L||f.remove())})}}function ye(e,o="movie"){const t=e.id,i=e.title||e.name||"Untitled",y=ie(e.poster_path),L=e.release_date||e.first_air_date||"",d=e.vote_average?e.vote_average.toFixed(1):"",x=o==="tv"?ae(t):de(t),h=D.has(t,o),f=y?`<img src="${c(y)}" alt="${c(i)}" loading="lazy" />`:`<div class="no-poster" style="aspect-ratio:2/3;background:var(--surface);display:flex;align-items:center;justify-content:center;">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:32px;height:32px;opacity:.3"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
       </div>`,r=document.createElement("div");r.className="movie-card",r.dataset.id=t,r.dataset.type=o,r.innerHTML=`
    ${f}
    <div class="movie-card-overlay">
      <div class="movie-card-title">${c(i)}</div>
      <div class="movie-card-meta">${re(L)}${d?` · ⭐ ${d}`:""}</div>
    </div>
    <div class="movie-card-actions">
      <button class="card-action-btn hide-btn${ne.has(t,o)?" is-hidden":""}" title="${ne.has(t,o)?"Unhide":"Hide"}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="19" y1="5" x2="5" y2="19"/><line x1="5" y1="5" x2="19" y2="19"/></svg>
      </button>
      <button class="card-action-btn list-btn${h?" in-list":""}" title="${h?"Remove from My List":"Add to My List"}">
        ${h?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'}
      </button>
    </div>
  `,r.addEventListener("click",v=>{v.target.closest(".card-action-btn")||(location.href=x)});const S=r.querySelector(".list-btn");S.addEventListener("click",v=>{v.stopPropagation();const w=D.toggle({id:t,type:o,title:i,poster:e.poster_path});S.classList.toggle("in-list",w),S.innerHTML=w?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'});const T=r.querySelector(".hide-btn");return T&&T.addEventListener("click",v=>{v.stopPropagation();const w=ne.toggle({id:t,type:o,title:i,poster:e.poster_path});T.classList.toggle("is-hidden",w),T.title=w?"Unhide":"Hide",w&&r.remove()}),r}function vt(e=8){return Array.from({length:e},()=>{const o=document.createElement("div");return o.className="skeleton-card skeleton",o})}function Je(e,o,t="movie"){if(o=(o||[]).filter(f=>!ne.has(f.id,f.media_type||t||"movie")),!o||o.length===0)return null;const i=document.createElement("div");i.className="row-wrapper";const y=oe(`categories/?q=${encodeURIComponent(e)}`);i.innerHTML=`
    <div class="row-header">
      <h2 class="row-title"><a href="${y}">${c(e)}</a></h2>
      <a class="row-viewall" href="${y}">View All</a>
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
  `;const L=i.querySelector(".row-track");o.forEach(f=>L.appendChild(ye(f,t)));const d=i.querySelector(".arrow-left"),x=i.querySelector(".arrow-right"),h=600;return d.addEventListener("click",()=>L.scrollBy({left:-h,behavior:"smooth"})),x.addEventListener("click",()=>L.scrollBy({left:h,behavior:"smooth"})),i}async function Ye(){ht();const e=_("#main-content");be();const o=_("#categories");if(!o)return;["Trending Now","Top Rated","Popular on SheLivesWithUs","Now Playing","Action","Comedy","Horror","Sci-Fi"].forEach(h=>{const f=document.createElement("div");f.className="row-wrapper",f.innerHTML=`
      <div class="row-header"><h2 class="row-title">${c(h)}</h2></div>
      <div class="row-track-container">
        <div class="row-track" id="skel-${h.replace(/\s+/g,"-")}"></div>
      </div>
    `;const r=f.querySelector(".row-track");vt(8).forEach(S=>r.appendChild(S)),o.appendChild(f)});const i=[{title:"Trending Now",path:"/trending/movie/week",type:"movie"},{title:"Top Rated",path:"/movie/top_rated",type:"movie"},{title:"Popular on SheLivesWithUs",path:"/movie/popular",type:"movie"},{title:"Now Playing",path:"/movie/now_playing",type:"movie"},{title:"Action",path:"/discover/movie?with_genres=28",type:"movie"},{title:"Comedy",path:"/discover/movie?with_genres=35",type:"movie"},{title:"Horror",path:"/discover/movie?with_genres=27",type:"movie"},{title:"Sci-Fi",path:"/discover/movie?with_genres=878",type:"movie"},{title:"Romance",path:"/discover/movie?with_genres=10749",type:"movie"},{title:"Documentary",path:"/discover/movie?with_genres=99",type:"movie"},{title:"Animation",path:"/discover/movie?with_genres=16",type:"movie"},{title:"Trending TV Shows",path:"/trending/tv/week",type:"tv"},{title:"Top Rated TV",path:"/tv/top_rated",type:"tv"}];let y=!1;const L=await Promise.allSettled(i.map(h=>G(h.path)));o.innerHTML="";const d=$e.getAll();if(d.length>0){const f=(await Promise.allSettled(d.slice(0,10).map(r=>G(r.type==="tv"?`/tv/${r.id}`:`/movie/${r.id}`).then(S=>({...S,_mediaType:r.type,_progress:r.progress}))))).filter(r=>r.status==="fulfilled").map(r=>r.value);if(f.length>0){const r=Je("Continue Watching",f,"mixed");r&&(f.forEach((S,T)=>{const v=r.querySelectorAll(".movie-card");v[T]&&(v[T].dataset.type=S._mediaType)}),o.appendChild(r))}}const x=D.get();if(x.length>0){const f=(await Promise.allSettled(x.slice(0,20).map(r=>G(r.type==="tv"?`/tv/${r.id}`:`/movie/${r.id}`).then(S=>({...S,_mediaType:r.type}))))).filter(r=>r.status==="fulfilled").map(r=>r.value);if(f.length>0){const r=document.createElement("div");r.className="row-wrapper",r.id="my-list",r.innerHTML=`
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
      `;const S=r.querySelector(".row-track");f.forEach(w=>{S.appendChild(ye(w,w._mediaType||"movie"))});const T=r.querySelector(".arrow-left"),v=r.querySelector(".arrow-right");T.addEventListener("click",()=>S.scrollBy({left:-600,behavior:"smooth"})),v.addEventListener("click",()=>S.scrollBy({left:600,behavior:"smooth"})),o.appendChild(r)}}L.forEach((h,f)=>{if(h.status!=="fulfilled")return;const S=h.value.results||[],T=i[f];if(!y&&f===0&&S.length>0){y=!0;const w=S[Math.floor(Math.random()*Math.min(5,S.length))];gt(w)}const v=Je(T.title,S,T.type);v&&o.appendChild(v)}),e&&(e.style.opacity="1")}async function gt(e){if(!e)return;const o=e.id,t=e.media_type==="tv"?"tv":"movie",i=e.title||e.name||"",y=e.overview||"",L=e.backdrop_path?`${fe}${e.backdrop_path}`:"",d=_("#hero-backdrop"),x=_("#hero-title"),h=_("#hero-desc"),f=_("#hero-meta"),r=_("#hero-play-btn"),S=_("#hero-info-btn");d&&L&&(d.style.backgroundImage=`url(${L})`),x&&(x.textContent=i),h&&(h.textContent=y);try{const w=await G(`/${t}/${o}`),b=w.vote_average?w.vote_average.toFixed(1):"",u=(w.genres||[]).slice(0,3).map(N=>N.name).join(", "),E=w.runtime?_e(w.runtime):w.episode_run_time?_e(w.episode_run_time[0]):"",I=re(w.release_date||w.first_air_date);f&&(f.innerHTML=`
        ${b?`<span class="rating"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${b}</span>`:""}
        <span>${I}</span>
        ${E?`<span>${E}</span>`:""}
        ${u?`<span>${c(u)}</span>`:""}
      `)}catch{}const T=t==="tv"?ae(o):de(o);r&&r.addEventListener("click",()=>{ft(T,L,i)}),S&&S.addEventListener("click",()=>{location.href=T});const v=document.querySelector(".hero-buttons");if(v&&!document.getElementById("hero-list-btn")){const w=document.createElement("button");w.id="hero-list-btn",w.className="btn btn-secondary btn-3d";const b=D.has(o,t);w.textContent=b?"In My List":"Add to My List",w.onclick=()=>{const u=D.toggle({id:o,type:t,title:i,poster:e.poster_path});w.textContent=u?"In My List":"Add to My List"},v.appendChild(w)}}function ht(){const e=_("#splash-screen");if(!e)return;if(sessionStorage.getItem("pt_splash")){e.style.display="none";const t=_("#main-content");t&&(t.style.opacity="1");return}setTimeout(()=>{e.classList.add("fade-out"),setTimeout(()=>{e.style.display="none",sessionStorage.setItem("pt_splash","1")},800)},3e3)}async function Ke(){be(),await et();const o=new URLSearchParams(location.search).get("id");if(!o){location.href=ce();return}try{const t=await G(`/movie/${o}?append_to_response=credits,similar`);document.title=`SheLivesWithUs — ${t.title||"Movie"}`;const i=t.backdrop_path?`${fe}${t.backdrop_path}`:"",y=_("#detail-backdrop");y&&i&&(y.style.backgroundImage=`url(${i})`);const L=_("#detail-header");if(L){const u=(t.genres||[]).map(W=>`<span class="genre-pill">${c(W.name)}</span>`).join(""),E=t.vote_average?t.vote_average.toFixed(1):"N/A",I=D.has(t.id,"movie");L.innerHTML=`
        <h1 class="detail-title">${c(t.title||"")}</h1>
        <div class="detail-meta">
          <span class="rating-badge">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${c(E)}
          </span>
          <span>${re(t.release_date)}</span>
          ${t.runtime?`<span>${_e(t.runtime)}</span>`:""}
          ${u}
        </div>
        <p class="detail-overview">${c(t.overview||"")}</p>
        <div class="detail-action-row">
          <button class="detail-list-btn ${I?"in-list":""}" id="detail-list-btn">
            ${I?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'}
          </button>
          <button class="detail-list-btn" id="watch-in-theater-btn">Watch in Theater</button>
        </div>
      `;const N=L.querySelector("#detail-list-btn");N.addEventListener("click",()=>{const W=D.toggle({id:t.id,type:"movie",title:t.title,poster:t.poster_path});N.className=`detail-list-btn ${W?"in-list":""}`,N.innerHTML=W?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'});const R=L.querySelector("#watch-in-theater-btn");R&&R.addEventListener("click",()=>{const W=new URL(oe("theater/"));W.searchParams.set("src",me(o)),location.href=W.toString()})}const d=_("#player-container");d&&(d.innerHTML=`<iframe src="${me(o)}" allow="autoplay; fullscreen"></iframe>`);const x=_("#sidebar-poster");x&&t.poster_path&&(x.src=`${le}${t.poster_path}`,x.alt=t.title||"",x.style.display="");const h=_("#sidebar-list-btn");if(h){const u=()=>{const E=D.has(t.id,"movie");h.innerHTML=E?'<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'};u(),h.addEventListener("click",()=>{D.toggle({id:t.id,type:"movie",title:t.title,poster:t.poster_path}),u()})}const f=_("#sidebar-share-btn");f&&f.addEventListener("click",()=>{navigator.share?navigator.share({title:`${t.title} — SheLivesWithUs`,url:location.href}):navigator.clipboard.writeText(location.href).then(()=>{f.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Link Copied!',setTimeout(()=>{f.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Share'},2e3)})});const r=document.querySelector('meta[property="og:title"]'),S=document.querySelector('meta[property="og:description"]'),T=document.querySelector('meta[property="og:image"]');r&&(r.content=`${t.title} — SheLivesWithUs`),S&&(S.content=t.overview||"Watch free on SheLivesWithUs"),T&&t.backdrop_path&&(T.content=`${fe}${t.backdrop_path}`);const v=_("#detail-info");v&&t&&(v.innerHTML=`
        <div class="detail-info-grid">
          ${t.status?`<div class="info-item"><label>Status</label><span>${c(t.status)}</span></div>`:""}
          ${t.budget?`<div class="info-item"><label>Budget</label><span>$${(t.budget/1e6).toFixed(1)}M</span></div>`:""}
          ${t.revenue?`<div class="info-item"><label>Revenue</label><span>$${(t.revenue/1e6).toFixed(1)}M</span></div>`:""}
          ${t.original_language?`<div class="info-item"><label>Language</label><span>${c(t.original_language.toUpperCase())}</span></div>`:""}
          ${(t.production_companies||[]).length?`<div class="info-item"><label>Studio</label><span>${c(t.production_companies[0].name)}</span></div>`:""}
        </div>
      `);const w=(t.credits&&t.credits.cast||[]).slice(0,20);if(w.length>0){const u=_("#cast-section"),E=_("#cast-row");u&&E&&(u.style.display="",w.forEach(I=>{const N=I.profile_path?`<img class="cast-img" src="${le}${I.profile_path}" alt="${c(I.name)}" loading="lazy" />`:'<div class="cast-img" style="background:var(--bg4);border-radius:var(--radius-sm);"></div>',R=document.createElement("div");R.className="cast-card",R.innerHTML=`
            ${N}
            <div class="cast-name">${c(I.name)}</div>
            <div class="cast-char">${c(I.character||"")}</div>
          `,E.appendChild(R)}))}const b=(t.similar&&t.similar.results||[]).slice(0,20);if(b.length>0){const u=_("#similar-section"),E=_("#similar-row");u&&E&&(u.style.display="",b.forEach(I=>E.appendChild(ye(I,"movie"))))}}catch(t){console.error("Movie detail error:",t);const i=_("#detail-header");i&&(i.innerHTML='<p style="color:var(--text-muted)">Failed to load movie details. Please try again.</p>')}}async function Qe(){be(),await et();const e=new URLSearchParams(location.search),o=e.get("id"),t=parseInt(e.get("season")||"1",10),i=parseInt(e.get("episode")||"1",10);if(!o){location.href=ce();return}let y=t,L=i;try{let r=function(b,u){const E=_("#player-container");E&&(E.innerHTML=`<iframe src="${ue(o,b,u)}" allow="autoplay; fullscreen"></iframe>`);const I=new URL(location.href);I.searchParams.set("season",b),I.searchParams.set("episode",u),history.replaceState(null,"",I.toString())};const d=await G(`/tv/${o}?append_to_response=credits,similar`);document.title=`SheLivesWithUs — ${d.name||"TV Show"}`;const x=d.backdrop_path?`${fe}${d.backdrop_path}`:"",h=_("#detail-backdrop");h&&x&&(h.style.backgroundImage=`url(${x})`);const f=_("#detail-header");if(f){const b=(d.genres||[]).map(R=>`<span class="genre-pill">${c(R.name)}</span>`).join(""),u=d.vote_average?d.vote_average.toFixed(1):"N/A",E=D.has(d.id,"tv");f.innerHTML=`
        <h1 class="detail-title">${c(d.name||"")}</h1>
        <div class="detail-meta">
          <span class="rating-badge">
            <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${c(u)}
          </span>
          <span>${re(d.first_air_date)}</span>
          ${d.number_of_seasons?`<span>${d.number_of_seasons} Season${d.number_of_seasons!==1?"s":""}</span>`:""}
          ${b}
        </div>
        <p class="detail-overview">${c(d.overview||"")}</p>
        <div class="detail-action-row">
          <button class="detail-list-btn ${E?"in-list":""}" id="detail-list-btn">
            ${E?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'}
          </button>
          <button class="detail-list-btn" id="watch-in-theater-btn">Watch in Theater</button>
        </div>
      `;const I=f.querySelector("#detail-list-btn");I.addEventListener("click",()=>{const R=D.toggle({id:d.id,type:"tv",title:d.name,poster:d.poster_path});I.className=`detail-list-btn ${R?"in-list":""}`,I.innerHTML=R?'<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20 6L9 17l-5-5"/></svg> In My List':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add to My List'});const N=f.querySelector("#watch-in-theater-btn");N&&N.addEventListener("click",()=>{const R=new URL(oe("theater/"));R.searchParams.set("src",ue(o,y,L)),location.href=R.toString()})}r(y,L);const S=(d.seasons||[]).filter(b=>b.season_number>0);if(S.length>0){const b=_("#episode-selector"),u=_("#season-select"),E=_("#episodes-grid");if(b&&u&&E){b.style.display="",S.forEach(N=>{const R=document.createElement("option");R.value=N.season_number,R.textContent=`Season ${N.season_number}`,N.season_number===y&&(R.selected=!0),u.appendChild(R)});async function I(N){E.innerHTML='<div class="spinner" style="margin:20px auto;"></div>';try{const W=(await G(`/tv/${o}/season/${N}`)).episodes||[];E.innerHTML="",W.forEach(z=>{const se=z.still_path?`${le}${z.still_path}`:"",Y=document.createElement("div");Y.className=`episode-card${z.episode_number===L&&N===y?" active":""}`,Y.innerHTML=`
                ${se?`<img class="episode-thumb" src="${c(se)}" alt="Episode ${z.episode_number}" loading="lazy" />`:'<div class="episode-thumb" style="background:var(--surface);flex:0 0 120px;"></div>'}
                <div class="episode-info">
                  <div class="episode-num">Episode ${z.episode_number}</div>
                  <div class="episode-title">${c(z.name||"")}</div>
                  <div class="episode-desc">${c(z.overview||"No description available.")}</div>
                </div>
              `,Y.addEventListener("click",()=>{y=N,L=z.episode_number,Ge(".episode-card").forEach(ve=>ve.classList.remove("active")),Y.classList.add("active"),r(y,L);const pe=_("#player-container");pe&&pe.scrollIntoView({behavior:"smooth",block:"start"})}),E.appendChild(Y)})}catch{E.innerHTML='<p style="color:var(--text-muted);padding:12px;">Failed to load episodes.</p>'}}I(y),u.addEventListener("change",()=>{y=parseInt(u.value,10),L=1,I(y),r(y,L)})}}const T=_("#detail-info");T&&(T.innerHTML=`
        <div class="detail-info-grid">
          ${d.status?`<div class="info-item"><label>Status</label><span>${c(d.status)}</span></div>`:""}
          ${d.type?`<div class="info-item"><label>Type</label><span>${c(d.type)}</span></div>`:""}
          ${d.number_of_episodes?`<div class="info-item"><label>Episodes</label><span>${d.number_of_episodes}</span></div>`:""}
          ${d.original_language?`<div class="info-item"><label>Language</label><span>${c(d.original_language.toUpperCase())}</span></div>`:""}
          ${d.networks&&d.networks[0]?`<div class="info-item"><label>Network</label><span>${c(d.networks[0].name)}</span></div>`:""}
        </div>
      `);const v=(d.credits&&d.credits.cast||[]).slice(0,20);if(v.length>0){const b=_("#cast-section"),u=_("#cast-row");b&&u&&(b.style.display="",v.forEach(E=>{const I=E.profile_path?`<img class="cast-img" src="${le}${E.profile_path}" alt="${c(E.name)}" loading="lazy" />`:'<div class="cast-img" style="background:var(--bg4);border-radius:var(--radius-sm);"></div>',N=document.createElement("div");N.className="cast-card",N.innerHTML=`
            ${I}
            <div class="cast-name">${c(E.name)}</div>
            <div class="cast-char">${c(E.character||"")}</div>
          `,u.appendChild(N)}))}const w=(d.similar&&d.similar.results||[]).slice(0,20);if(w.length>0){const b=_("#similar-section"),u=_("#similar-row");b&&u&&(b.style.display="",w.forEach(E=>u.appendChild(ye(E,"tv"))))}}catch(d){console.error("TV detail error:",d);const x=_("#detail-header");x&&(x.innerHTML='<p style="color:var(--text-muted)">Failed to load show details. Please try again.</p>')}}function Xe(){be();const e=_("#main-search-input"),o=_("#search-clear"),t=_("#search-status"),i=_("#search-results"),y=Ge(".filter-btn"),L=new URLSearchParams(location.search),d=L.get("q")||"",x=L.get("type")||"all";let h=x!=="all"?x:"all",f=null,r="";y.forEach(v=>{v.classList.toggle("active",v.dataset.filter===h)}),y.forEach(v=>{v.addEventListener("click",()=>{h=v.dataset.filter,y.forEach(w=>w.classList.toggle("active",w===v)),r?T(r):h!=="all"&&T("")})}),e&&(e.value=d,e.addEventListener("input",()=>{const v=e.value.trim();o.style.display=v?"flex":"none",clearTimeout(f),f=setTimeout(()=>T(v),500)}),d?(o.style.display="flex",T(d)):h!=="all"?T(""):S()),o&&o.addEventListener("click",()=>{e.value="",o.style.display="none",e.focus(),S()});function S(){t.textContent="",i.innerHTML=`
      <div class="no-results">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <h3>Search SheLivesWithUs</h3>
        <p>Find movies and TV shows</p>
      </div>
    `}async function T(v){if(r=v,!v&&h==="all"){S();return}t.textContent="Searching…",i.innerHTML="";const w=i;for(let b=0;b<12;b++){const u=document.createElement("div");u.className="skeleton-card skeleton",u.style.aspectRatio="2/3",w.appendChild(u)}try{let b=[];if(v){let u="/search/multi";h==="movie"?u="/search/movie":h==="tv"&&(u="/search/tv"),b=((await G(`${u}?query=${encodeURIComponent(v)}&page=1`)).results||[]).filter(I=>!ne.has(I.id,I.media_type||h))}else b=(await G(`${h==="movie"?"/movie/popular":"/tv/popular"}`)).results||[];if(h!=="all"&&v&&(b=b.filter(u=>(u.media_type||h)===h)),i.innerHTML="",b.length===0){t.textContent="",i.innerHTML=`
          <div class="no-results" style="grid-column:1/-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <h3>No results found</h3>
            <p>Try a different search term or browse our categories on the home page.</p>
          </div>
        `;return}t.textContent=v?`${b.length} result${b.length!==1?"s":""} for "${v}"`:`Showing popular ${h==="tv"?"TV shows":"movies"}`,b.forEach(u=>{const E=u.media_type||h,I=u.id,N=u.title||u.name||"Untitled",R=ie(u.poster_path),W=u.release_date||u.first_air_date||"",z=u.vote_average?u.vote_average.toFixed(1):"",se=E==="tv"?ae(I):de(I),Y=document.createElement("div");Y.className="search-card fade-in",Y.innerHTML=`
          ${R?`<img src="${c(R)}" alt="${c(N)}" loading="lazy" />`:`<div class="no-poster">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                 No Image
               </div>`}
          <div class="search-card-info">
            <div class="search-card-title">${c(N)}</div>
            <div class="search-card-meta">
              <span class="type-badge ${E==="tv"?"tv":"movie"}">${E==="tv"?"TV":"Movie"}</span>
              ${re(W)}
              ${z?`· ⭐ ${z}`:""}
            </div>
          </div>
        `,Y.addEventListener("click",()=>{location.href=se}),i.appendChild(Y)})}catch(b){console.error("Search error:",b),i.innerHTML='<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:40px">Search failed. Please try again.</p>',t.textContent=""}}}function Ze(e,o){return new Promise(t=>{const i=document.createElement("div");i.className="play-loader",i.innerHTML=`
      <div class="play-loader-backdrop" style="background-image:url(${c(e||"")})"></div>
      <div class="play-loader-overlay"></div>
      <div class="play-loader-content">
        <div class="play-loader-logo">SHELIVESWITHUS</div>
        <div class="play-loader-title">${c(o||"")}</div>
        <div class="play-loader-ring"></div>
      </div>
    `,document.body.appendChild(i),requestAnimationFrame(()=>{requestAnimationFrame(()=>{i.classList.add("active")})}),setTimeout(()=>{i.classList.add("fade-out"),setTimeout(()=>{i.remove(),t()},600)},2400)})}function ft(e,o,t){sessionStorage.setItem("pt_play_loader",JSON.stringify({backdrop:o,title:t})),Ze(o,t).then(()=>{location.href=e})}function et(){const e=sessionStorage.getItem("pt_play_loader");if(e){sessionStorage.removeItem("pt_play_loader");try{const{backdrop:o,title:t}=JSON.parse(e);return Ze(o,t)}catch{}}return Promise.resolve()}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});document.addEventListener("DOMContentLoaded",()=>{switch(te){case"home":Ye();break;case"movie":Ke();break;case"tv":Qe();break;case"search":Xe();break}});(function(){const e="BroadcastChannel"in window?new BroadcastChannel("slwu_remote"):null,o="slwu_profiles",t="pt_active_profile",i="slwu_remote_state",y="slwu_now_playing",L="slwu_ui_scale_2x",d={"New Releases":"/movie/now_playing",Family:"/discover/movie?with_genres=10751",Comedy:"/discover/movie?with_genres=35",Action:"/discover/movie?with_genres=28",Horror:"/discover/movie?with_genres=27",Classics:"/discover/movie?primary_release_date.lte=1999-12-31&sort_by=popularity.desc",Cartoons:"/discover/movie?with_genres=16"};function x(){try{return JSON.parse(localStorage.getItem(o)||"[]")}catch{return[]}}function h(s){localStorage.setItem(o,JSON.stringify(s))}function f(){const s=localStorage.getItem(t);return x().find(l=>l.id===s)||null}function r(s,l){const a=x();let n=a.find(g=>g.name.toLowerCase()===String(s).trim().toLowerCase());return n?n.pin=String(l).trim():(n={id:"p_"+Date.now(),name:String(s).trim(),pin:String(l).trim(),createdAt:Date.now()},a.push(n)),h(a),localStorage.setItem(t,n.id),n}function S(s,l){const a=x().find(n=>n.name.toLowerCase()===String(s).trim().toLowerCase()&&String(n.pin)===String(l).trim());return a&&localStorage.setItem(t,a.id),a}function T(s){const l=x().filter(a=>a.id!==s);h(l),localStorage.getItem(t)===s&&localStorage.removeItem(t)}function v(s,l={}){var g;if(!s||!s.src)return;const a=((g=document.querySelector("#sidebar-poster"))==null?void 0:g.src)||"",n={src:s.src,title:document.title,url:location.href,page:te,poster:a,ts:Date.now(),...l};localStorage.setItem(y,JSON.stringify(n))}function w(){try{return JSON.parse(localStorage.getItem(y)||"null")}catch{return null}}function b(s,l={}){const a={action:s,payload:l,ts:Date.now()};localStorage.setItem(i,JSON.stringify(a)),e&&e.postMessage(a)}function u(){var s,l;return document.fullscreenElement?document.exitFullscreen().catch(()=>{}):(l=(s=document.documentElement).requestFullscreen)==null?void 0:l.call(s).catch(()=>{})}function E(){return document.querySelector("#player-container iframe, #theater-player")}function I(s,l=[]){const a=E()||document.querySelector("#tvremote-mini-player iframe");if(!a||!a.contentWindow)return!1;try{return a.contentWindow.postMessage(JSON.stringify({event:"command",func:s,args:l}),"*"),!0}catch{return!1}}function N(){var l,a;document.querySelectorAll(".footer, .ad-container-native, .ad-container-banner, .ad-toggle-wrap").forEach(n=>n.remove());const s=document.querySelector("#navbar .nav-left");if(s){const n=s.querySelector(".nav-logo");n&&n.remove()}if(document.querySelector("#navbar .nav-right"),(l=document.getElementById("nav-collapse-btn"))==null||l.remove(),!document.getElementById("global-action-stack")){const n=document.createElement("div");n.id="global-action-stack",n.className="global-action-stack",n.innerHTML=`
        <button id="global-stack-toggle" class="global-fab global-fab--toggle" aria-label="Menu">☰</button>
        <div class="global-action-stack-menu">
          <button id="global-home-btn" class="global-fab global-fab--stack" aria-label="Home">Home</button>
          <button id="global-search-btn" class="global-fab global-fab--stack global-fab--search" aria-label="Search">Search</button>
          <button id="global-topnav-btn" class="global-fab global-fab--stack">Menu Bar</button>
          <button id="global-layout-btn" class="global-fab global-fab--stack">Layout</button>
          <button id="global-server-btn" class="global-fab global-fab--stack">Server</button>
          <button id="global-appfs-btn" class="global-fab global-fab--stack">Full</button>
          <button id="global-tv-btn" class="global-fab global-fab--stack">TV</button>
          <button id="global-scale-btn" class="global-fab global-fab--stack">1x</button>
          <button id="global-profile-btn" class="global-fab global-fab--stack">Profile</button>
          <button id="global-mylist-btn" class="global-fab global-fab--stack">My List</button>
          <button id="global-hidden-btn" class="global-fab global-fab--stack">Hidden</button>
          <button id="global-theater-btn" class="global-fab global-fab--stack">Theater</button>
          <button id="global-catalog-btn" class="global-fab global-fab--stack">Catalog</button>
        </div>
      `,document.body.appendChild(n)}if(!document.getElementById("slwu-brand-pin")){const n=document.createElement("div");n.id="slwu-brand-pin",n.textContent="SheLivesWithMe",document.body.appendChild(n)}if((a=document.getElementById("slwu-layout-pin"))==null||a.remove(),!document.getElementById("slwu-profile-modal")){const n=document.createElement("div");n.id="slwu-profile-modal",n.className="slwu-modal",n.innerHTML=`
        <div class="slwu-modal-card">
          <button class="slwu-modal-close" data-close-modal="profile">×</button>
          <h2>PROFILE</h2>
          <p>Scan to open the local profile page.</p>
          <img id="slwu-profile-qr" alt="Profile QR Code" />
          <div class="slwu-modal-actions">
            <a class="btn btn-primary btn-3d" href="${ee("profile/")}">Open Profile</a>
          </div>
        </div>
      `,document.body.appendChild(n)}if(!document.getElementById("slwu-server-modal")){const n=document.createElement("div");n.id="slwu-server-modal",n.className="slwu-modal",n.innerHTML=`
        <div class="slwu-modal-card">
          <button class="slwu-modal-close" data-close-modal="server">×</button>
          <h2>SERVER</h2>
          <p class="slwu-route-note">Switch player embed source. If a provider is blocked, try the other.</p>
          <div class="slwu-modal-actions" style="display:grid;gap:10px">
            <button class="remote-btn" data-server-mode="vidking">Vidking (Default)</button>
            <button class="remote-btn" data-server-mode="vidsrc">Vidsrc</button>
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
      `,document.body.appendChild(n)}}function R(){const s=document.body;if(window.__slwu=window.__slwu||{},window.__slwu._globalButtonsWired)return;window.__slwu._globalButtonsWired=!0;const l=document.getElementById("tvremote-close"),a=document.getElementById("profile-open-btn"),n=document.getElementById("slwu-profile-modal"),g=document.getElementById("global-theater-btn"),C=document.getElementById("global-mylist-btn"),B=document.getElementById("global-hidden-btn"),A=document.getElementById("global-stack-toggle"),J=document.getElementById("global-home-btn"),$=document.getElementById("global-topnav-btn"),k=document.getElementById("global-layout-btn"),M=document.getElementById("global-server-btn"),V=document.getElementById("global-appfs-btn"),j=document.getElementById("global-scale-btn"),F=document.getElementById("global-tv-btn"),m=document.getElementById("global-profile-btn"),q=document.getElementById("global-catalog-btn"),P=document.getElementById("global-search-btn"),U=document.getElementById("global-search-sheet"),Q=document.getElementById("global-hidden-sheet"),Z=document.getElementById("global-catalog-sheet"),O=document.getElementById("slwu-server-modal"),K=()=>{s.classList.remove("sheet-open","hidden-open","catalog-open")},ge="slwu_layout_mode",Pe=()=>localStorage.getItem(ge)||"classic",He=p=>{const H=p==="netflix"?"netflix":"classic";s.classList.toggle("layout-netflix",H==="netflix"),localStorage.setItem(ge,H);const X=H==="netflix"?"Netflix":"Classic";k&&(k.textContent=`Layout: ${X}`)};He(Pe());const it=()=>He(Pe()==="netflix"?"classic":"netflix"),Ne=()=>{const p=Se()==="vidsrc"?"Server: Vidsrc":"Server: Vidking";M&&(M.textContent=p)};Ne();const Re=()=>{const p=s.classList.contains("nav-collapsed")?"Menu Bar: Off":"Menu Bar: On";$&&($.textContent=p)};Re();const lt=()=>{const p=new URLSearchParams(location.search),H=p.get("id");if(H){if(te==="movie"){const X=document.querySelector("#player-container iframe");X&&(X.src=me(H))}else if(te==="tv"){const X=p.get("season")||"1",Le=p.get("episode")||"1",he=document.querySelector("#player-container iframe");he&&(he.src=ue(H,X,Le))}else if(te==="theater"){const X=document.getElementById("theater-player"),Le=p.get("type")||"",he=p.get("season")||"1",rt=p.get("episode")||"1";X&&(Le==="tv"?X.src=ue(H,he,rt):X.src=me(H))}}},qe=(p={})=>{K(),s.classList.add("sheet-open"),s.classList.remove("stack-open"),Ee();const H=document.getElementById("global-search-input"),X=document.getElementById("global-search-results");p.prefill&&H&&(H.value=String(p.prefill)),H&&H.focus(),X&&!(H&&H.value.trim())&&(X.innerHTML='<div class="tvremote-empty">Type to search.</div>'),H&&H.value.trim()&&ke(H.value.trim())};l&&(l.onclick=()=>s.classList.remove("remote-open")),a&&(a.onclick=()=>{const p=document.getElementById("slwu-profile-qr"),H=oe("profile/");p&&(p.src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data="+encodeURIComponent(H)),n.classList.add("open")}),document.querySelectorAll("[data-close-modal='profile']").forEach(p=>p.onclick=()=>n.classList.remove("open")),n&&n.addEventListener("click",p=>{p.target===n&&n.classList.remove("open")}),document.querySelectorAll("[data-close-modal='server']").forEach(p=>p.onclick=()=>O==null?void 0:O.classList.remove("open")),O&&O.addEventListener("click",p=>{p.target===O&&O.classList.remove("open")}),O==null||O.querySelectorAll("[data-server-mode]").forEach(p=>p.onclick=()=>{mt(p.dataset.serverMode),Ne(),O.classList.remove("open"),lt()}),g&&(g.onclick=()=>{const p=w(),H=new URL(oe("theater/"));p&&p.src&&H.searchParams.set("src",p.src),location.href=H.toString()}),J&&(J.onclick=()=>{K(),s.classList.remove("stack-open","remote-open"),location.href=ce()}),$&&($.onclick=()=>{s.classList.toggle("nav-collapsed"),s.classList.remove("stack-open"),Re()}),k&&(k.onclick=()=>it()),M&&(M.onclick=()=>{O==null||O.classList.add("open")}),C&&(C.onclick=()=>{qe({prefill:""});const p=document.getElementById("global-search-results");p&&(p.innerHTML='<div class="tvremote-empty">Choose from My List or search.</div>')}),B&&(B.onclick=()=>{K(),s.classList.add("hidden-open"),xe()}),A&&(A.onclick=()=>s.classList.toggle("stack-open")),V&&(V.onclick=()=>u());const Ue=p=>{s.classList.remove("ui-scale-1x","ui-scale-2x","ui-scale-3x"),s.classList.add(`ui-scale-${p}x`),localStorage.setItem(L,String(p)),j&&(j.textContent=`${p}x`)},Ae=parseInt(localStorage.getItem(L)||"1",10);Ue([1,2,3].includes(Ae)?Ae:1),j&&(j.onclick=()=>{const p=parseInt(localStorage.getItem(L)||"1",10);Ue(p===3?1:p+1)}),F&&(F.onclick=()=>s.classList.toggle("remote-open")),m&&(m.onclick=()=>{const p=document.getElementById("slwu-profile-qr"),H=oe("profile/");p&&(p.src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data="+encodeURIComponent(H)),n==null||n.classList.add("open")}),q&&(q.onclick=()=>{K(),s.classList.add("catalog-open"),s.classList.remove("stack-open"),Ie()}),P&&(P.onclick=()=>qe());const Oe=document.getElementById("global-search-close");Oe&&(Oe.onclick=()=>K());const Fe=document.getElementById("global-search-clear");Fe&&(Fe.onclick=()=>{const p=document.getElementById("global-search-input"),H=document.getElementById("global-search-results");p&&(p.value=""),H&&(H.innerHTML='<div class="tvremote-empty">Type to search.</div>')});const We=document.getElementById("global-hidden-close");We&&(We.onclick=()=>K());const Ve=document.getElementById("global-catalog-close");Ve&&(Ve.onclick=()=>K()),U&&U.addEventListener("click",p=>{p.target===U&&K()}),Q&&Q.addEventListener("click",p=>{p.target===Q&&K()}),Z&&Z.addEventListener("click",p=>{p.target===Z&&K()}),document.addEventListener("keydown",p=>{p.key==="Escape"&&K()})}function W(s,l,a={}){if(!l)return;const n=!!a.append;if(n||(l.innerHTML=""),!s.length){n||(l.innerHTML='<div class="tvremote-empty">No items found.</div>');return}s.forEach(g=>{const C=g.media_type==="tv"||g.first_air_date?"tv":"movie",B=g.title||g.name||"Untitled",A=C==="tv"?ae(g.id):de(g.id),J=D.has(g.id,C),$=document.createElement("article");$.className="tvremote-card";const k=ie(g.poster_path)||"";$.innerHTML=`
        <button class="tvremote-card-wish ${J?"in-list":""}" aria-label="Wish List">❤</button>
        ${k?`<img src="${c(k)}" alt="${c(B)}" loading="lazy">`:`<div class="tvremote-card-fallback">${c(B.slice(0,1))}</div>`}
        <div class="tvremote-card-info">
          <div class="tvremote-card-title">${c(B)}</div>
          <div class="tvremote-card-meta">${C.toUpperCase()} · ${re(g.release_date||g.first_air_date||"")}</div>
        </div>
      `,$.addEventListener("click",V=>{V.target.closest(".tvremote-card-wish")||(location.href=A)});const M=$.querySelector(".tvremote-card-wish");M&&(M.onclick=V=>{V.stopPropagation();const j=D.toggle({id:g.id,type:C,title:B,poster:g.poster_path});V.currentTarget.classList.toggle("in-list",j),we(),Ee()}),l.appendChild($)})}let z=1,se="all";async function Y(s=!0){const l=document.getElementById("tvremote-search"),a=document.getElementById("tvremote-results");if(!l||!a)return;const n=l.value.trim();if(s&&(z=1,a.innerHTML=""),!n){a.innerHTML='<div class="tvremote-empty">Search movies, TV, or people.</div>';return}const C=((await G(`/search/multi?query=${encodeURIComponent(n)}&page=${z}`)).results||[]).filter(B=>B.media_type==="movie"||B.media_type==="tv");W(C,a,{append:!s})}async function pe(){const s=document.getElementById("tvremote-catalog");s&&(s.innerHTML="",Object.keys(d).forEach(l=>{const a=document.createElement("button");a.className="remote-pill remote-pill--catalog",a.textContent=l,a.onclick=async()=>{s.querySelectorAll(".remote-pill").forEach(g=>g.classList.remove("active")),a.classList.add("active");const n=await G(d[l]);W((n.results||[]).slice(0,12),document.getElementById("tvremote-catalog-results"))},s.appendChild(a)}))}let ve=null;async function Ie(s=null){const l=document.getElementById("global-catalog-tabs"),a=document.getElementById("global-catalog-grid");if(!l||!a)return;l.innerHTML="";const n=Object.keys(d),g=s||ve||n[0];ve=g,n.forEach(C=>{const B=document.createElement("button");B.className="remote-pill remote-pill--catalog global-catalog-tab",B.textContent=C,C===g&&B.classList.add("active"),B.onclick=()=>Ie(C),l.appendChild(B)}),a.innerHTML='<div class="tvremote-empty">Loading…</div>';try{const B=((await G(d[g])).results||[]).slice(0,24);W(B,a)}catch{a.innerHTML='<div class="tvremote-empty">Could not load catalog.</div>'}}function we(){const s=document.getElementById("tvremote-mylist");if(!s)return;const l=D.get();if(!l.length){s.innerHTML='<div class="tvremote-empty">My List is empty.</div>';return}Promise.all(l.slice(0,24).map(a=>G(a.type==="tv"?`/tv/${a.id}`:`/movie/${a.id}`).then(n=>({...n,media_type:a.type})).catch(()=>null))).then(a=>{W(a.filter(Boolean),s)})}function Be(){const s=document.getElementById("tvremote-mini-player");if(!s)return;const l=s.querySelector("iframe"),a=document.querySelector("#player-container iframe"),n=w(),g=(a==null?void 0:a.src)||(n==null?void 0:n.src)||"";g&&l.src!==g&&(l.src=g)}function Ee(){const s=document.getElementById("global-search-mylist");if(!s)return;const l=D.get();s.innerHTML=l.length?"":'<div class="tvremote-empty">Nothing saved yet.</div>',l.slice(0,30).forEach(a=>{const n=document.createElement("button");n.className="global-search-list-item";const g=a.title||a.name||"Saved Item",C=a.poster?`${le}${a.poster}`:ie(a.poster_path||a.poster);n.innerHTML=`
        ${C?`<img src="${c(C)}" alt="${c(g)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${c(g.slice(0,1))}</span>`}
        <span class="global-search-list-label">${c(g)}</span>
      `,n.onclick=()=>{location.href=a.type==="tv"?ae(a.id):de(a.id)},s.appendChild(n)})}function xe(){const s=document.getElementById("global-hidden-results");if(!s)return;const l=ne.get();s.innerHTML=l.length?"":'<div class="tvremote-empty">Nothing hidden yet.</div>',l.slice(0,40).forEach(a=>{const n=a.title||a.name||"Hidden Item",g=a.poster?`${le}${a.poster}`:ie(a.poster_path||a.poster)||"",C=document.createElement("article");C.className="tvremote-card tvremote-card--restore",C.innerHTML=`
        <button class="tvremote-card-wish in-list" aria-label="Restore">↩</button>
        ${g?`<img src="${c(g)}" alt="${c(n)}" loading="lazy">`:`<div class="tvremote-card-fallback">${c(n.slice(0,1))}</div>`}
        <div class="tvremote-card-info">
          <div class="tvremote-card-title">${c(n)}</div>
          <div class="tvremote-card-meta">RESTORE</div>
        </div>
      `;const B=()=>{ne.remove(a.id,a.type),xe()};C.onclick=A=>{A.target.closest(".tvremote-card-wish")||B()},C.querySelector(".tvremote-card-wish").onclick=A=>{A.stopPropagation(),B()},s.appendChild(C)})}let Te=null;async function ke(s){const l=document.getElementById("global-search-results");if(!l)return;if(!s){l.innerHTML='<div class="tvremote-empty">Type to search.</div>';return}l.innerHTML='<div class="tvremote-empty">Searching…</div>';const a=await G(`/search/multi?query=${encodeURIComponent(s)}&page=1`);W((a.results||[]).filter(n=>n.media_type==="movie"||n.media_type==="tv"),l)}function Ce(){if(window.__slwu=window.__slwu||{},window.__slwu._globalSearchWired)return;window.__slwu._globalSearchWired=!0,Ee();const s=document.getElementById("global-search-input");s&&s.addEventListener("input",()=>{clearTimeout(Te),Te=setTimeout(()=>ke(s.value.trim()),350)});const l=document.getElementById("tvremote-search-clear");l&&(l.onclick=()=>{const a=document.getElementById("tvremote-search"),n=document.getElementById("tvremote-results");a&&(a.value=""),n&&(n.innerHTML='<div class="tvremote-empty">Search movies, TV, or people.</div>')})}function Me(){if(window.__slwu=window.__slwu||{},window.__slwu._tvRemoteWired)return;window.__slwu._tvRemoteWired=!0,pe(),we(),Be();const s=document.getElementById("tvremote-player-fullscreen"),l=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),a=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled);s&&(l||!a)&&(s.style.display="none");const n=document.getElementById("tvremote-search"),g=document.getElementById("tvremote-more");let C=null;n&&n.addEventListener("input",()=>{clearTimeout(C),C=setTimeout(()=>Y(!0).catch(console.error),350)});const B=document.getElementById("tvremote-more-header"),A=document.getElementById("tvremote-random-header"),J=()=>{z+=1,Y(!1).catch(console.error)};g&&(g.onclick=J),B&&(B.onclick=J),A&&(A.onclick=async()=>{const P=((await G(se==="tv"?"/trending/tv/week":"/trending/movie/week")).results||[]).filter(Q=>!ne.has(Q.id,Q.media_type||(se==="tv"?"tv":"movie"))),U=P[Math.floor(Math.random()*Math.max(P.length,1))];U&&W([U],document.getElementById("tvremote-results"),!0)}),document.querySelectorAll("[data-remote-mode]").forEach(m=>{m.onclick=async()=>{var q,P;if(document.querySelectorAll("[data-remote-tab]").forEach(U=>U.classList.remove("active")),document.querySelectorAll(".tvremote-tab").forEach(U=>U.classList.remove("active")),(q=document.querySelector('[data-remote-tab="search"]'))==null||q.classList.add("active"),(P=document.getElementById("tvremote-tab-search"))==null||P.classList.add("active"),m.dataset.remoteMode==="home"){location.href=ce();return}se=m.dataset.remoteMode,await Y(!0).catch(console.error)}}),document.querySelectorAll("[data-remote-tab]").forEach(m=>{m.onclick=()=>{document.querySelectorAll("[data-remote-tab]").forEach(q=>q.classList.remove("active")),document.querySelectorAll(".tvremote-tab").forEach(q=>q.classList.remove("active")),m.classList.add("active"),document.getElementById(`tvremote-tab-${m.dataset.remoteTab}`).classList.add("active"),m.dataset.remoteTab==="mylist"&&we()}});const $=document.getElementById("tvremote-message"),k=m=>{$&&($.textContent=m)},M=()=>{const m=new URLSearchParams(location.search);return{id:m.get("id"),season:parseInt(m.get("season")||"1",10),episode:parseInt(m.get("episode")||"1",10)}},V=document.getElementById("tvremote-nowplaying-toggle");V&&(V.onclick=()=>{const m=document.getElementById("tvremote-mini-player");if(m.hidden)m.hidden=!1,Be();else{const q=m.querySelector("iframe");q&&(q.src="about:blank"),m.hidden=!0}}),document.getElementById("tvremote-prev-episode").onclick=()=>{if(te!=="tv")return k("Prev Episode works on TV pages.");const m=M(),q=Math.max(1,m.episode-1);location.href=ae(m.id,{season:m.season,episode:q})},document.getElementById("tvremote-next-episode").onclick=()=>{if(te!=="tv")return k("Next Episode works on TV pages.");const m=M();location.href=ae(m.id,{season:m.season,episode:m.episode+1})};const j=m=>{document.body.classList.remove("remote-scale-1x","remote-scale-2x","remote-scale-3x"),document.body.classList.add(`remote-scale-${m}x`),localStorage.setItem("slwu_remote_scale",String(m));const q=document.getElementById("tvremote-fullscreen");q&&(q.textContent=`${m}x`)};j(parseInt(localStorage.getItem("slwu_remote_scale")||"1",10)),document.getElementById("tvremote-fullscreen").onclick=()=>{const m=parseInt(localStorage.getItem("slwu_remote_scale")||"1",10);j(m===3?1:m+1)};const F=document.getElementById("tvremote-controls-toggle");F&&(F.onclick=()=>document.body.classList.toggle("remote-controls-collapsed")),document.getElementById("tvremote-playpause").onclick=()=>{I("playVideo"),I("pauseVideo"),b("togglePlay"),k("Sent Play / Pause.")},document.getElementById("tvremote-seek-back").onclick=()=>{I("seekTo",[0,!0]),b("seekBack"),k("Sent -30s.")},document.getElementById("tvremote-seek-forward").onclick=()=>{b("seekForward"),k("Sent +30s.")},document.getElementById("tvremote-volume-down").onclick=()=>{b("volumeDown"),k("Sent volume down.")},document.getElementById("tvremote-volume-up").onclick=()=>{b("volumeUp"),k("Sent volume up.")},document.getElementById("tvremote-stop").onclick=()=>{I("stopVideo"),b("stop"),k("Sent stop.")},document.getElementById("tvremote-player-fullscreen").onclick=()=>{const m=E()||document.querySelector("#tvremote-mini-player iframe");m!=null&&m.requestFullscreen&&m.requestFullscreen().catch(()=>{}),b("fullscreenOn"),k("Fullscreen requested.")},document.getElementById("tvremote-player-window").onclick=()=>{document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),b("fullscreenOff"),k("Returned to windowed mode.")},document.getElementById("tvremote-resolution").onclick=()=>k(te==="theater"?"Use provider settings inside theater player.":"Open Theater to use player settings."),document.getElementById("tvremote-subtitles").onclick=()=>k(te==="theater"?"Use provider subtitle settings inside theater player.":"Open Theater to use subtitle settings.")}function tt(){if(window.__slwu=window.__slwu||{},window.__slwu._nowPlayingWired)return;window.__slwu._nowPlayingWired=!0;const s=document.getElementById("player-container");if(!s)return;const l=()=>{const n=s.querySelector("iframe");n&&v(n,{page:te})};l(),new MutationObserver(l).observe(s,{childList:!0,subtree:!0})}function ot(s={}){if(!/profile\.html$|\/profile\/?$/.test(location.pathname)&&s.page!=="profile")return;const l=s.mountId?document.getElementById(s.mountId):null,a=l||document.body;l||(document.body.className="profile-page"),a.innerHTML=`
      <div class="profile-shell">
        <a class="back-btn profile-back-link" href="${ee("index.html")}">← Return Back</a>
        <div class="profile-hero">
          <div class="tv-remote-kicker">PROFILE</div>
          <h1 id="profile-page-title">Create / Enter Profile</h1>
          <p class="profile-copy">Local profiles only. Name + pin are stored in your browser.</p>
        </div>
        <div id="profile-app" class="profile-app"></div>
      </div>
    `;const n=a.querySelector("#profile-app"),g=document.createElement("div");g.id="profile-pin-modal",g.className="slwu-modal",g.innerHTML=`
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
    `,a.appendChild(g);const B=new URLSearchParams(location.search).get("name"),A=f();function J(){const m=x().map(P=>`
        <div class="profile-local-card">
          <div>
            <div class="profile-local-name">${c(P.name)}</div>
            <div class="profile-local-meta">Local profile</div>
          </div>
          <div class="profile-local-actions">
            <button class="remote-mini-btn" data-login="${c(P.name)}">Enter</button>
            <button class="remote-mini-btn" data-delete="${c(P.id)}">Delete</button>
          </div>
        </div>
      `).join("");n.innerHTML=`
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
      `;const q=()=>({name:document.getElementById("profile-name").value.trim(),pin:document.getElementById("profile-pin").value.trim()});document.getElementById("profile-login").onclick=()=>{const{name:P,pin:U}=q();if(!P||!U)return alert("Enter name and pin.");if(!S(P,U))return alert("Wrong name or pin.");location.href=ee(`profile/?name=${encodeURIComponent(P)}`)},document.getElementById("profile-signup").onclick=()=>{const P=document.getElementById("profile-name").value.trim(),U=document.getElementById("profile-pin").value.trim();if(!P||!U)return alert("Enter name and pin.");const Q=r(P,U);location.href=ee(`profile/?name=${encodeURIComponent(Q.name)}`)},n.querySelectorAll("[data-delete]").forEach(P=>P.onclick=()=>{T(P.dataset.delete),J()}),n.querySelectorAll("[data-login]").forEach(P=>P.onclick=()=>{const U=x().find(ge=>ge.name===P.dataset.login);if(!U)return;const Q=document.getElementById("profile-pin-modal"),Z=document.getElementById("profile-pin-modal-input"),O=document.getElementById("profile-pin-copy"),K=document.getElementById("profile-pin-error");O&&(O.textContent=`Enter pin for ${U.name}.`),K&&(K.style.display="none"),Z&&(Z.value=""),Q.dataset.profile=U.name,Q.classList.add("open"),setTimeout(()=>Z==null?void 0:Z.focus(),20)})}function $(F){const m=x().find(U=>U.name.toLowerCase()===F.toLowerCase())||A;document.getElementById("profile-page-title").textContent=m?m.name:F,n.innerHTML=`
        <div class="profile-dashboard remote-look">
          <div class="remote-btn remote-btn-primary profile-dashboard-title">${c(F)}</div>
          <a class="remote-btn" href="${ee("index.html")}">Home</a>
          <a class="remote-btn" href="${ee("theater/")}">Open Theater</a>
          <a class="remote-btn" href="${ee("profile/")}">Switch Profile</a>
          <button id="profile-delete-current" class="remote-btn">Delete Profile</button>
          <button id="profile-export" class="remote-btn">Export Local Data</button>
        </div>
      `;const q=document.getElementById("profile-delete-current");q&&m&&(q.onclick=()=>{j(`Delete ${m.name}?`)&&(T(m.id),location.href=ee("profile/"))});const P=document.getElementById("profile-export");P&&(P.onclick=()=>{const U=localStorage.getItem(t)||"default",Q={profile:m||null,myList:D.get(),hidden:ne.get(),progress:$e.get(),profileId:U,exportedAt:new Date().toISOString()},Z=new Blob([JSON.stringify(Q,null,2)],{type:"application/json"}),O=document.createElement("a");O.href=URL.createObjectURL(Z),O.download=`slwu_${((m==null?void 0:m.name)||"profile").replace(/\\s+/g,"_")}_export.json`,O.click(),setTimeout(()=>URL.revokeObjectURL(O.href),2500)})}B?$(B):J();const k=document.getElementById("profile-pin-modal"),M=()=>k==null?void 0:k.classList.remove("open");a.querySelectorAll("[data-close-modal='pin']").forEach(F=>F.onclick=M);const V=document.getElementById("profile-pin-cancel");V&&(V.onclick=M);const j=document.getElementById("profile-pin-confirm");j&&(j.onclick=()=>{if(!k)return;const F=k.dataset.profile||"",m=document.getElementById("profile-pin-modal-input"),q=document.getElementById("profile-pin-error"),P=String((m==null?void 0:m.value)||"").trim();if(!(!F||!P)){if(!S(F,P)){q&&(q.style.display="block");return}M(),location.href=ee(`profile/?name=${encodeURIComponent(F)}`)}}),k&&k.addEventListener("click",F=>{F.target===k&&M()})}function nt(s={}){if(!/theater\.html$|\/theater\/?$/.test(location.pathname)&&s.page!=="theater")return;const l=s.mountId?document.getElementById(s.mountId):null,a=l||document.body;l||(document.body.className="theater-page");const n=w(),g=new URLSearchParams(location.search).get("src")||(n==null?void 0:n.src)||"";a.innerHTML=`
      <div class="theater-layout" id="theater-layout">
        <aside class="theater-side open" id="theater-side">
          <div class="theater-side-toprow">
            <button class="remote-mini-btn theater-side-toggle" id="theater-side-toggle" aria-label="Toggle Sidebar">☰</button>
            <button class="remote-mini-btn" id="theater-tv-btn">TV</button>
            <a href="${ce()}" class="remote-mini-btn">Home</a>
            <a href="${ee("profile/")}" class="remote-mini-btn">Profile</a>
          </div>
          <div class="sheet-title">My List</div>
          <div id="theater-mylist" class="theater-mylist"></div>
        </aside>
        <main class="theater-main">
          <div class="theater-player-wrap">
            <iframe id="theater-player" src="${c(g)}" allow="autoplay; fullscreen"></iframe>
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
    `,document.querySelectorAll("[data-close-modal='theater']").forEach($=>$.onclick=()=>document.getElementById("theater-mobile-popup").classList.remove("open")),N(),R(),Ce(),Me(),(()=>{const $=document.getElementById("theater-mylist"),k=D.get();$.innerHTML="",k.forEach(M=>{const V=document.createElement("button");V.className="global-search-list-item";const j=M.poster?ie(M.poster):"";V.innerHTML=`${j?`<img src="${c(j)}" alt="${c(M.title)}" loading="lazy">`:`<span class="global-search-list-thumb-fallback">${c((M.title||"?").slice(0,1))}</span>`}<span class="global-search-list-label">${c(M.title)}</span>`,V.onclick=()=>{const F=M.type==="tv"?ue(M.id,1,1):me(M.id);A.src=F,setNowPlaying({src:F,title:M.title,type:M.type,id:M.id})},$.appendChild(V)})})(),document.getElementById("theater-side-toggle").onclick=()=>{const $=document.getElementById("theater-side"),k=document.getElementById("theater-layout");$.classList.toggle("open"),k.classList.toggle("side-collapsed",!$.classList.contains("open")),requestAnimationFrame(()=>window.dispatchEvent(new Event("resize")))};const B=document.getElementById("theater-tv-btn");B&&(B.onclick=()=>document.body.classList.toggle("remote-open"));const A=document.getElementById("theater-player"),J=$=>{var k;if(!(!$||!A))try{$.action==="fullscreenOn"&&A.requestFullscreen&&A.requestFullscreen().catch(()=>{}),$.action==="fullscreenOff"&&document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),(k=A.contentWindow)==null||k.postMessage(JSON.stringify({event:"command",func:"playVideo",args:[]}),"*")}catch{}};window.addEventListener("storage",$=>{if($.key===i)try{J(JSON.parse($.newValue))}catch{}if($.key===y)try{const k=JSON.parse($.newValue||"null");k!=null&&k.src&&(A.src=k.src)}catch{}}),e&&(e.onmessage=$=>J($.data))}function st(s={}){const l=s.mountId?document.getElementById(s.mountId):null,a=l||document.body;l||(document.body.className="owner-page");const n="slwu_owner_gate";let g={name:"Sheliveswithme",pin:"654321"};try{g=JSON.parse(localStorage.getItem(n)||JSON.stringify(g))}catch{}a.innerHTML=`
      <div class="slwu-route-shell">
        <div class="slwu-route-card">
          <div class="slwu-route-top">
            <a href="${ce()}" class="slwu-back-link">← Back</a>
            <h1>Owner Portal</h1>
          </div>
          <p class="slwu-route-note">Local-only owner gate. Defaults are prefilled so the route works immediately.</p>
          <label class="slwu-field-label">Gate Name</label>
          <input id="owner-name" class="slwu-field-input" value="${c(g.name||"Sheliveswithme")}" />
          <label class="slwu-field-label">PIN</label>
          <input id="owner-pin" class="slwu-field-input" value="${c(g.pin||"654321")}" />
          <button id="owner-save" class="slwu-action-btn">Save Owner Gate</button>
          <div id="owner-msg" class="slwu-route-note"></div>
        </div>
      </div>
    `;const C=document.getElementById("owner-save");C&&C.addEventListener("click",()=>{var J,$,k,M;const B={name:(($=(J=document.getElementById("owner-name"))==null?void 0:J.value)==null?void 0:$.trim())||"Sheliveswithme",pin:((M=(k=document.getElementById("owner-pin"))==null?void 0:k.value)==null?void 0:M.trim())||"654321"};localStorage.setItem(n,JSON.stringify(B));const A=document.getElementById("owner-msg");A&&(A.textContent=`Saved owner gate for ${B.name}.`)})}function at(){N(),R(),Ce(),Me(),tt();const s=document.getElementById("global-search-input");s&&s.addEventListener("input",()=>{clearTimeout(window.__slwuGlobalSearch),window.__slwuGlobalSearch=setTimeout(()=>ke(s.value.trim()),350)})}window.__slwu=window.__slwu||{},window.__slwu.boot=(s,l={})=>{const a=s||ze(),n={...l||{},page:a};try{at()}catch{}try{switch(a){case"home":Ye();break;case"movie":Ke();break;case"tv":Qe();break;case"search":Xe();break;case"catalog":break;case"profile":ot(n);break;case"theater":nt(n);break;case"owner":st(n);break;default:break}}catch{}},document.addEventListener("DOMContentLoaded",()=>window.__slwu.boot())})();function bt(e,o){var t,i;(i=(t=window.__slwu)==null?void 0:t.boot)==null||i.call(t,e,o)}export{bt as boot};
