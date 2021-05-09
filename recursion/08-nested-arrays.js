concat elements - Concatenate like join to the end of
Concatenate, concatenation, or concat is a term that describes combining a string, text, or other data in a series without any gaps. 

//example 1
function concatEls(array) {
  let finalSring = '';
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    finalString += element;
  }
  return finalString;
}

let result = concatEls(['a', 'b', 'c']);
console.log(result);
//abc


//example 2
function concatEls(array) {
  let finalSring = '';
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (Array.isArray(element)) {
      finalString += concatEls(element);
    } else {
    finalString += element;
  }
  return finalString;
}

let result = concatEls(['a', ['b', 'c']]);
console.log(result);
//abc
  
  
  
  
