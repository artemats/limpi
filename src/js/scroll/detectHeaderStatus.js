export function detectHeaderStatus(direction, section) {

    const header = document.querySelector('.header');

    /// toggle header position ///
    if(direction === 'down' && window.scrollY > 0) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }

    /// for first section ///
    if(section.getAttribute('id') === 'section-0') {
        header.classList.remove('smart');
    } else {
        header.classList.add('smart');
    }
}