// .map() is a built-in method

const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {   //like map(), a built-in js array method, that executed on each element in the array here.
  return num * 2;   //store the value to a new variable
}); 

console.log(numbers); //[1, 2, 3] the old one is unchanged
console.log(doubleNumArray);  //[2, 4, 6] the new one holds double the values
  
