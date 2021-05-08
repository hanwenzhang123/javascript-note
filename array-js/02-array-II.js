.slice() - subtract a portion of the array, like a big sandwich cutting the portion, it creates a new array
let namesCopy = names.slice();  // like making a copy of the array
namesCopy[0] = 'Kate';

console.log(names);  //original array
console.log(nameCopy);  //only change the first element to Kate from the copy array



.splice() - mutates the original array it is used to add or remove elements from middle of an array (instead of adding or removing from either end)
its first argument is an index, the second is a count of elements to delete from the element, starting at the provided index
it returns a new array with all of the removed elements

let names = ['George', 'John', 'Thomas'];

let singleTermPresidents = name.splice(1, 1);

console.log(names);     //['George', 'Thomas']
console.log(singleTermPresident);     //['John']



let beatles = ['Paul', 'George', 'John', 'Ringo'];

let newGroup = beatles.splice(1, 2, 'Pete');      //splice the index 1 and index 2 elements, also adds the element 'Pete' to the array, can add more by ','

console.log(beatles);   // ['Paul', 'Pete', 'Ringo']
console.log(newGroup);  // ['George', 'John']


//how you insert elements in the middle of an array using splice
let newGroup = beatles.splice(1, 0, 'Pete', 'Nimit');      // here is insert from the index 1, not remove anything




.join() - specify what you would like to join in between of each element in the arrary
beatles.join(', ')    //Paul, George, John, Ringo
