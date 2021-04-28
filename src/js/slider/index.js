import '../../libs/scrolloverflow.min';
import fullpage from 'fullpage.js';
import {detectHeaderStatus} from "../scroll/detectHeaderStatus";
import {detectSectionAction} from "./detectSectionAction";

export function initFullSlider() {

    const fullSlider = new fullpage('#full-slider', {
        scrollOverflow: true,
        scrollOverflowReset: true,
        scrollingSpeed: 1000,
        responsiveWidth: 1201,
        responsiveSlides: true,
        onLeave: (origin, destination, direction) => {
            detectHeaderStatus(direction, destination.item);
            // console.log('on leave - ', origin.item);
            // console.log('on enter - ', destination.item);
            if(direction === 'down') {
                origin.item.classList.add('scale');
            } else {
                destination.item.classList.remove('scale');
            }
            detectSectionAction(destination.item.getAttribute('id'));
        }
    });

}