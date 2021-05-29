// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 == true && valor2 == true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let splitS = sentence.split(' ');
  return splitS;
}

// Desafio 4
function concatName(nomes) {
  let retorno = nomes[nomes.length-1] + ', ' + nomes[0];
  return retorno;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbersArray) {
  let arrayRef = numbersArray[0];
}
 
  for (let index = 0; index < numbersArray.length; index++) {
    if (arrayRef < numbersArray[index]) {
      arrayRef = numbersArray[index]
    }
  }

  for (let index = 0; index < numbersArray.length; index++) {
    if (arrayRef === numbersArray[index]) {
      let contador = contador + 1;
    }
  }


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
