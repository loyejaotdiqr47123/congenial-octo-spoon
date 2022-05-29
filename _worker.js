"fetch",event => {
    event.respondWith(
      fetch(event.request, { cf: { resolveOverride: 'en.5.2-ori.bobodns1.ga' } })
    )
