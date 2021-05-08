// introduction to the keyword 'this'
// like in English, me to refer our own name, in object, it will be the keyword 'this'

// this - a magical keyword refers to the entire object itself (the container itself)

// js is an object-oriented language, which means objects and their methods play a key role in most production js code bases

let graceHopper = {
  first: 'Grace',
  last: 'Hopper',
  rank: 'Rear Amiral'
  sayQuote: function() {
    console.log('a quote here');
  },
  getAge: function(year) {
    return year - 1906; 
  },
  greet: function(name) {
    console.log('hello, ' + name + '! My name is ' + this.first + ' ' this.last);  // refers to the entire object
  }  
};


let calc = {
  total: 0,
  plus: function(num) {     //add a number to the total
    this.total += num;
    return this.total;
  }
  minus: function(num) {     //minus a number from the total
    this.total -= num;
    return this.total;
  }
};

calc.plus(5);
calc.plus(5);
calc.minus(3);
console.log(calc.total);    //7



    
