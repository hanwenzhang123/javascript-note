//any block of code (code inside of curly brackets {} ) creates its own scope, too

if (true) {
  let block = 'Jenny from the';
  console.log(block, 'block');    // Jenny from the block
}

console.log(block);   // undefined



// the pre-ES6 var keyword ignores block scope

if (true) {
  let block = 'Jenny from the';
  console.log(block, 'block');    // Jenny from the block
}

console.log(block);   // Jenny from the
