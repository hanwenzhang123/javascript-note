let relatedThings = [['Windows', 'MacOS'], ['New York', 'Chicago']];

console.log(relatedThings.length); //2
console.log(relatedThings[1][0]);   //['New York']


//list everyone
let rsvpGroups = [['Jane', 'Mel'], 'Jack', ['Rohan', 'David', 'Meg']];

for (let i = 0; i < rsvpGroups.length; i++){
  let element = rsvpGroup[i];
  
  if(Array.isArray(element)) {      // only get to this statement if it is array
    for(let j = 0; j < element.length; j++){
      console.log(element[j]);
    }
  } else { 
    console.log(element);
  }
  
}


//second example

let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let hardCode2ndCol = [
 grid[0][1],
 grid[1][1],
 grid[2][1],
]

console.log(grid[2]);   // [7, 8, 9]
console.log(hardCode2ndCol);    // [2, 5, 8]


//easier way

let secondCold = [];
for (let i = 0; i < grid.length; i++) {
  secondCol.push(grid[i][1])    // access to second column only, i is iteration
}

console.log(secondCol);    // [2, 5, 8]


