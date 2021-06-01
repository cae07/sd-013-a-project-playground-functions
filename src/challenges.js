// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
// Referência: O que é JAVASCRIPT SPLIT? Como usar essa função? https://www.youtube.com/watch?v=O2OZir_ba1I

function splitSentence(string) {
  let charact = string.split(' ');
  return charact;
}

// Desafio 4
function concatName(arrayString) {
  let conca = (arrayString[arrayString.length - 1] + ', ' + arrayString[0]);
  return conca;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + ties;
  return pontuacao;
}

// Desafio 6
function highestCount(arrayNum) {
  let maiorNum = arrayNum[0];
  let total = 0;

  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] > maiorNum) {
      maiorNum = arrayNum[index];
    }
  }

  for (let index2 = 0; index2 < arrayNum.length; index2 += 1) {
    if (arrayNum[index2] === maiorNum) {
      total += 1;
    }
  }
  return total;
}

// Desafio 7
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) { 
   
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);  
  
  if (distancia1 < distancia2) {
    return 'cat1';
  } else if (distancia2 < distancia1) {
    return 'cat2';
  } else if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
// Referência: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math
function fizzBuzz(arrayNum) {
  let arrayDiv = [];

  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0) {
      arrayDiv.push('fizzBuzz');
    } else if (arrayNum[index] % 3 === 0) {
      arrayDiv.push('fizz');
    } else if (arrayNum[index] % 5 === 0) {
      arrayDiv.push('buzz');
    } else {
      arrayDiv.push('bug!');
    }
  }
  return arrayDiv;
}

// Desafio 9
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace === Dica do Lucas
// Referência:  que é JavaScript REPLACE? https://www.youtube.com/watch?v=UShV_TFxs_A
function encode(stringNum) {
  stringNum = stringNum.replace(/a/gi, '1');
  stringNum = stringNum.replace(/e/gi, '2');
  stringNum = stringNum.replace(/i/gi, '3');
  stringNum = stringNum.replace(/o/gi, '4');
  stringNum = stringNum.replace(/u/gi, '5');

  return stringNum;
}
function decode(stringVog) {
  stringVog = stringVog.replace(/1/gi, 'a');
  stringVog = stringVog.replace(/2/gi, 'e');
  stringVog = stringVog.replace(/3/gi, 'i');
  stringVog = stringVog.replace(/4/gi, 'o');
  stringVog = stringVog.replace(/5/gi, 'u');

  return stringVog;
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
