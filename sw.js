const CACHE = "fog-of-war-shell-v3";
const PAGES = ["./", "./index.html", "./player.html"];
const SHELL = [...PAGES, "./manifest.webmanifest", "./icon-32.png", "./icon-192.png", "./icon-512.png", "./icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(SHELL);
    const assets = new Set();
    for (const page of ["./index.html", "./player.html"]) {
      const html = await (await cache.match(page)).text();
      for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
        const url = new URL(match[1], self.location.href);
        if (url.origin === self.location.origin) assets.add(url.href);
      }
    }
    await cache.addAll([...assets]);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) if (name !== CACHE) await caches.delete(name);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    if (request.mode === "navigate") {
      try {
        const response = await fetch(request);
        await cache.put(request, response.clone());
        return response;
      } catch {
        return await cache.match(request) ?? await cache.match(url.pathname.endsWith("player.html") ? "./player.html" : "./index.html");
      }
    }
    const cached = await cache.match(request);
    if (cached) return cached;
    const response = await fetch(request);
    if (response.ok) await cache.put(request, response.clone());
    return response;
  })());
});
