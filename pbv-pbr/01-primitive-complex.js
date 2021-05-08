Pass By Value vs Pass By Reference

primitive vs complex types
Primitive values in JS
-string
-number
-boolean
-undefined
-null
-ES6 symbols

Complex values in JS
-objects(including arrays)
-functions


//strings are primitive value
let britishCity = 'York';
let americanCity = britishCity;

americanCity = 'New ' + americanCity;

console.log(britishCity);    //York
console.log(americanCity);    //New York


//arrays are complex values
let britishCity = ['York'];
let americanCity = britishCity;

americanCity[0] = 'New ' + americanCity[0];   //when we modify americanCity, it changed birtish city as well

console.log(britishCity);    //New York
console.log(americanCity);    //New York


vairable assignment
//primitive
When you assign a primitive value to a variable, the variable 'stores' a copy of that value

let first = 20;
let second = first;

second++;

console.log(first);   //20
console.log(second);

when you assign a complex value to a variable, the variable DOES NOT store a copy of the value
//complex

passing values into functions

equality operators and PBV/PBR
