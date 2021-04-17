export function detectHeaderStatus(direction, section) {

    const header = document.querySelector('.header');

    /// toggle header position ///
    if(direction === 'down' && window.scrollY !== 0) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    /// for last section ///
    if(section.getAttribute('id') === 'section-7') {
        header.classList.remove('hidden');
    }

    /// change header style ///
    window.addEventListener('scroll', () => {
       if(window.scrollY <= 0) {
            header.classList.remove('smart');
       } else {
           header.classList.add('smart');
       }
    });

}