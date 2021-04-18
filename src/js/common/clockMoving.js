import gsap, { Power4 } from "gsap";

document.querySelector('.timer-calculator-btn.__minus').addEventListener('click', () => {

    clockMoving();

});

export function clockMoving() {

    const hourHand = document.querySelector('.clock-hour');
    const minuteHand = document.querySelector('.clock-minute');

    gsap.fromTo(hourHand,
        {
            rotate: 120
        },
        {
            duration: 1.5,
            rotate: 480,
            ease: Power4.easeOut
        });

}