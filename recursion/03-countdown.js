example: countdown
write a function that counts down to 1

two takeaways from countdown:
1. you need to define a base line!
2. your recuursive case must change the input to the function so that you will eventually trigger the base case.


//example1 - iteration for loop
function countdown(num) {
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
}
countdown(5)
//5
//4
//3
//2
//1



//example2 - write a function that takes a number and logs it out
function countdown(num) {
  console.log(i);
}
countdown(5);
countdown(4);
countdown(3);
countdown(2); //notice, no loops
countdown(1); //how do the arguments change between calls?
//5
//4
//3
//2
//1



//example 3 - indefinite, RangeError - max call stack size exceeded
//everytime we called countdown, we substracted one from the previous num
//instead of manuallyy calling coundown over and oveer, whyy not have countdown call itself and substracting one from num eacch time?
function countdown(num) {
  console.log(num);
  countdown(num - 1);
}
countdown(5);
//RangeError - max call stack size exceeded
that started off so promisingly
because our function was instructed to call itself everytime, the function ends up calling itself forever until our computer runs out of memory



//example 4 - stop condition so the function eventually stops calling itself
function countdown(num) {
  //here is our stop condition, commonly known as the 'base case'
  if (num < 1) {
    console.log('done!');
  }
  //here is our 'recrusive case'
  else {
  console.log(num);
  countdown(num - 1);
}
countdown(3);
 //3
 //2
 //1
 //done!



