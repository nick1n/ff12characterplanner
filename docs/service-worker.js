"use strict";var precacheConfig=[["/ff12characterplanner/index.html","fc62a78ecaecb3294ec4c7b3c88c4e48"],["/ff12characterplanner/static/css/main.53c816d2.css","a8ae17ee2ad77a8c4e2340f2b3ad5354"],["/ff12characterplanner/static/js/main.6e6e8dcd.js","364fb58f8c2df7a10b79c806fdcb0e2e"],["/ff12characterplanner/static/media/Aquarius.08291a1c.svg","08291a1c17e7f411e845dc77127548c1"],["/ff12characterplanner/static/media/Aries.4378bbd9.svg","4378bbd96aca1517c543dae8e63bbeae"],["/ff12characterplanner/static/media/Cancer.0a707a93.svg","0a707a937707b8f8c51c512f1d24b6a5"],["/ff12characterplanner/static/media/Capricorn.2b0112cb.svg","2b0112cbb92536fee17d8f2c38facc9b"],["/ff12characterplanner/static/media/Gemini.8a7edacf.svg","8a7edacfcfec6029a326f69f1053202b"],["/ff12characterplanner/static/media/Leo.0cb0ecbe.svg","0cb0ecbea70f094f382104e288ecca28"],["/ff12characterplanner/static/media/Libra.dc38429d.svg","dc38429d0e1778effd1cf3a181c06575"],["/ff12characterplanner/static/media/Pisces.852a5982.svg","852a59826b91df137e2ce3572d2f9662"],["/ff12characterplanner/static/media/Sagittarius.0d987217.svg","0d987217a9175834b04580b911817efd"],["/ff12characterplanner/static/media/Scorpio.3d10e116.svg","3d10e116a0ab78fb9babb6f7a5894b5b"],["/ff12characterplanner/static/media/Taurus.66b60428.svg","66b60428e77e5cb0aa44d6854e991165"],["/ff12characterplanner/static/media/Virgo.031563fa.svg","031563fa283811685e0c7d2c1f522bb6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var n="/ff12characterplanner/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});