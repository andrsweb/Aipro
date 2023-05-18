// import { isInScope } from './common/global'

// document.addEventListener( 'DOMContentLoaded', () => {
// 	'use strict'

// 	checkWindowSize()
// } )

// // resize func
// const checkWindowSize = () => {
// 	if( window.innerWidth <= 767 ) document.body.classList.add( 'mobile' )
// 	else document.body.classList.remove( 'mobile' )
// }

// window.addEventListener( 'resize', () => {
// 	checkWindowSize()
// } )

// // Scroll
// window.addEventListener( 'scroll', () => {
// 	const 
// 		steps         = document.querySelectorAll( '.content__item' ),
// 		imgFixed      = document.querySelector( '.img__fixed_mobile' ),
// 		source        = document.querySelector( '.content__img_wrapper picture source' ),
// 		imgWrapper    = document.querySelector( '.content__img_wrapper' )

// 		if( ! steps.length || ! imgFixed || ! document.body.classList.contains( 'mobile' ) ) return

// 		steps.forEach( step => {
// 			const viewportOffsetY = step.getBoundingClientRect().top
// 			const wrapperTop      = imgWrapper.getBoundingClientRect().top
// 			const wrapperBot      = imgWrapper.getBoundingClientRect().bottom

// 			if( viewportOffsetY <= 312 ) {
// 				imgFixed.src = step.querySelector( 'img').src
// 				source.srcset = step.querySelector( 'img' ).src
// 				imgWrapper.classList.add( 'scrolled' )
// 			}
// 		} )
// } )