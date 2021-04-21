import gsap from 'gsap';
import {openModal} from "./modal";

const buttons = document.querySelectorAll('.link-btn.default');
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
        event.preventDefault();
        const modal = this.getAttribute('data-modal');
        const href = this.getAttribute('href');
        const blank = this.getAttribute('target');

        const circle = document.createElement('div');
        circle.classList.add('link-btn-circle');
        buttons[i].querySelector('.link-btn-bg').appendChild(circle);

        gsap.set(circle, {
            x: event.offsetX,
            y: event.offsetY,
            scale: 0
        });
        gsap.to(circle, {
            duration: 0.3,
            scale: 12,
            onComplete: () => {
                gsap.to(circle, {
                    duration: 0.1,
                    opacity: 0,
                    onComplete: () => {
                        circle.remove();
                    }
                })
            }
        });

        if(!!modal) {
            setTimeout(() => {
                openModal(modal);
            }, 200);
        }
        if(!!href !== !!blank) {
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
        if(!!href === true && !!blank === true) {
            setTimeout(() => {
                window.open(href, '_blank');
            }, 300);
        }
    });
}