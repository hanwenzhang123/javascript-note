why are functions special?
functions ara special in JS because they are not speccial
we think of function as being different from other values in JS
strings, numbers, arrays: we are used to passing them into functions or returnining them from functions
but function sometimes seem like they aarre in a differrent category, rooted to the line of code where they are defined
in JS, function are first-class objects, where is another way of saying that functions are like any other value in JS


we can use function as variables in and out
function is a collection of instructions they are essentiaally some capability and functionality that packed together use again and again
in JS, function can also give another function to use that funtion inside another function again and again



// we know we can push strings, or any value into arrays

let amazingArray = []

let happyString = 'happy';

amazingArray.push(happyString);
amazingArray.push(happyString);
amazingArray.push(happyString);

console.log(amazingArray);    //[happy haappy happyy]

//functions are not special. we can push them into an array, too

let amazingArray = []

function happyFunction() {
  console.log('I am happy!');
}

amazingArray.push(happyString);
amazingArray.push(happyString);
amazingArray.push(happyString);

console.log(amazingArray);    //[[Function], [Function], [Function]]


  
