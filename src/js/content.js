
document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	checkWindowSize()
})

// resize func
const checkWindowSize = () => {
	if (window.innerWidth <= 767) document.body.classList.add('mobile')
	else document.body.classList.remove('mobile')
}

window.addEventListener('resize', () => {
	checkWindowSize()
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

	// if ( !document.body.classList.contains('mobile') ) return

	if (contentTop <= document.querySelector('.header').offsetHeight) {
		content.classList.add('scrolled')

		if (contentBot <= 500) {
			content.classList.remove('scrolled')
		}

	} else {
		content.classList.remove('scrolled')
	}

	steps.forEach(step => {
		const viewportOffsetY = step.getBoundingClientRect().top

		if (viewportOffsetY <= 380) {
			images.forEach(img => {
				if (img.dataset.id == step.dataset.id) {
					img.classList.remove('hidden')
				} else {
					img.classList.add('hidden')
				}
			})
		}
	})
})
