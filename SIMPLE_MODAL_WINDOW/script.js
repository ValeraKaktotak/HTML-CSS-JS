const openButton = document.getElementById('open')
const modalContainer = document.querySelector('.modal__container')
const closeButton = document.querySelector('.modal__button--close')

console.log(modalContainer)

openButton.addEventListener('click', () => {
	modalContainer.classList.add('modal__container--show')
})

closeButton.addEventListener('click', () => {
	modalContainer.classList.remove('modal__container--show')
})
