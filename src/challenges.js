// Desafio 1
function compareTrue(Param1, Param2) {
  if( Param1 == true && Param2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(stringASplitar) {
  return stringASplitar.split(" ")
}

// Desafio 4
function concatName(arrayAInformar) {
  let primeiroItem = arrayAInformar[0];
  let ultimoItem = arrayAInformar[arrayAInformar.length-1]
  return (ultimoItem + ", " + primeiroItem)
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  //Primeiro identifico qual o maior número
  let maiorNumero = 0;
  for(let index = 0; index <= arrayDeNumeros.length; index += 1){
    if (maiorNumero < arrayDeNumeros[index]) {
      maiorNumero = arrayDeNumeros[index];
    }
  }
  //Com o primeiro identificado busca quantas vezes ele se repete
  let qtdRepeticao = 0;
  for (let index2 = 0; index2 <= arrayDeNumeros.length; index2 += 1){
    if (arrayDeNumeros[index2] === maiorNumero) {
      qtdRepeticao += 1;
    }
  }
  return qtdRepeticao;
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
