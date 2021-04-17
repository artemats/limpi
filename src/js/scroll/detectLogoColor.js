export function detectLogoColor(section) {

    const sectionStyle = getComputedStyle(section.querySelector('.section-box'));
    const star = document.querySelector('.logo-star');

    if(section.getAttribute('id') === 'section-0') {
        star.style.fill = '#FFFFFF';
    } else {
        star.style.fill = sectionStyle.backgroundColor
    }

}