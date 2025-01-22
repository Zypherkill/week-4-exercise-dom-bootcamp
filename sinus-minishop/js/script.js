// Code here!
/* 1 */
let changeName = document.querySelector ('.art-1 h3');
changeName.innerText = 'Potato';
/* 2 */
let changeHome = document.querySelector('footer > section > article a');
changeHome.innerText = 'Start';

/* 3 */
let changeContact = document.querySelector('footer > section > article a:nth-of-type(3)');
changeContact.innerText = 'Mail us';

/* 4 */
let changeFire = document.querySelector ('.art-2 p');
changeFire.innerText = 'Denne text har ändrats';

/* 5 */
let changeButton = document.querySelectorAll('article button');

for (let i = 0; i < changeButton.length; i++) {
    changeButton[i].style.backgroundColor = 'blue';
}

/* 6 */
let changeBackgroundColor = document.querySelectorAll('main article figure');

for (let i = 0; i < changeBackgroundColor.length; i++) {
    changeBackgroundColor[i].style.backgroundColor = 'green';
}

/* 7 */
let changeAdress = document.querySelector('footer > section > article p');
changeAdress.innerText = 'Sinus Skateboards\n Västra Torggatan 19A\n 66531 Kil';

/* 8 */
let changeText = document.querySelectorAll('p');
    changeText.forEach(changeText => {
    changeText.style.color = 'purple';
});

/* 9 */
document.querySelectorAll('article button');

for (let i = 0; i < changeButton.length; i++) {
    changeButton[i].innerText = 'Add to cart';
}

/* 10 */
let homeClass = document.querySelector('header > nav a');
homeClass.classList.add ('active');

/* 11 */
const removeClassFromLogo = document.querySelector('.logo');
removeClassFromLogo.classList.remove('logo');


/* 12 */
let menu = document.querySelector('nav');
const addMenuOption = document.createElement('a');
addMenuOption.setAttribute('href', '#');
addMenuOption.textContent = 'Ny länk';
menu.append(addMenuOption);


/* 13 */
let main = document.querySelector('main');
let createArticle = document.createElement('article');


/* 14 */


/* 15 */




