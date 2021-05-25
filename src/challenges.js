// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(10, 50));

// Desafio 3
//Desafio realizado com a ajuda do estudante Erick Santos :D
function splitSentence(texto) {
  return texto.split(" ");
}

console.log(splitSentence('vamo que vamo'));

// console.log("Ja, que, line".split(","))

// Desafio 4
function concatName(array) {
  let text = array[array.length - 1] + " , " + array[0];
  return text;
}
  
console.log(concatName(['Diego', 'Jaqueline', 'Mel', 'Verusca']))


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
