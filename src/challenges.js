// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
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
  let result = [];
  result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let guarda = array;
  return `${guarda[guarda.length - 1]}, ${guarda[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function maiorNumero(array) {
  let maior = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return maior;
}

function repete(array, maior) {
  let count = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (maior === array[i]) {
      count += +1;
    }
  }
  return count;
}

function highestCount(array) {
  let maior = maiorNumero(array);
  let count = repete(array, maior);

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disCat1 = Math.abs(mouse - cat1);
  let disCat2 = Math.abs(mouse - cat2);

  if (disCat1 < disCat2) {
    return 'cat1';
  }
  if (disCat1 === disCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function buzzebug(elemento, string) {
  if ((elemento % 3 === 0) && (elemento % 5 === 0)) {
    string.push('fizzBuzz');
  } else if ((elemento % 3 === 0)) {
    string.push('fizz');
  } else if ((elemento % 5 === 0)) {
    string.push('buzz');
  } else {
    string.push('bug!');
  }
  return string;
}

function fizzBuzz(array) {
  let string = [];

  for (let i = 0; i < array.length; i += 1) {
    buzzebug(array[i], string);
  }
  return string;
}

// Desafio 9
function encode(string) {
  let str = string;
  str = str.replace(/a/g, '1');
  str = str.replace(/e/g, '2');
  str = str.replace(/i/g, '3');
  str = str.replace(/o/g, '4');
  str = str.replace(/u/g, '5');

  return str;
}
function decode(string) {
  let str = string;
  str = str.replace(/1/g, 'a');
  str = str.replace(/2/g, 'e');
  str = str.replace(/3/g, 'i');
  str = str.replace(/4/g, 'o');
  str = str.replace(/5/g, 'u');

  return str;
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
