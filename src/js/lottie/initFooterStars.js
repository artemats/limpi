import lottie from 'lottie-web';

export const initFooterStars = () => {

    const box = document.querySelector('#footer-stars');

    if(!box.classList.contains('active')) {
        // lottie.loadAnimation({
        //     container: box,
        //     renderer: 'canvas',
        //     loop: true,
        //     autoplay: true,
        //     path: 'lottie/star.json',
        //     rendererSettings: {
        //         progressiveLoad: true,
        //         hideOnTransparent: true
        //     }
        // });
    }

};