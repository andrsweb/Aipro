document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	showHiddenWindow()
	showSettings()
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
}