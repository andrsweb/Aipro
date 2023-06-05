document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	addSelected('.field__item')
	addSelected('.field.full')
})

let tries = document.querySelectorAll('.field__item_left span')
let count = 0
const incrCount = () => {
	count = count + 1
}

const addSelected = (selector) => {
	const images = document.querySelectorAll(selector)


	if (!images.length && tries.length) return

	tries.forEach(tri => {
		tri.textContent = count
	})

	images.forEach(image => {
		image.addEventListener('click', () => {

			if (!image.classList.contains('selected')) {
				image.classList.add('selected')
				incrCount()
			} else {
				image.classList.remove('selected')
			}
		})
	})
}