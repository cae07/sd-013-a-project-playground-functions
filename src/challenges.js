const { techList } = require("./challenges2");

// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true ) {
    return true;
  } else {
    return false;
  }
};

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return area
};

// Desafio 3
function splitSentence(frase) {
  let split = frase.split(" ");
  return split
};

// Desafio 4
function concatName(array) {
  let concat = array[array.length - 1] + ', ' + array[0];
  return concat;
};

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = wins * 3;
  return totalPontos + ties;
};

// Desafio 6
// Com suporte de Luiza Antiques e Josué Lobo

function highestCount(array) {
  let maior = array[0];
  let cont = 0;

  for (let index = 0; index <= array.length - 1; index += 1){
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let i = 0; i <= array.length - 1; i += 1) {
    if (array[i] == maior) {
      cont = cont + 1;
    }
  }
  return cont;
};

// Desafio 7
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  let finalResult; 

  if (dist1 < dist2) {
    finalResult = 'cat1'

  } else if (dist1 > dist2) {
    finalResult = 'cat2'

  } else {
    finalResult = "os gatos trombam e o rato foge"
  };
  return finalResult;
};

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
