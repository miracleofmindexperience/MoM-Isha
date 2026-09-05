 let CACHE_NAME = 'isha-iso';
 let urlsToCache = ['/offline.html'];

try {
  // Install service worker
  self.addEventListener('install', event => {
    // Perform the install steps
    event.waitUntil(
      caches.open(CACHE_NAME).then(function (cache) {
        // consoleLog('Cache opened');
        return cache.addAll(urlsToCache);
      })
    );
  });

  // Cache and return the requests
  self.addEventListener('fetch', event => {
    if (event.request.mode !== 'navigate') {
      // Not a page navigation, bail.
      return;
    }
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.open(CACHE_NAME).then(cache => {
          return cache.match('offline.html');
        });
      })
    );
  });

  // Update service worker
  self.addEventListener('activate', event => {
    let cacheWhitelist = ['isha-iso'];
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
} catch (e) {
  console.log(e);
}
