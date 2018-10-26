
describe("A fake chatbot", function(){
  var chatbot = require("../lib/chatbot.js")
  it("should say 'hi' when a user says hello", function(){
    expect(chatbot.func("hello")).toEqual("hi")
  })
  it("should say 'see you later' when a user says goodbye", function(){
      expect(chatbot.func("goodbye")).toEqual("see you later")
  })
})
