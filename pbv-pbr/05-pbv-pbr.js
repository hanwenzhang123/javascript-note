Passing by reference v.s. Passing by Value

passed by reference:
arrays
objects

passed by value:
eveything else
  
  
//example 1 - reference
const person = {
  name: 'Dom',
  age: 30,
  occupation: 'Web Developerr'
};

fucntion dcode (a) {
  a.name = 'Michael';    //change the name passing to a
  console.log(a);
};

dcode(person);  
console.log(person);
// both will be name as Michael



//example 2 - reference
const arr = [10, 20, 40];

fucntion dcode (a) {
  a.push(70);
  console.log(a);
}

dcode(arr);  //[10, 20, 40, 70]
console.log(arr);   //[10, 20, 40, 70]




//example 3 - value
const num = 12;

fucntion dcode (a) {  
  a = 30;     //reassign the value a
  console.log(a);
}

dcode(num);  //30
console.log(num); //12


   
