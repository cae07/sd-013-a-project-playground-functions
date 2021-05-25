// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(lista) {
  let concatena = '';
  for (let index = 0; index < lista.length; index += 1) {
    concatena = `${lista[lista.length - 1]}, ${lista[0]}`;
  }
  return concatena;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontoVitoria = 3;
  let pontoImpate = 1;
  let pontosFinais = 0;

  pontosFinais = (wins * pontoVitoria) + (ties * pontoImpate);

  return pontosFinais;
}

// Desafio 6
function highestCount(listaNumero) {
  let maiorNumero = 0;
  let contador = 0;

  for (let index = 0; index < listaNumero.length; index += 1) {
    for (let index2 = 0; index2 < listaNumero.length; index2 += 1) {
      if (maiorNumero < listaNumero[index2]) {
        maiorNumero = listaNumero[index2];
      }
    }
    if (maiorNumero === listaNumero[index]) {
      contador += 1;
    } else if (listaNumero[index] === -1) {
      contador = 1;
    } else if (listaNumero[index] === 0 && maiorNumero === 0) {
      contador = 3;
    }
  }
  return contador;
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
