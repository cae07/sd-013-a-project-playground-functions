// Desafio 1
function compareTrue(x, y) {
  same = false;
  
  if (x && y) {
    same = true;
  }

  return same;
}

// Desafio 2
function calcArea(base, height) {
  return 0.5 * base * height
}

// Desafio 3
function splitSentence(string) {
  child = "";
  splitArray = [];
  for (let c of string) {
    if (c != " ") {
      child += c;
      string = string.substring(1)
    } if ((string.indexOf(c) == string.length - 1) || (c == " ")) {
      splitArray.push(child);
      child = "";
    }
  }
  return splitArray
}

// Desafio 4
function concatName(fullName) {
  lastName = fullName[fullName.length -1];
  firstName = fullName[0];
  return lastName + ", " + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  highestValue = array[0];
  count = 0;
  for (let i of array) {
    if (i > highestValue) {
      highestValue = i;
    }
  }
  for (let i of array) {
    if (i == highestValue) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
