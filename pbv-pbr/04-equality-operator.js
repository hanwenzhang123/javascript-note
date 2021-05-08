equality operators and PBV/PBR

=== will compare complex values by reference, not by value!
  
let array1 = [1, 2, 3];   //0*01
let array2 = [1, 2, 3];   //0*02

console.log ( array1 === array2 )   //False - because they both reference to two different memories even though they look same by value.



let array1 = [1, 2, 3];
let array2 = array1;    // they both share the same reference

console.log ( array1 === array2 )   //True


  
