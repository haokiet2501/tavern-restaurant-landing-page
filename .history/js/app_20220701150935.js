const navToggle = document.getElementById('nav-toggle'),
    navMenu = document.getElementById('nav-menu'),
    navClose = document.getElementById('nav-close');
    

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction));