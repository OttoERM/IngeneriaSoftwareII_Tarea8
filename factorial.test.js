//Test Driven Development
//Patron Triple A(Arrange, Act, Assert)
const factorial = require("./factorial");

describe("Function factorial", () => {
  it("Receives a value of 5 and should return 120", () => {
    expect(factorial(5)).toBe(120);
  });
});
