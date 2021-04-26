//beginning
var count = 0;

function countBirds() {
  count += 1;
  return count + ' birds';
}

function countDogs() {
  count += 1;
  return count + ' dogs';
}


//complete limit the global variable
function makeBirdCounter() {
  var count = 0;    //make it private
  return function(){ //if not define an inner function, it will not pass 1
    count += 1;
    return count + ' birds';
  }
  return counter;
}

function makeDogCounter() {
  var count = 0; 
  return function(){
  count += 1;
  return count + ' dogs';
}
  
var birdCounter = makeBirdCounter()
birdCounter() //seperate function
  
var dogCounter = makeDogCounter()
dogCounter() //seperate function
  
  
  
  
//easy way, keep DRP, now we can count whatever we want
  
function makeCounter(noun) {
  var count = 0; 
  return function(){
  count += 1;
  return count + ' ' + noun;
}
  
var birdCounter = makeCounter('birds')
birdCounter()
var dogCounter = makeCounter('dogs')
dogCounter()
var fishCounter = makeCounter('fish')
fishCounter()
  
  
   
