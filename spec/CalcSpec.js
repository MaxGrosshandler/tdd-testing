
describe("A rudimentary calculator", function(){
  var calculator = require("../lib/calculator.js")
  it("should return 2 if given an array of [1, 1] to add ", function(){
    expect(calculator.add([1, 1])).toEqual(2)
  })
  it("should return 3 if given an array of [1, 2] to add", function(){
    expect(calculator.add([1, 2])).toEqual(3)
  })
  it("should return 4 if given an array of [5, 1] to subtract", function(){
    expect(calculator.subtract([5, 1])).toEqual(4)
  })
  it("should return 7 if given an array of [9, 2] to subtract", function(){
    expect(calculator.subtract([9, 2])).toEqual(7)
  })

  it("should return 16 if given an array of [8, 2] to multiply", function(){
    expect(calculator.multiply([8, 2])).toEqual(16)
  })
  it("should return 21 if given an array of [3, 7] to multiply", function(){
    expect(calculator.multiply([3, 7])).toEqual(21)
  })
  it("should return 5 if given an array of [30, 6] to divide", function(){
    expect(calculator.divide([30, 6])).toEqual(5)
  })
  it("should return 6 if given an array of [48, 8] to divide", function(){
    expect(calculator.divide([48, 8])).toEqual(6)
  })

})
