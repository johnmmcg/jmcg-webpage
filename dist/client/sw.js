var serviceWorkerOption = {"assets":["/vendor.0.486a8e33a3f5df3df701.js","/app.1.a0d3e7933370af84a299.js","/components.2.63f72726c51ea61e5032.js","/counter.3.dfd291abb9585d93b4c5.js","/error.4.c4db3d49b0245f3620e6.js","/home.5.279b8afcc8638e535f65.js","/notFound.6.6a5f9bcf5e90e08b2fd7.js","/runtime.aff7c1f1455113b10a09.js","/index.html"]};
        
        !function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/client/",t(t.s=0)}([function(e,n,t){(function(e){var n=e.serviceWorkerOption.assets,t=Date.now().toString(),o=n.map(function(e){return"/client"+e}).concat(["../","../manifest.json"]);o=o.map(function(n){return new URL(n,e.location).toString()}),self.addEventListener("install",function(n){console.log("[SW] Install cache: "+t),n.waitUntil(e.caches.open(t).then(function(e){return e.addAll(o)}).then(function(){console.info("Cached assets: main",o)}).catch(function(e){throw console.error(e),e}))}),self.addEventListener("activate",function(n){console.log("[SW] Activate event for cache: "+t),n.waitUntil(e.caches.keys().then(function(n){return console.log("[SW] installed caches:",n),Promise.all(n.map(function(n){return n!==t?(console.info("[SW] cache deleted: "+n),e.caches.delete(n)):Promise.resolve()}))}))}),self.addEventListener("message",function(e){switch(e.data.action){case"skipWaiting":self.skipWaiting&&(self.skipWaiting(),self.clients.claim())}}),self.addEventListener("fetch",function(n){var o=n.request;if("GET"===o.method){var r=new URL(o.url);if(r.origin===location.origin){var c=e.caches.match(o,{cacheName:t}).then(function(c){return c?(console.info("[SW] fetch URL "+r.href+" from cache"),c):fetch(o).then(function(n){if(!n||!n.ok)return console.error("[SW] URL ["+r.toString()+"] wrong responseNetwork: "+n.status+" "+n.type),n;console.log("[SW] URL "+r.href+" fetched");var c=n.clone();return e.caches.open(t).then(function(e){return e.put(o,c)}).then(function(){console.log("[SW] Cache asset: "+r.href)}),n}).catch(function(){return"navigate"===n.request.mode?e.caches.match("./"):null})});n.respondWith(c)}else console.log("[SW] Ignore difference origin "+r.origin)}else console.log("[SW] Ignore non GET request "+o.method)})}).call(this,t(1))},function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t}]);