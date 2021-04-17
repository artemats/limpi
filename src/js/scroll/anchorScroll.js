document.querySelectorAll('.anchor-scroll').forEach(link => {

    link.addEventListener('click',  (event) => {
        event.preventDefault();
        const anchorSection = document.getElementById(link.getAttribute('data-anchor'));
        const anchorSectionY = anchorSection.getBoundingClientRect().top + window.scrollY;

        window.scrollTo(0, anchorSectionY);

    });

});