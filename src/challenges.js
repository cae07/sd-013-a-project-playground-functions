// Desafio 1
function compareTrue(value1, value2) {
  let resultado;

  if (value1 === true && value2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }

  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let trianguleArea = (base * height) / 2;
  return trianguleArea;
}

// Desafio 3
function splitSentence(sentence) {
  let separator = ' ';
  let result = sentence.split(separator);

  return result;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let storer = `${arrayOfStrings[arrayOfStrings.length - 1]}, `;
  storer += arrayOfStrings[0];

  return storer;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = wins * 3 + ties * 1;

  return totalPoints;
}

// Desafio 6
function highestNumber(arrayOfNumbers) {
  let numberHighest = -1;

  // descobrindo primeiramente qual é o maior número deste arrayOfNumbers:
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] > numberHighest) {
      numberHighest = arrayOfNumbers[index];
    }
  }

  return numberHighest;
}

function highestCount(arrayOfNumbers) {
  let highestCounter = 0;
  let numberHighest = highestNumber(arrayOfNumbers);

  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] === numberHighest) {
      highestCounter += 1;
    }
  }
  console.log(`o número ${numberHighest} é o maior número encontrado no array.`);
  console.log(`O número ${numberHighest} se repete ${highestCounter} vezes neste array.`);

  return highestCounter;
}

// Desafio 7
function distanceOfCat1(mouse, cat1) {
  let cat1Distance = mouse - cat1;

  if (cat1Distance < 0) {
    cat1Distance = cat1 - mouse;
  }

  return cat1Distance;
}

function distanceOfCat2(mouse, cat2) {
  let cat2Distance = mouse - cat2;

  if (cat2Distance < 0) {
    cat2Distance = cat2 - mouse;
  }

  return cat2Distance;
}

function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = distanceOfCat1(mouse, cat1);
  let distanceCat2 = distanceOfCat2(mouse, cat2);
  let result;

  if (distanceCat1 === distanceCat2) {
    result = 'os gatos trombam e o rato foge';
  } else if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    result = 'cat2';
  }

  return result;
}

// Desafio 8
function isFizzOrBuzzOrBug(valueOfArray, isFizz, isBuzz) {
  isFizz = (valueOfArray % 3 === 0);
  isBuzz = (valueOfArray % 5 === 0);
  let value;

  if (isFizz) {
    value = 'fizz';
  } else if (isBuzz) {
    value = 'buzz';
  } else {
    value = 'bug!';
  }

  return value;
}

function fizzBuzz(arrayOfNumbers) {
  let result = [];
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    let isFizz = (arrayOfNumbers[index] % 3 === 0);
    let isBuzz = (arrayOfNumbers[index] % 5 === 0);
    let isFizzBuzz = (isFizz && isBuzz);
    let value;

    if (isFizzBuzz) {
      value = 'fizzBuzz';
    } else {
      value = isFizzOrBuzzOrBug(arrayOfNumbers[index], isFizz, isBuzz);
    }

    result.push(value);
  }

  return result;
}

// Desafio 9
function encodeAlgorithm(stringIndex) {
  let letters = ['a', 'e', 'i', 'o', 'u'];
  let valueEncoded;

  for (let indexLetter = 0; indexLetter < letters.length; indexLetter += 1) {
    if (stringIndex === letters[indexLetter]) {
      valueEncoded = (indexLetter + 1).toString();
      break;
    } else {
      valueEncoded = '';
    }
  }

  return valueEncoded;
}

function encode(string) {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    let encoded = encodeAlgorithm(string[index]);

    newString += encoded;
    if (encoded === '') {
      newString += string[index];
    }
  }

  return newString;
}

function decodeAlgorithm(stringIndex) {
  let letters = ['a', 'e', 'i', 'o', 'u'];
  let valueDecoded;

  for (let indexLetter = 0; indexLetter < letters.length; indexLetter += 1) {
    if (stringIndex === (indexLetter + 1).toString()) {
      valueDecoded = letters[indexLetter];
      break;
    } else {
      valueDecoded = '';
    }
  }

  return valueDecoded;
}

function decode(string) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    let decoded = decodeAlgorithm(string[index]);

    newString += decoded;
    if (decoded === '') {
      newString += string[index];
    }
  }

  return newString;
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
