// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let arraySeparado = frase.split(" ");
  return arraySeparado;
}

// Desafio 4
function concatName(arrayX) {
  // seu código aqui
  let ultimoPrimeiro = "";
  for(let i = arrayX.length ; i > 0; i-= 1)
  {
    if (i === arrayX.length) {
      ultimoPrimeiro = arrayX[arrayX.length - 1] + ", ";
    }
    else if(i === 1) {
      ultimoPrimeiro += arrayX[0];
    }
  }
  return ultimoPrimeiro;

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = 0;
  pontos = (wins * 3) + ties
  return pontos;
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
