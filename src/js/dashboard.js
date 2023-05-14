document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showHiddenWindow()
} )

const showHiddenWindow = () => {
	const accountPost = document.querySelector( '.header__account_post' )
	const accountEmail = document.querySelector( '.header__account_email' )

	if ( ! accountEmail ) return

	accountPost.addEventListener( 'click', () => {
		if( ! accountEmail.classList.contains( 'opened') ) {
			accountEmail.classList.add( 'opened' ) 
		} else {
			accountEmail.classList.remove( 'opened' )
		}
	} )
}