import gsap, { Bounce } from 'gsap';

const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const navWrap = document.querySelector('.header-panel-nav');
const navLinks = document.querySelectorAll('.nav .nav-link');
const nav = document.querySelector('.nav');

burger.addEventListener('click', function () {

    this.classList.contains('active') ? closeMenu() : openMenu();

});

export function openMenu() {
    burger.classList.add('active');
    header.classList.add('is-open-menu');
    gsap.to(navWrap, {
       duration: 0.1,
       display: 'block',
       onComplete: () => {
           navWrap.style.opacity = 1;
           gsap.to(nav, {
              duration: 0.5,
              width: ( window.innerWidth - 20 ),
              height: ( window.innerHeight - 20 ),
               onComplete: () => {
                  nav.classList.add('shadows');
                   gsap.fromTo(navLinks, {
                       opacity: 0,
                       y: 30
                   },{
                       duration: 1,
                       opacity: 1,
                       y: 0,
                       // stagger: 0.1,
                       ease: Bounce.easeOut
                   });
               }
           });
       }
    });
}

export function closeMenu() {
    gsap.fromTo(navLinks, {
        opacity: 1,
        y: 0
    },{
        duration: 0.3,
        opacity: 0,
        y: 30,
        // stagger: 0.1,
        onComplete: () => {
            gsap.to(navWrap, {
                duration: 0.1,
                opacity: 0,
                onComplete: () => {
                    nav.classList.remove('shadows');
                    gsap.to(nav, {
                        duration: 0.1,
                        width: 0,
                        height: 0,
                    });
                    navWrap.style.display = 'none';
                    burger.classList.remove('active');
                    header.classList.remove('is-open-menu');
                }
            });
        }
    });
}