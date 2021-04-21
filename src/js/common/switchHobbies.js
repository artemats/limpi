export function switchHobbies() {

    const hobbies = document.querySelectorAll('.hobbies-item');
    let counter = -1;
    let last = 0;

    setInterval(function () {
        fadeInFadeout();
    }, 1000);

    function fadeInFadeout() {
        if(counter >= ( hobbies.length - 1 )) {
            counter = 0;
            last = hobbies.length - 1;
        } else {
            last = counter;
            counter += 1;
        }
        hobbies[counter].classList.add('show');
        hobbies[last].classList.remove('show');
    }

}