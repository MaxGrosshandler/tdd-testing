module.exports = {
  add: (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
      sum += array[i]
    }
    return sum
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