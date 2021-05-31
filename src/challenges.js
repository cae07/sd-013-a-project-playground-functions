// Desafio 1
function compareTrue(value1, value2) {
  let trueOrFalse = false;
  if (value1 === value2 && value1 === true) {
    trueOrFalse = true;
  }
  return trueOrFalse;
}

// Desafio 2
function calcArea(base, height) {
  let division = height / 2;
  return base * division;
}

// Desafio 3
function splitSentence(string) {
  let sentence = '';
  let phrase = [];
  let n = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== ' ') {
      sentence += string[index];
      phrase[n] = sentence;
    } else {
      n += 1;
      sentence = '';
    }
  }
  return phrase;
}
// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let number = numbers[0];
  for (let indexnum = 0; indexnum < numbers.length; indexnum += 1) {
    if (numbers[indexnum] > number) {
      count = 1;
      number = numbers[indexnum];
    } else if (numbers[indexnum] === number) {
      count += 1;
    }
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let position = 'cat1';
  if (cat1 > cat2) {
    position = 'cat2';
  } else if ((mouse - cat1) + (mouse - cat2) === 0) {
    position = 'os gatos trombam e o rato foge';
  }
  return position;
}
// Desafio 8
function div3or5(arg) {
  let result;
  if (arg % 3 === 0) {
    result = 'fizz';
  } else {
    result = 'buzz';
  }
  return result;
}
function fizzBuzz(array) {
  let phrase = [];
  for (let index = 0; index < array.length; index += 1) {
    phrase[index] = 'bug!';
    if (array[index] % 15 === 0) {
      phrase[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0 || array[index] % 5 === 0) {
      phrase[index] = div3or5(array[index]);
    }
  }
  return phrase;
}
function encode(string) {
  let newPhrase = string;
  for (let index = 0; index < string.length; index += 1) {
    newPhrase = newPhrase.replace('a', 1);
    newPhrase = newPhrase.replace('e', 2);
    newPhrase = newPhrase.replace('i', 3);
    newPhrase = newPhrase.replace('o', 4);
    newPhrase = newPhrase.replace('u', 5);
  }
  return newPhrase;
}
function decode(string) {
  let newPhrase = string;
  for (let index = 0; index < string.length; index += 1) {
    newPhrase = newPhrase.replace(1, 'a');
    newPhrase = newPhrase.replace(2, 'e');
    newPhrase = newPhrase.replace(3, 'i');
    newPhrase = newPhrase.replace(4, 'o');
    newPhrase = newPhrase.replace(5, 'u');
  }
  return newPhrase;
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
