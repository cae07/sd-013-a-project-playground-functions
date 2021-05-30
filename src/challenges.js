// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  let triangle = (base * height) / 2;
  return triangle;
}

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
  // let verificator = " ";
  // let coma = ", ";
  // let array = [];
  // for (let index = 0; index < string.length; index += 1) {
  //   if (string[index] === verificator) {
  //     array.push(coma);
  //   } else {
  //     array.push(string[index]);
  //   }
  // }
  // let array = string.split(" ");
  // return array;
}

// Desafio 4
function concatName(array) {
  let arrayA = array[0];
  let space = ', ';
  let arrayB = array.pop();
  let arrayC = arrayB.concat(space, arrayA);
  return arrayC;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = 3 * wins;
  let tiesPoints = ties;
  let totalPoints = 0;
  totalPoints = winsPoints + tiesPoints;
  return totalPoints;
}

// Desafio 6
function highestCount(numberList) {
  let highestNumber = Math.max(...numberList);
  let repeticao = 0;
  for (let number of numberList) {
    if (number === highestNumber) {
      repeticao += 1;
    }
  } return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2,) {
  let distancia1 = mouse - cat1;
  let distancia2 = mouse - cat2;
  let empate = 'os gatos trombam e o rato foge';
  let gatoUm = 'cat1';
  let gatoDois = 'cat2';
  if (Math.abs(distancia1) === Math.abs(distancia2)) {
    return empate;
  } else if (distancia1 < distancia2) {
    return gatoDois;
  } else {
    return gatoUm;
  }
}

// Desafio 8
function fizzBuzz(matriz) {
  let div3 = 3;
  let div5 = 5;
  let array = [];
  for (let index = 0; index < matriz.length; index += 1) { 
     if ((matriz[index] % div3 != 0) && (matriz[index] % div5 === 0))  {
        array.push("buzz");
    } else if ((matriz[index] % div3 === 0) && (matriz[index] % div5 === 0)) {
        array.push("fizzBuzz");
    } else if ((matriz[index] % div3 === 0) && (matriz[index] % div5 != 0)) {
        array.push("fizz");
    } else if ((matriz[index] % div3 != 0) && (matriz[index] % div5 === 0)) {
        array.push("buzz");
    } else {
        array.push("bug!");
    }
  }
  return array;
}

// Desafio 9 // Busquei ajuda pela sintaxe for in do colega Silvio Fabian
function encode(codi) {
  let vogais = "";
  for (let words in codi) {
    if (codi[words] === "a") {
      vogais = vogais + "1";
    } else if (codi[words] === "e") {
      vogais = vogais + "2";
    } else if (codi[words] === "i") {
      vogais = vogais + "3";
    } else if (codi[words] === "o") {
      vogais = vogais + "4";
    } else if (codi[words] === "u") {
      vogais = vogais + "5";
    } else {
      vogais = vogais + codi[words];
    }
  } return vogais;
}
function decode(deco) {
  let numbers = "";
  for (let words in deco) {
    if (deco[words] === "1") {
      numbers = numbers + "a";
    } else if (deco[words] === "2") {
      numbers = numbers + "e";
    } else if (deco[words] === "3") {
      numbers = numbers + "i";
    } else if (deco[words] === "4") {
      numbers = numbers + "o";
    } else if (deco[words] === "5") {
      numbers = numbers + "u";
    } else {
      numbers = numbers + deco[words];
    }
  } return numbers;
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
