self.addEventListener('install', function (event) {
    console.log('[SW] Installing SW...', event);
});
self.addEventListener('activate', function (event) {
    console.log('[SW] Activating SW...', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    console.log('[SW] Fetching smthg  ...', event);
    //  event.respondWidth(fetch(event.request));
    event.respondWidth(null);
});