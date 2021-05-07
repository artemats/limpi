let switcher;
const hobbies = document.querySelectorAll('.hobbies-item');

export function switchHobbies() {
    let counter = -1;
    let last = 0;

    switcher = setInterval(function () {
        fadeInFadeout();
    }, 1000);

    function fadeInFadeout() {
        if (counter >= (hobbies.length - 1)) {
            counter = 0;
            last = (hobbies.length - 1);
        } else {
            last = counter;
            counter += 1;
        }
        hobbies[counter].classList.add('show');
        last !== -1 ? hobbies[last].classList.remove('show') : null;
    }
}

export function stopHobbiesSwitcher() {
    clearInterval(switcher);
    for (let i = 0; i < hobbies.length; i++) {
        hobbies[i].classList.remove('show');
    }
}