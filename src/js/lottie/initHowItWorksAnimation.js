import lottie from 'lottie-web';

export const initHowItWorksAnimation = () => {

    const box = document.querySelector('#how-it-works');
    const steps = document.querySelectorAll('.card-box-illustration');
    const cards = document.querySelectorAll('.card');

    if(!box.classList.contains('active')) {
        lottie.loadAnimation({
            container: box,
            renderer: 'canvas',
            loop: true,
            autoplay: true,
            path: 'lottie/How-it-works.json',
            rendererSettings: {
                progressiveLoad: true,
                hideOnTransparent: true
            }
        });
        box.classList.add('active');

        for(let i = 0; i < steps.length; i++) {
            const lot = lottie.loadAnimation({
                container: steps[i],
                renderer: 'canvas',
                loop: false,
                autoplay: false,
                path: `lottie/Illustration_step_${i + 1}.json`,
                rendererSettings: {
                    progressiveLoad: true,
                    hideOnTransparent: true
                }
            });

            cards[i].addEventListener('mouseenter', () => lot.play());
            cards[i].addEventListener('mouseleave', () => lot.stop());
        }

    }

};