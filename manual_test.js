const { add, subtract, multiply, divide } = require("./javascript_function.js");

const testAdd = () => {
  const num1 = 11;
  const num2 = 22;
  const expected = 33;

  const result = add(num1, num2);

  console.assert(
    result === expected,
    `Testing add() function --- Expects: ${expected} Received: ${result}`
  );

  console.log(
    `Testing add() function --- Expects: ${expected} Received: ${result}`
  );
};

const testSubtract = () => {
  const num1 = 33;
  const num2 = 22;
  const expected = 11;

  const result = subtract(num1, num2);

  console.assert(
    result === expected,
    `Testing subtract() function --- Expects: ${expected} Received: ${result}`
  );

  console.log(
    `Testing subtract() function --- Expects: ${expected} Received: ${result}`
  );
};

const testMultiply = () => {
  const num1 = 11;
  const num2 = 5;
  const expected = 55;

  const result = multiply(num1, num2);

  console.assert(
    result === expected,
    `Testing multiply() function --- Expects: ${expected} Received: ${result}`
  );

  console.log(
    `Testing multiply() function --- Expects: ${expected} Received: ${result}`
  );
};

const testDivide = () => {
  const num1 = 121;
  const num2 = 11;
  const expected = 11;

  const result = divide(num1, num2);

  console.assert(
    result === expected,
    `Testing divide() function --- Expects: ${expected} Received: ${result}`
  );

  console.log(
    `Testing divide() function --- Expects: ${expected} Received: ${result}`
  );
};

testAdd();
testSubtract();
testMultiply();
testDivide();
