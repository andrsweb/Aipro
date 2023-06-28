document.addEventListener( 'DOMContentLoaded', ()=> {
	'use strict'

	inputError()
})

const inputError = () => {
	const inputs = document.querySelectorAll( '.signin__input')
	const error  = document.querySelector( '.error__text')

	if( ! inputs.length && ! error ) return

	inputs.forEach( input => {
		if( input.classList.contains( 'error')) {
			error.style.display = 'block'
			input.style.borderColor = '#F02215'
		} else {
			error.style.display = 'none'
		}
	})
}