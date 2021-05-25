// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  if (base < 0 || height < 0) {
    return 'Base e altura devem ser maiores que 0.';
  }

  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(stringArray) {
  return `${stringArray[stringArray.length-1]}, ${stringArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let maiorNumero = arrayOfNumbers[0];
  let contador = 0;

  for (let index = 0; index < arrayOfNumbers.length; index++) {
    if (arrayOfNumbers[index] > maiorNumero) {
      maiorNumero = arrayOfNumbers[index];
      contador = 1;
    } else if (arrayOfNumbers[index] === maiorNumero) {
      contador += 1;
    }
  }

  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(cat1 - mouse);
  let gato2 = Math.abs(cat2 - mouse);

  if (gato2 > gato1) {
    return 'cat1';
  } else if (gato1 > gato2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
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
