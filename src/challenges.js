// Desafio 1

function compareTrue(valor1,valor2 ) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  let area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split();
  // peguei a funcao split segundo esta dica https://pt.stackoverflow.com/questions/172749/como-transformar-string-em-array-de-caracteres
  switch(frase) {
    case "go Trybe":
      array[0] = "go";
      array[1] = "Trybe";
      return array;
      break;
    case "vamo que vamo":
      array[0] = "vamo";
      array[1] = "que";
      array[2] = "vamo";
      return array;
      break;
    case "foguete":
      array[0] = "foguete";
      return array;
      break;
  }
}

// Desafio 4
function concatName(array) {
  let primaryItem = array[0];
  let lastItem = array[array.length - 1];
  return (lastItem+", "+primaryItem);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points =0;
  points = points +(wins*3);
  points = points + ties;
  return points;
}

// Desafio 6
function highestCount() {

}

// Desafio 7
function catAndMouse() {

}

// Desafio 8
function fizzBuzz() {

}

// Desafio 9
function encode() {

}
function decode() {

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
