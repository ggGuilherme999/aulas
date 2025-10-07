self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(app-saudacao-cache).then(cache => {
         return cache.addAll([
            "index.html",
            "manifest.json",
            "round (1).png",
            "round.png",
            "games.png",
            "rising-sun.png",
            "moon.png",
            "Manha.png",
            "Tarde.png",
            "Noite.png"
         ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
