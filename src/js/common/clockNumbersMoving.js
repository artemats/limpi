import { TweenLite, Power2 } from 'gsap';

const ecoTime = document.querySelector('#eco-time');
const times = { score: 96 };

export function clockNumbersMoving(direction = 'add') {

    const arrow = {
        add: '+',
        sub: '-'
    };

    TweenLite.to(times, 1, {
        score: `${arrow[direction]}=13`,
        roundProps: 'score',
        ease: Power2.easeOut,
        onUpdate: updateTimes
    });

}

function updateTimes() {
    ecoTime.innerHTML = times.score;
}