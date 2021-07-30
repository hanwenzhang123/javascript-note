//3 ways to create objects
//1
const user1 = {
  name: "Will",
  score: 3,
  increment: function() {
    user1.score++;
  }
};

user1.increment();  //user1.score => 4

//2
const user2 = {};  //create an empty object

//assign properties to that object
user2.name = "Tim";
user2.score = 6;
user2.increment = function(){
  user2.score++;
};
 
//3
// Creating user3 using Object.create
// - Object.create is going to give us fine-grained control over our object later on

const user3 = Object.create(null);  //return an empty object

user3.name = "Eva";   //create key called name and assign the value as Eva, global memory
user3.score = 9;
user3.increment = function() {    //create a new increment method and assign the function definition
  user3.score++;
};


//solution1: generate objects using a function
function userCreator (name, score) {
  const newUser = {};   //create a newUser object
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function(){
    newUser.socre++;
  }
  return newUser;
}

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();

//Pros: intuitive, see everything in the code
//Cons: not efficient for scalability, like millions of users and/or adding new features


//solution2: using the prototype chain
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
};

const userFunctionStore = {
  increment: function(){this.score++;}
  login: function(){console.log("Logged In");}
};

const user1 = userCreator("Will", 3);   //we have a bond that points back to the userFunctionStore, the __proto__
const user2 = userCreator("Tim", 5);    //we have a bond that points back to the userFunctionStore, the __proto__
user1.increment(); 

//pros: a structure of OOP
//cons: too long and unprotected in global objects


//__proto__ example
__propto__: Object - additional property automatically generated in the object that point to something else
the value of the prototype is another object, like an object inside of an object {prototype: { }}
prototype object points to the object on the currently being executed 
  which means we should not be adding our sharable functions on global memory
  we should be puting them inside the prototype objects, using new solution which is the solution 3


//complete solution3: using the new keyword
//new keyword creates the original  const newUser = Object.create(userFunctionStore) and the return statement. 
//this keyword refers to the   newUser.name = name;   and   newUser.score = score;
function UserCreator(name, score){    //it is a function definition
  this.name = name;
  this.score = score;
};

UserCreator.prototype.increment = function (){
  this.score++;
};

UserCreator.prototype.login = function(){
  console.log("login");
};

const user1 = new UserCreator("Eva", 9)
user1.increament()


//complete solution4: using the new keyword
