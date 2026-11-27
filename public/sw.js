const CACHE = "swarvidya-shell-v2";
const SHELL = ["/", "/manifest.webmanifest"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL))));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))));
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(request).then(response => {
    if (response.ok && (request.mode === "navigate" || request.destination === "script" || request.destination === "style")) {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(request, copy));
    }
    return response;
  }).catch(() => caches.match(request).then(cached => {
    if (cached) return cached;
    if (request.mode === "navigate") return caches.match("/");
    return new Response("This resource is not available offline.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  })));
});
