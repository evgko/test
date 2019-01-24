let menuItem  = document.getElementsByClassName('menu-item'),
    menu = document.getElementsByClassName('menu')[0];


menu.insertBefore(menuItem[2], menuItem[1]);

///////////

let newLi = document.createElement('li');
newLi.classList.add('menu-item');
newLi.innerHTML = 'Пятый пункт';

menu.appendChild(newLi);

///////////

document.body.style.backgroundImage = 'url(../hm5/img/apple_true.jpg)';

///////////

let title = document.getElementById('title');

title.textContent = 'Мы продаем только подлинную технику Apple';

///////////

let column = document.getElementsByClassName('column')[1];
let advert = document.getElementsByClassName('adv');


column.removeChild(advert[0]);

///////////

document.getElementById('prompt').textContent = prompt('Ваше отношение к технике Apple', '');
