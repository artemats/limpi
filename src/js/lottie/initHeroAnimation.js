import lottie from 'lottie-web';

export const initHeroAnimation = () => {

    const box = document.querySelector('#hero-animation');

    if(!box.classList.contains('active')) {
        lottie.loadAnimation({
            container: box,
            renderer: 'canvas',
            loop: true,
            autoplay: true,
            path: 'lottie/Illustration-main.json',
            rendererSettings: {
                // scaleMode: 'noScale',
                progressiveLoad: true,
                hideOnTransparent: true
            }
        });
        box.classList.add('active');
    }

};