export function detectLogoColor(id) {

    console.log(id);
    const colors = ['#FFFFFF', '#85E2FF', '#D5B4FF', '#FFB7D5', '#85E2FF', '#7AEFC5', '#0C4ADC', '#D5B4FF', '#313131'];

    const star = document.querySelector('.logo-star');

    star.style.fill = colors[id];

}