// Desafio 1
function compareTrue(bollean1, bollean2) {
  let boleano = false;
  if (bollean1 === true && bollean2 === true) {
    boleano = true;
  }
  return boleano;
}

// Desafio 2
function calcArea(base, altura) {
  return ((base * altura) / 2);
}

// Desafio 3
function splitSentence(sentenca) {
  return sentenca.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1].concat(', ', array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));

  // seu código aqui
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = -99;
  let maiorNumeroSeRepete = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  let contador = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (maiorNumero === array[i]) {
      contador += 1;
    }
    maiorNumeroSeRepete = contador;
  }
  return (maiorNumeroSeRepete);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gatoOuRato = '';
  if (cat1 - mouse > cat2 - mouse) {
    gatoOuRato = 'cat2';
  } else if (cat2 - mouse > mouse - cat1) {
    gatoOuRato = 'cat1';
  } else {
    gatoOuRato = 'os gatos trombam e o rato foge';
  }
  return gatoOuRato;
}
function divisivelPortres(numero) {
  let divisivel = false;
  if (numero % 3 === 0) {
    divisivel = true;
  }
  return divisivel;
}

function divisivelPor5(numero) {
  let divisivel = false;
  if (numero % 5 === 0) {
    divisivel = true;
  }
  return divisivel;
}

function divisivelPor3e5(numero) {
  let divisivel = false;
  if (numero % 3 === 0 && numero % 5 === 0) {
    divisivel = true;
  }
  return divisivel;
}
// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let arrayDeResposta = [];
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    let numero = arrayDeNumeros[index];
    if (divisivelPor3e5(numero) === true) {
      arrayDeResposta.push('fizzBuzz');
    } else if (divisivelPor5(numero) === true) {
      arrayDeResposta.push('buzz');
    } else if (divisivelPortres(numero) === true) {
      arrayDeResposta.push('fizz');
    } else {
      arrayDeResposta.push('bug!');
    }
  }
  return arrayDeResposta;
}

// Desafio 9
function encode(string) {
  let decifrador = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let palavraSaida = '';
  for (let index = 0; index < string.length; index += 1) {
    let letraTeste = string[index];
    for (let key in decifrador) {
      if (letraTeste === key) {
        letraTeste = decifrador[key];
      }
    }
    palavraSaida += letraTeste;
  }
  return palavraSaida;
}

function decode(string) {
  let desdecifrador = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let palavraSaida = '';
  for (let index = 0; index < string.length; index += 1) {
    let letraTeste = string[index];
    for (let key in desdecifrador) {
      if (letraTeste === key) {
        letraTeste = desdecifrador[key];
      }
    }
    palavraSaida += letraTeste;
  }
  return palavraSaida;
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
