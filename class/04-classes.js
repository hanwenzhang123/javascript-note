blue print for objects

class Person{
  name = 'Hanwen' //property
  call = () => {} //method
}
  
//constructor function
const myPerson = new Person() //with the new keyword to instantiate
myPerson.call()
console.log(myPerson.name)

//inheritance
class Person extends Master


//example
class Human {
 constructor(){
   this.gender = 'male';
 }
  printGender(){
    console.log(this.gender);
  }
}

class Person extends Human {  //if you extend a class with a constructor, you have to use super constuctor
 constructor(){ //default function used when instantiate an instance
   super(); //execute the parent constructor
   this.name = 'Max';
   this.gender = 'Female'; //we change the gender here
 }
  printMyName(){
  console.log(this.name);
  }
}

const person = new Person()'
person.printMyName();
person.printGender(); //parent class

   
