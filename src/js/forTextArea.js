document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	// autoGrow( 'textarea')
} )

const autoGrow = (element) => {
	element.style.height = "48px";
	element.style.height = (element.scrollHeight)+"px";
}