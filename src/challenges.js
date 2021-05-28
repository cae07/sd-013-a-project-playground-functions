// Desafio 1
function compareTrue(num1, num2) {
  // seu código aqui
  if (num1 === true && num2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let first = arr[0];
  let last = arr[arr.length - 1];
  let merge = last + ', ' + first;
  return merge;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let maior = arr[0];
  let vezes = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > maior) {
    maior = arr[i];
  }
}
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === maior) {
    vezes++;
}
  }
  return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dis1 = Math.abs(cat1 - mouse);
  let dis2 = Math.abs(cat2 - mouse);

   if (dis1 < dis2) {
    return 'cat1';
   }else if (dis1 > dis2) {
     return 'cat2';
   }else {
     return 'os gatos trombam e o rato foge';
   }
}

// Desafio 8
function fizzBuzz(num) {
  // seu código aqui
  let array = [];
  for (let n of num){
  if(n % 3 === 0 && n % 5 === 0) {
    array.push ('fizzBuzz');
  }else if (n % 3 === 0) {
    array.push ('fizz');
  }else if (n % 5 === 0) {
    array.push ('buzz');
  }else {
    array.push ('bug!');
  }
}
  return array;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  string = string.replace(/a/gi, '1');
  string = string.replace(/e/gi, '2');
  string = string.replace(/i/gi, '3');
  string = string.replace(/o/gi, '4');
  string = string.replace(/u/gi, '5');

  return string;
}

function decode(string) {
  // seu código aqui
  string = string.replace(/1/gi, 'a');
  string = string.replace(/2/gi, 'e');
  string = string.replace(/3/gi, 'i');
  string = string.replace(/4/gi, 'o');
  string = string.replace(/5/gi, 'u');

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
