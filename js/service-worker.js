const cacheName = 'v1';
const cacheFiles = [
    './',
    './index.html',
    './restaurant.html',
    './css/styles.css',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js'
];

self.addEventListener('install', function(event) {
    console.log('installed!');
});

self.addEventListener('activate', function(event) {
    console.log('activated!');
});

self.addEventListener('fetch', function(event) {
    console.log('fetching', event.request.url);
});





