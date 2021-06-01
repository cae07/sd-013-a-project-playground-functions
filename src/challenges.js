// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let result = [];
  let word = '';

  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence.charAt(i) === ' ') {
      result.push(word);
      word = '';
    } else {
      word += sentence.charAt(i);
    }
  }

  result.push(word);
  return result;
}

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highest = numbers[0];
  let count = 0;

  for (let number of numbers) {
    if (number > highest) {
      highest = number;
      count = 1;
    } else if (number === highest) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);

  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distCat1 < distCat2) {
    return 'cat1';
  }

  return 'cat2';
}
// Desafio 8
function fizzBuzz(numbers) {
  let result = [];

  for (let number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) {
      result.push('fizzBuzz');
    } else if (number % 3 === 0) {
      result.push('fizz');
    } else if (number % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }

  return result;
}

// funcao para trocar letra por numero no processo de decodificar

function exchangeLetterForNumber(letter) {
  switch (letter) {
  case 'a':
    return '1';
  case 'e':
    return '2';
  case 'i':
    return '3';
  case 'o':
    return '4';
  case 'u':
    return '5';
  default:
    return letter;
  }
}

// funcao para trocar numero por letra no processo de decodificar

function exchangeNumberForLetter(number) {
  switch (number) {
  case '1':
    return 'a';
  case '2':
    return 'e';
  case '3':
    return 'i';
  case '4':
    return 'o';
  case '5':
    return 'u';
  default:
    return number;
  }
}

// Desafio 9
function encode(sentence) {
  let result = '';

  for (let i = 0; i < sentence.length; i += 1) {
    result += exchangeLetterForNumber(sentence.charAt(i));
  }

  return result;
}

function decode(sentence) {
  let result = '';

  for (let i = 0; i < sentence.length; i += 1) {
    result += exchangeNumberForLetter(sentence.charAt(i));
  }

  return result;
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
