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
	const
		steps = document.querySelectorAll('.content__item'),
		imgFixed = document.querySelector('.img__fixed_mobile'),
		source = document.querySelector('.content__img_wrapper picture source'),
		content = document.querySelector('.content__items'),
		contentTop = content.getBoundingClientRect().top,
		contentBot = content.getBoundingClientRect().bottom

	if ( ! content || !document.body.classList.contains('mobile') && ! contentTop && ! contentBot ) return

	if (contentTop <= document.querySelector( '.header').offsetHeight) {
		content.classList.add('scrolled')
	
		if (contentBot <= 360) {
			content.classList.remove('scrolled')
		} 

	} else {
		content.classList.remove('scrolled')
	}

	steps.forEach(step => {
		const viewportOffsetY = step.getBoundingClientRect().top

		if (viewportOffsetY <= 380) {
			imgFixed.src = step.querySelector('img').src
			source.srcset = step.querySelector('img').src
		}
	})
})