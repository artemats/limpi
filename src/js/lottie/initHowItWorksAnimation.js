import lottie from 'lottie-web';

export const initHowItWorksAnimation = () => {

    const box = document.querySelector('#how-it-works');

    if(!box.classList.contains('active')) {
        lottie.loadAnimation({
            container: box,
            renderer: 'canvas',
            loop: true,
            autoplay: true,
            path: 'lottie/How-it-works.json',
            rendererSettings: {
                // scaleMode: 'noScale',
                progressiveLoad: true,
                hideOnTransparent: true
            }
        });
        box.classList.add('active');
    }

};