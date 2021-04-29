import lottie from 'lottie-web';
import gsap from 'gsap';

const box = document.querySelector('#how-it-works');
const steps = document.querySelectorAll('.card-box-illustration');
const cards = document.querySelectorAll('.card');
let person;

export const initHowItWorksAnimation = () => {

    if(!box.classList.contains('active')) {
        person = lottie.loadAnimation({
            container: box,
            renderer: 'canvas',
            loop: true,
            autoplay: true,
            path: 'lottie/How-it-works.json',
            rendererSettings: {
                progressiveLoad: true,
                hideOnTransparent: true
            }
        }).addEventListener('data_ready', () => {
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

        for(let i = 0; i < steps.length; i++) {
            const lot = lottie.loadAnimation({
                container: steps[i],
                renderer: 'canvas',
                loop: false,
                autoplay: false,
                path: `lottie/Illustration_step_${i + 1}.json`,
                rendererSettings: {
                    progressiveLoad: true,
                    hideOnTransparent: true
                }
            });
            cards[i].addEventListener('mouseenter', () => lot.play());
            cards[i].addEventListener('mouseleave', () => lot.stop());
        }
    }
};