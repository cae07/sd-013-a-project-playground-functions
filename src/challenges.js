// Desafio 1
function compareTrue(valorA, valorB) {
  if(valorA === true && valorB === true){
    return true;
  }
  else{
    return false;
  }
  
}

// Desafio 2
function calcArea(base, height) {
  
    var multi = ((base * height)/2);
  
  return multi
}


// Desafio 3
function splitSentence(frase) {
  var resultado = frase.split(" ");

  return resultado
}

// Desafio 4
function concatName(nomes) { 
  var resultado = (nomes[nomes.length -1] + ", " + nomes[0]) 
 return resultado;
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
