// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let arrayDeStrings = string.split(' ');
  return arrayDeStrings;
}

console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  let concatItens = `${lastItem}, ${firstItem}`;
  return concatItens;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let results = vitorias + empates;
  return results;
}

console.log(footballPoints(0, 0));

// Desafio 6

function highestCount(numeros) {
  let maiorNumero = Math.max(...numeros);
  let cont = 0;
  for (let indice in numeros) { 
    if (maiorNumero === numeros[indice]) {
      cont += 1;
    }
  }
  return cont;
}

console.log(highestCount([-2, -50, -2, -1, -1, -1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let d1 = mouse - cat1;
  let d2 = mouse - cat2;
  if (Math.abs(d1) === Math.abs(d2)) {
    return 'os gatos trombam e o rato foge';
  } if (Math.abs(d1) < Math.abs(d2)) {
    return 'cat1';
  } return 'cat2';
}

console.log(catAndMouse(0, 3, 2));

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let array = [];
  for (let i in arrayNumeros) {
    if (arrayNumeros[i] % 3 === 0 && arrayNumeros [i] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (arrayNumeros[i] % 3 === 0) {
      array.push('fizz');
    } else if (arrayNumeros[i] % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

console.log(fizzBuzz([50, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');

  return string;
}

console.log(encode('hello'));

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');

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
