// export const splitTitle = (title) => {
//     const titleText = title.textContent;
//     const splitTitleText = titleText.split(' ');
//     title.innerHTML = '';
//     for(let i = 0; i < splitTitleText.length; i++) {
//         let word = document.createElement('span');
//         word.classList.add('split-word');
//         word.innerHTML = splitTitleText[i];
//         title.appendChild(word);
//     }
// };