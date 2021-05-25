// Desafio 1
function compareTrue(param1, param2) {
  let resultado;

  if ( param1 === true && param2 === true) {  
    resultado = true;  
  } else {  
  resultado = false;  
  }  
  return resultado;
} 

// Desafio 2
function calcArea(param1, param2) {
  let resultado = (param1 * param2)/2;
  
  return resultado;
}

// Desafio 3
function splitSentence(param1) {
  let resultado = param1.split(' ');
  
  return resultado;
}

// Desafio 4
let arrayNomes = ['captain', 'my', 'captain']; 

function concatName(array) {
let resultado = `'${array[array.length-1]}, ${array[0]}'`; 

return resultado;
} 

// Desafio 5
function footballPoints() {
  // seu código aqui
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
