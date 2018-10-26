describe("A suite", function() {
  var fizzbuzz = require('../commands/fizzbuzz.js');
  it("should be a number", function() {
    expect(fizzbuzz.func("ajj")).toBe(false)
  })
  it("should return itself if the number is not a multiple of 3 or 5", function() {
    expect(fizzbuzz.func(1)).toEqual(jasmine.any(Number));
  });
  it("should return fizz if the number is a multiple of 3", function(){
    expect(fizzbuzz.func(6)).toEqual("Fizz")
  })
  it("should return buzz if the number is a multiple of 5", function() {
    expect(fizzbuzz.func(10)).toEqual("Buzz")
  })
  it("should return fizzbuzz if the number is a multiple of both 3 and 5", function() {
    expect(fizzbuzz.func(30)).toEqual("FizzBuzz")
  })
});

