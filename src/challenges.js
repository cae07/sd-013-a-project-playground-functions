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

// Numero de ocorrencias
function quantidadeDeOcorrencias(array, numero) {
  let contagem = 0;
  for (const n of array) {
    if (numero === n) { contagem += 1; }
  }

  return contagem;
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];

  for (const numero of numeros) {
    if (maiorNumero < numero) { maiorNumero = numero; }
  }

  return quantidadeDeOcorrencias(numeros, maiorNumero);
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
  let divisivel = 'bug!';
  if ((numero % 3) === 0 && (numero % 5) === 0) {
    divisivel = 'fizzBuzz';
  } else if ((numero % 3) === 0) {
    divisivel = 'fizz';
  } else if ((numero % 5) === 0) {
    divisivel = 'buzz';
  }
  return divisivel;
}

// Desafio 8
function fizzBuzz(numeros) {
  let resultado = [];

  for (const numero of numeros) {
    resultado.push(divisivelPor(numero));
  }
  return resultado;
}

// Desafio 9
// usado como referencia https://qastack.com.br/programming/1098040/checking-if-a-key-exists-in-a-javascript-object
function encode(frase) {
  let fraseCodificada = '';
  let codigo = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (const letra of frase) {
    if (codigo[letra] !== undefined) {
      fraseCodificada += codigo[letra];
    } else { fraseCodificada += letra; }
  }

  return (fraseCodificada);
}

function decode(frase) {
  let fraseDecodificada = '';
  let codigo = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (const letra of frase) {
    if (codigo[letra] !== undefined) {
      fraseDecodificada += codigo[letra];
    } else { fraseDecodificada += letra; }
  }

  return (fraseDecodificada);
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
