import {closeMenu} from "../common/toggleMobileMenu";

const header = document.querySelector('.header');
let scrollPos = 0;

window.addEventListener('scroll', () => {

    if(window.scrollY <= 0) {
        header.classList.remove('smart');
    } else {
        header.classList.add('smart');
    }

    if ((document.body.getBoundingClientRect()).top > scrollPos || window.scrollY <= 0) {
        header.classList.remove('hidden');
    } else {
        header.classList.add('hidden');
    }

    scrollPos = (document.body.getBoundingClientRect()).top;

    // closeMenu();

});
