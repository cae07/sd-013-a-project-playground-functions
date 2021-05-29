// Desafio 1

function compareTrue(p1, p2) {
  if (p1 && p2) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2

function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
// Referência: https://www.w3schools.com/jsref/jsref_split.asp

function splitSentence(frase) {
  for (let palavra in frase) {
    palavra = frase.split(' ');
    return palavra;
  };
};

// Desafio 4
// Referência: https://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array

function concatName(stringArray) {
  return `${stringArray[stringArray.length -1]}, ${stringArray[0]}`;
};

// Desafio 5

function footballPoints(wins, ties) {
  return wins * 3 + ties;
};

// Desafio 6
// Referência para Math: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

function highestCount(numeros) {
  let maior = numeros.reduce(function(a, b) {
    return Math.max(a, b);
  });
  let quantidade = 0;
  
  for (let valor in numeros) {
    if (numeros[valor] == maior) {
      quantidade += 1;    
    }; 
  };
  return quantidade;
};

// Desafio 7
// Referência: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

function catAndMouse(mouse, cat1, cat2) {
  function diferenca (a, b) {
    return Math.abs(a - b);
  }
  
  if (diferenca(mouse, cat1) < diferenca(mouse, cat2)) {
    return `cat1`;
  } else if (diferenca(mouse, cat1) > diferenca(mouse, cat2)) {
    return `cat2`;
  } else if (diferenca(mouse, cat1) == diferenca(mouse, cat2)) {
    return `os gatos trombam e o rato foge`;
  };
};

// Desafio 8
// Referência: https://www.w3schools.com/js/js_array_methods.asp

function fizzBuzz(numeros) {
  let array = [];

  for (let numero in numeros) {
    if ((numeros[numero] % 3 == 0) && (numeros[numero] % 5 == 0)) {
      array.push('fizzBuzz');
    } else if (numeros[numero] % 3 == 0) {
      array.push('fizz');
    } else if (numeros[numero] % 5 == 0) {
      array.push(`buzz`);
    } else {
      array.push('bug!');
    };
  };
  return array;
};

// Desafio 9
// Referência: https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript

function encode(string) {
  string = string.replace(/a/g, "1");
  string = string.replace(/e/g, "2");
  string = string.replace(/i/g, "3");
  string = string.replace(/o/g, "4");
  string = string.replace(/u/g, "5");

  return string; 
};

function decode(string) {
  string = string.replace(/1/g, "a");
  string = string.replace(/2/g, "e");
  string = string.replace(/3/g, "i");
  string = string.replace(/4/g, "o");
  string = string.replace(/5/g, "u");

  return string;
};

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
