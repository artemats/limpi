import lottie from 'lottie-web';
import gsap from 'gsap';

export const initHeroAnimation = () => {

    const box = document.querySelector('#hero-animation');

    if(!box.classList.contains('active')) {
        const hero = lottie.loadAnimation({
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
    }

};