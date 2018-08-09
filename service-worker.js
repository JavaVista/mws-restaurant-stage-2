const cacheName = 'v1';
const cacheFiles = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Installed');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching cacheFiles');
            return cache.addAll(cacheFiles);
        })
    )
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activated');
});

self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetching', e.request);

    e.respondWith(
        caches.match(e.request).then(function(response) {
            if (response) {
                console.log("[ServiceWorker] Found in cache", e.request.url);
                return response;
            }
        })
    )
});





