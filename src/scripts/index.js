'use strict';

const hamburgerButton = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.items__item');
const skillsItems = document.querySelectorAll('.skills-container__skill');
const mainContent = document.querySelector('main');

hamburgerButton.addEventListener('click', function (event) {
  event.preventDefault();
  this.classList.toggle('hamburger--open');
  menu.classList.toggle('menu--open');
});

menuItems.forEach((item) => {
  item.addEventListener('click', function () {
    hamburgerButton.classList.remove('hamburger--open');
    menu.classList.remove('menu--open');
  });
});

skillsItems.forEach((item) => {
  const skillIcon = item.querySelector('.skill__icon');

  item.addEventListener('mouseenter', function () {
    skillIcon.classList.add('colored');
  });

  item.addEventListener('mouseleave', function () {
    skillIcon.classList.remove('colored');
  });
});

mainContent.addEventListener('mouseup', function (e) {
  menuItems.forEach((item) => {
    if (!item.contains(e.target)) {
      menu.classList.remove('menu--open');
      hamburgerButton.classList.remove('hamburger--open');
    }
  });
});
