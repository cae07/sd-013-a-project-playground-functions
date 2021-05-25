// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(goTrybe) {
  return goTrybe.split(' ')
  
}

// Desafio 4
function concatName(stringArrays) {
  return `${stringArrays[stringArrays.length-1]}, ${stringArrays[0]}`
}


// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + ties
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = numberArray [0];
  let contador = 0;
for(let index = 0; index < numberArray.length; index +=1) {
  if(numberArray[index] > highestNumber) {
    highestNumber = numberArray[index];
    contador = 1;

  } else if(numberArray[index] === maiorNumber) {
    contador += 1;
  }
  
}
return contador

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(cat1 - mouse);
  let gato2 = Math.abs(cat2 - mouse);

  if (gato1 > gato2) {
    return 'cat2'
  } else if (gato2 > gato1) {
    return 'cat1'
  } else {
    return 'os gatos trombam e o rato foge'
  }
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
