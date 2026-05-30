const CACHE_NAME = "devops-learning-hub-v1";
const BASE_PATH = new URL(self.registration.scope).pathname;
const CORE_ASSETS = [
  BASE_PATH,
  `${BASE_PATH}index.html`,
  `${BASE_PATH}roadmap.html`,
  `${BASE_PATH}projects.html`,
  `${BASE_PATH}aws-labs.html`,
  `${BASE_PATH}linux.html`,
  `${BASE_PATH}docker-kubernetes.html`,
  `${BASE_PATH}terraform.html`,
  `${BASE_PATH}cicd.html`,
  `${BASE_PATH}monitoring.html`,
  `${BASE_PATH}interview.html`,
  `${BASE_PATH}videos.html`,
  `${BASE_PATH}resume-linkedin.html`,
  `${BASE_PATH}contact.html`,
  `${BASE_PATH}pages/viewer.html`,
  `${BASE_PATH}style.css`,
  `${BASE_PATH}script.js`,
  `${BASE_PATH}pwa-register.js`,
  `${BASE_PATH}manifest.json`,
  `${BASE_PATH}assets/icons/icon-192.png`,
  `${BASE_PATH}assets/icons/icon-512.png`,
  `${BASE_PATH}assets/icons/narendra-np-logo.png`,
  `${BASE_PATH}assets/images/narendra-banner-photo.jpeg`
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match(`${BASE_PATH}index.html`));
    })
  );
});
