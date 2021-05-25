// Desafio 1
function compareTrue(valor, valor1) {
  if (valor && valor1) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(texto) {
  return texto.split(' ');
}

// Desafio 4
function concatName(listaDeNomes) {
  return `${listaDeNomes[listaDeNomes.length - 1]}, ${listaDeNomes[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalDePonstos = 3 * wins + 1 * ties;
  return totalDePonstos;
}

// Desafio 6
function highestCount(listaDeNumeros) {
  let maior = listaDeNumeros[0];
  let repetido = 0;
  for (numero of listaDeNumeros) {
    if (numero >= maior) {
      maior = numero;
    }
  }
  for (numero of listaDeNumeros) {
    if (numero === maior) {
      repetido += 1;
    }
  }
  return repetido;
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
