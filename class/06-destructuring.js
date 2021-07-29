Destructuring
- easily extract array element or object properties and store them in variables
- where you use curly braces on the left and target a property with its property

//Versus Spread
- spread operators takes all elements, all properties


//Array Destructuring
[a, b] = ["Hello", "Max"]
console.log(a) //Hello
console.log(b) //Max

const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2);    //1, 2

const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3);    //1, 3


//Object Destructuring
{name} = {name: "Max", age:28}
console.log(name) //Max
console.log(age)  //undefined

  
