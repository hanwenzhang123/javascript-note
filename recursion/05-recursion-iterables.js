recursion and iterable
you can use recursion with any data type in JS
if you are asked to recurse through arrays or strings, the base case often occurs when the iterable is empty or has a length of one.
imagine finding the sum of numbers in an array

sumArray([4]); //if array.length ===1, the sum is easy to calculate

if the base case required the iterable to have a length of 1 or 0, 
it must mean that the recursive case has to reduce the length of the iterable with every recursive call

note: nested arrays can be approached differently


other recursion hints
- start with the base case!
- test recursive case with the simplest possible input that will result in one recursive call to the base case
- ask yourself: what type of thing should my function return? base case and recursive case should return the same type of thing.
- use console.logs or debugger to debug

    
