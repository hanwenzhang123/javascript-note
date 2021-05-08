 function factorial(num) {
  //base case
  debugger;     //using nodeJS to debug
  if (num === 1 || num === 0) {
  return 1;
  }
  //recursive case
  let result = num * factorial(num-1);
  return result
}
console.log(factorial(0));    //1
console.log(factorial(1));    //1
console.log(factorial(2));    //2
console.log(factorial(10));   //3628800

  
