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
    console.log('Installed');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('Caching cacheFiles');
            return cache.addAll(cacheFiles);
        })
    )
});

self.addEventListener('activate', function(e) {
    console.log('Activated');
});

self.addEventListener('fetch', function(e) {
    console.log('Fetching', e.request);
});





