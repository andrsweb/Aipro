document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	addSelected('.images_items', '.field__item')
	addSelected('.field__full_wrapper', '.field.full')
})

const addSelected = (wrapper, selector) => {

	const fieldWrapper = document.querySelectorAll(wrapper)

	if (!fieldWrapper.length) return

	document.querySelector('body').addEventListener('click', e => {
		const target = e.target
		const image = target.closest(selector)

		if (!image.classList.contains('selected')) {
			image.classList.add('selected')

		} else {
			image.classList.remove('selected')
		}
	})
}

