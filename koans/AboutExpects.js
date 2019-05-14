describe("About Expects", function() {
  // We shall contemplate truth by testing reality, via spec expectations.
  it("should expect true", function() {
    // Your journey begins here: Replace the word false with true
    expect(true).toBeTruthy();
  });

  // To understand reality, we must compare our expectations against reality.
  it("should expect equality", function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it("should assert equality a better way", function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;

    // toEqual() compares using common sense equality.
    expect(actualValue).toEqual(expectedValue);

    var myvalue = 10;
    var equalto = 5 + 5;
    expect(myvalue).toEqual(equalto);
  });

  it("should assert equality a better way", function() {
    var myvalue = 10;
    var equalto = 5 + 5;
    expect(myvalue).toEqual(equalto);
  });

  // Sometimes you need to be precise about what you "type."
  it("should assert equality with ===", function() {
    var expectedValue = "2";
    var actualValue = (1 + 1).toString();

    // toBe() will always use === to compare.
    expect(actualValue).toBe(expectedValue);
  });

  // Sometimes we will ask you to fill in the values.
  it("should have filled in values", function() {
    expect(1 + 1).toEqual(2);
  });
});

// notes on these koans
expect(true).toBeTruthy();
expect(false).toBeFalsy();
// there's a few ways to assert equality in javascript, we use the notation
a = 5;
b = 2 + 3;
expect(a).toEqual(b); // equal to "=="
expect(a).toBe(b); // equal to "==="

// also in javascript the naming convention for variables is camelCase
