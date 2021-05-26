/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  let resultado = false;
  if (value1 === true && value2 === true) {
    resultado = true;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let resultado = 0;
  resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(stringInicial) {
  // seu código aqui
  let arrayResultado = [];
  arrayResultado = stringInicial.split(' ');
  return arrayResultado;
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  let stringResultado = '';
  stringResultado = arrayStrings.slice(-1).join();
  stringResultado += ', ';
  stringResultado += arrayStrings.slice(0, 1).join();
  return stringResultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontoVitoria = 3;
  let pontoEmpate = 1;
  let resultado = 0;
  resultado = (wins * pontoVitoria) + (ties * pontoEmpate);
  return resultado;
}

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let auxiliarResultado = 0;
  let resultado = null;
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (auxiliarResultado < arrayNumeros[index]) {
      auxiliarResultado = arrayNumeros[index];
    }
  }
  for (let index1 = 0; index1 < arrayNumeros.length; index1 += 1) {
    if (auxiliarResultado === arrayNumeros[index1]) {
      resultado += 1;
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resultado = '';
  if (cat1 > cat2 && cat1 < mouse) {
    resultado = 'cat1';
    return resultado;
  } if (cat2 > cat1 && cat2 < mouse) {
    resultado = 'cat2';
    return resultado;
  } if (cat1 === cat2) {
    resultado = 'os gatos trombam e o rato foge';
    return resultado;
  }
}

console.log(catAndMouse(10, 4, 22));

// Desafio 8
function fizzBuzz(arrayNumeros) {
  // seu código aqui
  let arrayRetorno = [];
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
      arrayRetorno.push('fizzBuzz');
    } else if (arrayNumeros[index] % 3 === 0) {
      arrayRetorno.push('fizz');
    } else if (arrayNumeros[index] % 5 === 0) {
      arrayRetorno.push('buzz');
    } else {
      arrayRetorno.push('bug!');
    }
  }
  return arrayRetorno;
}

// Desafio 9
function encode(palavra) {
  // seu código aqui
  let palavraCodificada = palavra;
  for (let index = 0; index < palavra.length; index += 1) {
    if (palavra[index] === 'a') {
      palavraCodificada = palavraCodificada.replace('a', '1');
    } else if (palavra[index] === 'e') {
      palavraCodificada = palavraCodificada.replace('e', '2');
    } else if (palavra[index] === 'i') {
      palavraCodificada = palavraCodificada.replace('i', '3');
    } else if (palavra[index] === 'o') {
      palavraCodificada = palavraCodificada.replace('o', '4');
    } else if (palavra[index] === 'u') {
      palavraCodificada = palavraCodificada.replace('u', '5');
    }
  }
  return palavraCodificada;
}

function decode(palavra) {
  // seu código aqui
  let palavraDecodificada = palavra;
  for (let index = 0; index < palavra.length; index += 1) {
    if (palavra[index] === '1') {
      palavraDecodificada = palavraDecodificada.replace('1', 'a');
    } else if (palavra[index] === '2') {
      palavraDecodificada = palavraDecodificada.replace('2', 'e');
    } else if (palavra[index] === '3') {
      palavraDecodificada = palavraDecodificada.replace('3', 'i');
    } else if (palavra[index] === '4') {
      palavraDecodificada = palavraDecodificada.replace('4', 'o');
    } else if (palavra[index] === '5') {
      palavraDecodificada = palavraDecodificada.replace('5', 'u');
    }
  }
  return palavraDecodificada;
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
