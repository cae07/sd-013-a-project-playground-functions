// Desafio 1
function compareTrue(n1, n2) {
  // seu código aqui
  if(n1 == true && n2 == true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return base * height / 2;
}

// Desafio 3

function splitSentence(string) {
  // seu código aqui
  // Tive ideia a partir deste site https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,das%20substrings%20resultantes%20no%20array.
  //o metodo split separa minha cadeia de caracteres em um array a partir de um separador como parametro(no caso o espaço entre cada palavra)
  return string.split(" ")
}

// Desafio 4

function concatName(array) {
  // seu código aqui
  let conctArray = array[array.length-1] + ", " + array[0];
  return conctArray;
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
