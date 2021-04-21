import gsap from "gsap/gsap-core";
import {showForm} from "./formSubmit";

export function openModal(modal) {
    console.log('open modal - ', modal);
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
const modal = document.querySelector('.modal');
const form = document.querySelector('.modal-form');
const success = document.querySelector('.modal-success');
for(let i = 0; i < closeModalBtns.length; i++) {
    closeModalBtns[i].addEventListener('click', function () {
        gsap.to(modal, {
            duration: 0.5,
            opacity: 0,
            onComplete: () => {
                modal.style.display = 'none';
                showForm();
            }
        });
    });
}