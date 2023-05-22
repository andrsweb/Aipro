import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initSwiper('.swiper.experiment__swiper', 2, 2, 2, 2)
	initSwiper('.swiper.texts__swiper', 1, 'auto', 2, 3)

})

const initSwiper = (selector, perView, xs, s, md) => {
	if (!selector) return

	const swiper = new Swiper(selector, {
		direction: 'horizontal',
		slidesPerView: perView,
		spaceBetween: 16,
		grabCursor: true,

		breakpoints: {
			320: {
				slidesPerView: xs
			},

			576: {
				slidesPerView: s
			},

			767: {
				slidesPerView: md,
			}
		}
	})
}