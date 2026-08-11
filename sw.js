const CACHE_NAME = 'DailyDose_cache';
const ASSETS = [
  './index.html',
  './manifest.json'
];

// 1. Install Event: Cache essential assets locally

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});


// 2. Fetch Event: Intercept network calls to serve cached files when offline

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
