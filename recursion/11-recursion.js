recursion is a function that calls itself until it does not

// Example- count down from 10 
let countDownFrom = (num) => {
  if (num === 0) return;    //recursion always needs a base case
  console.log(num)
  countDownFrom(num - 1)
}

countDownFrom(10)

//Example - relational database
let categories = [
 { id: 'animals', parent: null },
 { id: 'mammals', parent: 'animals' },
 { id: 'cats', parent: 'mammals' },
 { id: 'dogs', parent: 'mammals' },
 { id: 'chihuahua', parent: 'dogs' },
 { id: 'labrador', parent: 'dogs' },
 { id: 'persian', parent: 'cats' },
 { id: 'siamese', parent: 'cats' }
];

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter( c => c.parent === parent)    //filter all the elements with parent
    .forEach( c => node[c.id] = makeTree(categories, c.id))   //pick the id and assign that to the node object, and get the subtree
  return node                 //subtree - makeTree recursive, get the same categories, then get the id as the parent
}

console.log(
  JSON.stringify(
    makeTree(categories, null)
    , null, 2)
  )

/*
{
  "animals": {
    "mammals": {
      "cats": {
        "persian": {},
        "siamese": {}
      },
      "dogs": {
        "chihuahua": {},
        "labrador": {}
      }
    }
  }
}
*/
