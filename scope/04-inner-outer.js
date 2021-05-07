//inner function can access the scope of the outer function, but the opposite is not true

function outer(){
  let outerVar = 'outer';
  
  function inner(){
    let innerVar = 'inner';
    console.log(outerVar, innerVar);    //outer inner
  }
  inner();
  console.log(innerVar);    //undefined  - because outer can not access to the inner here
}


// the inner function still looks for a local declaration of the variable name before looking at the next level of scope
// always goes inside out

function outer(){
  let outerVar = 'outer';
  
  function inner(outerVar){     //outerVar is here undefined, take outerVar as a parameter
    let innerVar = 'inner';
    console.log(outerVar, innerVar);    // undefined inner      inner function with outerVar parameter, it overwrites the global variable
  }
  inner();
}
outer();    //outside the function, global


   
