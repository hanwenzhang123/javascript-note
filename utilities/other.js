export function randomNumberBetween(min, max) {   //return an integer
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function sleep(duration) {   //wait a specific time to do a task
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
//sleep(200).then(() => {});

export function memoize(cb) {   //saving data and use it later on
  const cache = new Map()
  return (...args) => {
    const key = JSON.stringify(args) 
    if (cache.has(key)) return cache.get(key) //check if the cache has the data, if so, return it

    const result = cb(...args)
    cache.set(key, result)
    return result
  }
}


//Memoization
//You store the previous result - cache the value based on the input
//get the same value over and over again
//fetch external resources to save the call to server from stored the result

const prevValues = [];

function square(n) {
  if (prevValues[n] != null){
    return prevValues[n];
  }
  
  let result = 0;
  for(let i = 1; i <= n; i++){
    for(let i = 1; i <= n; i++){
      return += 1
    }
  }
  
  prevValues[n] = result;
  return result;
}

//Dynamic Programming
//take recursive function that calls itself multiple times with the same input
//you memorize the same inputs

function fib(n, prevValues = []) {
  if (prevValues[n] != null) {
    return prevValues[n]
  }
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1) + fib (n - 2);
  }
  prevValues[n] = result;
  return result;
}

console.log(fib(40))


