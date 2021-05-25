// Desafio 1
function compareTrue(valor1,valor2) {
  if (valor1==true && valor2==true){
    return true;

  } else {
     return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  let area = (base * height) / 2
  return area
}
 
function splitSentence(palavra) {
  let split = palavra.split[" "];

  return split
}
// Desafio 4
function concatName(array) {
  
  let concatenacao = array[array.length -1] + "," + array[0]
  
    return concatenacao
} 

// Desafio 5
function footballPoints(vitoria, empate) {
  let wins = vitoria * 3
  let ties = empate *1
  let resultadoDoCampeonato = (wins+ties)
  return resultadoDoCampeonato
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
