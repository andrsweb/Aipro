document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showHiddenWindow()
} )

const showHiddenWindow = () => {
	const accountPosts = document.querySelectorAll( '.header__account_post' )
	const accountEmail = document.querySelector( '.header__account_email' )

	if ( ! accountEmail && ! accountPosts.length ) return

	accountPosts.forEach( item => {
		item.addEventListener( 'click', () => {
			if( ! accountEmail.classList.contains( 'opened') ) {
				accountEmail.classList.add( 'opened' ) 
			} else {
				accountEmail.classList.remove( 'opened' )
			}
		} )
	} )
}