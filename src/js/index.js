import '../sass/styles.scss';
import {initFullSlider} from "./slider";
import './common/accordion';
import './common/timer';
import './common/detectButtonsClickEvent';
import './common/inputMask';
import './common/formSubmit';
import './common/modal';
import './common/toggleMobileMenu';
import './slider/defaultScroll';
import {detectInnerPage} from "./common/detectInnerPage";

/*
Init slider transitions
 */
initFullSlider();

/*
Detect inner page
 */
detectInnerPage();

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#wrapper').classList.remove('loading');

});