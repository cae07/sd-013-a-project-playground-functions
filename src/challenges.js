// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(meuNome) {
  return meuNome.split(' ');
}

// Desafio 4
function concatName(arrayOfStrings) {
  return arrayOfStrings[arrayOfStrings.length -1] + ", " + arrayOfStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPts = (3 * wins);
  let tiePts = (1 * ties);
  let champPoints = winPts + tiePts;
  return champPoints;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let contador = 0;
  let maiorNumero = arrayOfNumbers[0];
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (maiorNumero < arrayOfNumbers[index]) {
      maiorNumero = arrayOfNumbers[index];
    }
  }
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (maiorNumero === arrayOfNumbers[index]) {
      contador += 1;
    }
  }
  return contador;
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
