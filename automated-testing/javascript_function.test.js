const calculator = require("../javascript_function.js");

test("Check if add funtion is working", () => {
  expect(calculator.add(45, 89)).toBe(134);
});

test("Check if subtract function is working", () => {
  expect(calculator.subtract(562, 124)).toBe(438);
});

test("Check if multiply function is working", () => {
  expect(calculator.multiply(34, 21)).toBe(714);
});

test("Check if divide function is working", () => {
  expect(calculator.divide(4992, 624)).toBe(8);
});
