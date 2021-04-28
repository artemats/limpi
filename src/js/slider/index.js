import '../../libs/scrolloverflow.min';
import fullpage from 'fullpage.js';
import {hideScaleSection} from "../scroll/hideScaleSection";
import {detectHeaderStatus} from "../scroll/detectHeaderStatus";
import {showScaleSection} from "../scroll/showScaleSection";
import {toDoWithOnSection} from "../scroll/goToSection";

export function initFullSlider() {

    const fullSlider = new fullpage('#full-slider', {
        scrollOverflow: true,
        scrollOverflowReset: true,
        scrollingSpeed: 1000,
        responsiveWidth: 1201,
        responsiveSlides: true,
        onLeave: (origin, destination, direction) => {
            console.log(direction);
            if(direction === 'down') {
                hideScaleSection(origin.item);
                detectHeaderStatus('down', destination.item);
            } else {
                showScaleSection(destination.item);
                detectHeaderStatus('up', destination.item);
            }
            toDoWithOnSection(destination.item);
            console.log('on leave - ', origin.item);
            console.log('on enter - ', destination.item);
        }
    });

}