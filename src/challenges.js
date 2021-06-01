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
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  let maiores = 0;
  for (let maior of array) {
    if (array[array.length - 1] === maior) {
      maiores += 1;
    }
  }
  return maiores;
}
// Referencia para Sort: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance2 < distance1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let status = [];
  for (let dividendo of arrayDeNumeros) {
    if (dividendo % 3 === 0 && dividendo % 5 !== 0) {
      status.push('fizz');
    } else if (dividendo % 5 === 0 && dividendo % 3 !== 0) {
      status.push('buzz');
    } else if (dividendo % 5 === 0 && dividendo % 3 === 0) {
      status.push('fizzBuzz');
    } else {
      status.push('bug!');
    }
  }
  return status;
}

// Desafio 9
function encode(stringEncode) {
  let result = '';
  for (let letter of stringEncode) {
    if (letter === 'a') {
      result += '1';
    } else if (letter === 'e') {
      result += '2';
    } else if (letter === 'i') {
      result += '3';
    } else if (letter === 'o') {
      result += '4';
    } else if (letter === 'u') {
      result += '5';
    } else {
      result += letter;
    }
  }
  return result;
}

function decode(stringDecode) {
  let result = '';
  for (let letter of stringDecode) {
    if (letter === '1') {
      result += 'a';
    } else if (letter === '2') {
      result += 'e';
    } else if (letter === '3') {
      result += 'i';
    } else if (letter === '4') {
      result += 'o';
    } else if (letter === '5') {
      result += 'u';
    } else {
      result += letter;
    }
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
