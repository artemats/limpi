import gsap from "gsap/gsap-core";
import {showForm} from "./formSubmit";

export function openModal(modal) {
    const modalBox = document.getElementById(modal);
    gsap.to(modalBox,{
       display: 'block',
        onComplete: () => {
           gsap.to(modalBox, {
               duration: 0.2,
               opacity: 1
           })
        }
    });
}

const closeModalBtns = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.modal');
const form = document.querySelector('.modal-form');
const success = document.querySelector('.modal-success');
for(let i = 0; i < closeModalBtns.length; i++) {
    closeModalBtns[i].addEventListener('click', function () {
        for(let j = 0; j < modals.length; j++) {
            gsap.to(modals[j], {
                duration: 0.5,
                opacity: 0,
                onComplete: () => {
                    modals[j].style.display = 'none';
                    showForm();
                }
            });
        }
    });
}