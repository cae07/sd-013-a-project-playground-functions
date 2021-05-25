// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 && param2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height)/2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(" ");
}

// Desafio 4
function concatName(arrayStr) {
  // seu código aqui
  let primeiroItem = arrayStr[0];
  let ultimoItem = arrayStr[arrayStr.length -1];
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

  for (let i = 0; i < num.length; i++) {
    if (num[i] > maiorNum) {
      maiorNum = num[i];
    }
  }

  for (let i = 0; i < num.length; i++) {
    if (num[i] == maiorNum) {
      quantMaiorNum++;
    }
  }

  return quantMaiorNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distMousCat1 = Math.abs(mouse - cat1);
  let distMousCat2 = Math.abs(mouse - cat2);
  if (distMousCat1 < distMousCat2) {
    return 'cat1';
  } else if (distMousCat2 < distMousCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let arrayStr = [];
  for(let num of numeros) {
    if (((num % 3) == 0) && ((num % 5) == 0 )) {
      arrayStr.push('fizzBuzz');
    } else if ((num % 3 ) == 0) {
      arrayStr.push('fizz');
    } else if ((num % 5 ) == 0) {
      arrayStr.push('buzz');
    } else {
      arrayStr.push('bug!');
    }
  }

  return arrayStr;
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
