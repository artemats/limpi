import gsap, { Power1 } from 'gsap';

export function hideScaleSection(section) {

    if(window.innerWidth > 1200) {

        const sectionBox = section.querySelector('.section-box');

        gsap.to(sectionBox, {
            duration: 1,
            opacity: 0,
            scale: 0.9,
            y: (window.innerHeight / 1.3),
            ease: Power1.easeOut,
            onComplete: a => {
                sectionBox.style.opacity = 0;
            }
        });

    }

}