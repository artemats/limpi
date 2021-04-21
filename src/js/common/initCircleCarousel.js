import Splide from "@splidejs/splide";

const slides = document.querySelectorAll('.cleaners-box');

export function initCircleCarousel() {

    let total = slides.length - 1;
    let current = 0;
    let prev = total;
    let next = 1;

    moveSlides(current, prev, next);
    document.querySelector('.go').addEventListener('click', () => {
        current += 1;
        prev = current - 1;
        next = current + 1;

        if(current === 0) {
            prev = total;
            next = 1;
        }

        if(current < 0) {
            current = total;
            prev = total - 1;
            next = 0;
        }

        if(current === total) {
            next = 0;
        }

        if(current > total) {
            current = 0;
            next = 1;
            prev = total;
        }
        moveSlides(current, prev, next);
    });

    // const slider = new Splide( '#cleaners', {
    //     type: 'loop',
    //     speed: 400,
    //     perPage: 1,
    //     focus: 'center',
    //     // width: 682,
    //     arrows: false,
    //     pagination: true,
    //     autoWidth: true,
    //     easing: 'ease'
    // } ).mount();

}

function moveSlides(current, prev, next) {

    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('center');
        slides[i].classList.remove('prev');
        slides[i].classList.remove('next');
    }

    // console.log('current - ', current);
    // console.log('prev - ', prev);
    // console.log('next - ', next);

    slides[current].classList.add('center');
    slides[prev].classList.add('prev');
    slides[next].classList.add('next');

}