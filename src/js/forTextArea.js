document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	autoGrow('.resize_textarea')
})

const autoGrow = (element) => {
	const textarea = document.querySelectorAll(element)

	textarea.forEach(area => {
		area.addEventListener('keyup', e => {
			area.style.height = '48px'
			let scrollHeight = e.target.scrollHeight
			area.style.height = `${ scrollHeight}px`
		})
	})

}