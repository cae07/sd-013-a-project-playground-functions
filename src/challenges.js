// Desafio 1
function compareTrue(Valor1, Valor2) {
  if( Valor1 === true && Valor2 === true) {
  return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2
  return resultado
}

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(" ")
  return resultado
}

// Desafio 4
function concatName(array) {
  let concat = array[array.length -1] + ", " + array[0]
  
  return concat
}

// Desafio 5
function footballPoints(win, tie) {
  let winPoints = win * 3
  let tiePoints = tie * 1
  let resultado = winPoints + tiePoints

  return resultado
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
