functions generally should not change globally scoped variable
inside the function, should not change variable outside the function
Do not change global variable and do not use global variable inside the function!
  
//situation 1
  
let alwaysTrue = true;

function dontMindMe(){
  alwaysTrue = false;     //danger! changing global variable
}
dontMindMe();       // error: everything is broken

if(alwaysTrue) {
  console.log('all is well');
} else {
  throw new Error ('everything is broken');
}


//situation 2
  
let alwaysTrue = true;

function dontMindMe(){
  let alwaysTrue = false;     //this is okay, just creating a local variable, it shadows the global variable but not changing
} 
dontMindMe();       // all is well

if(alwaysTrue) {
  console.log('all is well');
} else {
  throw new Error ('everything is broken');
}
