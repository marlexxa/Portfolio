'use strict';

const hamburgerButton = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menu_items = document.querySelectorAll('.items__item');

hamburgerButton.addEventListener('click', function (event) {
  event.preventDefault();
  this.classList.toggle('hamburger--open');
  menu.classList.toggle('menu--open');
});

menu_items.forEach((item) => {
  item.addEventListener('click', function () {
    hamburgerButton.classList.remove('hamburger--open');
    menu.classList.remove('menu--open');
  });
});
