module.exports = {
  func: (number) => {
      if (isNaN(number)) return false;
      if (number % 3 == 0 && number % 5 == 0) return "FizzBuzz"
      if (number % 3 == 0) return "Fizz";
      if (number % 5 == 0) return "Buzz";
      else return number
},
  name: "fizzbuzz"
};
/*
function fizzbuzz(number) {
      if (number % 3 == 0 && number % 5 == 0) console.log("Fizzbuzz")
      if (number % 3 == 0) console.log ("Fizz")
      if (number % 5 == 0) console.log("Buzz")
      else console.log(number)
}
for (i = 1; i < 101; i++){
    fizzbuzz(i)
}
*/
