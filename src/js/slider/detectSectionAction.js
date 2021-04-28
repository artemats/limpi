import {initChartAnimation} from "../common/initChartAnimation";
import {initHowItWorksAnimation} from "../lottie/initHowItWorksAnimation";
import {initPricesCarousel} from "../common/initPricesCarousel";
import {stopHobbiesSwitcher, switchHobbies} from "../common/switchHobbies";
import {initHeroAnimation} from "../lottie/initHeroAnimation";
import {initCircleCarousel} from "../common/initCircleCarousel";
import {initCtaAnimation} from "../lottie/initCtaAnimation";
import {initFooterStars} from "../lottie/initFooterStars";

export function detectSectionAction(id) {
    id === 'section-0' ? initHeroAnimation() : null;
    id === 'section-1' ? initChartAnimation() : null;
    id === 'section-2' ? initHowItWorksAnimation() : null;
    id === 'section-3' ? initPricesCarousel() : null;
    id === 'section-4' ? switchHobbies() : stopHobbiesSwitcher();
    id === 'section-5' ? initCircleCarousel() : null;
    id === 'section-7' ? initCtaAnimation() : null;
    id === 'section-8' ? initFooterStars() : null;
}