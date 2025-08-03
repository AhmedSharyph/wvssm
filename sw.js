const CACHE_NAME = 'wvssm-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js',
  '/css/style.css',
  '/js/form-handler.js',
  '/js/job-title-fetch.js',
  '/icon-192.png',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/tom-select@2.2.2/dist/css/tom-select.css',
  'https://cdn.jsdelivr.net/npm/tom-select@2.2.2/dist/js/tom-select.complete.min.js',
  'https://unpkg.com/prefixfree@1.0.0/prefixfree.min.js',
  'https://wzrd.in/standalone/formdata-polyfill@latest',
  'https://wzrd.in/standalone/promise-polyfill@latest',
  'https://wzrd.in/standalone/whatwg-fetch@latest'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
