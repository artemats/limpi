const aBox = document.querySelectorAll('.accordion-box');
const aHead = document.querySelectorAll('.accordion-box-head');

for (let i = 0; i < aHead.length; i++) {
    aHead[i].addEventListener('click', toggleAccordionBox, false);
}

function toggleAccordionBox() {
    let aBoxClass = this.parentNode.className;
    console.log(aBoxClass);
    for (let j = 0; j < aBox.length; j++) {
        aBox[j].className = 'accordion-box close';
    }
    if (aBoxClass === 'accordion-box close') {
        this.parentNode.className = 'accordion-box open';
    }
}