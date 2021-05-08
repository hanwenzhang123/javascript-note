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
Instead, the variable stores a reference in memory; the reference points to the value

//situation 1
let first = [10, 20]; //first stores a reference to [10, 20]
first.push(30);   //first still stores the same reference

console.log(first);   //10, 20, 30

//situation 2
let first = [10, 20];
let second = [10, 20];    //second stores a new reference to a new array

second.push(30);   //since first and second reference different arrays, pushing a value into second will not affect the array referenced by first

console.log(first);   //10, 20
console.log(second);    //10, 20, 30

//situation 3
let first = [10, 20];
let second = first;  //second now stores a copy of the REFERENCE that was originally stored in first

seccond.push(30); //first and second share the same reference to the same array

console.log(first);   //10, 20, 30
console.log(second);    //10, 20, 30

//situation 4
let first = [10, 20];
let second = first.slice(); //slice creates a new array, slice() creates a copy, not pass any value otherwise creates a copy of that portion

seccond.push(30);  //first and second reference different arrays

console.log(first);   //10, 20
console.log(second);    //10, 20, 30



