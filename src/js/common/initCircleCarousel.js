import Splide from "@splidejs/splide";

const slides = document.querySelectorAll('.cleaners-box');
const dots = document.querySelector('.cleaners-dots');

/// create dots ///
initDots();
const dotsArray = document.querySelectorAll('.cleaners-dots-item');

let total = slides.length - 1;
let current = 0;
let prev = total;
let next = 1;

export function initCircleCarousel() {
    total > 0 ? moveSlides(current, prev, next) : initSingleSlide(current);
    // move slides on dots click //
    for(let i = 0; i < dotsArray.length; i++) {
        dotsArray[i].addEventListener('click', function () {
            onStartMoving(parseInt(this.getAttribute('data-slide')));
        });
    }
}

export function startAutoPlayCircleCarousel() {



}

function onStartMoving(current) {
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
}

function moveSlides(current, prev, next) {

    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('center', 'prev', 'next');
        // dots //
        dotsArray[i].classList.remove('active', 'prev', 'next');
    }

    slides[current].classList.add('center');
    slides[prev].classList.add('prev');
    slides[next].classList.add('next');

    // dots //
    dotsArray[current].classList.add('active');
    dotsArray[prev].classList.add('prev');
    dotsArray[next].classList.add('next');


    // document.querySelector('.cleaners-box.center .cleaners-box-loader circle').addEventListener('animationend', () => {
    //     onStartMoving(current++);
    //     console.log('end', current++);
    // });

}

function initSingleSlide(current) {
    slides[current].classList.add('center');
}

function initDots() {
    for(let i = 0; i < slides.length; i++) {
        let dot = document.createElement('div');
        dot.classList.add('cleaners-dots-item');
        dot.setAttribute('data-slide', i.toString());
        dots.appendChild(dot);
    }
}