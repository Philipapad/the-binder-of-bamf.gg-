const SHELL='bamf-shell-v2', ART='bamf-artwork-v1';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(SHELL).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('bamf-shell-')&&k!==SHELL).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const r=e.request,u=new URL(r.url);if(r.method!=='GET')return;
 const artwork=u.hostname==='raw.githubusercontent.com'&&u.pathname.includes('/PokeAPI/sprites/')&&u.pathname.includes('/official-artwork/');
 if(artwork){e.respondWith((async()=>{const c=await caches.open(ART),old=await c.match(r);try{const fresh=await fetch(r);if(fresh.ok)await c.put(r,fresh.clone());return fresh}catch(err){if(old)return old;throw err}})());return}
 if(u.origin===self.location.origin)e.respondWith(caches.match(r).then(v=>v||fetch(r).then(res=>{if(res.ok)caches.open(SHELL).then(c=>c.put(r,res.clone()));return res}).catch(()=>caches.match('./index.html'))));
});