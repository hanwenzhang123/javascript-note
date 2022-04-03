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

export function sample(array) {
  return array[randomNumberBetween(0, array.length - 1)]
}

export function pluck(array, key) {
  return array.map(element => element[key])
}

export function groupBy(array, key) {
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

console.log("Pluck:\n", pluck(people, "name"))
console.log("Group By:\n", groupBy(people, "age"))
