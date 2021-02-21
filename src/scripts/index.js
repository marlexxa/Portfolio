'use strict';

const hamburgerButton = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburgerButton.addEventListener('click', function (event) {
  event.preventDefault();
  this.classList.toggle('hamburger--open');
  menu.classList.toggle('menu--open');
});
