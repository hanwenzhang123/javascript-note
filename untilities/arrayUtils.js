//arrayUtils/arrayUtils.js 
import { randomNumberBetween } from "../other.js"

export function first(array, n = 1) {
  if (n === 1) return array[0]
  return array.filter((_, index) => index < n)
}

export function last(array, n = 1) {
  if (n === 1) return array[array.length - 1]
  return array.filter((_, index) => array.length - index <= n)
}

export function sample(array) {   //get a random value from the array
  return array[randomNumberBetween(0, array.length - 1)]
}

export function pluck(array, key) {   //array of objects, just one particular key from that array
  return array.map(element => element[key])
}

export function groupBy(array, key) {   //array of objects, grouping all the elements in that array by the key
  return array.reduce((group, element) => {
    const keyValue = element[key]
    return { ...group, [keyValue]: [...(group[keyValue] ?? []), element] }
  }, {})
}

//arrayUtils/script.js 
import { first, groupBy, last, sample, pluck } from "./arrayUtils.js"

const array = ["A", "B", "C", "D", "E", "F", "G"]

console.log("First:\n", first(array))
console.log("First 3:\n", first(array, 3))
console.log("Last:\n", last(array))
console.log("Last 3:\n", last(array, 3))
console.log("Sample:\n", sample(array))

const people = [
  { name: "Kyle", age: 26 },
  { name: "John", age: 24 },
  { name: "Mike", age: 18 },
  { name: "Jill", age: 26 },
  { name: "Sally", age: 21 },
]

console.log("Pluck:\n", pluck(people, "name"))  // ['Kyle', 'John', 'Mike', 'Jill', 'Sally']
console.log("Group By:\n", groupBy(people, "age"))

/*
18: Array(1)
0: {name: 'Mike', age: 18}
length: 1
[[Prototype]]: Array(0)

21: Array(1)
0: {name: 'Sally', age: 21}
length: 1
[[Prototype]]: Array(0)

24: Array(1)
0: {name: 'John', age: 24}
length: 1
[[Prototype]]: Array(0)

26: Array(2)
0: {name: 'Kyle', age: 26}
1: {name: 'Jill', age: 26}
length: 2
*/
