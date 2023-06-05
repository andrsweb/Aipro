import Inputmask from "inputmask";

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	maskForInput('999999999', 'card-name')
	maskForInput('999', 'cvv')
	maskForInput('99/99', 'date')
})

const maskForInput = (mask, id) => {
	const selector = document.getElementById(id)

	if( ! selector ) return

	Inputmask({ 'mask': mask, 'placeholder': '*', }).mask(selector)
}