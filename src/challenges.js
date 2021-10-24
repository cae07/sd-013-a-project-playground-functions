// Desafio 1
function compareTrue(value1, value2) {
  let comparativo = false;
  if (value1 === true && value2 === true) {
    comparativo = true;
  } else {
    comparativo = false;
  }
  return comparativo;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
  // seu código aqui
}

// Desafio 3
function splitSentence(string) {
  let palavra = [''];
  let indicePalavra = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      indicePalavra++;
      palavra[indicePalavra] = '';
    } else {
      palavra[indicePalavra] += string[i];
    }
  }
  console.log(palavra);
  return palavra;
// seu código aqui
}

// Desafio 4
function concatName(array) {
  let ultimaPosicao = array.length;
  ultimaPosicao--;
  let retorno = [''];
  retorno[0] = array[ultimaPosicao];
  retorno[1] = array[0];
  let retornoStream = `${retorno[0]}, ${retorno[1]}`;
  return retornoStream;
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (3 * wins) + ties;
  return pontos;
  // seu código aqui
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let maior = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maior) {
      maior = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === maior) {
      count += 1;
    }
  }
  return count;
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 == distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }

  return 'cat1';

  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let retorno = [];
  let indiceRetorno = 0;
  for (let i = 0; i < array.length; i++) {
    if ((array[i] % 3) === 0) {
      if ((array[i] % 5) === 0) {
        retorno[indiceRetorno] = 'fizzBuzz';
        indiceRetorno++;
      } else {
        retorno[indiceRetorno] = 'fizz';
        indiceRetorno++;
      }
    } else if ((array[i] % 5) == 0) {
      retorno[indiceRetorno] = 'buzz';
      indiceRetorno++;
    } else {
      retorno[indiceRetorno] = 'bug!';
      indiceRetorno++;
    }
  }
  return retorno;
}

// Desafio 9
function encode(string) {
  let stringEncode = string.replace(/a/g, '1');
  stringEncode = stringEncode.replace(/e/g, '2');
  stringEncode = stringEncode.replace(/i/g, '3');
  stringEncode = stringEncode.replace(/o/g, '4');
  stringEncode = stringEncode.replace(/u/g, '5');
  return stringEncode;
  // seu código aqui
}
function decode(string) {
  let stringDecode = string.replace(/1/g, 'a');
  stringDecode = stringDecode.replace(/2/g, 'e');
  stringDecode = stringDecode.replace(/3/g, 'i');
  stringDecode = stringDecode.replace(/4/g, 'o');
  stringDecode = stringDecode.replace(/5/g, 'u');
  return stringDecode;
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
