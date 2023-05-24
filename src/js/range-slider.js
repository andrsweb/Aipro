import rangesliderJs from 'rangeslider-js'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	rangesliderJs.create(document.querySelectorAll('.range-slider'))
	inputValue()
} )

const inputValue = () => {
	const rangeInput = document.querySelector( '.range-slider' )
	const input      = document.querySelector( '.input' )

	rangeInput.addEventListener('input', (e) => { input.value = e.target.value });
	input.addEventListener('input', (e) => { rangeInput.value = e.target.value });
}



