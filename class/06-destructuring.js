Destructuring
- easily extract array element or object properties and store them in variables

Versus Spread
- spread operators takes all elements, all properties

//Array Destructuring
[a, b] = ["Hello", "Max"]
console.log(a) //Hello
console.log(b) //Max

//Object Destructuring
{name} = {name: "Max", age:28}
console.log(name) //Max
console.log(age)  //undefined. 
