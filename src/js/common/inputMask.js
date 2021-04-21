const name = document.querySelector('#input-name');
const phone = document.querySelector('#input-phone');

phone.addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2] ? + x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? ' ' + x[3] : '') + ' ' + x[4];

    let length = e.target.value.replace(/\s/g, '').replace(/[{()}]/g, '').length;
    if(length >= 9) {
        phone.classList.add('success');
    }
});

name.addEventListener('input', function (e) {
    if(!/^[a-zA-Z]*$/g.test(e.target.value)) {
        name.classList.add('error');
    } else {
        name.classList.remove('error');
        name.classList.add('success');
    }
});

// VMasker(phone).maskPattern('{380} (99) 999 99 99');