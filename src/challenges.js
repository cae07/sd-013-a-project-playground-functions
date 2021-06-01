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
  let contador = 0;
 
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (arrayRef < numbersArray[index]) {
      contador = 0;
      arrayRef = numbersArray[index]
    }
  
    if (arrayRef === numbersArray[index]) {
      contador += 1;
    }
  }
    return contador;
  }
  


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  let winner = 0;

  if (positionCat1 > positionCat2) {
    winner = 'cat2';
  } else if (positionCat1 < positionCat2) {
    winner = "cat1";
  } else if (positionCat1 === positionCat2) {
    winner = 'os gatos trombam e o rato foge'
  }
  return winner;
}


// Desafio 8
function fizzBuzz() {
  let numbers = arrays;
  let resultado = [];

  for (let index = 0; index.length; index += 1) {

  }
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
