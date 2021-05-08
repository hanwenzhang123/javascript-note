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


.push() method - add something to the end of the array
.pop() method - remove and return the most recently added items to the array
.shift() method - 'pop' something from the beginning
.unshift.() method - add to beginning of the array
.indexOf() method - the index method of the element, returns '-1' if no element matches

let person = 'Amit';
if (names.indexOf(person) > -1){
 console.log('Peron found');
} else {
console.log('person NOT found');
}



.slice() - subtract a portion of the array, like a big sandwich cutting the portion, it creates a new array
names.slice(0,1)  //["Amit"]  //first one
names.slice(0,2) //["Amit", "George"]  //first two
names.slice(1,2) //["George"]  //start from one, cut at two
names.slice(1) // everything from index 1 (exclude the first element)


let namesCopy = names.slice();  // like making a copy of the array
namesCopy[0] = 'Kate';

console.log(names);  //original array
console.log(nameCopy);  //only change the first element to Kate from the copy array



.includes() method - check if a value is in array
console.log(names.inclues('Nimit')); //true
console.log(names.inclues('David'));  //false



.reverse() method - does not make a new copy but the array itself, not return anything, reverse in place
console.log(names);  // original list
names.reverse();  
console.log(names);  //reverse version



     
