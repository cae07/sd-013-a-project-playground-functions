// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(strIngs) {
  let arrAy = [];
  arrAy = strIngs.split(' ');
  return arrAy;
}

// Desafio 4
function concatName(palavra) {
  return `${palavra[palavra.length - 1]}, ${palavra[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins;
  let total = 0;

  switch (points) {
  case wins:
    total += 3 * wins;
    break;
  default:
    total += 1 * ties;
    break;
  }
  return total;
}

// Desafio 6
function highestCount(vetor) {
  let cont = 0;
  let numMax = Math.max.apply(null, vetor);

  for (let j = 0; j < vetor.length; j += 1) {
    if (numMax <= vetor[j]) {
      cont += 1;
    }
  }
  return cont;
}
// Desafio 7
function catAndMouse() {
  // seu código aqui
}
// Desafio 8
function fizzBuzz(numes) {
  let palavras = [];

  for (let c = 0; c < numes.length; c += 1) {
    if (numes[c] % 3 === 0 && numes[c] % 5 === 0) {
      palavras.push('fizzBuzz');
    } else if (numes[c] % 5 === 0) {
      palavras.push('buzz');
    } else if (numes[c] % 3 === 0) {
      palavras.push('fizz');
    } else {
      palavras.push('bug!');
    }
  }
  return palavras;
}

// Desafio 9
function encode(palavra) {
  let nomeModificado = '';
  let vogais = ['a', 'e', 'i', 'o', 'u'];

  for (let n = 0; n < palavra.length; n += 1) {
    if (palavra[n] === vogais) {
      nomeModificado += palavra[n];
    } else if (palavra[n] === 'a') {
      nomeModificado += palavra[n].replace('a', 1);
    } else if (palavra[n] === 'e') {
      nomeModificado += palavra[n].replace('e', 2);
    } else if (palavra[n] === 'i') {
      nomeModificado += palavra[n].replace('i', 3);
    } else if (palavra[n] === 'o') {
      nomeModificado += palavra[n].replace('o', 4);
    } else if (palavra[n] === 'u') {
      nomeModificado += palavra[n].replace('u', 5);
    } else {
      nomeModificado += palavra[n];
    }
  }
  return nomeModificado;
}
function decode(palaNume) {
  let nomeModificado1 = '';
  let numeros = [1, 2, 3, 4, 5];
  for (let n = 0; n < palaNume.length; n += 1) {
    if (palaNume[n] === numeros) {
      nomeModificado1 += palaNume[n];
    } else if (palaNume[n] === '1') {
      nomeModificado1 += palaNume[n].replace(1, 'a');
    } else if (palaNume[n] === '2') {
      nomeModificado1 += palaNume[n].replace(2, 'e');
    } else if (palaNume[n] === '3') {
      nomeModificado1 += palaNume[n].replace(3, 'i');
    } else if (palaNume[n] === '4') {
      nomeModificado1 += palaNume[n].replace(4, 'o');
    } else if (palaNume[n] === '5') {
      nomeModificado1 += palaNume[n].replace(5, 'u');
    } else {
      nomeModificado1 += palaNume[n];
    }
  }
  return nomeModificado1;
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
