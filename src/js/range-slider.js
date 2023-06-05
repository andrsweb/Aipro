import rangesliderJs from 'rangeslider-js'

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	initRangeSlider()

	inputValue()
})

const initRangeSlider = () => {
	const selector = document.querySelector('.range-slider')

	if (!selector) return

	rangesliderJs.create(selector, { min: 0, max: 20, value: 0, step: 1 })
}

const inputValue = () => {
	const rangeInput = document.querySelector('.range-slider')
	const input = document.querySelector('.input')

	if (!rangeInput && !input) return

	rangeInput.addEventListener('input', e => { input.value = e.target.value })
	input.addEventListener('input', e => { rangeInput.value = e.target.value })
}



