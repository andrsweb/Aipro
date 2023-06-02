document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	disableRadio()
} )

const disableRadio = () => {
	const disabledButtons = document.querySelectorAll( '.disabled' )
	
	if( ! disabledButtons.length ) return

	disabledButtons.forEach( button => {
		button.disabled = true
	} )
}