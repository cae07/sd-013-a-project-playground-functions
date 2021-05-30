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
  let arrayNumeros = numeros[0];
  let contador = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (arrayNumeros < numeros[index]) {
      contador = 0;
      arrayNumeros = numeros[index];
    }
  
    if (arrayNumeros === numeros[index]) {
      contador += 1;
    }
  }
  return contador;
}
  


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);

  if ( distanciaGato1 < distanciaGato2) {
    return "cat1";
  }
  else if ( distanciaGato2 < distanciaGato1) {
    return "cat2";
  }
  else {
    return "os gatos trombam e o rato foge";
  }
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
function encode(letras) {
  let codifique = "";
  
  for ( let index of letras) {
    if (index === 'a') {
      codifique += 1;
    }
    else if (index === 'e') {
      codifique += 2;
    }
    else if (index === 'i') {
      codifique += 3;
    }
    else if (index === 'o') {
      codifique += 4;
    }
    else if (index === 'u') {
      codifique += 5;
    }
    else {
      codifique += index;
    }
    
  }
  return codifique;
}

function decode(numeros) {
 let decodifique = '';

  for (let index of numeros) {
    if (index === '1') {
      decodifique += 'a';
    }
    else if (index === '2') {
      decodifique += 'e';
    }
    else if (index === '3') {
      decodifique += 'i';
    }
    else if (index === '4') {
      decodifique += 'o';
    }
    else if (index === '5') {
      decodifique += 'u';
    }
    else {
      decodifique += index;
    }
  }
 return decodifique;
};

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
