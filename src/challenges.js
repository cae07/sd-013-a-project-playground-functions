// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 == true && boolean2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  var area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  return str.split(" ");
}

// Desafio 4
function concatName(array) {
  return palavra = array[array.length -1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  ties = ties * 1;
  var soma = wins + ties;
  return soma;
}

// Desafio 6
function highestCount(array) {
  let mN = array[0];
  let counter = 0;
  for(i = 0; i < array.length; i++) {
    if (mN < array[i]) {
      mN = array[i];
    }
  }
  for (i = 0; i < array.length; i++) {
    if (mN === array[i]) {
      counter++;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  var distanciaCat1 = (cat1 - mouse);
  var distanciaCat2 = (cat2 - mouse);
  var string = "";
  if (distanciaCat1 < 0) {
    distanciaCat1 = (distanciaCat1 * -1);
  } else if (distanciaCat2 < 0) {
    distanciaCat2 = (distanciaCat2 * -1)
  }
  if (distanciaCat1 < distanciaCat2) {
    return string = "cat1";
  } else if (distanciaCat1 > distanciaCat2) {
    return string = "cat2";
  } else {
    return string = "os gatos trombam e o rato foge";
  }
}

//Desafio 8
function fizzBuzz(array) {
  var arrayFizzBuzz = [];
  for (i=0;i<array.length; i++){
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      console.log(array[i], "é divisivel por 3")
      arrayFizzBuzz.push("fizz");
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      console.log(array[i], "é divisivel por 5")
      arrayFizzBuzz.push("buzz");
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      console.log(array[i], "é divisível por 3 e 5")
      arrayFizzBuzz.push("fizzBuzz");
    } else {
      arrayFizzBuzz.push("bug!");
    }
  }
  return arrayFizzBuzz;
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
