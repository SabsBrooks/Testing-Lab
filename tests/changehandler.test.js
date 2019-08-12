let { ChangeHandler } = require("../src/changehandler");

describe("ChangeHandler", function() {
describe("constructor", function() {
    test("amountDue is set based on an argument", function() { // This is 5.a
    let changeHandler = new ChangeHandler(105);
    expect(changeHandler.amountDue).toBe(105);
    });
    test("cashTendered is set to zero", function() { // This is 5.b
    let changeHandler = new ChangeHandler(); // This is checking the class constructor of amountDue. We can choose a random number 
    expect(changeHandler.cashTendered).toBe(0);
    });
});
  describe("insertCoin", function() { // This is 6.a
    test("Inserting a quarter adds 25", function() {
      let changeHandler = new ChangeHandler(); // ChangeHandler is a class and changeHandler is the object
        changeHandler.insertCoin("quarter");
        expect(changeHandler.cashTendered).toBe(25);
    });
});
  test("Inserting a dime adds 10", function() { // This is 6.b
    let changeHandler = new ChangeHandler();
    changeHandler.insertCoin("dime");
    expect(changeHandler.cashTendered).toBe(10);
})
    test("Inserting a nickel adds 5", function() {
    let changeHandler = new ChangeHandler();
    changeHandler.insertCoin("nickel");
    expect(changeHandler.cashTendered).toBe(5);
})
    test("Inserting a penny adds 1", function() {
    let changeHandler = new ChangeHandler();
    changeHandler.insertCoin("penny");
    expect(changeHandler.cashTendered).toBe(1); 
})

    test("Calling function multiple times adds to amount", function() {
    let changeHandler = new ChangeHandler();
    changeHandler.insertCoin("penny");
    changeHandler.insertCoin("quarter");
    expect(changeHandler.cashTendered).toBe(26);
    })
});

    test("Return correct change", function() {
        let 
    })
