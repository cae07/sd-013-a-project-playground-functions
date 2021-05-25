// Desafio 1
function compareTrue(val1, val2) {
  
  if (val1 === true && val2 === true) {
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
function splitSentence(frase) {
  return frase.split(" ");
};

// Desafio 4

function concatName(arrayDeStrings) {

  let palavras = ("");
  palavras = (arrayDeStrings[arrayDeStrings.length - 1] + ", " + arrayDeStrings[0]);
  return palavras;
  
};

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties); 
};

// Desafio 6
function highestCount(numeros) {

  let contagem = 0;
  let atual = numeros[0];

  for (let i = 0; i < numeros.length; i += 1) {
    
    if (atual === numeros[i]) {
      contagem += 1;
    };
    
    if (numeros[i] > atual) {
      atual = numeros[i];
      contagem = 1;
    };

  };

  return contagem;

};

console.log(highestCount([-2, -2, -1]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
