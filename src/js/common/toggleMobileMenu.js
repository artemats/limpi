import gsap, { Power2 } from 'gsap';

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
                width: (window.innerWidth - 20),
                height: (window.innerHeight - 20),
                onComplete: () => {
                    nav.classList.add('shadows');
                    gsap.fromTo(navLinks, {
                        opacity: 0,
                        y: 30
                    }, {
                        duration: 0.8,
                        opacity: 1,
                        y: 0,
                        stagger: 0.05,
                        ease: Power2.easeOut
                    });
                }
            });
        }
    });
}

export function closeMenu() {
    const duration = 0.4;
    nav.classList.remove('shadows');
    gsap.fromTo(navLinks, {
        opacity: 1,
        y: 0
    }, {
        duration: duration * 0.75,
        opacity: 0,
        y: -30,
        stagger: 0.035,
    });
    setTimeout(() => {
        setTimeout(() => { navWrap.style.opacity = 0 }, 100);
        nav.classList.remove('shadows');
        burger.classList.remove('active');
        header.classList.remove('is-open-menu');
        gsap.to(nav, {
            duration: duration,
            width: 20,
            height: 20,
            padding: 0,
            opacity: 0,
        })
        gsap.to(navWrap, {
            duration: duration,
            opacity: 0,
            onComplete: () => {
                navWrap.style.display = 'none';
                nav.removeAttribute("style")
            }
        });
    }, 0.035 * (navLinks.length - 1) + duration * 1000);
}