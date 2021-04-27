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

}

// const dots = document.querySelector('.cleaners-dots');
// const dotsCarousel = document.querySelector('.cleaners-dots-carousel');
// let dotsSplide;
//
// /// create dots ///
// initDots();
// const dotsArray = document.querySelectorAll('.cleaners-dots-item');
// /// create dots carousel ///
// initDotsCarousel();
//
// let total = slides.length - 1;
// let current = 0;
// let prev = total;
// let next = 1;
//
// export function initCircleCarousel() {
//     total > 0 ? moveSlides(current, prev, next) : initSingleSlide(current);
//     // total > 0 ? stopProgress(current) : initSingleSlide(current);
//     // move slides on dots click //
//     for(let i = 0; i < dotsArray.length; i++) {
//         dotsArray[i].addEventListener('click', function () {
//             current = parseInt(this.getAttribute('data-slide'));
//             onStartMoving(current);
//             // stopProgress(current);
//         });
//     }
//     // move slides on slide click //
//     for(let i = 0; i < slides.length; i++) {
//         slides[i].addEventListener('click', function () {
//             current = parseInt(this.getAttribute('data-slide'));
//             onStartMoving(current);
//             // stopProgress(current)
//         });
//     }
// }
//
// export function startProgress() {
//     let progress = document.querySelector('.cleaners-box.center circle');
//     gsap.fromTo(progress, {
//         strokeDashoffset: 527.788,
//         opacity: 1
//     },{
//         duration: 5,
//         strokeDashoffset: 0,
//         opacity: 1,
//         onComplete: () => {
//             current += 1;
//             stopProgress(current);
//         }
//     });
// }
//
// export function stopProgress(current) {
//     let progress = document.querySelector('.cleaners-box.center circle');
//     gsap.set(progress, {
//         duration: 0,
//         opacity: 0,
//         strokeDashoffset: 527.788,
//         onComplete: () => {
//             onStartMoving(current);
//         }
//     });
// }
//
// function onStartMoving(current) {
//     prev = current - 1;
//     next = current + 1;
//
//     if(current === 0) {
//         prev = total;
//         next = 1;
//     }
//     if(current < 0) {
//         current = total;
//         prev = total - 1;
//         next = 0;
//     }
//     if(current === total) {
//         next = 0;
//     }
//     if(current > total) {
//         current = 0;
//         next = 1;
//         prev = total;
//     }
//     moveSlides(current, prev, next);
// }
//
// function moveSlides(current, prev, next) {
//     for(let i = 0; i < slides.length; i++) {
//         slides[i].classList.remove('center', 'prev', 'next');
//         // dots //
//         dotsArray[i].classList.remove('active', 'prev', 'next');
//     }
//
//     slides[current].classList.add('center');
//     slides[prev].classList.add('prev');
//     slides[next].classList.add('next');
//
//     // dots //
//     dotsArray[current].classList.add('active');
//     dotsArray[prev].classList.add('prev');
//     dotsArray[next].classList.add('next');
//     dotsSplide.go(current);
//     // startProgress();
// }
//
// function initSingleSlide(current) {
//     slides[current].classList.add('center');
// }
//
// function initDots() {
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