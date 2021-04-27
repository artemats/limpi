import Splide from "@splidejs/splide";

export function initPricesCarousel() {
    if(!document.querySelector('.prices').classList.contains('is-active') && window.innerWidth <= 600) {
        new Splide('#prices', {
            type: 'loop',
            rewind: true,
            perPage: 1,
            autoWidth: true,
            // focus: 'center',
            arrows: false,
            speed: 600,
            start: 1
        }).mount();
    }
}