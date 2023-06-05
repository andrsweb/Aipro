document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	showAndCloseAside()
})

const showAndCloseAside = () => {
	const configButton = document.querySelectorAll('.configure_text')
	const aside = document.querySelector('.aside')
	const asideClose = document.querySelector('.aside__close')

	if (!configButton || !aside || !asideClose) return

	configButton.forEach(button => {
		button.addEventListener('click', () => {
			aside.classList.add('showed')
		})
	})

	asideClose.addEventListener('click', () => {
		aside.classList.remove('showed')
	})
}