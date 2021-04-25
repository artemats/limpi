import gsap, { Power1 } from 'gsap';

export function showScaleSection(section) {

    if(window.innerWidth > 1200) {

        const sectionBox = section.querySelector('.section-box');

        gsap.to(sectionBox, {
            duration: 1,
            opacity: 1,
            scale: 1,
            y: 0,
            ease: Power1.easeOut,
        });

    }

}