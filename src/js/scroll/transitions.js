import gsap, { Power1 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

export const initScrollTransitions = () => {

    document.querySelectorAll('.section').forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            onEnter: () => {
                goToSection(section);
                console.log('enter down - ', section);
            },
        });

        ScrollTrigger.create({
            trigger: section,
            start: 'bottom bottom',
            onEnterBack: () => {
                goToSection(section);
                console.log('enter up - ', section);
            },
        });
    });

};

function goToSection(section, anim) {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: section,
            // offsetY: 15
        },
        ease: Power1.easeOut
    });

    if(anim) {
        anim.restart();
    }
}