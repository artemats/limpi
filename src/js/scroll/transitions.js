import gsap  from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {goToSection} from "./goToSection";
import {hideScaleSection} from "./hideScaleSection";
import {showScaleSection} from "./showScaleSection";

gsap.registerPlugin(ScrollTrigger);

export const initScrollTransitions = () => {

    document.querySelectorAll('.section').forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            onEnter: () => {
                goToSection(section);
                const prevSection = section.previousSibling.previousSibling;
                if(!!prevSection) {
                    hideScaleSection(prevSection);
                }
            },
        });

        ScrollTrigger.create({
            trigger: section,
            start: 'bottom bottom',
            onEnterBack: () => {
                goToSection(section);
                showScaleSection(section);
            }
        });
    });

};