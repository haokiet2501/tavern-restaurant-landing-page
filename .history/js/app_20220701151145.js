const navToggle = document.getElementById('nav-toggle'),
    navMenu = document.getElementById('nav-menu'),
    navClose = document.getElementById('nav-close');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (nav) {
    navToggle.addEventListener('click', () => {
        navClose.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction));