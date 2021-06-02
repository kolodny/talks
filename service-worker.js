console.log('im the service worker');

self.addEventListener('fetch', async function(event) {
  const {pathname} = new URL(event.request.url);

  const matches = pathname.match(/(^\/talks\/[\w\._-]*\/)\d+/);
  if (matches) {
    event.respondWith(fetch(matches[1]));
  }
});
