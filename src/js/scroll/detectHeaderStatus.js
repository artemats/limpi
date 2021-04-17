export function detectHeaderStatus(direction) {

    const header = document.querySelector('.header');

    if(direction === 'down') {

        console.log('to down');

    } else {

        console.log('to up');

    }

    window.addEventListener('scroll', () => {
       if(window.scrollY <= 0) {
            header.classList.remove('smart');
       } else {
           header.classList.add('smart');
       }
    });

}