const name = document.querySelector('#input-name');
const phone = document.querySelector('#input-phone');
const inputs = document.querySelectorAll('.input');

phone.addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2] ? + x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? ' ' + x[3] : '') + ' ' + x[4];

    let length = e.target.value.replace(/\s/g, '').replace(/[{()}]/g, '').length;
    if(length >= 9) {
        phone.classList.add('success');
        // phone.classList.remove('error');
    } else {
        phone.classList.remove('success');
        // phone.classList.add('error');
    }
    phone.classList.remove('error');
});

name.addEventListener('input', function (e) {
    if(/^\d+$/g.test(e.target.value)) {
        name.classList.add('error');
    } else {
        name.classList.remove('error');
        name.classList.add('success');
    }
});

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('blur', checkLabelPosition);
}

function checkLabelPosition() {
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].value.length > 0 ? inputs[i].classList.add('focus') : inputs[i].classList.remove('focus');
    }
}

/// validation ///
function hasEmptyFields() {
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value === '') {
            inputs[i].classList.add('error');
        } else if(phone.value.length < 14) {
            phone.classList.add('error');
        } else {
            inputs[i].classList.remove('error');
        }
    }
}

export function isValidForm(form) {
    hasEmptyFields();
    let inputs = form.querySelectorAll('.input.error');
    return !inputs.length;
}

checkLabelPosition();