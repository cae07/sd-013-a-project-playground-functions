// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
// Referência: O que é JAVASCRIPT SPLIT? Como usar essa função? https://www.youtube.com/watch?v=O2OZir_ba1I

function splitSentence(string) {
  let charact = string.split(' ');
  return charact;
}

// Desafio 4
function concatName(arrayString) {
  let conca = (arrayString[arrayString.length - 1] + ', ' + arrayString[0]);
  return conca;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + ties;
  return pontuacao;
}

// Desafio 6
function highestCount(arrayNum) {
  let maiorNum = arrayNum[0];
  let total = 0;

  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] > maiorNum) {
      maiorNum = arrayNum[index];
    }
  }
  for (let index2 = 0; index2 < arrayNum.length; index2 += 1) {
    if (arrayNum[index2] === maiorNum) {
      total += 1;
    }
  }
  return total;
}

// Desafio 7
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {  
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);
  
  if (distancia1 < distancia2) {
    return 'cat1';
  } else if (distancia2 < distancia1) {
    return 'cat2';
  } else if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge';
  }
}

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
