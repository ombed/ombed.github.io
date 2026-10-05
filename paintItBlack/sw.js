// The tool moved to https://ombed.github.io/inkognito/ (6.10.2026). This file replaces the old
// tool's service worker at this address: it takes over, sends every open window to the new
// address, and removes itself. It leaves the caches alone: the new address shares them.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil((async () => {
  await self.clients.claim();
  for (const c of await self.clients.matchAll({ type: "window" })) {
    try { await c.navigate("https://ombed.github.io/inkognito/"); } catch (_) { /* the page forwards itself anyway */ }
  }
  await self.registration.unregister();
})()));
