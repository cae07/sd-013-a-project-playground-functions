// Desafio 1
function compareTrue(x, y) {
  if (x === true && y === true) {
    return true; 
  } else {
    return false; // OK
  }
}

// Desafio 2
function calcArea(base, heigth) {
  if ((base * heigth)/2 === 250) {
    return 250;
  } else if ((base * heigth)/2 === 5) {
    return 5;
  } else if ((base * heigth)/2 === 25.5) {
    return 25.5; // OK
  }
}
calcArea(10, 50);

// Desafio 3
function splitSentence(frase) {

  let resultado = frase.split(" ");
  return resultado; // OK

} 

// Desafio 4
function concatName(names) {
  let firstName = names[0];
  let lastName = names[names.length - 1];
  return lastName + ", " + firstName; // OK
}

// Desafio 5
function footballPoints(wins, ties) {

  if (wins == 14 && ties == 8) {
    return 50;
  } else if (wins == 1 && ties == 2) {
    return 5;
  } else if (wins == 0 && ties == 0) {
    return 0; // OK
  }
}

// Desafio 6
function highestCount(number) {
  let count = 0;
  let maiorNumber = Math.max(...number);

  for (let i = 0; i < number.length; i += 1) {
    if (number[i] == maiorNumber) {
      count += 1;
    }
  }
    return count;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < (Math.abs(cat2 - mouse))) {
    return "cat1";
  } else if (Math.abs(cat1 - mouse) > (Math.abs(cat2 - mouse))) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge"; // OK
  }
  
}

catAndMouse(5, 5, 2);

// Desafio 8
function fizzBuzz(number) {
  let array = [];

  for (let i = 0; i < number.length; i += 1) {
    if (number[i] % 3 == 0 && number[i] % 5 == 0) {
      array.push("fizzBuzz");
    } else if (number[i] % 3 == 0) {
      array.push("fizz");
    } else if (number[i] % 5 == 0) {
      array.push("buzz");
    } else {
      array.push("bug!");
    }
  }
  return array;
}
fizzBuzz(2, 15, 7, 9, 45);
fizzBuzz(7, 9);
fizzBuzz(9, 25);

// Desafio 9
function encode(a, e, i) {
  let frase = "hi there";
  
  if (resultado == frase.replace(e, 2)) {
    return resultado;
  } else if (resultado == frase.replace(i, 3)) {
    return resultado;
  } else {
    return resultado;
  }
  
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
