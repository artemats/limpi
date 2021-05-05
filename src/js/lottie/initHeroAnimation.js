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
            box.classList.add('is-visible');
        });
        box.classList.add('active');
    } else {
        hero.play();
    }

};

export const stopHeroAnimation = () => {
    !!hero ? hero.stop() : null;
};