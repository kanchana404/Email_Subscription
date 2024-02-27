

const scriptURL = '<Your api>'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('confirmation-msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank you for your submission!"
        setTimeout(function(){
          msg.innerHTML = ""
        }, 5000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })