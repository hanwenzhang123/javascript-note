// This is a Constructor Function...
function Color(r, g, b) {
	this.r = r;			//'this' refers parent Window object
	this.g = g;
	this.b = b;
}

//If you call it on its own like a regular function...
Color(35, 60, 190); //undefined			//need to create a new object
//It returns undefined. Seems useless!


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


//do not use arrow function when use 'this' keyword
Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);
color2.hex();
