export function detectHeaderStatus(direction, section) {

    const header = document.querySelector('.header');

    if(window.innerWidth > 1200) {

        /// toggle header position ///
        if (direction === 'down') {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        /// for first section ///
        if (section.getAttribute('id') === 'section-0') {
            header.classList.remove('smart');
        } else {
            header.classList.add('smart');
        }

    }

    // if(window.innerWidth <= 1200) {
    //     window.addEventListener('scroll', () => {
    //         if(window.scrollY > 0) {
    //             header.classList.add('hidden');
    //         } else {
    //             header.classList.remove('hidden');
    //         }
    //     });
    // }

}