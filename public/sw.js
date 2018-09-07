self.addEventListener('install', function (event) {
    console.log('[SW] Installing SW...', event);
    event.waitUntil(
        caches.open('static')
        .then(function(cache){
            console.log('[SW] precaching => ',cache); // МЕТОДЫ -> https://developer.mozilla.org/ru/docs/Web/API/Cache
            cache.add('/src/js/app.js');
            cache.addAll([
                '/',
                '/index.html',
                '/src/js/feed.js',
                '/src/js/app.js',
                '/src/js/matiral.min.js',
                '/src/css/feed.css',
                '/src/css/app.css',
                '/src/images/main-page.jpg',
                '/src/'
             ]);
        }) 
);
});
self.addEventListener('activate', function (event) {
    console.log('[SW] Activating SW...', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    console.log('[SW] Fetching smth g  ...', event);
    //  event.respondWidth(fetch(event.request));
    event.respondWith(
        caches.match(event.request)
            .then(function(response){
                if (response){
                    return response;
                } 
                else fetch(event.request)
                    .then (function(res){
                        return caches.open('dynamic')
                            .then (function(cache){
                                cache.put(event.request.url,res.clone());
                                return res;
                            })
                    })
            })
    );
});