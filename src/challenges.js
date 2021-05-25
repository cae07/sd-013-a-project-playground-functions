// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
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
function splitSentence(string) {
  let myArray = string.split(' ');
  return myArray;
}

// Desafio 4
function concatName(list) {
  let first = list[0];
  let last = list[list.length -1];
  let string = `${last}, ${first}`;
  return string;
}


// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let hiestNumber = numbers[0];
  let counter = 0;
  // fazer um aray que primeiro compare se o numero é maior que o hiest number;
  // se for maior substituir o hiestNumber e recetar o contador para 1
  // se for igual somar um ao contador

  for(let i =0; i < numbers.length; i +=1 ) {
    if(numbers[i] > hiestNumber ) {
      hiestNumber = numbers[i];
      counter = 1;
    }
    else if(numbers[i] === hiestNumber) {
      counter = counter + 1;
    }
  }

  return counter;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);

  if(distCat1 < distCat2) {
    return "cat1";
  }
  else if (distCat1 > distCat2) {
    return "cat2";
  }
  else if (distCat1 === distCat2) {
    return "os gatos trombam e o rato foge"
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
