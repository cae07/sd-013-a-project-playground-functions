// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(stringSentence) {
  let arrayStrings = [];
  arrayStrings = stringSentence.split(" ");
  return arrayStrings;
}

// Desafio 4
function concatName(arrayConc) {
  stringConcat = "";
  stringConcat = arrayConc[arrayConc.length - 1] + ", " + arrayConc[0];
  return stringConcat;
}


// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  wins = wins * 3;
  ties = ties * 1;
  points = wins + ties;
  return points;
}

// Desafio 6
function highestCount(arrayCount) {
  let vault = arrayCount[0];
  let numberTimes = 0;
  for (let i = 0; i < arrayCount.length; i += 1) {
    if (arrayCount[i] > vault) {
      vault = arrayCount[i];
    }
  }
  for (let i2 = 0; i2 < arrayCount.length; i2 += 1) {
    if (vault === arrayCount[i2]) {
      numberTimes += 1;
    }
  }
  return numberTimes;
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
