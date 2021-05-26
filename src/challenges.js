// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  let last = arrayString[arrayString.length - 1];
  let first = arrayString[0];

  const answer = [last, first];
  return answer.join(', ');
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  for (let i = 0; i < wins; i++) {
    points = points + 3;
  }
  for (let i = 0; i < ties; i++) {
    points = points + 1;
  }

  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let aux = -100;
  let count = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (aux < arrayNumbers[i]) {
      aux = arrayNumbers[i];
      count = 1;
    } else if (aux === arrayNumbers[i]) {
      count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let diffAB = Math.abs(mouse - cat1);
  let diffAC = Math.abs(mouse - cat2);
  if (diffAB < diffAC) {
    return 'cat1';
  } else if (diffAC < diffAB) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayFB = [];
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0) {
      arrayFB.push('fizzBuzz');
    } else if (arrayNumbers[i] % 5 === 0) {
      arrayFB.push('buzz');
    } else if (arrayNumbers[i] % 3 === 0) {
      arrayFB.push('fizz');
    } else arrayFB.push('bug!');
  }
  return arrayFB;
}

// Desafio 9
function encode(string) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let newStr = string.replace(/[aeiou]/g, (m) => code[m]);
  return newStr;
}

function decode(codedString) {
  let uncode = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let newStr = codedString.replace(/[12345]/g, (m) => uncode[m]);
  return newStr;
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
