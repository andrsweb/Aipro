import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	headerScroll()
	toggleBurgerMenu()
} )

const headerScroll = () => {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY
        const header = document.querySelector( '.header' )

		if( ! header ) return

        if ( scrollTop > 300 ) {
            if ( ! header.classList.contains( 'scrolled' ) )
                header.classList.add( 'scrolled' )
		}   else {
            header.classList.remove( 'scrolled' )
        }
    })
}

const toggleBurgerMenu = () => {
	const burgerButton  = document.querySelector( '.burger-button' )
	const burgerMenu    = document.querySelector( '.header-wrapper' )
	setTargetElement( document.querySelector( '#body-lock' ) )

	if( ! burgerButton || ! burgerMenu ) return

	burgerButton.addEventListener( 'click', () => {

		if( ! burgerButton && ! burgerMenu ) return

		if( ! burgerMenu.classList.contains( 'opened' ) ) {
			burgerMenu.classList.add( 'opened' )
			burgerButton.classList.add( 'opened' )
			disableBodyScroll( getTargetElement(), { reserveScrollBarGap: true } )

		} else {
			burgerMenu.classList.remove( 'opened' )
			burgerButton.classList.remove( 'opened' )
			enableBodyScroll( getTargetElement() )
		}
	} )

	document.addEventListener( 'click', e => {
		e.stopPropagation()
		const target = e.target

		if (
			! target.className ||
			target.classList.contains( 'header-wrapper' ) ||
			target.classList.contains( 'burger-button' )
		) return

		burgerMenu.classList.remove( 'opened' )
		burgerButton.classList.remove( 'opened' )
		enableBodyScroll( getTargetElement() )
	} )
}
