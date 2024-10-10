let link = document.querySelector('.link')
let pink = document.querySelector('.pink')

let hoverTL = gsap.timeline()

link.addEventListener('mouseenter', () => {
	hoverTL.play()
})

hoverTL.to(pink, {
	width: 'calc(100% + 1.3em)',
	easy: 'Elastic.easeOut(0.25)',
	duration: 0.4,
})

hoverTL.to(pink, {
	width: '2em',
	left: 'calc(100% - 1.45em)',
	easy: 'Elastic.easeOut(0.4)',
	duration: 0.6,
})

link.addEventListener('mouseleave', () => {
	hoverTL.reverse()
})

hoverTL.paused()
