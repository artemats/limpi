export function detectLogoColor(id) {

    const colors = ['#FFFFFF', '#0C4ADC', '#6232E9', '#FF4387', '#0C4ADC', '#10C261', '#0C4ADC', '#0C4ADC', '#0C4ADC'];

    const star = document.querySelector('.logo-star');

    star.style.fill = colors[id];

}