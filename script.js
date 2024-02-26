const scriptURL = '<Your google sheet script web app link>';
const form = document.forms['submit-to-google-sheet'];
const confirmationMsg = document.getElementById('confirmation-msg');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form),
        mode: 'no-cors' 
    })
    .then(response => {
        if (response.ok) {
            confirmationMsg.style.display = 'block';
            form.reset();
        } else {
            console.error('Failed to submit form');
        }
    })
    .catch(error => console.error('Error!', error.message));
});
