The Call Stack
before we talk about recursion, we have to talk about the call stack
JS is single threaded - can only run one function at a time
the call stack is the structure JS uses to figure out which function it should be running at any point in time.

whenever we call a function, it is added to the top of the call stack
JS will execute whatever function is on the top of the stack


//example 1
function first() { 
  console.log('I am first!');
}
function second() { 
  console.log('I am second!');
}
first();
second();
// I am first!
// I am second!


//example 2
function first() {
  console.log('I am first');
  second();
  console.log('first is finished'); // first "paused" while second ran
}
function second() { 
  console.log('I am second!');
}
first();
// I am first!
// I am second!
// first is finished


  
