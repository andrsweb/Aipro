document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	addSelected('.field__item')
	addSelected( '.field.full')
})

const addSelected = (selector) => {

	document.querySelector('body').addEventListener('click', e => {
		const target = e.target
		const image = target.closest(selector)

		if( !image ) return

		if (!image.classList.contains('selected')) {
			image.classList.add('selected')

		} else {
			image.classList.remove('selected')
		}
	})
}

