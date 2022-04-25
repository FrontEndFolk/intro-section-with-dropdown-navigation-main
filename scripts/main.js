"use strict";

let dropDownMenuArr = document.querySelectorAll('.dropdown');

dropDownMenuArr.forEach(item => {
    item.addEventListener('click', (event) => {
        event.target.childNodes[3].classList.toggle('sub-menu--active');
        event.target.childNodes[1].classList.toggle('icon--active');
    });
});
