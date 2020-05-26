const cacheName = 'lab_7';
const staticAssets = [
  './',
  '/img',  
  '/js/app.js' ,
  '/index.html',
  '/next.html',
'/manifest.json'


];

self.addEventListener('install',event => {
    console.log("worker installed")
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log("catching static assets")
            cache.addAll(staticAssets)
        })
    )
})

self.addEventListener('activate', event => {
    console.log("worker activated")
})

self.addEventListener('fetch', event => {
    console.log("fetch fired", event)
    event.respondWith(
        caches.match(event.request).then(res => {
            return res || fetch(event.request)
        })
    )
})