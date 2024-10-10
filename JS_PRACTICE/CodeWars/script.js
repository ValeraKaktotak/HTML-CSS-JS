/*
Terminal Game - Create Hero Prototype
In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

attribute	value
name	user argument or 'Hero'
position	'00'
health	100
damage	5
experience	0
*/

function Hero(name = 'Hero') {
  this.name = name
  this.position = '00'
  this.health = 100
  this.damage = 5
  this.experience = 0
}

let myHero = new Hero()
console.log(myHero.name), 'Hero', 'Hero should have a \'name\' attribute with value "Hero"'
myHero.experience, 0, "Hero should have an 'experience' attribute with value 0"
myHero.health, 100, "Hero should have a 'health' attribute with value 100"
myHero.position, '00', 'Hero should have a \'position\' attribute with value "00"'
myHero.damage, 5, "Hero should have a 'damage' attribute with value 5"

//******************************************************************************************************** */
/**
 * Define a class Person with the following properties:

A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
 */

class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
  }
  sayFullName() {
    return this.firstName + ' ' + this.lastName
  }
  static greetExtraTerrestrials(raceName = 'raceName') {
    return 'Welcome to Planet Earth ' + raceName
  }
}

//******************************************************************************************************** */
/**
 * Complete the solution so that it reverses the string passed into it.
 */

function solution(str) {
  const string = str.split('')
  let reversStr = []
  for (let i = 0; i < string.length; i++) {
    reversStr.unshift(string[i])
  }
  return reversStr.join('')
}

//******************************************************************************************************** */
/**
 * What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
 */

function addLength(str) {
  return str.split(' ').map((word) => `${word} ${word.length}`)
}

//******************************************************************************************************** */
/**
 * Implement a function which convert the given boolean value into its string representation.
 */
function booleanToString(b) {
  return b.toString()
}

//******************************************************************************************************** */
/**
 * There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
 */

function mango(quantity, price) {
  return quantity > 2 ? (quantity - Math.floor(quantity / 3)) * price : quantity * price
}

//******************************************************************************************************** */
/**
 * Notes:
Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
 */
function aliasGen(first, last) {
  let auxFirst = first[0].toUpperCase()
  let auxLast = last[0].toUpperCase()

  if (firstName[auxFirst] && surname[auxLast]) {
    return firstName[auxFirst] + ' ' + surname[auxLast]
  } else {
    return 'Your name must start with a letter from A - Z.'
  }
}

//******************************************************************************************************** */
/**
 * Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
 */

function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']
  return birds.filter((b) => !geese.includes(b))
}

//******************************************************************************************************** */
/**
 * Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
 */

function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000
}

//******************************************************************************************************** */
/**
 * Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
 */
function invert(array) {
  return array.map((item) => -item)
}

//******************************************************************************************************** */
/**
 * Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
 */
function repeatStr(n, s) {
  return s.repeat(n)
}

//******************************************************************************************************** */
