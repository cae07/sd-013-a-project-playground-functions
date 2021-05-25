// Desafio 1
function compareTrue(boolean1, boolean2) {
  let isTrueOrFalse;
  if (boolean1 === true && boolean2 === true) {
    isTrueOrFalse = true;
  } else {
    isTrueOrFalse = false;
  }
  return isTrueOrFalse;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let splitedPhrase = phrase.split(' ');
  return splitedPhrase;
}

// Desafio 4
function concatName(names) {
  let lastAndFirst = '';
  for (let index = names.length; index >= 0; index -= 1) {
    if (index === (names.length - 1)) {
      lastAndFirst += `${names[index]},`;
    } else if (index === 0) {
      lastAndFirst += ` ${names[index]}`;
    }
  }
  return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let biggest = numbers[0];
  let counter = 0;
  for (let indexBiggest = 1; indexBiggest < numbers.length; indexBiggest += 1) {
    if (numbers[indexBiggest] > biggest) {
      biggest = numbers[indexBiggest];
    }
  }
  for (let indexRepeat = 0; indexRepeat < numbers.length; indexRepeat += 1) {
    if (biggest === numbers[indexRepeat]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  let whoWins = '';

  if (distanceCat1 < distanceCat2) {
    whoWins = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    whoWins = 'cat2';
  } else if (distanceCat1 === distanceCat2) {
    whoWins = 'os gatos trombam e o rato foge';
  }

  return whoWins;
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzArray = [];
  for (let index = 0; index < numbers.length; index += 1) {
    let divisibleFor3 = numbers[index] % 3;
    let divisibleFor5 = numbers[index] % 5;
    if (divisibleFor3 === 0 && divisibleFor5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (divisibleFor3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (divisibleFor5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(phrase) {
  let encodedPhrase = '';
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === 'a') {
      encodedPhrase += '1';
    } else if (phrase[index] === 'e') {
      encodedPhrase += '2';
    } else if (phrase[index] === 'i') {
      encodedPhrase += '3';
    } else if (phrase[index] === 'o') {
      encodedPhrase += '4';
    } else if (phrase[index] === 'u') {
      encodedPhrase += '5';
    } else {
      encodedPhrase += phrase[index];
    }
  }
  return encodedPhrase;
}
function decode(phrase) {
  let decodedPhrase = '';
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === '1') {
      decodedPhrase += 'a';
    } else if (phrase[index] === '2') {
      decodedPhrase += 'e';
    } else if (phrase[index] === '3') {
      decodedPhrase += 'i';
    } else if (phrase[index] === '4') {
      decodedPhrase += 'o';
    } else if (phrase[index] === '5') {
      decodedPhrase += 'u';
    } else {
      decodedPhrase += phrase[index];
    }
  }
  return decodedPhrase;
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
