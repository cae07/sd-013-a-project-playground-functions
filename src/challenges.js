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
  let numero;
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
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGat1 = Math.abs(mouse - cat1);
  let distanciaGat2 = Math.abs(mouse - cat2);
  if (distanciaGat2 === distanciaGat1) {
    return 'os gatos trombam e o rato foge';
  }

  if (distanciaGat1 < distanciaGat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(listaDeNumeros) {
  let saida = [];
  let numero;
  for (numero of listaDeNumeros) {
    // Divisibilidade por 3
    if (numero % 3 === 0 && numero % 5 === 0) {
      saida.push('fizzBuzz');
    } else if (numero % 5 === 0) {
      saida.push('buzz');
    } else if (numero % 3 === 0) {
      saida.push('fizz');
    } else {
      saida.push('bug!');
    }
  }
  return saida;
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
