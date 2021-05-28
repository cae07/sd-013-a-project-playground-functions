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
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(strings) {
  return `${strings[strings.length - 1]}, ${strings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(numbers) {
  let repeat = 0;
  for (let n of numbers) {
    if (n === Math.max(...numbers)) repeat += 1;
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 < dist2) {
    return 'cat1';
  } if (dist1 > dist2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

function checkFizz(n) {
  return n % 3 === 0 && n % 5 !== 0;
}

function checkBuzz(n) {
  return n % 5 === 0 && n % 3 !== 0;
}

function checkFizzBuzz(n) {
  return n % 3 === 0 && n % 5 === 0;
}

function checkBug(n) {
  return n % 3 !== 0 && n % 5 !== 0;
}

function makeChecks(n, res) {
  if (checkFizz(n)) {
    res.push('fizz');
  } else if (checkBuzz(n)) {
    res.push('buzz');
  } else if (checkFizzBuzz(n)) {
    res.push('fizzBuzz');
  } else if (checkBug(n)) {
    res.push('bug!');
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let res = [];
  for (let number of numbers) {
    makeChecks(number, res);
  }
  return res;
}

function replaceChars(phrase, object) {
  let letters = phrase.split('');
  for (let letter = 0; letter < letters.length; letter += 1) {
    if (object[letters[letter]]) {
      letters[letter] = object[letters[letter]];
    }
  }
  return letters.join('');
}

let encodeObj = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

let decodeObj = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

// Desafio 9
function encode(param1) {
  let res = replaceChars(param1, encodeObj);
  return res;
}

function decode(param1) {
  let res = replaceChars(param1, decodeObj);
  return res;
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
