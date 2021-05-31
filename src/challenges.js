// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true ) {
    return true;
  } else {
    return false;
  }
};

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2;
  return area
};

// Desafio 3
function splitSentence(frase) {
  let split = frase.split(" ");
  return split
};

// Desafio 4
function concatName(array) {
  let concat = array[array.length - 1] + ', ' + array[0];
  return concat;
};

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = wins * 3;
  return totalPontos + ties;
};

// Desafio 6
// Com suporte de Luiza Antiques e Josué Lobo

function highestCount(array) {
  let maior = array[0];
  let cont = 0;

  for (let index = 0; index <= array.length - 1; index += 1){
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let i = 0; i <= array.length - 1; i += 1) {
    if (array[i] == maior) {
      cont = cont + 1;
    }
  }
  return cont;
};

// Desafio 7
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  let finalResult; 

  if (dist1 < dist2) {
    finalResult = 'cat1'

  } else if (dist1 > dist2) {
    finalResult = 'cat2'

  } else {
    finalResult = "os gatos trombam e o rato foge"
  };
  return finalResult;
};

// Desafio 8
function fizzBuzz(arrayNum) {
  let arrayString = [];

  for (let index = 0; index < arrayNum.length; index += 1) {
      arrayString[index] = 'bug!';
      if (arrayNum[index] % 15 == 0) {
        arrayString[index] = 'fizzBuzz';
      } else if (arrayNum[index] % 3 == 0) {
      arrayString[index] = 'fizz';
      } else if (arrayNum[index] % 5 == 0) {
      arrayString[index] = 'buzz';
    } 
  }
  return arrayString;
};

// Desafio 9
//Referência: https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
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
