// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayStr) {
  // seu código aqui
  let primeiroItem = arrayStr[0];
  let ultimoItem = arrayStr[arrayStr.length - 1];
  return `${ultimoItem}, ${primeiroItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = wins * 3;
  let totalPoints = winsPoints + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(num) {
  // seu código aqui
  let maiorNum = num[0];
  let quantMaiorNum = 0;

  for (let i = 0; i < num.length; i += 1) {
    if (num[i] > maiorNum) {
      maiorNum = num[i];
    }
  }

  for (let i = 0; i < num.length; i += 1) {
    if (num[i] === maiorNum) {
      quantMaiorNum += 1;
    }
  }

  return quantMaiorNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distMousCat1 = Math.abs(mouse - cat1);
  let distMousCat2 = Math.abs(mouse - cat2);
  let retorno = '';
  if (distMousCat1 < distMousCat2) {
    retorno = 'cat1';
  } else if (distMousCat2 < distMousCat1) {
    retorno = 'cat2';
  } else {
    retorno = 'os gatos trombam e o rato foge';
  }

  return retorno;
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let arrayStr = [];
  for (let num of numeros) {
    if (((num % 3) === 0) && ((num % 5) === 0)) {
      arrayStr.push('fizzBuzz');
    } else if ((num % 3) === 0) {
      arrayStr.push('fizz');
    } else if ((num % 5) === 0) {
      arrayStr.push('buzz');
    } else {
      arrayStr.push('bug!');
    }
  }

  return arrayStr;
}

// Desafio 9
function encode(str) {
  // seu código aqui
  str = str.replace(/a/g, '1');
  str = str.replace(/e/g, '2');
  str = str.replace(/i/g, '3');
  str = str.replace(/o/g, '4');
  str = str.replace(/u/g, '5');
  return str;
}
function decode(str) {
  // seu código aqui
  str = str.replace(/1/g, 'a');
  str = str.replace(/2/g, 'e');
  str = str.replace(/3/g, 'i');
  str = str.replace(/4/g, 'o');
  str = str.replace(/5/g, 'u');
  return str;
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
