import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	headerScroll()
	toggleBurgerMenu()
})

const headerScroll = () => {
	window.addEventListener('scroll', () => {
		const scrollTop = window.scrollY
		const header = document.querySelector('.header')

		if (!header) return

		if (scrollTop > 0) {
			if (!header.classList.contains('scrolled'))
				header.classList.add('scrolled')
		} else {
			header.classList.remove('scrolled')
		}
	})
}

const toggleBurgerMenu = () => {
	const burgerButton = document.querySelector('.burger-button')
	const burgerMenu = document.querySelector('.header-wrapper')

	if (!burgerButton || !burgerMenu) return

	burgerButton.addEventListener('click', () => {
		setTargetElement(document.querySelector('#body-lock'))
		if (!burgerButton && !burgerMenu) return

		if (!burgerMenu.classList.contains('opened')) {
			burgerMenu.classList.add('opened')
			burgerButton.classList.add('opened')
			disableBodyScroll(getTargetElement(), { reserveScrollBarGap: true })

		} else {
			burgerMenu.classList.remove('opened')
			burgerButton.classList.remove('opened')
			enableBodyScroll(getTargetElement())
		}
	})

	document.addEventListener('click', e => {
		setTargetElement(document.querySelector('#body-lock'))
		e.stopPropagation()
		const target = e.target

		if (
			!target.className ||
			target.classList.contains('header-wrapper') ||
			target.classList.contains('burger-button')
		) return

		burgerMenu.classList.remove('opened')
		burgerButton.classList.remove('opened')
		enableBodyScroll(getTargetElement())
	})

	window.addEventListener('resize', () => {
		setTargetElement(document.querySelector('#body-lock'))
		const windowWidth = window.innerWidth
		const WINDOW_WIDTH_MD = 768

		if (windowWidth >= WINDOW_WIDTH_MD && burgerMenu.classList.contains('opened')) {
			burgerMenu.classList.remove('opened')
			burgerButton.classList.remove('opened')
			enableBodyScroll(getTargetElement())
		}
	})
}
