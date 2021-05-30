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
function splitSentence(frase) {
  let resultado = frase.split(" ");
  return resultado;
}

// Desafio 4
function concatName(cores) {
  let palavras = cores[cores.length -1] + ', ' + cores[0];
  return palavras;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function highestCount (numeros) {
  let arrayNumeros = numeros;
  let contador = [0];
  for (let arrayNumeros = 0; arrayNumeros < numeros.length; index++) {
    if (numeros > arrayNumeros) {
      arrayNumeros = numeros;
    }
  }

  for (let contador = 0; contador < numbers.length; index += 1) {
    if (numeros === numeros[index]) {
      counter += 1;
    }
  }
  return counter;
}
  


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numeroInt) {
  let numeral = [];

  for (let novoNumero of numeroInt) {
    if (novoNumero %3 === 0 && novoNumero %5 === 0) {
      numeral.push("fizzBuzz");
    }
    else if (novoNumero %3 === 0) {
      numeral.push("fizz");
    }
    else if (novoNumero %5 === 0 ) {
      numeral.push("buzz");
    } else {
      numeral.push("bug!");
    }
  }
  return numeral;
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
