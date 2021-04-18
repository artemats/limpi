import gsap, { Power1 } from 'gsap';

export function hideScaleSection(section) {

    const sectionBox = section.querySelector('.section-box');

    gsap.to(sectionBox, {
        duration: 1,
        opacity: 0,
        scale: 0.9,
        y: '90vh',
        ease: Power1.easeOut,
        onComplete: a => {
            sectionBox.style.opacity = 0;
        }
    });

}