function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sumArray(array) {
  return array.reduce(add);
}

function subtractArray(array) {
  return array.reduce(subtract);
}

function higherThan(a) {
  return function (b) {
    return b > a;
  };
}

function ascending(a, b) {
  return a - b;
}

function descending(a, b) {
  return b - a;
}

function negative(a) {
  return a < 0;
}

function anyNegative(array) {
  return array.some(negative);
}

function anyHigherThanNine(array) {
  return array.some(higherThan(9));
}

function anyOverThree(array) {
  let sorted = array.slice(0).sort(ascending);
  let currNum = sorted[0];
  let counter = 1;

  for (let i = 1; counter < 3 && i < sorted.length; i += 1) {
    if (sorted[i] !== currNum) {
      currNum = sorted[i];
      counter = 1;
    } else {
      counter += 1;
    }
  }

  return counter >= 3;
}

module.exports = {
  add,
  subtract,
  sumArray,
  subtractArray,
  higherThan,
  descending,
  negative,
  anyNegative,
  anyHigherThanNine,
  anyOverThree,
};
