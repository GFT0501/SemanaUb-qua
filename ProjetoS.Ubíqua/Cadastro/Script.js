const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

function alertLinkedIn() {
    alert("LinkedIn")
}
function alertFacebook() {
    alert("Facebook")
}
function alertInstagram() {
    alert("Instagram")
}
function alertTwitter() {
    alert("Twitter")
}