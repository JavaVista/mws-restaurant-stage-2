const cacheName = 'v1';
const cacheFiles = [

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





