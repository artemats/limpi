import '../sass/styles.scss';
import { initScrollTransitions } from "./scroll/transitions";
import './scroll/anchorScroll';
import './common/timer';
import { initCircleCarousel } from './common/initCircleCarousel';
import './common/accordion';
import './common/detectButtonsClickEvent';
import './common/inputMask';
import './common/formSubmit';
import './common/modal';

/*
Init scroll transitions
 */
initScrollTransitions();

/*
Init cleaners carousel
 */
initCircleCarousel();