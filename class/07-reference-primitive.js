//Reference and Primitive Types Refresher
numbers, strings, booleans, these are so-called primitive types whenever you reassign or you store a variable in another variable, it will copy the value 
objects and arrays are reference types which do not copy but refer to

//Important in React
because it can lead to unexpected behaviors.
If you copy objects or arrays like this because you then may manipulate one object in one place in the app 
and accidentally manipulate another usage of the same object in another place of the app.


//with primitive types
const number = 1;
const num2 = number;  //create a copy

console.log(num2);  //1


//with reference types
const person = {  //person the object is stored in memory, and in the constant person we store a pointer to that place in memory
  name: "Max"
};

const secondPerson = person;  //copy the pointer to the memory of the person object

person.name = 'Manu';   //change person will change secondPerson because they are references

console.log(secondPerson);    //refer to the person object in memory which here will print Manu
//it prints the same value as the first person but it will not actually have copied the person instead


//copy in an immutable way - ...
we copy that by copying the object and not just a pointer, for that we can use this spread operator ...

const person = {  
  name: "Max"
};

const secondPerson = {    //we copy the object not just the pointer which we can use spread operator... 
  ...person         //create a new real copy and spread the person properties which will pull out the properties and values of properties from the obejct
};            //we create a new object with the curly braces, here is the newly created secondPerson object with a copy of person

person.name = 'Manu';   //it only applies to person not the secondPerson

console.log(secondPerson);    //Max
   

//objects and arrays are reference types.
If you reassign them you are copying the pointer not the value.
Therefore if you want to do this in a real copy way, 
  you will have to create a new object and just copy the properties and not the entire object.
  
    
