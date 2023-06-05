import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	showAndCloseAside('#aside_lock', '#aside_lock')
	showAndCloseAside('#asideImages_lock', '#asideImages_lock')
})

const showAndCloseAside = (selector, lock) => {
	const configButton = document.querySelectorAll('.configure_text')
	const aside = document.querySelector(selector)
	const asideClose = document.querySelector('.aside__close')
	setTargetElement(document.querySelector(lock))

	if (!configButton || !aside || !asideClose ) return

	configButton.forEach(button => {
		button.addEventListener('click', () => {
			setTargetElement(document.querySelector(lock))
			aside.classList.add('showed')
			disableBodyScroll(getTargetElement(), { reserveScrollBarGap: true })
		})
	})

	asideClose.addEventListener('click', () => {
		aside.classList.remove('showed')
		enableBodyScroll(getTargetElement())
	})
}