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
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
       
        setTimeout(function()
    {
        msg.innerHTML = "Thank you contacting with us | We will react out to you shortly!";

    },500)
    form.reset()
        
    })
    .catch(error => console.error('Error!', error.message))
})
