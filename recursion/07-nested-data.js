JS can have deeply-nested data structures
nested-data: data structure inside of a data structure

let crazyArray = [1, [2, [3, [4, [5, [6,  [7, [8, [9]]]]]]]]];
are you going to write 9 nested for loops to iterate through the crazy array? no way!
  
  recursion can be a great tool to iterate through a nested data structure, 
  espcially if you do not know how many levels of nesting will be in the array or object


//example: logsAnArray
when writing recursive function that will handle a nested data structure, it is good to start by making sure it works with a flat data structure.

function logsAnArray(array) {
  for (leet i = 0; i < array.length; i++) {
    let element = array[i];
    console.log(element);
  }
}
logsAnArrray([1, 2, 3]);



//example 2
function logsAnArray(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    console.log(element);
  }
}
logsAnArrray([1, [2, 3]]);  //what if the input is nested?
//consider element on line 3 that could be a number or it could be another array
if element is an array, we want to log every number inside of it.
if only we had a function that takes an array and logs out of all its values!
//1
//[2, 3]
  
  
//example 3
function logsAnArray(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    if (Array.isArray(element)) {
    logsAnArray(element);
    }
    else {
    console.log(element);
    }
  }
}
logsAnArrray([1, [2, 3]]); 
//1   //if check isArray fails, just console log
//2   // [2, 3] pass to the if statement
//3
  
  

//example 4
// log out all numbers, even ones nested in other arrays, one line at a time
#!/usr/bin/env node
var myArray = [1, [2, 3, [4, 5, 6]]];

function logsAnArray(arrays) {
  for(let i=0; i < array.length; i++) {
    let element = array[i];

    if (Array.isArray(element)) {
    // recursive case 
    logsAnArray(element);
    }
    else {
    console.log(element);
    }
  }
}

logsAnArrray(myArray); 
//1
//2
//3
//4
//5
//6
  
//if we did not use the recursive case above, we would need to use another for loop as follows,
if (Array.isArray(element)) {
  for(let j=0; j < array.length; j++) {
    console.log(element[j]);
    if(Array.isArray(element[j]))
  }
  } else {
    console.log(element);
  }
}


   
