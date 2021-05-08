import gsap from 'gsap';
import {isValidForm} from "./inputMask";

document.querySelector('#order-form').addEventListener('submit', function (e) {
    e.preventDefault();
    isValidForm(document.querySelector('#order-form')) ? submitSuccess() : null;
});

const form = document.querySelector('.modal-form');
const success = document.querySelector('.modal-success');

export function submitSuccess() {
    gsap.fromTo(form, {
       opacity: 1
    },{
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
            form.style.display = 'none';
            showSuccessMessage();
        }
    });
}

export function showSuccessMessage() {
    gsap.fromTo(success, {
        opacity: 0,
        display: 'none'
    }, {
        duration: 0,
        opacity: 0,
        display: 'block',
        onComplete: () => {
            success.style.opacity = 1;
        }
    });
}

export function showForm() {
    gsap.to(success, {
        display: 'none',
        onComplete: () => {
            gsap.to(form, {
                opacity: 1,
                display: 'block'
            })
        }
    })
}