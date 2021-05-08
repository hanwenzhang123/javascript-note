Closure: scope refresher
scope works with nested function - inner functions can access variables defined in outer functions

function greeter() {
  let name = 'Marie';
  let sayHi = function() {
    console.log('Hi', name);
  }
  saysHi();
}
greeter();



Closure: definition
closure is the fact that an inner function can STILL to access values defined in the outer function
even after the outer function is finished running.  


//example 1
function getGreeter() {
  console.log('getGreeter is running');
  
  let name = 'Marie';
  
  console.log('getGreeter is finishing');
  
  return function() {
    console.log('Hi ', name);
  };
}
let greeter = getGreeter();
greeter();
//getGreeter is running
//getGreeter is finishing'
//Hi Marie


//example 2 - what if getGreeter take a parameter?
function getGreeter(name) {
  return function() {
    console.log('Hi ', name);
  };
}
let greeter = getGreeter('Rosaline');
greeter();
//Hi Rosaline


//example 3 - what if both functions take parameters?
function greetGreeeter(name1) { 
  return function(name2) {
    console.log('Hi '+ name1 + ', meet ' + name2);
  };
}
let greeter = getGreeter('Marie');  //it is closer to the function so it comes out first as name1
greeter('Rosalind');
// Hi Marie, meet Rosalind



//example 4
function greetGreeeter(name1) { 
  return function(name2) {
    console.log('Hi '+ name1 + ', meet ' + name2);
  };
}
let introduceMarieTo = getGreeter('Marie');   //assign to name 1 
let introduceRosalindTo = getGreeter('Rosalind');    //assign to name 1 

introduceMarieTo('Dorothy');   
introduceMarieTo('Albert'); 

let introduceRosalindTo('Barbara'); 
let introduceRosalindTo('Isaac'); 

//Hi Marie, meet Dorothy
//Hi Marie, meet Albert
//Hi Rosalind, meet Barbara
//Hi Rosalind, meet Isaac

   

    
