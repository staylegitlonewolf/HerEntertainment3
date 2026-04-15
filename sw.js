// SheLivesWithUs Service Worker
const CACHE_NAME = 'sheliveswithus-v4';
const PRECACHE = [
  './index.html',
  './movie.html',
  './tv.html',
  './search.html',
  './profile.html',
  './theater.html',
  './owner.html',
  './categories.html',
  './styles.css',
  './script.js',
  './favicon.svg',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll([...new Set(PRECACHE)])).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(response => {
      const clone = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
