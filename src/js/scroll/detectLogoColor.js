export function detectLogoColor(id) {

    const colors = ['#FFFFFF', '#0C4ADC', '#6232E9', '#FF4387', '#85E2FF', '#10C261', '#0C4ADC', '#D5B4FF', '#0C4ADC'];

    const star = document.querySelector('.logo-star');

    star.style.fill = colors[id];

}