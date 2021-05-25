// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let arraySeparado = frase.split(' ');
  return arraySeparado;
}

// Desafio 4
function concatName(arrayX) {
  // seu código aqui
  let ultimoPrimeiro = '';
  for (let i = arrayX.length; i > 0; i -= 1) {
    if (i === arrayX.length) {
      ultimoPrimeiro = arrayX[arrayX.length - 1] + ', ';
    } else if (i === 1) {
      ultimoPrimeiro += arrayX[0];
    }
  }
  return ultimoPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = 0;
  pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  // seu código aqui
  let maiorNumero = 0;
  let contador = 0;
  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    if (i === 0) {
      maiorNumero = arrayDeNumeros[0];
    }
    if (maiorNumero <= arrayDeNumeros[i]) {
      maiorNumero = arrayDeNumeros[i];
    }
  }
  for (let j = 0; j < arrayDeNumeros.length; j += 1) {
    if (maiorNumero === arrayDeNumeros[j]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancat1 = cat1 - mouse;
  let distancat2 = cat2 - mouse;
  let resultado = '';
  if (distancat1 < 0) {
    distancat1 *= -1;
  }
  if (distancat2 < 0) {
    distancat2 *= -1;
  }
  if (distancat1 === distancat2) {
    resultado = 'os gatos trombam e o rato foge';
    return resultado;
  }
  if (distancat1 < distancat2) {
    resultado = 'cat1';
    return resultado;
  } else if (distancat2 < distancat1) {
    resultado = 'cat2';
    return resultado;
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(frase) {
  // seu código aqui
  let codigo = '';
  let atuateste ; 
  for (let i =0; i < frase.length; i += 1) {
    switch (frase[i]) {
      case 'a':
        codigo +='1';
        break;
      case 'e':
        codigo += '2';
        break;
      case 'i':
        codigo += '3';
        break;
      case 'o':
        codigo += '4';
        break;
      case 'u':
        codigo += '5';
        break;
      default:
        codigo += frase[i]
        break;
    }
    atuateste = frase[i]
  }
  return codigo;
}

function decode(frase) {
  // seu código aqui
  let codigo = '';
  let atuateste ; 
  for (let i =0; i < frase.length; i += 1) {
    switch (frase[i]) {
      case '1':
        codigo +='a';
        break;
      case '2':
        codigo += 'e';
        break;
      case '3':
        codigo += 'i';
        break;
      case '4':
        codigo += 'o';
        break;
      case '5':
        codigo += 'u';
        break;
      default:
        codigo += frase[i]
        break;
    }
    atuateste = frase[i]
  }
  return codigo;
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
