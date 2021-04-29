import lottie from 'lottie-web';

const box = document.querySelector('#footer-stars');
let stars;

export const initFooterStars = () => {

    if(!box.classList.contains('active')) {
        stars = lottie.loadAnimation({
            container: box,
            renderer: 'canvas',
            loop: true,
            autoplay: true,
            path: 'lottie/Illustration - Footer Stars.json',
            rendererSettings: {
                progressiveLoad: true,
                hideOnTransparent: true
            }
        });
        box.classList.add('active');
    } else {
        stars.play();
    }
};

export const stopFooterStars = () => {
  !!stars ? stars.stop() : null;
};