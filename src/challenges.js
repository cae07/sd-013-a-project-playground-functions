// Desafio 1
function compareTrue(value1, value2) {
  if(value1 == true && value2 == true){
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  calcArea = (base * height) / 2;
  return calcArea;
}

// Desafio 3
function splitSentence(go) {
  let result = go.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let sum = (array[array.length - 1]) + ', ' + array[0];
  return sum;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = 3;
  let tiesPoints = 1;
  let numberWins = wins * winsPoints;
  let numberTies = ties * tiesPoints;
  return numberWins + numberTies;
}

// Desafio 6
function highestCount(array) {
  let contador = 0;
  let maiorNumero = array[0];
  for(let i = 1; i < array.length; i += 1){
    if(maiorNumero < array[i]){
      maiorNumero = array[i];
    }
  }
  for(let i = 0; i < array.length; i += 1){
    if(maiorNumero === array[i]){
      contador += 1;
    }
  }
  return contador;
}
// Desafio 7
function catAndMouse() {
  // seu código aqui
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
