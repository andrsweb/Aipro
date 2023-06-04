
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

	steps.forEach(step => {
		const viewportOffsetY = step.getBoundingClientRect().top

		if (viewportOffsetY <= 380) {
			images.forEach( (img, i, arr ) => {
				if (img.dataset.id == step.dataset.id) {
					if( img.classList.contains( 'hidden' ) ) {
						arr.forEach( image => {
							image.classList.add( 'hidden')
						} )
						if( img.classList.contains( 'hidden')) {
							img.classList.remove( 'hidden' )
						}
					
					}
				}
			})
		}
	})
})
