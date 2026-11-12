const CACHE = 'bbstats-v6';
const FILES = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './firebase-config.js',
  './vendor/firebase-app-compat.js', './vendor/firebase-auth-compat.js', './vendor/firebase-firestore-compat.js'];

self.addEventListener('install', e => {
  // un file mancante (per esempio la configurazione) non deve impedire l'installazione
  e.waitUntil(caches.open(CACHE)
    .then(c => Promise.allSettled(FILES.map(f => c.add(f))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Rete prima (così gli aggiornamenti arrivano), cache come riserva offline.
// Le richieste verso altri siti (Firebase) non passano di qui.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
