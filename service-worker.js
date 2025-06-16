// Updated cache name to force clients to retrieve the latest files
const CACHE_NAME = 'agora-v4';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './service-worker.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names => {
      return Promise.all(
        names.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// Background sync to ensure queued actions are processed when back online
self.addEventListener('sync', event => {
  if (event.tag === 'sync-agora') {
    event.waitUntil(Promise.resolve());
  }
});

// Periodic sync placeholder for updating content
self.addEventListener('periodicsync', event => {
  if (event.tag === 'update-agora') {
    event.waitUntil(Promise.resolve());
  }
});

// Handle push notifications
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Ágora Comunicaciones';
  const options = {
    body: data.body || 'Tienes una nueva notificación'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
