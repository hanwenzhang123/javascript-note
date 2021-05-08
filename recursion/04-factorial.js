 Returning from recursive calls
- recursion becomes more complicated when the function must return a vale
- good practice is to start by defining a base case
- base cases are often occur when there is a simple input that expects a simple output 
  (e.g., the sum of a single number is that number)

define a function, factorial, that make a number and returns the factorial of that number
as a reminder:
0! === 1
1! === 1
2! === 2 (2*1)
3! === 6 (3*2*1)
4! === 24 (4*3*2*1)
5! === 120 (5*4*3*2*1)
what look like simple input/outputs we can use to build a base case? 0, 1


three takeaways from factorial:
1. define your base case first, using simple inputs/outputs
2. define your base case, and test it using the simplest possible input that results in one recursive call to the base case
3. test your function against more-complex inputs


//example 1 
function factorial(num) {
  //base case: num is 0 or 1
  if (num === 0 || num ===1) {
  return 1;
  }
}
factorial(0);   //1
factorial(1);   //1



base case is set, just need to remember that our recursive case that has bring num close and closer to 1 or 0 so we eventually hit our base case.
notice an interesting pattern:
0! === 1
1! === 1
2! === 2 (2*factorial(1))
3! === 6 (3*factorial(2))
4! === 24 (4*factorial(3))
5! === 120 (5*factorial(4))




//example 2
function factorial(num) {
  //base case: num is 0 or 1
  if (num === 0 || num ===1) {
  return 1;
  }
  //recursive case: num must get closer to 0 or 1
  //TODO
}
//it is best to write your recursive case using the simplest possible input that will result in a recusive call
let result = factorial(2);
console.log(result);    //undefined - because factorial does not return anything either than 0 or 1




//example 3
function factorial(num) {
  //base case: num iis 0 or 1
  if (num === 0 || num ===1) {
  return 1;
  }
  //recursive case: num must get closer to 0 or 1
  //we know we have to call factorial again in the recusive ccase
  //if num === 2, what do we get if we call factorial again with num-1?
  console.log(factorial(num-1));
}
let result = factorial(2);
console.log(result);    
//1
//undefined




//example 4
function factorial(num) {
  //base case: num iis 0 or 1
  if (num === 0 || num ===1) {
  return 1;
  }
  //recursive case: num must get closer to 0 or 1
  //from that patten we noticed earlier, we know 2! === 2 * 1
  console.log(num * factorial(num - 1));
}
let result = factorial(2);
console.log(result);    
//2
//undefined




//example 5
function factorial(num) {
  //base case: num iis 0 or 1
  if (num === 0 || num ===1) {
  return 1;
  }
  //recursive case: num must get closer to 0 or 1
  //just have to return the result now
  let result = num * factorial(num - 1));
  return result;
}
let result = factorial(2);
console.log(result);    
//2





////example 6
function factorial(num) {
  //base case: num iis 0 or 1
  if (num === 0 || num ===1) {
  return 1;
  }
  //recursive case: num must get closer to 0 or 1
  let result = num * factorial(num - 1));
  return result;
}
let result = factorial(5);    //once we get the baseline, then moves up to each level get the result
console.log(result);    
//120
//using the call stack to represent the recursive iteration that gets smaller
//as the call stack unwind, it is returning to us the answer that is figured out each call in the factorial


  
  
