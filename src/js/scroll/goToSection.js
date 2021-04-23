import gsap, { Power1 } from "gsap/gsap-core";
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import disableScroll from 'disable-scroll';

import {detectLogoColor} from "./detectLogoColor";
// import {initCircleCarousel} from "../common/initCircleCarousel";
import {stopHobbiesSwitcher, switchHobbies} from "../common/switchHobbies";

gsap.registerPlugin(ScrollToPlugin);

export function goToSection(section, anim) {
    disableScroll.on();
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: section,
        },
        ease: Power1.easeOut,
        onComplete: () => {
            detectLogoColor(section);
            disableScroll.off();
            // section.getAttribute('id') === 'section-5' ? initCircleCarousel() : null;
            section.getAttribute('id') === 'section-4' ? switchHobbies() : stopHobbiesSwitcher();
        }
    });

    removeAllActiveClasses();
    section.classList.add('in-viewport');

    if(anim) {
        anim.restart();
    }

    return true;
}

function removeAllActiveClasses() {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('in-viewport');
    });
}