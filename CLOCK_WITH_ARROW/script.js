const hourElement = document.querySelector('.clock__needle--hour')
const minuteElement = document.querySelector('.clock__needle--minute')
const secondElement = document.querySelector('.clock__needle--second')
const timeElement = document.querySelector('.time')
const datedElement = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
]

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

toggle.addEventListener('click', e => {
	const html = document.querySelector('html')

	if (html.classList.contains('dark')) {
		html.classList.remove('dark')
		e.target.innerHTML = 'Dark mode'
	} else {
		html.classList.add('dark')
		e.target.innerHTML = 'Light mode'
	}
})

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const setTime = () => {
	const time = new Date()
	const month = time.getMonth()
	const day = time.getDay()
	const date = time.getDate()
	const hours = time.getHours()
	const hoursForClock = hours >= 13 ? hours % 12 : hours
	const minutes = time.getMinutes()
	const seconds = time.getSeconds()

	hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		12,
		0,
		360
	)}deg)`

	minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		60,
		0,
		360
	)}deg)`

	secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		60,
		0,
		360
	)}deg)`

	timeElement.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`
	datedElement.innerHTML = `${days[day]}, ${months[month]}, ${date}`
}

setTime()
setInterval(setTime, 1000)
