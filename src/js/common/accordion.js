const aBox = document.querySelectorAll('.accordion-box');
const aHead = document.querySelectorAll('.accordion-box-head');
const aContent = document.querySelectorAll('.accordion-box-content');

for(let i = 0; i < aHead.length; i++) {
    aHead[i].addEventListener('click', toggleAccordionBox, false);
}

for(let i = 0; i < aContent.length; i++) {
    aContent[i].setAttribute('data-height', aContent[i].clientHeight);
    aContent[i].style.height = 0;
}

function toggleAccordionBox() {
    const aBoxParent = this.parentNode;
    let aBoxClass = aBoxParent.className;
    const aBoxContent = aBoxParent.querySelector('.accordion-box-content');
    const aBoxContentHeight = parseInt(aBoxContent.dataset.height);

    for (let j = 0; j < aBox.length; j++) {
        aBox[j].className = 'accordion-box close';
        aBox[j].querySelector('.accordion-box-content').style.height = 0;
    }
    if (aBoxClass === 'accordion-box close') {
        aBoxParent.className = 'accordion-box open';
        aBoxParent.querySelector('.accordion-box-content').style.height = ( aBoxContentHeight + 20 ) + 'px';
    }
}