// *****************
// THE NEW OPERATOR!
// *****************

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

function Car(make, model, year) {
  this.make = make;		
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);		// the new keyword creates a new object based on the pattern

console.log(car1.make);
// expected output: "Eagle"

The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.


- Syntax
new constructor[([arguments])]

- Parameters
//constructor
A class or function that specifies the type of the object instance.
//arguments
A list of values that the constructor will be called with.

  

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
