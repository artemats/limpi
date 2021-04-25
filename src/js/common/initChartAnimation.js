import gsap from 'gsap';

const messages = document.querySelectorAll('.chart-message');
const status = document.querySelector('.chart-status');

export const initChartAnimation = () => {

    gsap.fromTo(messages, {
        position: 'absolute',
        opacity: 0,
    }, {
        delay: 2,
        position: 'relative',
        opacity: 1,
        duration: 1,
        stagger: 1.5,
        onComplete: () => {
            status.classList.remove('active');
        }
    });
};

export const stopChartAnimation = () => {
    status.classList.add('active');
};