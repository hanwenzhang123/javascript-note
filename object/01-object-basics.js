What is an object?  {}
an object is a collection of key-value pairs

like arrays, objects store values, but instead of storing them in numeric 'indices', objects store values in string 'keys'

let myArray = ['value1', 'value2'];

let myObject = {
  'key1': 'value1',
  'key2': 'value2',
};

console.log(myArray[0]);
console.log(myObject['key1']);
            

Why are objects useful?
an array is a good place to hold an ordered list of values, but it does not store any information about what those values represent
an objects string keys allow objects to store more information about the within it

let pusheen = ['Pusheen', 7, 'gray and tabby', 'meow'];   //array

let pusheen = {     //object
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby',
  sound: 'meow',
  'cat sound': 'Meow',
//  owner: 'Meg'
}

//bracket notation
console.log(pusheen['name']);
console.log(pusheen['age']);
console.log(pusheen['color']);
console.log(pusheen['sound']);
console.log(pusheen['cat sound']);
console.log(pusheen['cat' + ' ' + 'sound']);

//dot notation - only for single word
console.log(pusheen.name);
console.log(pusheen.age);
console.log(pusheen.color);
console.log(pusheen.sound);


pusheen['owner'] = 'Meg';   //create new owner, now the owner is added
pusheen.owner = 'Meg';
pusheen.owner = 'Joe';    //redefine the value
pusheen.age++;   //increase age


//how to delete a key/value
delete pusheen['sound'];   //delete the key-value pair, you need the quote for bracket notation
delete pusheen.sound;


// how to check if a key is in the object
if ('age'in pusheen) {
  console.log('her age is' + pusheen.age);      //her age is 7
}

if ('country' in pusheen) {
  console.log('her country is ' + pusheen.country)
} else {
  console.log ('country is not defined')
}

