/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navLink.forEach((n) => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    if (navMenu) navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*===== SKILLS ACCORDION =====*/
const skillContents = document.querySelectorAll('.skills__content');

skillContents.forEach((content) => {
    const header = content.querySelector('.skills__header');

    if (header) {
        header.addEventListener('click', () => {
            const isOpen = content.classList.contains('open');

            skillContents.forEach((item) => item.classList.remove('open'));

            if (!isOpen) {
                content.classList.add('open');
            }
        });
    }
});

/*===== SCROLL REVEAL ANIMATION =====*/
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    sr.reveal('.home__title', {});
    sr.reveal('.button', { delay: 200 });
    sr.reveal('.home__img', { delay: 400 });
    sr.reveal('.about__img', {});
    sr.reveal('.about__subtitle', { delay: 400 });
    sr.reveal('.about__text', { delay: 400 });
    sr.reveal('.skills__content', { interval: 150 });
    sr.reveal('.experience__item', { interval: 150 });
}
