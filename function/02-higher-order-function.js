//passing values into functions
//we know we can pass strings or any value into a function

function happyFunction(namee) {
  console.log(name, ' is happy!');
}
happyFunction('Mark');      //Mark is happy!



//passing functions into functions
//Higher Order Functions
if functions are like any other value, we can pass functions into other functions, too
functions that take a function or return a function are called 'higher-order function'

// example
function firstFunction(anotherFunction) {
  console.log(anotherFunction);   //convert to string format
}

function happyFunction() {
  console.log('I am happy!');
}

firstFunction(happyFunction);   //[Function: happyFunction]



// if we want happyFunction to run, we have to call it (invoke it)

function firstFunction(anotherFunction) {
  anotherFunction();    //invoking this time - taking a function and doing something with it
}   

function happyFunction() {
  console.log('I am happy!');
}

firstFunction(happyFunction);   // I am happy!

   
