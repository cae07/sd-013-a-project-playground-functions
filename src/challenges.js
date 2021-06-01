// Iniciando o projeto
// Desafio 1
function compareTrue(v1, v2) {
  if ((v1 === true) && (v2 === true)) {
    return true;
  } 
    return false;
} 

// Desafio 2
function calcArea(base, height) {
  calcArea = (base * height) / 2;
    return calcArea;
}

// Desafio 3
function splitSentence() {
  let split = string.split(' ');
  } 
  return split;
}

  // Desafio 4
  function concatName(array) {
    for (let index = 0; index < array.length; index += 1) {
      let concatName (`${array[array.length -1]}, ${array[0]}`);
    }
    return concatName;
  }


// Desafio 5
function footballPoints() {
  function footballPoints(wins, ties) {
    let winsPoint = 3;
    let tiesPoint = 1;
  
    let numberWins = wins * winsPoint;
    let numberTies = ties * tiesPoint;
  
    return numberWins + numberTies;
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
