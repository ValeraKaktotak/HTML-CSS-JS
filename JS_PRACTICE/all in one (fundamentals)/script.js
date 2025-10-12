const users = [
	{ name: 'John Doe', birthday: '1985.09.10' },
	{ name: 'Jane Smith', birthday: '1960.10.12' },
	{ name: 'Dana White', birthday: '1985.10.13' },
	{ name: 'Nick Shelby', birthday: '1990.10.18' },
]

const get_upcoming_birthdays = users_list => {
	const results = []
	const currentDate = new Date()
	currentDate.setHours(0, 0, 0, 0)
	const range = new Date()
	range.setDate(currentDate.getDate() + 7)
	range.setHours(0, 0, 0, 0)

	for (let i = 0; i < users_list.length; i++) {
		let userBirthdayDateObj = new Date(users_list[i]['birthday'])
		if (isNaN(userBirthdayDateObj)) {
			console.warn(`Invalid date format ${users_list[i].name}`)
			continue
		}
		let currentUserBirthdayDateObj = new Date(userBirthdayDateObj)
		currentUserBirthdayDateObj.setFullYear(currentDate.getFullYear())

		let userDatesDifference = currentUserBirthdayDateObj - currentDate
		let currentDatesDifference = range - currentDate

		if (
			0 <= userDatesDifference &&
			userDatesDifference <= currentDatesDifference
		) {
			if (currentUserBirthdayDateObj.getDay() == 6) {
				currentUserBirthdayDateObj.setDate(
					currentUserBirthdayDateObj.getDate() + 2
				)
				results.push({
					name: users_list[i]['name'],
					congratulation_date: currentUserBirthdayDateObj,
				})
			} else if (currentUserBirthdayDateObj.getDay() == 0) {
				currentUserBirthdayDateObj.setDate(
					currentUserBirthdayDateObj.getDate() + 1
				)
				results.push({
					name: users_list[i]['name'],
					congratulation_date: currentUserBirthdayDateObj,
				})
			} else {
				results.push({
					name: users_list[i]['name'],
					congratulation_date: currentUserBirthdayDateObj,
				})
			}
		}
	}
	console.log(results)
}

get_upcoming_birthdays(users)
