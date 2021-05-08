Pass By Value vs Pass By Reference
The terms “pass by value” and “pass by reference” are used to describe how variables are passed on. 
To make it short: pass by value means the actual value is passed on. 
Pass by reference means a number (called an address) is passed on which defines where the value is stored.

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

 
 
