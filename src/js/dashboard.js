document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	showHiddenWindow()
	showSettings()
	upDateEmail()
})

const showHiddenWindow = () => {
	const accountPosts = document.querySelectorAll('.header__account_post')
	const accountEmail = document.querySelector('.header__account_email')

	if (!accountEmail && !accountPosts.length) return

	accountPosts.forEach(item => {
		item.addEventListener('click', () => {
			if (!accountEmail.classList.contains('opened')) {
				accountEmail.classList.add('opened')
			} else {
				accountEmail.classList.remove('opened')
			}
		})
	})
}

const showSettings = () => {
	const settings = document.querySelector('.account_settings')
	const projects = document.querySelector('.dashboard__projects')
	const dashboardsSettings = document.querySelector('.dashboard__settings')

	if (!settings && !projects && !dashboardsSettings) return

	settings.addEventListener('click', () => {
		projects.style = 'display: none'
		dashboardsSettings.style = 'display: block'
	})
}

const upDateEmail = () => {
	const button = document.querySelector('.update_email')
	const notification = document.querySelector('.dashboard__notification')

	if (!button) return

	button.addEventListener('click', () => {
		if (!notification.classList.contains('updated')) {
			notification.classList.add('updated')
		}

		setTimeout(() => { notification.classList.remove('updated') }, 5000)
	})
}