wokring with nested objects is very similar to working with nested arrays
use a for-in loop to iterate through the object
if the value is another object, recursively call the function on the nested object


//example 1: sumVals
//write a functuion sumVals that sums the values in an object
function sumVals(obj) {
  let sum = 0;
  for (let key in obj) {
    let value = obj[key];
    sum += value;
  }
  return sum;
}
let result = sumVals({a: 10, b: 20});
console.log(result);
// 30



//example 2: sumVals
function sumVals(obj) {
  let sum = 0;
  for (let key in obj) {
    let value = obj[key];
    if (typeof value === 'object') {
      sum += sumVals(value)
    } else {
      sum += value;
    }
  }
  return sum;
}
    
let result = sumVals({a: 1, b: {c: {d: {e: 2, f: 3}}}})   //{e: 2, f: 3} is our base case here because it has no more value that also objects
//6

we are passing up the value each time until we hit a base case
our base case here being when we find an object that has no key-value pairs where the values are also objects




