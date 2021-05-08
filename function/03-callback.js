//example 1 - callsWithName
function sayHi(name) {
  console.log('Hi', name);
}
function sayBye(name) {
  console.log('Bye', name);
}
function callsWithName(name, sayHiOrBye) {
  sayHiOrBye(name);
}

callsWithName('Sadie', sayHi);    // Hi Sadie
callsWithName('Sadie', sayBye);   // Bye Sadie



//example 2 - callsWithHello
function addWorld(string) {
  return string + ' world';
}

function callsWithHello(func) {
  return func('hello');
}

let result = callsWithHello(addWorld);
console.log(result);    //hello world



//example 3 - sayToALl
function sayToAll(names, sayWithNameFunc) {
  for(let i = 0; i < names.length; i++) {
    sayWithNameFunc(names[i]);      //calling each of names through loop
  }
}

let group = ['Jane', 'Jill', 'Pip', 'Mike'];    //define a variable

function sayHelloWithName(name) {     //this function with a specific method
  console.log('Hello, ' + name + '!');
}

sayToAll(group, sayHelloWithName);    //Hello plus {name} to each one in the group



//example 3 - sayToALl - with anonymous function
function sayToAll(names, func) {      //you can name the parameter with anything
  for(let i = 0; i < names.length; i++) {
    func(names[i]);  
  }
}

let group = ['Jane', 'Jill', 'Pip', 'Mike'];

sayToAll(group, function (name) {     //anonymous function
  console.log('Hello, ' + name + '!');
});


  
//example 4 - calculation
let plus = function (num1, num2) {
  return num1 + num2;
};

let minus = function (num1, num2) {
  return num1 - num2;
};

let calc = function(num1, operationFunc, num2) {   //higher order function
    return operationFunc(num1, num2);
};

console.log(calc(10, plus, 20));   //30 - pass the plus function above



   
