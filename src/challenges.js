// Desafio 1
function compareTrue(v1, v2) {
  // seu código aqui
  if (v1 === true && v2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calculoArea = (base * height) / 2;
  return calculoArea;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(nome) {
   // seu código aqui
  for (let index = 0; index < nome.length; index += 1) {
    concatName = (`${nome[nome.length - 1]}, ${nome[0]}`);
  }
  return concatName;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsGames = wins * 3;
  let tiesGames = ties * 1;
  return winsGames + tiesGames;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let higherNum = array[0];
  let contador = 0;

  for (let index = 0; index < array.lenght; index += 1) { 
    if( higherNum < array[index]){ 
      higherNum = array[index];
    }
  }
  for (let index2 = 0; index2 <array.lenght; index2 += 1){ 
    if(array[index2] === higherNum){ 
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
