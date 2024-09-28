var addTwoPromises = async function (promise1, promise2) {

  return await Promise.all([promise1, promise2]).then((values) => values[0] + values[1])

};


const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

console.log(addTwoPromises(promise1, promise2))
