// Desafio 1
function compareTrue(numero1, numero2) {
  if (numero1 === true && numero2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(trybe) {
  let arr = trybe.split(' ');

  return arr;
}

// Desafio 4
function concatName(array) {
  let result = array[array.length - 1] + ', ' + array[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  let total = vitoria + empate;

  return total;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let numeroMaior = arrayDeNumeros[0];
  let contador = 0;
  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    if (arrayDeNumeros[i] > numeroMaior) {
      contador = 0;
      numeroMaior = arrayDeNumeros[i];
    }
    if (numeroMaior === arrayDeNumeros[i]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 > distCat2) {
    return 'cat2';
  } if (distCat2 > distCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let novoArray = [];
  for (let index of array) {
    let retorno = 'bug!';
    if (index % 15 === 0) {
      retorno = 'fizzBuzz';
    } else if (index % 3 === 0) {
      retorno = 'fizz';
    } else if (index % 5 === 0) {
      retorno = 'buzz';
    }  novoArray.push(retorno);
  } return novoArray;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
