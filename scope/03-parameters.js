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
  
