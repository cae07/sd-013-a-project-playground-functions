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
// Referência utilizada: https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(frase) {
  for (let palavra in frase) {
    palavra = frase.split(' ');
    return palavra;
  };
};

// Desafio 4
// Referência utilizada: https://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array
function concatName(stringArray) {
  return `${stringArray[stringArray.length -1]}, ${stringArray[0]}`;
};

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
};

// Desafio 6
// Referencia para Math: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

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
// consultar math.abs
function catAndMouse(mouse, cat1, cat2) {
  if ((mouse - cat1) < (mouse - cat2)) {
    return `cat1`;
  } else if ((mouse - cat1) > (mouse - cat2)) {
    return `cat2`;
  } else if ((mouse - cat1) == (mouse - cat2)) {
    return `os gatos trombam e o rato foge`
  };
};

// Desafio 8
function fizzBuzz(numeros) {
  let array = [];

  for (let numero in numeros) {
    if ((numeros[numero] % 3 == 0) && (numeros[numero] % 5 == 0)) {
      array += 'fizzBuzz';
    } else if (numeros[numero] % 3 == 0) {
      array += 'fizz';
    } else if (numeros[numero] % 5 == 0) {
      array += `buzz`;
    } else {
      array += 'bug!';
    }
  }
  return array;
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
