Returning Values from Functions
in the previous unit, we learned that functions are like any other value in JS
so if functions can return values, and functions are values
functions can return other functions


Returning Functions from Functions

//example 1
function greetMe() {
  console.log('Hi!');
}
function getGreeter() {
  return greetMe; //note: we are returning the function without calling it
}

let greeter = getGreeter();

console.log(typeof greeter);    //function
greeter();    //same as running greetMe() 
//function
//[Function: greetMe]   //function to string
//Hi!



//example 2
function greetMe() {
  console.log('Hi!');   //Hi!
}
function getGreeter() {
  return greetMe(); //what if we did invoke it? it will be undefined
}

let greeter = getGreeter();   // it will be undefined

console.log(typeof greeter);    //undefined
greeter();    //typeError: greeter is not a function
//Hi!
//undefined
//undefined
//typeError: greeter is not a function



//example 3 - greeter generator
function getGreeter(){
  //we can declare a new inner funcion and then return it
  function greetMe() {
    console.log('Hi!');
  }
  return greetMe;
}
let greeter = getGreeter();
greeter();
//Hi!



//example 4 - anonymous function
function getGreeter(){
  //we can reutrn anonymous function, it is easier and cleaner
  return function() {
    console.log('Hi!');
  };
}
let greeter = getGreeter();
greeter();
//Hi!



//example 5 - function with parameter
function getGreeter(){
  //what if our returned function takes a parameter?
  return function(name) {
    console.log('Hi!', name);
  };
}
let greeter = getGreeter();
greeter('Marie');
//Hi Marie


   
