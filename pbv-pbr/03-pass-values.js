passing values into functions

//passing primitive values
let myNum = 10;

function adds2(num) {
  num += 20;
  return num;
}

let returnedNum = adds20(myNum);

console.log(myNum);   //10
console.log(returnedNum);   //30


//passing complex values
let myArray = [10];

function pushes20(array) {
  arrray.push(20);
  return array;
}

let returnedArray = pushes20(myArray);    //pass the reference to the arrary parameter

console.log(myArray);   //10, 20
console.log(returnedArray);   //10, 20

//both pointing to the same reference

  
  
