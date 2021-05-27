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
function splitSentence(frase) {
  frase += ' ';
  let listaPalavra = [];
  let indexEspacos = [];
  let novaListaPalavra = [];
  let palavra = '';

  for (let index = 0; index < frase.length; index += 1) {
    palavra += frase[index];
    if (frase[index] === ' ') {
      indexEspacos.push(index);
      listaPalavra.push(palavra);
      palavra = '';
    } else {
      listaPalavra.push(palavra);
    }
  }
  for (let index = 0; index < indexEspacos.length; index += 1) {
    let novoIndex = indexEspacos[index] - 1;
    novaListaPalavra.push(listaPalavra[novoIndex]);
  }

  return novaListaPalavra;
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
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);

  if (gato1 > gato2) {
    return 'cat2';
  } else if (gato1 < gato2) {
    return 'cat1';
  } else if (mouse === gato1 && mouse === gato2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(listaNumero) {
  let listaFizzBuzz = [];

  for (let index = 0; index < listaNumero.length; index += 1) {
    if (listaNumero[index] % 3 === 0 && listaNumero[index] % 5 === 0) {
      listaFizzBuzz.push('fizzBuzz');
    } else if (listaNumero[index] % 3 === 0) {
      listaFizzBuzz.push('fizz');
    } else if (listaNumero[index] % 5 === 0) {
      listaFizzBuzz.push('buzz');
    } else {
      listaFizzBuzz.push('bug!');
    }
  }

  return listaFizzBuzz;
}

// Desafio 9
function encode(palavra) {
  let letras = ['a', 'e', 'i', 'o', 'u'];
  let numeros = ['1', '2', '3', '4', '5'];
  let indexLetra;
  let palavraEncode = '';

  for (let index = 0; index < palavra.length; index += 1) {
    for (let index2 = 0; index2 < letras.length; index2 += 1) {
      if (palavra[index] === letras[index2]) {
        indexLetra = index2;
      }
    }

    if (palavra[index] !== letras[indexLetra]) {
      palavraEncode += palavra[index];
    } else{
      palavraEncode += numeros[indexLetra];
    }

  }

  return (palavraEncode);
}
function decode(palavra) {
  let letras = ['a', 'e', 'i', 'o', 'u'];
  let numeros = ['1', '2', '3', '4', '5'];
  let indexNumero;
  let palavraDecode = '';

  for (let index = 0; index < palavra.length; index += 1) {
    for (let index2 = 0; index2 < numeros.length; index2 += 1) {
      if (palavra[index] === numeros[index2]) {
        indexNumero = index2;
      }
    }

    if (palavra[index] !== numeros[indexNumero]) {
      palavraDecode += palavra[index];
    } else {
      palavraDecode += letras[indexNumero]
    }
  }

  return palavraDecode;
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
