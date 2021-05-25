// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let sum = (base * height) / 2;
  return sum;
}

// Desafio 3
function splitSentence(stringtosplit) {
  let splits = stringtosplit.split(' ');
  return splits;
}

// Desafio 4
function concatName(string) {
  let orderString = string[string.length - 1] + ', ' + string[0];
  return orderString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winspoints = 3 * wins;
  let tiespoints = 1 * ties;
  let pontos = winspoints + tiespoints;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let maior = numeros[0];
  let contNumero = 0;
  for (index = 0; index < numeros.length; index += 1){
    if (numeros[index] > maior){
      maior = numeros[index];      
    }
  }
  for (index2 = 0; index2 < numeros.length; index2 += 1){
    if (numeros[index2] === maior){
      contNumero +=1;
    }
  }
  return contNumero;
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
