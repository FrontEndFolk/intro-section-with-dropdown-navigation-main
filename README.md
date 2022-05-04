# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

[laptop](screenshots\FireShot Capture 001 - Frontend Mentor - Intro section with dropdown navigation_ - the-beginner-2.github.io.png)
[mobile](screenshots\FireShot Capture 002 - Frontend Mentor - Intro section with dropdown navigation_ - the-beginner-2.github.io.png)
[laptopMenu](screenshots\FireShot Capture 006 - Frontend Mentor - Intro section with dropdown navigation_ - the-beginner-2.github.io.png)
[mobileMenu](screenshots\FireShot Capture 004 - Frontend Mentor - Intro section with dropdown navigation_ - the-beginner-2.github.io.png)

### Links

- Solution URL: [gitHub repository](https://github.com/The-beginner-2/intro-section-with-dropdown-navigation-main)
- Live Site URL: [gitHub pages](https://the-beginner-2.github.io/intro-section-with-dropdown-navigation-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Scss
- Flexbox
- JavaScript
- Prepros

### What I learned

**position: fixed** really came in handy to create adaptive version of navigation

```css
.menu {
    &__list {
        background-color: #fff;
        position: fixed;
        right: -200px;
        flex-direction: column;
        height: 100vh;
        width: 200px;
        top: 0;
        padding: 40px 20px;
        align-items: flex-start;
    }
}
```
Had really good practice with **eventListener&delegation** not sure if it was the best way to do this but it is only solution that i could think of.

```js

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
            setDropdownMenuClasses(event.target);                                   // that allows user to open only ony drop down meny at a time
            second = dropDownMenuArr.filter((item) => item != dropDownMenuArr[i]);
            removeDropdownMenuClasses(second[0]);
        }
    }
    if (!event.target.closest('.dropdown')) {
        dropDownMenuArr.forEach((item) => {         // delegation
            removeDropdownMenuClasses(item);
        });
    }
});

```
### Continued development

I really want to improve my js skills to make my code more efficient and clear than it is now. Also I would love to learn more about css and js animation in order to make my future projects more visually attractive.


## Author

- Frontend Mentor - [@The-beginner-2](https://www.frontendmentor.io/profile/The-beginner-2)

