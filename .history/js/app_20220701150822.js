const navToggle = document.getElementById('nav-toggle')

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction));