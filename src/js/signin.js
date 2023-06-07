document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	hideInputValue()
})

const hideInputValue = () => {
	const buttons = document.querySelectorAll('.eye__wrapper')

	if( ! buttons.length) return

	buttons.forEach( button => {
		button.addEventListener( 'click', () => {
			const input = button.closest('span').querySelector('input')
			if( !button.classList.contains( 'clicked')) {
				button.classList.add( 'clicked')
				input.type = 'text'
			} else {
				button.classList.remove( 'clicked')
				input.type = 'password'
			}
		})
	})
}
