import gsap  from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import {goToSection} from "./goToSection";
import {hideScaleSection} from "./hideScaleSection";
import {showScaleSection} from "./showScaleSection";
import {detectHeaderStatus} from "./detectHeaderStatus";
import {closeMenu} from "../common/toggleMobileMenu";
import {initHowItWorksAnimation} from "../lottie/initHowItWorksAnimation";
import {initCtaAnimation} from "../lottie/initCtaAnimation";
import {initFooterStars} from "../lottie/initFooterStars";

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
                !!prevSection ? hideScaleSection(prevSection) : null;
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
                showScaleSection(section);
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

        enableTransition = false;
        window.scrollTo(0, anchorSectionY);
        anchorSection.classList.add('in-viewport');
        setTimeout(() => {
            enableTransition = true;
        }, 100);

        if(window.innerWidth <= 1200) {
            closeMenu();
        } else {
            anchorSection.getAttribute('id') === 'section-2' ? initHowItWorksAnimation() : null;
            anchorSection.getAttribute('id') === 'section-7' ? initCtaAnimation() : null;
            anchorSection.getAttribute('id') === 'section-8' ? initFooterStars() : null;
        }

    });

});

if(!document.querySelector('.scroll-wrapper')) {
    /// change header style ///
    const header = document.querySelector('.header');
    let scrollPos = 0;
    window.addEventListener('scroll', () => {
        if(window.scrollY <= 0) {
            header.classList.remove('smart');
        } else {
            header.classList.add('smart');
        }

        if ((document.body.getBoundingClientRect()).top > scrollPos)
            header.classList.remove('hidden');
        else
            header.classList.add('hidden');
            scrollPos = (document.body.getBoundingClientRect()).top;
    });
}