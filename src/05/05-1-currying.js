function multiply(a, b) {
  return a * b;
}

function multiplyTwo(a) {
  return multiply(a, 2);
}

// 화살표 함수 표현식
const multiplyX = (x) => (a) => multiply(a, x);

// const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

const result1 = multiplyThree(3);
const result2 = multiplyFour(3);

const result3 = multiplyX(3)(3);
const result4 = multiplyX(4)(3);

// -> ((x * a) * b) + c
// a = 2, b = 3, c = 4
const equation = (a, b, c) => (x) => x * a * b + c;
// const formula = equation(2, 3, 4);
const x = 10;
const result5 = formula(x);

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

// const multiplyX = (x) => (a) => multiply(a, 2);
const addX = (x) => (a) => add(x, a);

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);
const formula = (x) => addFour(multiplyThree(multiplyTow(x)));
