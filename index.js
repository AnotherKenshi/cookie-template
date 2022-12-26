import './index.css';

const cookieButton = document.querySelector('.cookie-consent__button')
const cookieWindow = document.querySelector('.cookie-consent')

cookieButton.addEventListener('click', (event) => {
    localStorage.setItem('cookieAgreed', 'true')
    cookieWindow.style.display = "none"
})

if (localStorage.getItem('cookieAgreed') === 'true') {
    cookieWindow.style.display = "none"
}