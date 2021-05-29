// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let tri = base * height;
  tri /= 2;
  return tri;
}
// Desafio 3
function splitSentence(texto) {
  // seu código aqui
  let tratamento;
  tratamento = texto.split(' ');
  return tratamento;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let nome = array[array.length - 1];
  let nome1 = array[0];
  let resultado = '';
  resultado = `${nome}, ${nome1}`;

  return resultado;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let contador;
  contador = wins * 3 + ties * 1;
  return contador;
}

// Desafio 6
function highestCount(harrei) {
  // seu código aqui
  let contador = 0;
  let maior = 0;
  for (let i in harrei) {
    if (harrei[0] === harrei[i]) {
      maior = harrei[i];
    } else if (maior < harrei[i]) {
      maior = harrei[i];
    }
  }
  for (let index = 0; index < harrei.length; index += 1) {
    if (maior === harrei[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (cat1 < cat2 && cat1 > 0) {
    return 'cat1';
  }
  if (cat1 > cat2 && cat2 > 0) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let vazio = [];
  for (let key in array) {
    if (array[key] % 3 === 0 && array[key] % 5 === 0) {
      vazio.push('fizzBuzz');
    } else if (array[key] % 3 === 0) {
      vazio.push('fizz');
    } else if (array[key] % 5 === 0) {
      vazio.push('buzz');
    } else {
      vazio.push('bug!');
    }
  }
  return vazio;
}

// Desafio 9
function encode(texto) {
  // seu código aqui
  let resultado = '';
  resultado = texto.replace(/a/g, 1);
  resultado = resultado.replace(/e/g, 2);
  resultado = resultado.replace(/i/g, 3);
  resultado = resultado.replace(/o/g, 4);
  resultado = resultado.replace(/u/g, 5);
  return resultado;
}
function decode(texto) {
  // seu código aqui
  let resultado = '';
  resultado = texto.replace(/1/g, 'a');
  resultado = resultado.replace(/2/g, 'e');
  resultado = resultado.replace(/3/g, 'i');
  resultado = resultado.replace(/4/g, 'o');
  resultado = resultado.replace(/5/g, 'u');
  return resultado;
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
