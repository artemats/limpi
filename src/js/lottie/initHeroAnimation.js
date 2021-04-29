import lottie from 'lottie-web';
import gsap from 'gsap';

const box = document.querySelector('#hero-animation');
let hero;

export const initHeroAnimation = () => {

    if(!box.classList.contains('active')) {
        hero = lottie.loadAnimation({
            container: box,
            renderer: 'canvas',
            loop: true,
            autoplay: true,
            path: 'lottie/Illustration-main.json',
            rendererSettings: {
                progressiveLoad: true,
                hideOnTransparent: true
            },
        });

        hero.addEventListener('data_ready', () => {
           gsap.fromTo(box, {
              opacity: 0,
              scale: 0.5
           }, {
               opacity: 1,
               scale: 1,
               duration: 0.5
           });
        });
        box.classList.add('active');
    } else {
        hero.play();
    }

};

export const stopHeroAnimation = () => {
    !!hero ? hero.stop() : null;
};