document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	addSelected('.field__item')
	addSelected('.field.full')
	addTries()
})

const addSelected = (selector) => {
	const images = document.querySelectorAll(selector)

	if (!images.length) return

	images.forEach(image => {
		image.addEventListener('click', () => {

			if (!image.classList.contains('selected')) {
				image.classList.add('selected')

			} else {
				image.classList.remove('selected')
			}
		})
	})
}

const addTries = () => {
	const tries = document.querySelectorAll('.trie')
	const items = document.querySelectorAll('.field__item')

	tries.forEach(trie => {
		trie.textContent = 3
	})

	items.forEach(item => {
		item.addEventListener('click', () => {
			if (item.classList.contains('selected')) {
				tries.forEach(trie => {
					parseInt(trie.textContent)

					if (parseInt(trie.textContent) === 0) {
						return
					} else {
						trie.textContent--
					}
				})
			}
		})

		item.addEventListener('click', () => {
			if (!item.classList.contains('selected')) {
				tries.forEach(trie => {
					parseInt(trie.textContent)
					if (parseInt(trie.textContent) === 3) {
						trie.textContent++
					}
				})
			}
		})
	})
}

