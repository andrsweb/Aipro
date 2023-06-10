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
	const textValue = document.querySelector('.text__value')
	const imageValue = document.querySelector('.image__value')
	const textPrice = document.querySelector('.text_price')
	const imagePrice = document.querySelector('.image_price')
	const imageitems = document.querySelectorAll('.field__item')
	let textCost = 5
	let imageCost = 10
	let imageNum = 0


	if (!rangeInput && !input) return

	imageitems.forEach(item => {
		imageValue.textContent = 0

		item.addEventListener('click', () => {
			if (item.classList.contains('selected')) {
				imageValue.textContent = --imageNum
				imagePrice.textContent = imageCost -= 10
			} else {
				imageValue.textContent = ++imageNum
				imagePrice.textContent = imageCost += 10
			}

			sum()
		})
	})

	rangeInput.addEventListener('input', e => {
		input.value = e.target.value
		textValue.innerHTML = e.target.value
		textPrice.innerHTML = e.target.value * Math.round(textCost)

		sum()
	})

	input.addEventListener('input', e => {
		rangeInput.value = e.target.value
	})

	const sum = () => {
		const totalPrice = document.querySelector('.total')
		totalPrice.innerHTML = parseInt(textPrice.textContent) + parseInt(imagePrice.textContent)
	}
}