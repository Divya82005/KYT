// Service Worker for aggressive image caching
const CACHE_NAME = 'hero-images-v1';
const HERO_IMAGES = [
  '/static/media/City.png',
  '/static/media/Img1.png',
  '/static/media/Img2.png',
  '/static/media/Img3.png'
];

// Install event - cache images immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Force cache all hero images immediately
        return cache.addAll(HERO_IMAGES);
      })
      .then(() => {
        // Skip waiting to activate immediately
        return self.skipWaiting();
      })
  );
});

// Activate event - take control immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.clients.claim()
  );
});

// Fetch event - serve from cache first, then network
self.addEventListener('fetch', (event) => {
  // Only handle image requests
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            // Return cached version immediately
            return response;
          }
          
          // If not in cache, fetch and cache
          return fetch(event.request)
            .then((response) => {
              // Clone the response
              const responseClone = response.clone();
              
              // Cache the image
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseClone);
                });
              
              return response;
            });
        })
    );
  }
});