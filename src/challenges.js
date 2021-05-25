// Desafio 1
function compareTrue(par1, par2) {
  if (par1 == true && par2 == true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");  
}

// Desafio 4
function concatName(array) {
  for(let i = array.length-1; i = array.length-1; i++){
    resultado = [array[i] + ", " + array[0] ]
    resultado = resultado.toString();
  return resultado
  } 
}
console.log(concatName(['foguete', 'não', 'tem', 'ré'],))

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = wins * 3 + ties;
  return points
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
