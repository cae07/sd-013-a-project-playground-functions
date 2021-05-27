// Desafio 1
function compareTrue(param1, param2) {
  let resultado;

  if (param1 === true && param2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(param1, param2) {
  let resultado = (param1 * param2) / 2;

  return resultado;
}

// Desafio 3
function splitSentence(param1) {
  let resultado = param1.split(' ');

  return resultado;
}

// Desafio 4
function concatName(array) {
  let resultado = `${array[array.length - 1]}, ${array[0]}`;

  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);

  return pontos;
}

// Desafio 6
function highestCount(arrayTest) {
  let maiorNumero = arrayTest[0];
  let counter = 0;

  for (let index = 0; index < arrayTest.length; index += 1) {
    if (arrayTest[index] > maiorNumero) {
      maiorNumero = arrayTest[index];
      counter = 1;
    } else if (arrayTest[index] === maiorNumero) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1Pegou = 'cat1';
  let gato2Pegou = 'cat2';
  let ratoFugiu = 'os gatos trombam e o rato foge';

  if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) {
    return gato1Pegou;
  }
  if ((Math.abs(cat2 - mouse)) < (Math.abs(cat1 - mouse))) {
    return gato2Pegou;
  }
  if ((Math.abs(cat2 - mouse)) === (Math.abs(cat1 - mouse))) {
    return ratoFugiu;
  }
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
