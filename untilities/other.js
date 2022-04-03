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
