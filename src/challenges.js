// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(meuNome) {
  return meuNome.split(' ');
}

// Desafio 4
function concatName(arrayOfStrings) {
  return `${arrayOfStrings[arrayOfStrings.length - 1]}, ${arrayOfStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPts = (3 * wins);
  let tiePts = (1 * ties);
  let champPoints = winPts + tiePts;
  return champPoints;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let contador = 0;
  let maiorNumero = arrayOfNumbers[0];
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (maiorNumero < arrayOfNumbers[index]) {
      maiorNumero = arrayOfNumbers[index];
    }
  }
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (maiorNumero === arrayOfNumbers[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs (mouse - cat1);
  let distance2 = Math.abs (mouse - cat2);
  let result = '';
  if (distance1 === distance2) {
    result = 'os gatos trombam e o rato foge';
  } else if (distance1 < distance2) {
    result = 'cat1';
  } else {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz(input) {
  let aux = [];
  for (let index = 0; index < input.length; index += 1) {
    if (input[index] % 3 === 0 && input[index] % 5 === 0) {
      aux.push('fizzBuzz');
    } else if (input[index] % 3 === 0) {
      aux.push('fizz');
    } else if (input[index] % 5 === 0) {
      aux.push('buzz');
    } else {
      aux.push('bug!');
    }
  }
  return aux;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/gi, '1');
  string = string.replace(/e/gi, '2');
  string = string.replace(/i/gi, '3');
  string = string.replace(/o/gi, '4');
  string = string.replace(/u/gi, '5');
  return string;
}
function decode(string) {
  string = string.replace(/1/gi, 'a');
  string = string.replace(/2/gi, 'e');
  string = string.replace(/3/gi, 'i');
  string = string.replace(/4/gi, 'o');
  string = string.replace(/5/gi, 'u');
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
