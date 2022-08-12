"use strict"

// burger
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const close = document.querySelector('.header__nav-close');

burger.addEventListener('click', () => {
	nav.classList.add('_active');
})
close.addEventListener('click', () => {
	nav.classList.remove('_active');
})

// tabs
const tabs = document.querySelectorAll('.info-home__tab');
const blocks = document.querySelectorAll('.info-home__block');
tabs.forEach((tab, index) => {
	tab.addEventListener('click', (e) => {

		tabs.forEach(child => {
			child.classList.remove('_active')
		})

		blocks.forEach(child => {
			child.classList.remove('_active')
		})

		tab.classList.add('_active')
		blocks[index].classList.add('_active')

	})
})

// slider
const swiper = new Swiper('.team-home__swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
		clickable: true
  },
});

// popup
const link = document.querySelector('.services-home__link');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

link.addEventListener('click', () => {
	popup.classList.add('_active');
	document.body.style.overflow = 'hidden';
	document.documentElement.style.overflow = 'hidden';
})

popupClose.addEventListener('click', () => {
	popup.classList.remove('_active');
	document.body.style.overflow = '';
	document.documentElement.style.overflow = '';
})