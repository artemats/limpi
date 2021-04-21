import gsap  from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import disableScroll from 'disable-scroll';

import {goToSection} from "./goToSection";
import {hideScaleSection} from "./hideScaleSection";
import {showScaleSection} from "./showScaleSection";
import {detectHeaderStatus} from "./detectHeaderStatus";

gsap.registerPlugin(ScrollTrigger);

export const initScrollTransitions = () => {

    disableScroll.on();

    /// transition default scroll ///
    document.querySelectorAll('.section').forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            onEnter: () => {
                goToSection(section);
                detectHeaderStatus('down', section);
                const prevSection = section.previousSibling.previousSibling;
                if (!!prevSection) {
                    hideScaleSection(prevSection);
                }
            },
        });

        ScrollTrigger.create({
            trigger: section,
            start: 'bottom bottom',
            onEnterBack: () => {
                goToSection(section);
                detectHeaderStatus('up', section);
                showScaleSection(section);
            }
        });
    });
};