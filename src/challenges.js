// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  let makeArray = string.split(' ');
  return makeArray;
}

// Desafio 4
function concatName(array) {
  return `${array.pop()}, ${array.shift()}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins *= 3) + (ties *= 1);
  return result;
}

// Desafio 6
function highestCount(array) {
  let frequency = {};
  let biggestNumber = Math.max(...array);
  let maxFrequency = null;
  let mostRepeated = null;

  for (let value in array) {
    if ({}.hasOwnProperty.call(array, value)) {
      frequency[array[value]] = (frequency[array[value]] || null) + 1;

      if (array[value] === biggestNumber && frequency[array[value]] > maxFrequency) {
        maxFrequency = frequency[array[value]];
        mostRepeated = array[value];
      }
    }
  } return maxFrequency;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = null;
  let diffCat1 = Math.abs(cat1 - mouse);
  let diffCat2 = Math.abs(cat2 - mouse);
  mouse = 1;

  if (diffCat1 < diffCat2) {
    result = 'cat1';
  } else if (diffCat1 > diffCat2) {
    result = 'cat2';
  } else if (diffCat1 === diffCat2) {
    result = 'os gatos trombam e o rato foge';
  } return result;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      result.push('fizz');
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      result.push('buzz');
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else {
      result.push('bug!');
    }
  } return result;
}

// Desafio 9
function encode(string) {
  let replacer = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  return string.replace(/[aeiou]/gi, (m) => replacer[m]);
}
function decode(string) {
  let replacer = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  return string.replace(/[1-5]/g, (m) => replacer[m]);
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
