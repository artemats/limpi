import gsap  from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import {goToSection} from "./goToSection";
import {hideScaleSection} from "./hideScaleSection";
import {showScaleSection} from "./showScaleSection";
import {detectHeaderStatus} from "./detectHeaderStatus";
import {closeMenu} from "../common/toggleMobileMenu";

gsap.registerPlugin(ScrollTrigger);
let enableTransition = true;

export const initScrollTransitions = () => {

    window.scroll(0, 0);

    /// transition default scroll ///
    document.querySelectorAll('.section').forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            onEnter: () => {
                if(enableTransition) {
                    goToSection(section);
                }
                const prevSection = section.previousSibling.previousSibling;
                // !!prevSection ? hideScaleSection(prevSection) : null;
                detectHeaderStatus('down', section);
            },
        });

        ScrollTrigger.create({
            trigger: section,
            start: 'bottom bottom',
            onEnterBack: () => {
                if(enableTransition) {
                    goToSection(section);
                }
                // showScaleSection(section);
                detectHeaderStatus('up', section);
            }
        });
    });
};

/// disable transition on anchor click ///
document.querySelectorAll('.anchor-scroll').forEach(link => {

    link.addEventListener('click',  (event) => {
        event.preventDefault();
        const anchorSection = document.getElementById(link.getAttribute('data-anchor'));
        const anchorSectionY = anchorSection.getBoundingClientRect().top + window.scrollY;

        closeMenu();

        enableTransition = false;
        window.scrollTo(0, anchorSectionY);
        setTimeout(() => {
            enableTransition = true;
        }, 100);

    });

});