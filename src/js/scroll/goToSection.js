import gsap, { Power1 } from "gsap/gsap-core";
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import disableScroll from 'disable-scroll';
import {detectLogoColor} from "./detectLogoColor";

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
            disableScroll.off();
            detectLogoColor(section);
        }
    });

    removeAllActiveClasses();
    section.classList.add('in-viewport');

    if(anim) {
        anim.restart();
    }
}

function removeAllActiveClasses() {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('in-viewport');
    });
}