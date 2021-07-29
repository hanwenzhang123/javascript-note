const printMyName = (name) =>{  //only 1 argument
  console.log(name);
}
printMyName('Hanwen');

const printMyName = name =>{  //() optional
  console.log(name);
}
printMyName('Hanwen');

const printMyName = () =>{  //no arguments, need ()
  console.log('Hanwen');
}
printMyName();

const printMyName = (name, age) =>{  //more than 1 argument, need ()
  console.log(name, age);
}
printMyName('Hanwen', 26);

//all works below
const multiply = (number) => {
  return number * 2;
}

const multiply = number => number * 2;
console.log(multiple(2)); //4
