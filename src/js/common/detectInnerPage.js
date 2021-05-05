import {initFooterStars} from "../lottie/initFooterStars";

export const detectInnerPage = () => {

    const innerPage = document.querySelector('.inner-page');

    if(!!innerPage) {

        // init footer stars //
        initFooterStars();

    }

};