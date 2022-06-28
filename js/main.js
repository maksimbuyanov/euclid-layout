const burgerButton = document.querySelector('.header__menu-button')
const nav = document.querySelector('.nav')

burgerButton.addEventListener('click', function() {
  this.classList.toggle('header__menu-button_closed')
  nav.classList.toggle('nav_visible')
  document.body.classList.toggle('block-scroll')
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
});
