import gsap, { Power1 } from "gsap/gsap-core";
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import disableScroll from 'disable-scroll';

gsap.registerPlugin(ScrollToPlugin);

export function goToSection(section, anim) {
    disableScroll.on();
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: section,
        },
        ease: Power1.easeOut,
        onComplete: () => disableScroll.off()
    });

    if(anim) {
        anim.restart();
    }
}