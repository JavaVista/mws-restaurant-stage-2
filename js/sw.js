self.addEventListener('fetch', function(event) {
    console.log('fetched!');
});



self.addEventListener('install', function(event) {
    // console.log('installed!');
    event.waitUntil(
        
        caches.open('rw-v1').then(function(cache) {
            return cache.addAll([
                'test',
                'test2'
            ]);
        })
    );
});

function registerServiceWorker() {
    navigator.serviceWorker.register('/sw.js').then(function() {
        console.log('reg success!');
    }).catch(function() {
        console.log('reg failed!');
    });
}
registerServiceWorker();