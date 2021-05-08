what is an array?   []
an array is a list-like data structure in javascript (send mutiple data) while variable only holds single data

the values inside of an array are called elements

let numbers = [1, 2, 3];

let names = ['George', 'John', 'Thomas'];     // store strings
 
let aVaribale = 'a value';

let mixedBag = [30, true, 'apples', null, aVariable];   // 5 elements here



let names = ['George', 'John', 'Thomas'];  
console.log(names)    //['George', 'John', 'Thomas']


let names = ['George', 'John', 'Thomas'];  
console.log(typeof names)    //object


// Array.isArray (a method to check if a variable is an array)
let names = ['George', 'John', 'Thomas']; 
console.log(Array.isArray(names));    //true
console.log(Array.isArray('hello'));    //false


// Bracket Access - starts from 0 index
console.log(name[0]);   //George
name[0] = "David";    // change or add the element
//the index refers to the position of different values in an array


let names = ['George', 'John', 'Scott', 'Nimit']; 
console.log(names.length);    //4
console.log(names.length-1);    //access the last element in the array, here is 'Nimit'


