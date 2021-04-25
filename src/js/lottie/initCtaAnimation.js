import lottie from 'lottie-web';

export const initCtaAnimation = () => {

    const box = document.querySelector('#cta');
    const bg = document.querySelector('#cta-bg');
    const tail = document.querySelector('#cta-tail');
    const cat = document.querySelector('#cta-cat');

    if(!box.classList.contains('active')) {
        if(window.innerWidth > 1200) {
            lottie.loadAnimation({
                container: bg,
                renderer: 'canvas',
                loop: true,
                autoplay: true,
                path: 'lottie/Illustration-CTA-BG.json',
                rendererSettings: {
                    progressiveLoad: true,
                    hideOnTransparent: true
                }
            });
            const tailLot = lottie.loadAnimation({
                container: tail,
                renderer: 'canvas',
                loop: true,
                autoplay: false,
                path: 'lottie/Illustration-CTA-tail.json',
                rendererSettings: {
                    progressiveLoad: true,
                    hideOnTransparent: true
                }
            });
            lottie.loadAnimation({
                container: cat,
                renderer: 'canvas',
                loop: true,
                autoplay: true,
                path: 'lottie/Illustration-CTA-cat.json',
                rendererSettings: {
                    progressiveLoad: true,
                    hideOnTransparent: true
                }
            });

            box.addEventListener('mouseenter', () => tailLot.play());
            box.addEventListener('mouseleave', () => tailLot.stop());
        } else {
            lottie.loadAnimation({
                container: box,
                renderer: 'canvas',
                loop: true,
                autoplay: true,
                path: 'lottie/Mobile-Tablet Illustration-CTA.json',
                rendererSettings: {
                    progressiveLoad: true,
                    hideOnTransparent: true
                }
            });
        }

        box.classList.add('active');
    }

};