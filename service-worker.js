const cacheName = 'v1';
const cacheFiles = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
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
                console.log('[ServiceWorker] Found in cache', e.request.url);
                return response;
            }

            console.log('[ServiceWorker] Not found in cache', e.request.url);
         
            const requestClone = e.request.clone();

            fetch(requestClone)
                .then(function(response) {
                    return response;
                    if(!response) {
                        console.log('[ServiceWorker] No response from fetch');
                        return response;
                    }

                    const responseClone = response.clone();

                    caches.open(cacheName).then(function(cache) {
                        console.log('[ServiceWorker] Caching:',responseClone)

                        cache.put(e.request, responseClone);
                        return response;
                    });
                })
                .catch(function(err) {
                    console.log('[ServiceWorker] Error fetching and caching new data:', err);
                })
            
        })
    )
});





