document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showPopup( '.delete_button', '.popup__wrapper.delete_popup' )
	showPopup( '.change_password', '.popup__wrapper.password_popup' )
} )

const showPopup = ( button, wrapper ) => {
	const popupButton  = document.querySelector( button )
	const popupWrapper = document.querySelector( wrapper )

	if( ! popupButton && ! popupWrapper ) return

	popupButton.addEventListener( 'click', () => {
		if( ! popupWrapper.classList.contains( 'showed' ) ) {
			popupWrapper.classList.add( 'showed' )
		}
	} )

	const closePopup = () => {
		const closeButton  = document.querySelectorAll( '.popup_close' )
		const cancelButton = document.querySelectorAll( '.cancel_button' )

		if( ! closeButton && ! cancelButton ) return
	
		closeButton.forEach( btn => {
			btn.addEventListener( 'click', () => {
				if( popupWrapper.classList.contains( 'showed' ) ) {
					popupWrapper.classList.remove( 'showed' )
				}
			} )
		} )

		cancelButton.forEach( btn => {
			btn.addEventListener( 'click', () => {
				if( popupWrapper.classList.contains( 'showed' ) ) {
					popupWrapper.classList.remove( 'showed' )
				}
			} )
		} )
	}

	closePopup()
}

