//Spread and Rest Operators
 ...

Spread - used to split up array elements OR object properties
//we have an old array and we want to add all the elements from that old array to a new array and additionally add a 1 and a 2 element 
const newArray = [...oldArray, 1, 2] //... in front of the old array which pull out all elements and add it to the new array

//Old object to pull out all the properties of the old object and their values and add them as key value pairs to the new object.
//if the old object also had a new property, It would be overwtitten by a new prop here.
const newObject = {...oldObject, newProp: 5}//We create a new object with curly braces with the new prop but then we also have dot dot dot.

Rest - used to merge a list of function arguments into an array
// sortArgs receives an unlimited amount of arguments.
// So one argument, two, three or whatever, with dot dot dot we only write one argument args 
// but we may actually receive more than one and they will all be merged together into an array.
function sortArgs(...args){
 return args.sort()
}

//Spread
//Array
const numbers = [1, 2, 3];
const newNumbers= [...numbers, 4];
console.log(newNumbers) //1, 2, 3, 4

const newNumbers= [numbers, 4]; //if we do not use ...
console.log(newNumbers) //[1, 2, 3], 4 //which will pull out the old elements

//Object
const person = {
 name: 'Max'
};
const newPerson = {  //take the old person and distribute to the new person
 ...person,
 age: 28
};
console.log(newPerson);
// [object Object] {
//   age: 28,
//   name: "Max"
// }


//Rest - used less often - usually used in functions
const filter = (...args) => { //you can use whatever the name you want
 return args.filter(el => el === 1);  //return true or false if the element equals to 1, === means to check the type and value equality
}  //three dots merge the argument into an array, so we can use array methods like filter, filter will execute a function on every element in the passed in array

console.log(filter(1, 2, 3));  //[1]
   
    
