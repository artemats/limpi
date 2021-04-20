const name = document.querySelector('#input-name');
const phone = document.querySelector('#input-phone');

phone.addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2] ? + x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? ' ' + x[3] : '') + ' ' + x[4];
});