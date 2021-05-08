variable assignment
//primitive
When you assign a primitive value to a variable, the variable 'stores' a copy of that value

let first = 20;
let second = first;

second++;

console.log(first);   //20
console.log(second);    //21


//complex
when you assign a complex value to a variable, the variable DOES NOT store a copy of the value
Instead, the variable stores a reference 
