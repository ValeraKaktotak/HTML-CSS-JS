const burgerBtn = document.getElementById('burger')
const navLinks = document.getElementById('nav-links')
const burgerBtnIcon = burgerBtn.querySelector('div')

burgerBtn.addEventListener('click', e => {
	navLinks.classList.toggle('open')

	const isOpen = navLinks.classList.contains('open')

	burgerBtnIcon.setAttribute(
		'class',
		isOpen ? 'ri-close-line' : 'ri-menu-3-line'
	)
})

navLinks.addEventListener('click', e => {
	navLinks.classList.remove('open')
	burgerBtnIcon.setAttribute('class', 'ri-menu-3-line')
})

const scrollRevealOption = {
	origin: 'bottom',
	distance: '50px',
	duration: 1000,
}

ScrollReveal().reveal('.title', {
	...scrollRevealOption,
})

ScrollReveal().reveal('.home__form', {
	...scrollRevealOption,
	delay: 500,
})

ScrollReveal().reveal('.home__img', {
	...scrollRevealOption,
	delay: 1000,
})

ScrollReveal().reveal('.about__card', {
	duration: 1000,
	interval: 500,
})

ScrollReveal().reveal('.rent__image img', {
	...scrollRevealOption,
	origin: 'right',
})

ScrollReveal().reveal('.rent__content .section-header', {
	...scrollRevealOption,
	delay: 500,
})

ScrollReveal().reveal('.rent__text', {
	...scrollRevealOption,
	delay: 1000,
})

ScrollReveal().reveal('.rent__btn', {
	...scrollRevealOption,
	delay: 1500,
})

ScrollReveal().reveal('.story__card', {
	...scrollRevealOption,
	interval: 500,
})
