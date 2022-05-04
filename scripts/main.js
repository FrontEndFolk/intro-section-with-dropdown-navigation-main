"use strict";

// dropdown menu

let dropDownMenuArr = document.querySelectorAll('.dropdown');
dropDownMenuArr = Array.from(dropDownMenuArr);
let second = 0;

function setDropdownMenuClasses(e) {
    e.childNodes[3].classList.toggle('sub-menu--active');
    e.childNodes[1].classList.toggle('icon--active');
}
function removeDropdownMenuClasses(e) {
    e.childNodes[3].classList.remove('sub-menu--active');
    e.childNodes[1].classList.remove('icon--active');
}

document.addEventListener('click', (event) => {
    for (let i = 0; i < dropDownMenuArr.length; i++) {
        if (dropDownMenuArr[i] == event.target) {
            setDropdownMenuClasses(event.target);
            second = dropDownMenuArr.filter((item) => item != dropDownMenuArr[i]);
            removeDropdownMenuClasses(second[0]);
        }
    }
    if (!event.target.closest('.dropdown')) {
        dropDownMenuArr.forEach((item) => {
            removeDropdownMenuClasses(item);
        });
    }
});

document.addEventListener('keyup', (event) => {
    if ('Escape' == event.code) {
        removeDropdownMenuClasses(dropDownMenuArr[0]);
        removeDropdownMenuClasses(dropDownMenuArr[1]);
    }
})

// burger menu

let burgerButton = document.querySelector('.header__burger');
let burgerMenu = document.querySelector('.menu__list');
console.log(burgerButton, burgerMenu)
let body = document.body;
let shadow = document.querySelector('.shadowing');

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('header__burger--active');
    burgerMenu.classList.toggle('menu__list--active');
    body.classList.toggle('lock');
    shadow.classList.toggle('shadowing--active');
});