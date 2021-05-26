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
  for (let i = 0; i < array.length; i += 1) {
    let counter = 1;
    for (let j = 0; j < array.length; j += 1) {
      if (array[j] === array[i]) {
        counter += 1;
        if (counter > 3) return true;
      }
    }
  }

  return false;
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
