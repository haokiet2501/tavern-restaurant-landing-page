const showMenu = (toggleId, navId) => {
    const closed = document.getElementById('nav-close');
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

        if(toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show-menu');
                closed.classList.remove('')
            })
        }
}
showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction));