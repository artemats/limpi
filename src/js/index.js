import '../sass/styles.scss';
import { initScrollTransitions } from "./scroll/transitions";
import './scroll/anchorScroll';
import './common/timer';
import { initCircleCarousel } from './common/initCircleCarousel';
import './common/accordion';
import './common/detectButtonsClickEvent';
import './common/inputMask';

/*
Init scroll transitions
 */
initScrollTransitions();

/*
Init cleaners carousel
 */
initCircleCarousel();