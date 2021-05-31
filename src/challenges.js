// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ( (base * height) / 2)
}

// Desafio 3
function splitSentence(frase) {
  let splitado = frase.split(" ");
  return splitado;
}

// Desafio 4
function concatName(parametro) {
  let param1 = param1.shift();
  let param2 = param2.pop();
  return ("param1", "param2");
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties)
}

// Desafio 6
function highestCount(numbers) {
  let maior = 0;
  let contador = 0;
  for(i = 0; i < numbers.lenght; i += 1) {
    if (maior < numbers[i]) {
      maior = numbers[i];
    }
  }
  for(i2 = 0; i2 < numbers.lenght; i2 += 1) {
    if (maior == numbers[i2]) {
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
