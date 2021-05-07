Functional scope
Variables declared inside of a function are locally-scoped
They can not referenced outside of the function

What if a variable is defined locally and globally?
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


  
