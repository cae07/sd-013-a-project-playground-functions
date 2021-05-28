// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

function calcArea(base, height) {
  return (base * height) / 2;
}

function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  resultado = wins * 3 + ties * 1;

  return resultado;
}
// Desafio 6
function highestCount(array) {
  let maiorValor = array[0];
  let vezesNumero = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (maiorValor < array[i]) {
      maiorValor = array[i];
    }
  }

  for (let i = 0; i < array.length; i += 1) {
    if (maiorValor === array[i]) {
      vezesNumero += 1;
    }
  }
  return vezesNumero;
}

// Desafio
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }

  if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  }

  if (distanciaCat2 === distanciaCat1) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let listFizzBuzz = [];

  for (let numero of array) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      listFizzBuzz.push('fizzBuzz');
    } else if (numero % 5 === 0) {
      listFizzBuzz.push('buzz');
    } else if (numero % 3 === 0) {
      listFizzBuzz.push('fizz');
    } else {
      listFizzBuzz.push('bug!');
    }
  }
    return listFizzBuzz;
}
// Desafio 9
function encode(encode) {
  
}
function decode(decode) {
  
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
