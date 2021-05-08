a function passed into another function is often called a callback
some built-in JS features use callbacks
.forEach is an array method; it accepts a callback as its only argument
.forEach calls the callback for each element in the array
when .forEach calls the callback, it passes the current element as the first argument of the callback


//example 1
let bridges = ['Brooklyn', 'Golden Gate', 'London'];

function logUpperCase(string) {
  console.log(string.toUpperCase());
}

bridges.forEach(logUpperCase);    //forEach will automatically call logUpperCase function for each of the input in the array 
//BROOKLYN
//GOLDEN GATE
//LONDON


//example 2
//the callback passed into forEach also takes an optional second argument. 
//forEach passes the current index of tthe element as the second argument.

let bridges = ['Brooklyn', 'Golden Gate', 'London'];

function logWithIdx(string, idx) {      //idx is short for index
  console.log(string, 'is at index', idx);
}

bridges.forEach(logWithIdx); 
//Brooklyn is at index 0
//Golden Gate is at index 1
//London is at index 2


  
