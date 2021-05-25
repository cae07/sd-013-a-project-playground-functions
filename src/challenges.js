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
function fizzBuzz(arrayOfNumbers) {
  let arrayNova = [];
  for (let number of arrayOfNumbers) {
    if ((number % 3 == 0) && (number % 5 != 0)) {
      arrayNova.push('fizz');
    } else if ((number % 3 != 0) && (number % 5 == 0)) {
      arrayNova.push('buzz');
    } else if ((number % 3 == 0) && (number % 5 == 0)) {
      arrayNova.push('fizzBuzz');
    } else {
      arrayNova.push('bug!');
    }
  }

  return arrayNova;
}

// Desafio 9
function encode(stringParaEncode) {
  let encodedString = '';

  for (let letra of stringParaEncode) {
    if (letra === 'a') {
      encodedString += '1';
    } else if (letra === 'e') {
      encodedString += '2';
    } else if (letra === 'i') {
      encodedString += '3';
    } else if (letra === 'o') {
      encodedString += '4';
    } else if (letra === 'u') {
      encodedString += '5';
    } else {
      encodedString += letra;
    }
  }

  return encodedString;
}

function decode(stringParaDecode) {
  let decodedString = '';

  for (let letra of stringParaDecode) {
    if (letra === '1') {
      decodedString += 'a';
    } else if (letra === '2') {
      decodedString += 'e';
    } else if (letra === '3') {
      decodedString += 'i';
    } else if (letra === '4') {
      decodedString += 'o';
    } else if (letra === '5') {
      decodedString += 'u';
    } else {
      decodedString += letra;
    }
  }

  return decodedString;
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
