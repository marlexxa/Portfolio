'use strict';

const hamburgerButton = document.querySelector('.hamburger-nav');
const menu = document.querySelector('.menu');

hamburgerButton.addEventListener('click', function (event) {
  event.preventDefault();
  this.classList.toggle('hamburger-nav--open');
  menu.classList.toggle('menu--open');
});
