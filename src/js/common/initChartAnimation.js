import gsap, { Power3 } from 'gsap';
import BezierEasing from 'bezier-easing';

const chart = document.querySelector('.chart');
const messages = document.querySelectorAll('.chart-message');
const status = document.querySelector('.chart-status');

export const initChartAnimation = () => {

    if (!chart.classList.contains('active')) {

        setTimeout(() => showMessage(messages[0]), 1000);

        // gsap.fromTo(messages, {
        //     position: 'absolute',
        //     opacity: 0,
        //     scale: 0.9,
        // }, {
        //     delay: 2,
        //     position: 'relative',
        //     opacity: 1,
        //     duration: 0.8,
        //     stagger: 1.5,
        //     scale: 1,
        //     ease: Power3.easeInOut,
        //     onComplete: () => {
        //         status.classList.remove('active');
        //     }
        // });

        chart.classList.add('active');
    }
};

const getMessageStyle = (message) => {
    return message.currentStyle || window.getComputedStyle(message);
}

const moveStatus = (message) => {
    const shift = (() => {
        const h = message.clientHeight;
        const margin = parseInt(getMessageStyle(message).marginBottom);
        return h + margin
    })()
    console.log(shift);
    if (window.innerWidth > 1200) {
        gsap.fromTo(status, 0.6, { y: 0 }, {
            y: shift,
            ease: BezierEasing(0.68, -0.1, 0.27, 1.39),
            delay: 1.5,
            onComplete: () => {
                status.removeAttribute("style")
            }
        })
    }
}

const slideMobileChart = (message) => {
    if (window.innerWidth > 1200) return false
    gsap.to(chart, {
        height: "+=" + (message.clientHeight + parseInt(getMessageStyle(message).marginBottom)) + 'px',
        duration: 0.6,
        ease: BezierEasing(0.68, -0.39, 0.27, 1.39),
        onComplete: () => {
            chart.removeAttribute("style")
        }
    })
}

const showMessage = (message) => {
    status.classList.add('active');
    moveStatus(message);

    gsap.fromTo(message, {
        opacity: 0,
        scale: 0.9,
        display: "block",
    }, {
        position: window.innerWidth > 1200 ? 'absolute' : '',
        delay: 1.5,
        opacity: 1,
        duration: 0.6,
        scale: 1,
        ease: BezierEasing(0.68, -0.39, 0.27, 1.39),
        onStart: () => { slideMobileChart(message) },
        onComplete: () => {
            message.style.position = 'relative';
            showMessage2(messages[1]);
        }
    });

    setTimeout(() => {
        status.classList.remove('active');
    }, 1500);
};

const showMessage2 = (message) => {
    status.classList.add('active');
    moveStatus(message);
    gsap.fromTo(message, {
        position: 'absolute',
        opacity: 0,
        scale: 0.9,
        display: "block",
    }, {
        position: window.innerWidth > 1200 ? 'absolute' : '',
        delay: 1.5,
        opacity: 1,
        duration: 0.6,
        scale: 1,
        ease: BezierEasing(0.68, -0.39, 0.27, 1.39),
        onStart: () => { slideMobileChart(message) },
        onComplete: () => {
            message.style.position = 'relative';
        }
    });

    setTimeout(() => {
        status.classList.add('finished');
        status.classList.remove('active');
    }, 1600);
};

// export const stopChartAnimation = () => {
//     status.classList.add('active');
// };