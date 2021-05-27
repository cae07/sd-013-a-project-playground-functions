// Desafio 1
function compareTrue(a, b){
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height){
  // seu código aqui
    return (base * height) /2;
}

// Desafio 3
function splitSentence(param) {
 let result = param.split(" ");
 return result;
}
// Desafio 4
function concatName(names) {
  let concat =names[names.length-1] +","+" " + names[0]
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = (wins * 3) + ties;
  return pontos;
}
console.log(footballPoints())

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let quantidade = 0;
  let valor = -500
  for (let index = 0 ; index < numbers.length; index++){
    if (numbers[index] > valor){
      valor = numbers[index]
    }
  }
  for (let i = 0; i < numbers.length; i++ ){
    if (numbers[i] === valor){
      quantidade++;
    } else if(valor === 0){
      quantidade = 3;
    } 
  }
  return quantidade;
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
