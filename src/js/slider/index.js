import '../../libs/scrolloverflow.min';
import fullpage from 'fullpage.js';
import {detectHeaderStatus} from "../scroll/detectHeaderStatus";
import {detectSectionAction} from "./detectSectionAction";
import {closeMenu} from "../common/toggleMobileMenu";
import {initHeroAnimation} from "../lottie/initHeroAnimation";
import {detectLogoColor} from "../scroll/detectLogoColor";

let fullSlider;
const sections = document.querySelectorAll('.section');

export function initFullSlider() {

    fullSlider = new fullpage('#full-slider', {
        anchors:['0', '1', '2', '3', '4', '5', '6', '7', '8'],
        menu: '#nav',
        scrollOverflow: true,
        // scrollOverflowReset: true,
        scrollingSpeed: 1000,
        responsiveWidth: 1201,
        // responsiveSlides: true,
        lockAnchors: true,
        onLeave: (origin, destination, direction) => {
            detectHeaderStatus(direction, destination.item);
            if(direction === 'down') {
                hidePrevSections(parseInt(destination.item.getAttribute('data-anchor')));
            } else {
                showNextSections(parseInt(destination.item.getAttribute('data-anchor')));
            }
            detectSectionAction(destination.item.getAttribute('id'));
            detectLogoColor(destination.item.getAttribute('data-anchor'));
            window.innerWidth <= 1200 ? closeMenu() : null;
        },
        afterLoad: (origin) => {
            origin.index === 0 ? initHeroAnimation() : null;
        }
    });
}

const hidePrevSections = (index) => {
    for(let i = 0; i < index; i++) {
        sections[i].classList.add('scale');
    }
};

const showNextSections = (index) => {
    for(let i = index; i < sections.length; i++) {
        sections[i].classList.remove('scale');
    }
};