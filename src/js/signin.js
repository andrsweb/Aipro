document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	showPasswordAndChangeImg()
})

const showPasswordAndChangeImg = () => {
	const input = document.querySelector('.signin__input.last_input')
	const image = document.querySelector('.input-img')
	const imageOff = document.querySelector('.input-img.off')

	if (!input && !image) return

	image.addEventListener('click', () => {
		imageOff.classList.toggle('off')
		input.type = 'text'
	})

	imageOff.addEventListener('click', () => {
		imageOff.classList.toggle('off')
		input.type = 'password'
	})
}