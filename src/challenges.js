// Desafio 1
function compareTrue(conone, condos) {
  if ((conone === true) && (condos === true)) {
    return  true;
  } else {
    return  false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return  base*height/2;
}

// Desafio 3
function splitSentence(Sentence) {
  return Sentence.split(" ");
}

// Desafio 4
function concatName(allNames) {
  return allNames[allNames.length - 1] + ", " + allNames[0]; 
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(number) {
  let maior = number[0];
  let somador = 0;

  for (let posicao = 0; posicao < number.length; posicao += 1) {
    if (number[posicao] > maior) {
      maior = number[posicao];
    }
  }

  for (let posicao = 0; posicao < number.length; posicao += 1) {
    if (number[posicao] === maior) {
      somador += 1;
    }
  }

return somador;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let difcat1 = Math.abs(mouse - cat1);
  let difcat2 = Math.abs(mouse - cat2);
if (difcat1 < difcat2) {
  return "cat1"
} else if (difcat1 > difcat2) {
  return "cat2"
} else {
   return "os gatos trombam e o rato foge"
}
}


// Desafio 8
function fizzBuzz(numbers) {
  let numbersArray = [];

  for (let number of numbers) {
    if (number % 3 === 0 && number % 5 === 0){
      numbersArray.push("fizzBuzz");
    } else if (number % 5 === 0) {
      numbersArray.push("buzz");
    } else if (number % 3 === 0) {
      numbersArray.push("fizz");
 } else {
  numbersArray.push("bug!");
 }
 }
 return numbersArray
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
