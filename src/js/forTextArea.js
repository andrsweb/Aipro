document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	autoGrow('.resize_textarea')
})

const autoGrow = (element) => {
	const textarea = document.querySelectorAll(element)

	textarea.forEach(area => {
		area.addEventListener('keyup', e => {
			area.style.height = 'auto'
			let scrollHeight = e.target.scrollHeight
			area.style.height = `${scrollHeight}px`
		})
	})

}