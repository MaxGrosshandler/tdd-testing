module.exports = {
  process: (array) => {
    let total = array[0];
    for (let i = 1; i<array.length; i++){
      if (array[i] === "+"){
        total += array[i+1]
        i++
      }
    }
    return total;
  },
  add: (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++){
      total += array[i]
    }
    return total
},
subtract: (array) => {
  let total = array[0]
  for (let i = 1; i < array.length; i++){
    total -= array[i]
  }
  return total
},
multiply: (array) => {
  let total = array[0]
  for (let i = 1; i < array.length; i++){
    total *= array[i]
  }
  return total;

},
divide: (array) => {
  let total = array[0]
  for (let i = 1; i < array.length; i++){
    total /= array[i]
  }
  return total
},
  name: "calculator"
};