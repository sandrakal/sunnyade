const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navigation_links');

hamburger.addEventListener('click', () => {
    if (navLinks.style.transform === 'scale(1)') {
        navLinks.style.transform = 'scaleY(0)';
    } else {
        navLinks.style.transform = 'scaleY(1)';
    }
});