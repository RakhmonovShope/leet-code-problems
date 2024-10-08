var promiseAll = function(functions) {
  return new Promise((resolve, reject)=> {
    const results = [];
    let completedPromises = 0;

    functions.forEach((fn, index) => {

      fn().then(value => {
        results[index]=value;
        completedPromises++;

        if (completedPromises === functions.length) {
          resolve(results);
        }

      }).catch(e => {
        reject(e)
      })
    })
  })
};


const resolvedValues = promiseAll([
  () => new Promise(resolve => setTimeout(() => resolve(5), 200)),
  () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
  () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
  () => new Promise(resolve => setTimeout(() => resolve(16), 100)),
  () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
  () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
])


resolvedValues.then(console.log).catch(console.error)
//[ 4, 16, 10, 5, 1 ]
//[ 5, 4, 10, 16, 1 ]
