if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"dca51a618fb60f18a4e18c9f40fe0f57"},{url:"/_next/static/c4C75H_xwBkZT-0SdUhD7/_buildManifest.js",revision:"2b9a363deeb26f692fb90963ada43aab"},{url:"/_next/static/c4C75H_xwBkZT-0SdUhD7/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/120-3d1b55cac19ffc77.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/357-a34b7f8e4491b363.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/439-1b588769b5fd398d.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/477-bf8582e1794e4fb3.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/609-4355cbb1259f9674.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/769-10cb928dab1ef9fe.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/925f3d25-1af7259455ef26bd.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/a0451e04-2e5788feea9eaf5f.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/app/archive/%5Bid%5D/page-8d4c7985f754a051.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/app/archive/page-d1dcb0b04e6e5e6a.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/app/layout-477286ad19a5807c.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/app/page-d6114fcbb61b7436.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/bce60fc1-1e05210af66dd85b.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/main-6c4b33fee40497d0.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/main-app-9b70b42a80192163.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/pages/_app-1f2755172264764d.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/pages/_error-f5357f382422dd96.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-e7ad34effe5c5a6d.js",revision:"c4C75H_xwBkZT-0SdUhD7"},{url:"/_next/static/css/72050ea259450368.css",revision:"72050ea259450368"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/ads.txt",revision:"6f496bd28127352281b7ad66eefc1ccd"},{url:"/favicon.ico",revision:"cf38e01f34a7e085ba641198aba93c46"},{url:"/hexparrot-animated.gif",revision:"3523de261cb174a121ebd1f8b56ac60a"},{url:"/hexparrot-sad-animation.gif",revision:"b1384da693ef22bb38561d031b9f024d"},{url:"/hexparrot-sad.png",revision:"6e42e352f8389a1fada99c23400c21a8"},{url:"/hexparrot.png",revision:"846e215703ea2898e8c3060277453c8e"},{url:"/icon-192x192.png",revision:"65b31055876b0ce2b2a8de042c526381"},{url:"/icon-256x256.png",revision:"d90afc60b65c1c373a04f66d3e0ec6d8"},{url:"/icon-384x384.png",revision:"ae5e3dfe33661cf71ef93918f96971a6"},{url:"/icon-512x512.png",revision:"0b929801a7a2b283f64113d1200c5281"},{url:"/manifest.json",revision:"66eeeb86f82bd1322b498e91945dfb23"},{url:"/og_image.png",revision:"bea04814dc5b2687f880d3626a4ba83e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
