export function detectLogoColor(section) {

    const sectionStyle = getComputedStyle(section.querySelector('.section-box'));
    const star = document.querySelector('.logo-star');

    star.style.fill = sectionStyle.backgroundColor;

}