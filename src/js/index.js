import '../sass/styles.scss';
// import { initFullSlider } from "./slider";
import './common/timer';
import './common/accordion';
import './common/detectButtonsClickEvent';
import './common/inputMask';
import './common/formSubmit';
import './common/modal';
import './common/toggleMobileMenu';
import './slider/defaultScroll';
import { detectInnerPage } from "./common/detectInnerPage";

import { initCustomScroll } from "./custom_scroll";

/*
Init slider transitions
 */
// initFullSlider();

/*
Init custom scroll
 */
initCustomScroll();

/*
Detect inner page
 */
detectInnerPage();