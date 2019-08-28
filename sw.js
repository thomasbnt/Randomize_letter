const version = "1.0.0"
const cacheName = `RL-${version}`

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                `./`,
                `./index.html`,
                `./manifest.json`,
                `./assets/css/app.css`,
                `./assets/js/init.js`,
                `./assets/img/manifest/192x192.png`,
                `./assets/img/manifest/128x128.png`,
                `./assets/img/manifest/512x512.png`,
                `./assets/img/favicon.png`
            ]).then(function() {
                self.skipWaiting()
            })
        })
    )
})
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim())
})
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) { return response }
            return fetch(event.request)
        })
    )
})