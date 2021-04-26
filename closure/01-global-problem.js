//count varibale will keep counting for both birds and dogs

var count = 0;

function countBirds() {
  count += 1;
  return count + ' birds';
}

function countDogs() {
  count += 1;
  return count + ' dogs';
}


//solution avoids problems with global
var count = 0;

var birdCount = 0;
var dogCount = 0;

function countBirds() {
  birdCount += 1;
  return birdCount + ' birds';
}

function countDogs() {
  dogCount += 1;
  return dogCount + ' dogs';
}
