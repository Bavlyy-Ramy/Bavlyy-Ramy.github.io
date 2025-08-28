'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fdfd3c0eae05adf7f21ac4e2ab15c674",
"assets/AssetManifest.bin.json": "be78c6c14e6c2303ef5132c52143496d",
"assets/AssetManifest.json": "261c68497d6150c6b237059bbe99094e",
"assets/assets/icons/adventure-game.png": "a43d5f3a87926cabef000e6451de4be6",
"assets/assets/icons/architecture-and-city.png": "cf4b1e6664c701b308473919ea124454",
"assets/assets/icons/bible%2520(1).png": "99d165694ad83e5dfb7af3b95aa1a09e",
"assets/assets/icons/bus-stop.png": "5509ab4da0a9241027d210c75ab1f592",
"assets/assets/icons/bus.png": "27aeb2f4402c3f2152adc4886617f5d0",
"assets/assets/icons/christmas-dinner.png": "1fdb234cdefedeff04fb83c733a00633",
"assets/assets/icons/church.png": "30a07223e50222a6c3ad033e6b7aa902",
"assets/assets/icons/combined%25203.png": "824a9c291b34bbe5d1ba0e44446145c6",
"assets/assets/icons/combined2.png": "198b2653eab8a646f07b1dfe97289832",
"assets/assets/icons/cutlery.png": "af40fb7940d5cf13bbb8cc0769deb01f",
"assets/assets/icons/dancing.png": "9686bb687acedd643019337eef2792e7",
"assets/assets/icons/dina.png": "59dd4150c37ae75defbfd6bcff93b7cc",
"assets/assets/icons/english-breakfast.png": "529f6e99227d39471a414bf48e64bbf8",
"assets/assets/icons/food.png": "7920fffbc1f8294ef647846e9ed35357",
"assets/assets/icons/get-up.png": "4fac66168abe936f359df7e71f598494",
"assets/assets/icons/hand-over.png": "56b5e71c07171b872d7beb0a5539a4c4",
"assets/assets/icons/hotel.png": "b8e9e1d9558517c031e72ff6117c9be6",
"assets/assets/icons/house.png": "6d44fb8a04b253437bbf236d54dd76d5",
"assets/assets/icons/loneliness.png": "200beecf66f345d3218bbcf8c571ffe3",
"assets/assets/icons/meet.png": "b8147d974499a8fb1755dbdacc2a7e33",
"assets/assets/icons/minorite-monastery.png": "2faeebdce42fc8bec529b07389e7c73e",
"assets/assets/icons/opening-ceremony.png": "56cee980c64586397a06de5f2828c209",
"assets/assets/icons/pray.png": "15a700bed9dd52bafb7d0091fea293df",
"assets/assets/icons/religion.png": "1534b2d61d08771b9290a97941cb8378",
"assets/assets/icons/route.png": "c61b7a6a0fa45ecebdf9dc63624961e3",
"assets/assets/icons/shoot.png": "a8c31a0c1c65ad34d409efaafc190388",
"assets/assets/icons/sleep.png": "ac0aeaf6e68de98cfccc1bf2717818e5",
"assets/assets/icons/swimming_pool.png": "ecb936a0f273eba708a786018ca3d712",
"assets/assets/icons/workshop.png": "e21d6ce32afc0b8aa8a1906be399fe0a",
"assets/assets/images/background2.png": "581898862a02fb44c083f6626aced196",
"assets/assets/images/bg.jpg": "05fdb5d8c513afcd7c8e7772bb5c35f9",
"assets/assets/images/bg3.png": "0a14caa69cf65fc17e2c2b533183c232",
"assets/assets/images/bible.png": "640bc2d93c92cdbbbe092134187b4777",
"assets/assets/images/brand%2520not%2520trend%2520logo.png": "8517ea637f2349a9486295151bfd4a37",
"assets/assets/images/logo_no_bg.png": "0ee0ef56c39114524fa9ac7b82ccbc93",
"assets/assets/images/prayer.png": "ea2f09430857f4317e8b2314c626b0c4",
"assets/assets/images/schedule.png": "8461ccb9a7c19150183fe3cc59958960",
"assets/assets/images/she3ar.png": "7635999d65f4aa31ffabeeb47f4f64af",
"assets/assets/images/teams.png": "924fb1e873c6157b59293e8f99b7e424",
"assets/assets/khelwa.pdf": "4066302a1307693e70065cf7cfd14813",
"assets/FontManifest.json": "8a34b3543de14a32a228de255a904ab7",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/fonts/TufuliArabicDEMO-Bold.otf": "65930b1a148ea96f04590d17bf6dd481",
"assets/NOTICES": "25ac124f913baf30c17de8255143b8bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a8b53b0582a57d88b39b14f57f16bd20",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9cca1b7020cea21fdccc114f27ebf652",
"/": "9cca1b7020cea21fdccc114f27ebf652",
"main.dart.js": "6e65ed32616e446966da257fefd931ba",
"manifest.json": "7172a5ed17eaf4c88be951ca69ed5ed1",
"version.json": "2c1bcd3370c445f412cc3c1aef3b836f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
