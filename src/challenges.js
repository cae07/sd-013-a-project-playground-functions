// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let sentenceSplit = sentence.split(' ');
  return sentenceSplit;
}

// Desafio 4
function concatName(strings) {
  let firstItem = strings[0];
  let lastItem = strings[strings.length - 1];
  let concat = `${lastItem}, ${firstItem}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = numbers[0];
  let higherCountdown = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (higherNumber < numbers[index]) {
      higherNumber = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (higherNumber === numbers[index]) {
      higherCountdown += 1;
    }
  }
  return higherCountdown;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let discat1 = cat1 - mouse;
  let discat2 = cat2 - mouse;
  discat1 = Math.abs(discat1);
  discat2 = Math.abs(discat2);
  if (discat1 !== discat2) {
    if (discat1 < discat2) {
      return 'cat1';
    }
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let buzzFizz = [];
  for (let index = numbers.length - 1; index >= 0; index -= 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      buzzFizz.unshift('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      buzzFizz.unshift('fizz');
    } else if (numbers[index] % 5 === 0) {
      buzzFizz.unshift('buzz');
    } else {
      buzzFizz.unshift('bug!');
    }
  }
  return buzzFizz;
}

// Desafio 9
function encode(string) {
  let spliString = string.split('');
  for (let index = 0; index < spliString.length; index += 1) {
    if (spliString[index] === 'a') {
      spliString[index] = '1';
    } else if (spliString[index] === 'e') {
      spliString[index] = '2';
    } else if (spliString[index] === 'i') {
      spliString[index] = '3';
    } else if (spliString[index] === 'o') {
      spliString[index] = '4';
    } else if (spliString[index] === 'u') {
      spliString[index] = '5';
    }
  }
  string = spliString.join('');
  return string;
}
function decode(string) {
  let spliString = string.split('');
  for (let index = 0; index < spliString.length; index += 1) {
    if (spliString[index] === '1') {
      spliString[index] = 'a';
    } else if (spliString[index] === '2') {
      spliString[index] = 'e';
    } else if (spliString[index] === '3') {
      spliString[index] = 'i';
    } else if (spliString[index] === '4') {
      spliString[index] = 'o';
    } else if (spliString[index] === '5') {
      spliString[index] = 'u';
    }
  }
  string = spliString.join('');
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
