export function detectLogoColor(section) {

    const sectionStyle = getComputedStyle(section.querySelector('.section-box'));
    const star = document.querySelector('.logo-star');
    const navLinks = document.querySelectorAll('.nav .nav-link');
    const activeNavLink = document.querySelector('[data-anchor="'+ section.getAttribute('id') + '"]');

    if(section.getAttribute('id') === 'section-0') {
        star.style.fill = '#FFFFFF';
    } else {
        star.style.fill = sectionStyle.backgroundColor
    }

    for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }

    !!activeNavLink ? activeNavLink.classList.add('active') : null;

}