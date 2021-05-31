// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  }
  return false;
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
  arrayStrings = stringSentence.split(' ');
  return arrayStrings;
}

// Desafio 4
function concatName(arrayConc) {
  let stringConcat = '';
  stringConcat = `${arrayConc[arrayConc.length - 1]}, ${arrayConc[0]}`;
  return stringConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  wins *= 3;
  ties *= 1;
  points = wins + ties;
  return points;
}

// Desafio 6
function matchingNumber(vault, arrayCount, numberTimes) {
  for (let i2 = 0; i2 < arrayCount.length; i2 += 1) {
    if (vault === arrayCount[i2]) {
      numberTimes += 1;
    }
  }
  return numberTimes;
}
function highestCount(arrayCount) {
  let vault = arrayCount[0];
  let numberTimes = 0;
  for (let i = 0; i < arrayCount.length; i += 1) {
    if (arrayCount[i] > vault) {
      vault = arrayCount[i];
    }
  }
  return matchingNumber(vault, arrayCount, numberTimes);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);

  if (cat1 < cat2) {
    return 'cat1';
  }
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function isItDivisible(arrayFizzBuzz, i) {
  if (arrayFizzBuzz[i] % 3 === 0 && arrayFizzBuzz[i] % 5 === 0) {
    arrayFizzBuzz[i] = 'fizzBuzz';
  } else if (arrayFizzBuzz[i] % 3 === 0) {
    arrayFizzBuzz[i] = 'fizz';
  } else if (arrayFizzBuzz[i] % 5 === 0) {
    arrayFizzBuzz[i] = 'buzz';
  } else {
    arrayFizzBuzz[i] = 'bug!';
  }
}
function fizzBuzz(arrayFizzBuzz) {
  for (let i = 0; i < arrayFizzBuzz.length; i += 1) {
    isItDivisible(arrayFizzBuzz, i);
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  let encodedString = '';
  encodedString = string.replace(/a/g, '1');
  encodedString = encodedString.replace(/e/g, '2');
  encodedString = encodedString.replace(/i/g, '3');
  encodedString = encodedString.replace(/o/g, '4');
  encodedString = encodedString.replace(/u/g, '5');
  return encodedString;
}

function decode(string) {
  let decodedString = '';
  decodedString = string.replace(/1/g, 'a');
  decodedString = decodedString.replace(/2/g, 'e');
  decodedString = decodedString.replace(/3/g, 'i');
  decodedString = decodedString.replace(/4/g, 'o');
  decodedString = decodedString.replace(/5/g, 'u');
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
