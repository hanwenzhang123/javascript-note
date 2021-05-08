what is a method?
methods are actions you can perform on a value, like .indexOf()
these methods are built into JS, we do not have to define them ourselves


creating, accessing, running a method
object can hold any type of value, including functions!
  if we add a function to this object, that function is now a method of the object.
  

let graceHopper = {
  first: 'Grace',
  last: 'Hopper',
  rank: 'Rear Amiral'
  myMethod: function() {
    console.log('I am from a method!');
};

// we can call our own methods the same way we call built-in methods
graceHopper.myMethod();   //I am from a method!

//methods on an object generally should perform an action that is relevant to the idea or concept represented by the object itself


let graceHopper = {
  first: 'Grace',
  last: 'Hopper',
  rank: 'Rear Amiral'
  sayQuote: function() {
    console.log('a quote here');
  },
  getAge: function(year) {
    return year - 1906;       //return but did not console.log
  },
  greet: function(name) {
    console.log('hello, ' + name + '!');
  }
};

graceHopper.sayQuote();
console.log(graceHopper.getAge(2021));    // 115
graceHopper.greet('Jane')   // hello, Jane!


   



introduction to the keyword 'this'
