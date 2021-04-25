import {clockNumbersMoving} from "./clockNumbersMoving";
import {clockMoving} from "./clockMoving";

const time = document.querySelector('#time');

function changeTimerValue(value, direction) {
    if(parseInt(time.textContent) !== value) {
        time.innerHTML = value;
        clockNumbersMoving(direction);
        clockMoving(direction);
    }
}

function add() {
    changeTimerValue(Math.min(99, ( parseInt(time.textContent) + 1 )), 'add');
}

function sub() {
    changeTimerValue(Math.max(1, ( parseInt(time.textContent) - 1 )), 'sub');
}

// detect click events //
if(!!time) {
    document.querySelector('.timer-calculator-btn.__minus').addEventListener('click', function () {
        sub();
    });

    document.querySelector('.timer-calculator-btn.__plus').addEventListener('click', function () {
        add();
    });
}