
document.addEventListener('DOMContentLoaded', () => {
	'use strict'

})

// Scroll
window.addEventListener('scroll', () => {
	const content = document.querySelector('.content__items')

	if (!content) return

	const
		steps = document.querySelectorAll('.content__item'),
		images = document.querySelectorAll('.img__fixed_mobile'),
		contentTop = content.getBoundingClientRect().top,
		contentBot = content.getBoundingClientRect().bottom

	if (contentTop <= document.querySelector('.header').offsetHeight) {
		content.classList.add('scrolled')

		if (contentBot <= 500) {
			content.classList.remove('scrolled')
		}

	} else {
		content.classList.remove('scrolled')
	}

	let activeStep = steps[0].dataset.id

	steps.forEach(step => {
		const viewportOffsetY = step.getBoundingClientRect().top

		if (viewportOffsetY > 380) return

		activeStep = getLastActiveStep(steps)

		images.forEach((img, i, arr) => {
			if (img.dataset.id === activeStep && img.classList.contains('hidden')) {
				arr.forEach(image => image.classList.add('hidden'))
				img.classList.remove('hidden')
			}
		})
	})
})

const getLastActiveStep = arr => {
	for (let i = arr.length - 1; i >= 0; i--) {
		const viewportOffsetY = arr[i].getBoundingClientRect().top

		if (viewportOffsetY <= 380) return arr[i].dataset.id
	}
}
