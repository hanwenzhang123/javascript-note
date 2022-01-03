//What‘s Object-oriented Programming (OOP)?
//Work with (real-life) Entities in your Code
ProductList
- Renders a list of products which were fetched from a server (database)
- Object holds rendering + fetching logic
Product
- Renders details about a product and allows addition to cart
- Object holds rendering + cart-adding logic
ShoppingCart
- Renders cart products and total and allows user to order them
- Object holds rendering + ordering (server communication) logic

//String.prototype is a "template object" for every single string.
//We could go crazy and add our own method called yell...
String.prototype.yell = function() {
	return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

'bees'.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"

//We can overwrite an existing Array method like pop (not a good idea):
Array.prototype.pop = function() {
	return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
};
const nums = [ 6, 7, 8, 9 ];
nums.pop(); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"


 
__proto_(dunder proto): is a property that reference the prototype

Array.prototype - all the method list under the __proto__, array will have access to. like concat, includes, etc


All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype


Using the prototype Property
The JavaScript prototype property allows you to add new properties to object constructors:

Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";


The JavaScript prototype property also allows you to add new methods to objects constructors:

Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

 
