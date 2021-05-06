// import gsap from 'gsap';
import Splide from "@splidejs/splide";

const slides = document.querySelectorAll('.cleaners-box');
let total = slides.length - 1;

export function initCircleCarousel() {

    let circleCarousel;
    const desktopOptions = {
        type: 'fade',
        rewind: true,
        speed: 0,
        arrows: false,
        pagination: true,
        autoplay: true,
        interval: 5000,
        resetProgress: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    };
    const tabletOptions = {
        type: 'loop',
        rewind: true,
        perPage: 1,
        autoWidth: true,
        // focus: 'center',
        arrows: false,
        speed: 1000,
        autoplay: true,
        interval: 5000,
        resetProgress: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    };
    let currentOptions = {};

    if(window.innerWidth > 1200) {
        currentOptions = desktopOptions;
    } else {
        currentOptions = tabletOptions;
    }

    if(!document.querySelector('.cleaners').classList.contains('is-active')) {
        circleCarousel = new Splide('#cleaners', {
            ...currentOptions
        }).mount();

        // move event //
        circleCarousel.on( 'move', function(current) {
            let next = current < total ? current + 1 : 0;
            let prev = current > 0 ? current - 1 : total;
            for(let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('center', 'prev', 'next');
            }
            slides[current].classList.add('center');
            slides[prev].classList.add('prev');
            slides[next].classList.add('next');
        });

        // for init start //
        circleCarousel.go(1);

        if(window.innerWidth > 1200) {

            // slides click events //
            for(let i = 0; i < slides.length; i++) {
                slides[i].addEventListener('click', function () {
                    circleCarousel.go(parseInt(this.getAttribute('data-slide')));
                });
            }
        }

    }


    /// create dots ///
    // initDots();
    /// create dots carousel ///
    // initDotsCarousel();
}

// const dotsArray = document.querySelectorAll('.cleaners-dots-item');
// const dots = document.querySelector('.cleaners-dots');
// let dotsSplide;
//
// function initDots() {
//     const dotsCarousel = document.querySelector('.cleaners-dots-carousel');
//     for(let i = 0; i < slides.length; i++) {
//         let dot = document.createElement('li');
//         dot.classList.add('cleaners-dots-item', 'splide__slide');
//         dot.setAttribute('data-slide', i.toString());
//         dotsCarousel.querySelector('.splide__list').appendChild(dot);
//     }
// }
//
// function initDotsCarousel() {
//     dotsSplide = new Splide( '#cleaners-dots-carousel', {
//         focus: 'center',
//         perPage: 3,
//         trimSpace: false,
//         arrows: false,
//         pagination: false,
//         autoWidth: true
//     } );
//     dotsSplide.mount();
// }