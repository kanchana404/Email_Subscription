

const scriptURL = 'https://script.google.com/macros/s/AKfycbwTKm3H6uFpciZimd7EMz1Mh9OF4deZ3qTXm37Ag_yO8wFJtoULKu7SkbkBU9Jlj9wb/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })