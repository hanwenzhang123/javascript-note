what is scope?
scope refers to which variable can be accessed by your code at a specific location in your code.

Global scope
JS is lexically scoped, which means the location at which a variable is declared determines its scope
A variable that is declared outside of a function is glocally scoped, it can be referenced from any line of code througout the file
Even though a global variable can be referenced from anywhere in your code, the value assigned to the variable can not be assessed until after the assignment operation occurs.

console.log(waitForIt);   //Undefined
let waitForIt = 'Here I am';
console.log(waitForIt);   //Here I am


Function scope
Variables declared inside of a function are locally-scoped
They can not referenced outside of the function

What id a variable is defined locally and globally?
  js will look for the one closed to it
  
// situation 1
let message = 'think globally';

  function logAMessage() {
  let message = 'act locally';
 // JS will look for message locally first
  console.log(message);
}
logAMessage()   // act locally


// situation 2
let message = 'think globally';

  function logAMessage() {
  let message = 'act locally';
 // if it can not find it locally, js will look at the scope outside the function, in this case, the global scope.
  console.log(message);
}
logAMessage()   // think globally



//Parameters are also locally scoped

let message = 'think globally';

function logAMessage(message) {
  console.log(message);   //act locally
}
logAMessage('act locally');




consider nested function
if do not have in the local scope, it bubbles up to the global level

//situation 1
let globalVar = 'global';

function outer() {
  let outerVar = 'outer';

  function inner() {
  let innerVar = 'inner';
  console.log(globalVar, outerVar, innerVar);   //global outer inner
  }
  inner();
}
outer()


//situation 2
let collision = 'global';

function outer(collision) {
  function inner() {
    let collision = 'inner';
    console.log(collision);   //inner   this functional scope is the closest one
    }
    inner();
}
outer('outer');


//situation 3
let collision = 'global';

function outer(collision) {
  function inner() {
    console.log(collision);   //outer   the local inner does not have a collision, so it bubbles up to the outer function
    }
    inner();
}
outer('outer');



//situation 4
let collision = 'global';

function outer() {
  function inner() {
    console.log(collision);   //global    here we do not have a parameter for outer function, so it bubbles up to the global variable
    }
    inner();
}
outer('outer');
  
