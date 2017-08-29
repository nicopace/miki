/*
 Probably one of the simplest functional service workers

 Version: 0.0.1
 */

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('pwa-assets').then(cache => 
      {
        return cache.addAll([
          'index.html',
          'css/bootstrap.min.css',
          'lib/marked.min.js',
          'lib/director.min.js',
          'lib/pouchdb-2.2.0.min.js',
          'lib/ractive.js',
          'js/app.js'
        ])
      })
  )
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
