// Desafio 1
function compareTrue(booleanTypeOne, booleanTypeTwo) {
  if (booleanTypeOne && booleanTypeTwo) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(words) {
  let first = words[0];
  let last = words[words.length - 1];
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;

  for (let indexWins = 0; indexWins < wins; indexWins += 1) {
    points += 3;
  }

  for (let indexTies = 0; indexTies < ties; indexTies += 1) {
    points += 1;
  }

  return points;
}

// Desafio 6

function verifyHigher(numberArrays) {
  let maior = numberArrays[0];
  for (let index = 0; index < numberArrays.length; index += 1) {
    if (numberArrays[index] > maior) {
      maior = numberArrays[index];
    }
  }
  return maior;
}

function verifyEquals(numberArrays, higher) {
  let qtd = 0;
  for (let index = 0; index < numberArrays.length; index += 1) {
    if (numberArrays[index] === higher) {
      qtd += 1;
    }
  }
  return qtd;
}

function highestCount(numberArrays) {
  let maior = verifyHigher(numberArrays);
  let equals = verifyEquals(numberArrays, maior);
  return equals;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let distanceBetweenMouseAndCat1 = Math.abs(mouse - cat1);
  let distanceBetweenMouseAndCat2 = Math.abs(mouse - cat2);
  let whoWin = '';
  if (distanceBetweenMouseAndCat1 > distanceBetweenMouseAndCat2) {
    whoWin = 'cat2';
  }

  if (distanceBetweenMouseAndCat2 > distanceBetweenMouseAndCat1) {
    whoWin = 'cat1';
  }

  if (distanceBetweenMouseAndCat1 === distanceBetweenMouseAndCat2) {
    whoWin = 'os gatos trombam e o rato foge';
  }

  return whoWin;
}

function isDividedBy(number) {
  let string = '';
  if ((number) % 3 === 0 && (number % 5) === 0) string = 'fizzBuzz';
  else if ((number) % 5 === 0) string = 'buzz';
  else if ((number) % 3 === 0) string = 'fizz';
  else string = 'bug!';

  return string;
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let stringsArray = [];
  for (let number of numbersArray) {
    stringsArray.push(isDividedBy(number));
  }

  return stringsArray;
}

// Desafio 9

function encode(string) {
  string = string.replaceAll('a', '1');
  string = string.replaceAll('e', '2');
  string = string.replaceAll('i', '3');
  string = string.replaceAll('o', '4');
  string = string.replaceAll('u', '5');
  return string;
}

function decode(string) {
  string = string.replaceAll('1', 'a');
  string = string.replaceAll('2', 'e');
  string = string.replaceAll('3', 'i');
  string = string.replaceAll('4', 'o');
  string = string.replaceAll('5', 'u');
  return string;
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
