 // Toggle hamburger menu
 document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked (optional for better UX)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (about) => {
            navLinks.classList.remove('active');
        });
    });
});