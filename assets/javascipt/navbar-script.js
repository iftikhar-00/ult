const hamburger = document.getElementById('menu-btn');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
navLinks.classList.toggle('hide');
});