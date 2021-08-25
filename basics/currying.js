const multiply = (a, b) => a*b;
multiply (3, 5)  //15

const curriedMultiply = (a) => (b) => a*b;  //take one parameter at a time
curriedMultiply (5)(3)    //a is 5, b is 3, 15

const curriedMultiplyBy5 = curriedMultiply(5)   //save the a part and now we just need the b parte

curriedMultiplyBy5(4)   //20
curriedMultiplyBy5(5)   //25
curriedMultiplyBy5(6)   //30
 
