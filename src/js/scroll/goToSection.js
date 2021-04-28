import gsap, { Power1 } from "gsap/gsap-core";
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import disableScroll from 'disable-scroll';

import {detectLogoColor} from "./detectLogoColor";
import {initCircleCarousel} from "../common/initCircleCarousel";
import {stopHobbiesSwitcher, switchHobbies} from "../common/switchHobbies";
import {initPricesCarousel} from "../common/initPricesCarousel";
import {initHeroAnimation} from "../lottie/initHeroAnimation";
import {initHowItWorksAnimation} from "../lottie/initHowItWorksAnimation";
import {initCtaAnimation} from "../lottie/initCtaAnimation";
import {initFooterStars} from "../lottie/initFooterStars";
import {initChartAnimation} from "../common/initChartAnimation";

gsap.registerPlugin(ScrollToPlugin);

export function goToSection(section, anim) {
    if(window.innerWidth > 1200) {
        disableScroll.on();
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: section,
            },
            ease: Power1.easeOut,
            onComplete: () => {
                disableScroll.off();
                toDoWithOnSection(section);
            }
        });
    } else {
        toDoWithOnSection(section)
    }

    removeAllActiveClasses();
    section.classList.add('in-viewport');

    if(anim) {
        anim.restart();
    }

    return true;
}

function toDoWithOnSection(section) {
    detectLogoColor(section);
    // section.getAttribute('id') === 'section-0' ? initHeroAnimation() : null;
    section.getAttribute('id') === 'section-1' ? initChartAnimation() : null;
    // section.getAttribute('id') === 'section-2' ? initHowItWorksAnimation() : null;
    section.getAttribute('id') === 'section-3' ? initPricesCarousel() : null;
    section.getAttribute('id') === 'section-4' ? switchHobbies() : stopHobbiesSwitcher();
    section.getAttribute('id') === 'section-5' ? initCircleCarousel() : null;
    // section.getAttribute('id') === 'section-7' ? initCtaAnimation() : null;
    section.getAttribute('id') === 'section-8' ? initFooterStars() : null;
}

function removeAllActiveClasses() {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('in-viewport');
    });
}