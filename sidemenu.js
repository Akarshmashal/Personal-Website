var sidemenu = document.getElementById("sidemenu");
function openmenu() {
sidemenu.style.right = "0";
}
function closemenu() {
sidemenu.style.right = "-130px";
}




const scriptURL = 'https://script.google.com/macros/s/AKfycbyONtcmDTwHderxX_2Y9mmMMwKCAIHtjegtJXBpZ-GkK2MbtRmys4vx1BTpR2RS6fUfNg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();  
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        form.reset(); // Reset the form immediately after successful submission
      })
      .catch(error => console.error('Error!', error.message));
  });
  
