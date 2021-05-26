// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  let area = 0;
  area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splitString = string.split(' ');
  return splitString;
}

// Desafio 4
function concatName(array) {
  let arrayConcat = [];
  arrayConcat.push(array[array.length - 1]);
  arrayConcat.push(array[0]);
  return arrayConcat.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let bigNumber = arrayNumbers[0];
  let bigNumberCount = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > bigNumber) {
      bigNumber = arrayNumbers[index];
      bigNumberCount = 0;
    } if (bigNumber === arrayNumbers[index]) {
      bigNumberCount += 1;
    }
  }
  return bigNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  let arrayFizzBuzzBug = [];
  for (let indexFB = 0; indexFB < arrayFizzBuzz.length; indexFB += 1) {
    if (arrayFizzBuzz[indexFB] % 3 === 0 && arrayFizzBuzz[indexFB] % 5 === 0) {
      arrayFizzBuzzBug.push('fizzBuzz');
    } else if (arrayFizzBuzz[indexFB] % 3 === 0) {
      arrayFizzBuzzBug.push('fizz');
    } else if (arrayFizzBuzz[indexFB] % 5 === 0) {
      arrayFizzBuzzBug.push('buzz');
    } else {
      arrayFizzBuzzBug.push('bug!');
    }
  }
  return arrayFizzBuzzBug;
}

// Desafio 9
function encode(stringEncode) {
  let encodeString = '';
  let encodeO = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let indexE = 0; indexE < stringEncode.length; indexE += 1) {
    if (encodeO[stringEncode[indexE]] === undefined) {
      encodeString += stringEncode[indexE];
    } else {
      encodeString += encodeO[stringEncode[indexE]];
    }
  }
  return encodeString;
}

function decode(stringDecode) {
  let decodeString = '';
  let decodeO = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let indexD = 0; indexD < stringDecode.length; indexD += 1) {
    if (decodeO[stringDecode[indexD]] === undefined) {
      decodeString += stringDecode[indexD];
    } else {
      decodeString += decodeO[stringDecode[indexD]];
    }
  }
  return decodeString;
}
console.log(decode('h2ll4'));

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
