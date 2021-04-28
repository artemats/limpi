import '../sass/styles.scss';
// import { initScrollTransitions } from "./scroll/transitions";
// import {splitTitle} from "./common/splitTitle";
import './common/timer';
import './common/accordion';
import './common/detectButtonsClickEvent';
import './common/inputMask';
import './common/formSubmit';
import './common/modal';
import './common/toggleMobileMenu';
import {initFullSlider} from "./slider";
import {initHeroAnimation} from "./lottie/initHeroAnimation";

/*
Init scroll transitions
 */
// initScrollTransitions();

initHeroAnimation();

initFullSlider();