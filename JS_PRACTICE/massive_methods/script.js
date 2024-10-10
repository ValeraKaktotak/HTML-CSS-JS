const peoples = [
  { name: 'Valera', gender: 'male', age: 35, country: 'Ukraine' },
  { name: 'Vika', gender: 'female', age: 25, country: 'USA' },
  { name: 'Anton', gender: 'male', age: 29, country: 'Spain' },
  { name: 'Elena', gender: 'female', age: 32, country: 'France' },
]

//Цикл For
for (let i = 0; i < peoples.length; i++) {
  console.log(peoples[i].name)
}
console.log('---------')

//Цикл For of (ES6)
for (let people of peoples) {
  console.log(people.name)
}
console.log('---------')

//Метод ForEach (High Order Function)
peoples.forEach((people) => console.log(people.name))
console.log('---------')

//Метод map (High Order Function) (возвращает новый массив из результатов своих итераций)
const newPeoples = peoples.map((item) => item)
console.log(newPeoples)
console.log('---------')

//Метод filter (High Order Function) (возвращает новый массив из элементов массива, которые удовлетворили условие в итерации)
const males = peoples.filter((item) => item.gender === 'male')
console.log(males)
console.log('---------')

//Метод reduce (High Order Function) (после завершения каждой итерации возвращает результат в параметр, который мы создали с начальным значением(count))
const summaryAge = peoples.reduce((count, item) => {
  if (item.age >= 26) {
    return count + item.age
  }
  return count
}, 0)
console.log(summaryAge)
console.log('---------')

//Метод find (High Order Function) (возвращает элемент массива(только одно-первый) который удовлетворил условию в итерации)
const personValera = peoples.find((item) => item.name === 'Valera')
console.log(personValera)
console.log('---------')

//Метод findIndex (High Order Function) (возвращает индекс элемента массива(только одно-первый) который удовлетворил условию в итерации)
const personIndex = peoples.findIndex((item) => item.name === 'Valera')
console.log(personIndex)
console.log('---------')
