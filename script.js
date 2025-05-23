document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = navLinks.querySelectorAll('a');
    const body = document.body;

    if (hamburger.tagName !== 'BUTTON') {
        hamburger.setAttribute('role', 'button');
    }

    hamburger.setAttribute('aria-controls', 'main-navigation');
    hamburger.setAttribute('aria-expanded', 'false');

    if (!navLinks.id) {
        navLinks.id = 'main-navigation';
    }

    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

        navLinks.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', String(!isExpanded));

        if (!isExpanded) {
            body.classList.add('no-scroll');
            navItems[0]?.focus();
        } else {
            body.classList.remove('no-scroll');
            hamburger.focus();
        }
    });

    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            body.classList.remove('no-scroll');
            hamburger.focus();
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            body.classList.remove('no-scroll');
            hamburger.focus();
        }
    });

    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            body.classList.remove('no-scroll');
            hamburger.focus();
        }
    });
});