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
