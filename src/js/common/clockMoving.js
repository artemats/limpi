import gsap, { Power4 } from "gsap";

export function clockMoving(direction) {

    const hourHand = document.querySelector('.clock-hour');
    const minuteHand = document.querySelector('.clock-minute');
    const arrow = {
        add: {
            hour: 480,
            minute: 720
        },
        sub: {
            hour: -240,
            minute: -720
        }
    };

    gsap.fromTo(hourHand,
        {
            rotate: 120
        },
        {
            duration: 1.5,
            rotate: arrow[direction].hour,
            ease: Power4.easeOut
        });

    gsap.fromTo(minuteHand,
        {
            rotate: 0
        },
        {
            duration: 1.5,
            rotate: arrow[direction].minute,
            ease: Power4.easeOut
        });

}