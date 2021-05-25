// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let palavra = '';
  let palavras = [];
  for (let i = 0; i < frase.length; i += 1) {
    let letra = frase[i];
    if (i === (frase.length - 1)) {
      palavra += letra;
      palavras.push(palavra);
    } else if (letra === ' ') {
      palavras.push(palavra);
      palavra = '';
    } else {
      palavra += letra;
    }
  }
  return palavras;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let contagem = 0;

  for (const numero of numeros) {
    if (maiorNumero < numero) { maiorNumero = numero; }
  }
  for (const numero of numeros) {
    if (maiorNumero === numero) { contagem += 1; }
  }

  return contagem;
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
