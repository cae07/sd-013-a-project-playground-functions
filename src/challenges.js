// Desafio 1 - Compara se dois valores são true
function compareTrue(num1,num2) {
  if (num1 && num2 == true){
  return true;
  }else {return false;}
}

// Desafio 2 - calcula a área de um triângulo
function calcArea(base, height) {
  let result = (base * height) / 2
  return result;
}

// Desafio 3 - cria um array com as strings separadas de uma frase
function splitSentence(stringSentence) {
  let array = stringSentence.split(" ");
  return array;
}

// Desafio 4 - concatenação de strings, retornando o primeiro item e o último item de um array
function concatName(arrayString) {
  let result = [];
  for(let i = 0; i < arrayString.length; i+=1){
    if(i==0){
      result.push(arrayString[i])}
    if(i==arrayString.length-1){
      result.push(arrayString[i])}
  }
  result = result.reverse();
  return result.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins*3) + ties;
  return points;
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
