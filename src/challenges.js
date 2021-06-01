// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA && valueB) {
  return true;
  }
return false;
  }

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(nameA) {
  return nameA[nameA.length-1] + ", " + nameA[0];
}
// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbersA) {
  let highestNumber = Math.max.apply(null, numbersA);
  let highestNumberRepeat = 0;
  for (let count = 0; count < numbersA.length; count++) {
    if (highestNumber === numbersA[count]) {
      highestNumberRepeat++;
    }
  }
  return highestNumberRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catPos1 = Math.abs(mouse - cat1);
  let catPos2 = Math.abs(mouse - cat2);
  if (catPos1 < catPos2) {
    return 'cat1';
  } else if (catPos2 < catPos1) {
    return 'cat2';
  }
    return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBug = [];
  for (let count = 0; count < numbers.length; count++) {
    if (numbers[count] % 3 === 0 && numbers[count] % 5 === 0) {
      fizzBug[count] = 'fizzBuzz';
    } else if (numbers[count] % 3 === 0) {
      fizzBug[count] = 'fizz';
    } else if (numbers[count] % 5 === 0) {
      fizzBug[count] = 'buzz';
    } else {
      fizzBug[count] = 'bug!';
    }
  }
  return fizzBug;
}

// Desafio 9
function encode(phrase) {
  let word = '';
  let strA = '';
  for (let count = 0; count < phrase.length; count++) {
    word = phrase[count];
    if (word.includes('a')) {
      word = '1';
    } else if (word.includes('e')) {
      word = '2';
    } else if (word.includes('i')) {
      word = '3';
    } else if (word.includes('o')) {
      word = '4';
    } else if (word.includes('u')) {
      word = '5';      
    }
    strA += word;
  }
  return strA;
}
function decode(phrase) {
  let word = '';
  let strA = '';
  for (let count = 0; count < phrase.length; count++) {
    word = phrase[count];
    if (word.includes('1')) {
      word = 'a';
    } else if (word.includes('2')) {
      word = 'e';
    } else if (word.includes('3')) {
      word = 'i';
    } else if (word.includes('4')) {
      word = 'o';
    } else if (word.includes('5')) {
      word = 'u';
    }
    strA += word;
  }
  return strA;
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
