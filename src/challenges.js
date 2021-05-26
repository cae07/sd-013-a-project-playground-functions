// Desafio 1
function compareTrue(value1, value2) {
  
  if (value1 === true && value2 === true) {
    return true;

  } else {

    return false;
  }
};

function calcArea(base, height) {
 
  return (base * height) / 2.
};


function splitSentence() {
  return 
}

// Desafio 4
function concatName(array) {
  
  return `${array[array.length -1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
 
  resultado = (wins * 3) + (ties * 1);

  return resultado;
}
console.log(footballPoints(14, 8));
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
