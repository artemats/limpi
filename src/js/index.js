import gsap, { Power1 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import '../sass/styles.scss';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

console.log(gsap);

document.querySelectorAll('.section').forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        onEnter: () => goToSection(section),
    });

    ScrollTrigger.create({
        trigger: section,
        start: 'bottom bottom',
        onEnterBack: () => goToSection(section),
    });
    console.log(section);
});

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