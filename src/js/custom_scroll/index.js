import { initFullSlider } from "../slider";
import Scrollbar from 'smooth-scrollbar';
import detectDevice from './detectDevice.js';
import CustomFixed from './customFixed.js';

import { initHeroAnimation } from "../lottie/initHeroAnimation";
import { detectHeaderStatus } from "../scroll/detectHeaderStatus";

const initScroll = () => {
    const wrapper = document.getElementById('wrapper');
    const header = document.querySelector('header');

    // styles
    window.scrollTo(0, 0);
    document.querySelectorAll('body, html').forEach(el => el.style.overflow = 'hidden');
    wrapper.style.height = '100vh';
    wrapper.style.scrollBehavior = 'smooth';

    // init scroll
    window.scrollbar = Scrollbar.init(wrapper, {
        damping: 0.1,
        overscrollEffectColor: '#949598',
        renderByPixels: true,
        continuousScrolling: false,
        alwaysShowTracks: true,
        speed: 0.2,
        onlyScrollIfNeeded: 1,
    });
    // remove xAxis
    window.scrollbar.track.xAxis.element.remove();

    window.CustomFixed = new CustomFixed();

    // add scroll listener
    window.scrollTop = 0;
    window.scrollbar.scrollDirection = 'up';
    window.scrollbar.addListener((status) => {
        const top = status.offset.y

        const newScrollDirection = top > window.scrollTop ? 'down' : 'up'
        if (newScrollDirection != window.scrollbar.scrollDirection) {
            detectHeaderStatus(window.scrollbar.scrollDirection, window.CustomFixed.divs[window.CustomFixed.activeSection].el, true)
        };

        window.scrollbar.scrollDirection = newScrollDirection;
        window.scrollTop = top;
        window.CustomFixed.tick(top);

    });

    // move header apper
    wrapper.insertBefore(header, null)

    initHeroAnimation();
}


export function initCustomScroll() {
    window.mobileDevice ? initFullSlider() : initScroll();
}