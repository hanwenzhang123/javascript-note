closure
A function with access to its own private variables

//1
var birds = 3;

function dogHouse() {
	var dogs = 8;
  console.log(birds); //3
  console.log(dogs); //8
}


  console.log(birds); //3
  console.log(dogs); //undefined


//2 
var birds = 3;

function dogHouse() {
	var dogs = 8;
  function showDogs(){
    console.log(dogs);
  }
  return showDogs;
}
var getDogs = dogHouse();
getDogs(); //8



//new private scope template, seperate from other closures that functions have created previously
function outerFunction(){
  var someCount = 0;
  function innerFunction(){
    someCount++;
    console.log("called " + someCount + " times");
  }
  return innerFunction;
}

counter1 = outerFunction();
counter2 = outerFunction();
counter1(); //Called 1 times
counter2(); //Called 1 times
  
