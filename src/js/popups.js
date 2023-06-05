import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	showPopup('.delete_button', '.popup__wrapper.delete_popup', '#delete_lock')
	showPopup('.change_password', '.popup__wrapper.password_popup', '#password_lock')
})

const showPopup = (button, wrapper, lock) => {
	const popupButton = document.querySelector(button)
	const popupWrapper = document.querySelector(wrapper)
	if (!popupButton && !popupWrapper) return
	setTargetElement(document.querySelector(lock))

	popupButton.addEventListener('click', () => {

		if (!popupWrapper.classList.contains('showed')) {
			popupWrapper.classList.add('showed')
			disableBodyScroll(getTargetElement(), { reserveScrollBarGap: true })
		}
	})

	const closePopup = () => {
		const closeButton = document.querySelectorAll('.popup_close')
		const cancelButton = document.querySelectorAll('.cancel_button')

		if (!closeButton && !cancelButton) return

		closeButton.forEach(btn => {
			btn.addEventListener('click', () => {
				if (popupWrapper.classList.contains('showed')) {
					popupWrapper.classList.remove('showed')
					enableBodyScroll(getTargetElement())
				}
			})
		})

		cancelButton.forEach(btn => {
			btn.addEventListener('click', () => {
				if (popupWrapper.classList.contains('showed')) {
					popupWrapper.classList.remove('showed')
					enableBodyScroll(getTargetElement())
				}
			})
		})
	}

	closePopup()
}

