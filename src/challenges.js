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
// eslint-disable-next-line sonarjs/cognitive-complexity
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
function catAndMouse(mouse, cat1, cat2) {
  let vencedor;
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    vencedor = 'cat2';
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    vencedor = 'cat1';
  } else {
    vencedor = 'os gatos trombam e o rato foge';
  }

  return vencedor;
}

// Divisivel por 3 ou 5 = fizzBuzz
function divisivelPor(numero) {
  let divisivel = 0;
  if ((numero % 3) === 0 && (numero % 5) === 0) {
    divisivel = 1;
  } else if ((numero % 3) === 0) {
    divisivel = 2;
  } else if ((numero % 5) === 0) {
    divisivel = 3;
  }
  return divisivel;
}

// Desafio 8
function fizzBuzz(numeros) {
  let resultado = [];

  for (let i = 0; i < numeros.length; i += 1) {
    if (divisivelPor(numeros[i]) === 1) {
      resultado.push('fizzBuzz');
    } else if (divisivelPor(numeros[i]) === 2) {
      resultado.push('fizz');
    } else if (divisivelPor(numeros[i]) === 3) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }

  return resultado;
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
