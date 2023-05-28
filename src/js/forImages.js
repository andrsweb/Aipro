document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	addSelected( '.field__item' )
	addSelected( '.field.full' )
} )

const addSelected = ( selector ) => {
	const images = document.querySelectorAll( selector )

	if( ! images ) return

	images.forEach( image => {
		image.addEventListener( 'click', () => {
			if( ! image.classList.contains( 'selected' ) ) {
				image.classList.add( 'selected' )
			} else {
				image.classList.remove( 'selected' )
			}
		} )
	} )
}