import '../sass/styles.scss';
import { initScrollTransitions } from "./scroll/transitions";
import './scroll/anchorScroll';
import './common/timer';
import { initCircleCarousel } from './common/initCircleCarousel';
import './common/accordion';

/*
Init scroll transitions
 */
initScrollTransitions();

/*
Init cleaners carousel
 */
initCircleCarousel();