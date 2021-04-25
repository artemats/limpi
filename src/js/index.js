import '../sass/styles.scss';
import { initScrollTransitions } from "./scroll/transitions";
import './common/timer';
import './common/accordion';
import './common/detectButtonsClickEvent';
import './common/inputMask';
import './common/formSubmit';
import './common/modal';
import {initCircleCarousel} from "./common/initCircleCarousel";
import {initPricesCarousel} from "./common/initPricesCarousel";

/*
Init scroll transitions
 */
initScrollTransitions();

initCircleCarousel();

initPricesCarousel();