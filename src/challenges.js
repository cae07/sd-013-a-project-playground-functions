// Desafio 1
function compareTrue(value1, value2){
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
  // seu código aqui


// Desafio 2
function calcArea(base, height) {
  let area = 1/2*base*height;
  return area
}
  // seu código aqui

// Desafio 3
function splitSentence(string) {
 return string.split(" ");
  // seu código aqui
}

// Desafio 4
function concatName(nomes) {
  let primeiroN = nomes[0];
  let ultimoN = nomes[nomes.length - 1];
  return ultimoN + ", " + primeiroN;

  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWin = wins*3;
  let pontosTie = ties*1;
  let resp = pontosWin + pontosTie;
  return resp

  // seu código aqui
}
// Desafio 6

function highestCount(numbers) {
  let bigger = numbers[0];
  let resultado = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > bigger) {
      bigger = numbers[i];
      resultado = 0;
    }
    if (numbers[i] === bigger) {
      resultado += 1;
    }
  }
  return resultado;
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouse1 = Math.abs(mouse - cat1);
  let distMouse2 = Math.abs(mouse - cat2);
  if (distMouse1 < distMouse2) return 'cat1';
  if (distMouse1 > distMouse2) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function checkFizzOrBuzz(valorDaArray, fizz, buzz) {
  fizz = (valorDaArray % 3 === 0);
  buzz = (valorDaArray % 5 === 0);
  let valor;

  if (fizz) {
    valor = "fizz";
  } else if (buzz) {
    valor = "buzz";
  } else {
    valor = "bug!";
  }

  return valor;
}

function fizzBuzz(arrayOfNumbers) {
  let result = [];
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    let fizz = (arrayOfNumbers[index] % 3 === 0);
    let buzz = (arrayOfNumbers[index] % 5 === 0);
    let isFizzBuzz = (fizz && buzz);
    let valor;

    if (isFizzBuzz) {
      valor = "fizzBuzz";
    } else {
      valor = checkFizzOrBuzz(arrayOfNumbers[index], fizz, buzz);
    }

    result.push(valor);
  }

  return result;
}
    // seu código aqui


// Desafio 9
function encode(string) {
  let frase = string;
  for (let index = 0; index < string.length; index += 1) {
    frase = frase.replace('a', 1);
    frase = frase.replace('e', 2);
    frase = frase.replace('i', 3);
    frase = frase.replace('o', 4);
    frase = frase.replace('u', 5);
  }
  return frase;
}
function decode(string) {
  let frase = string;
  for (let index = 0; index < string.length; index += 1) {
    frase = frase.replace(1, 'a');
    frase = frase.replace(2, 'e');
    frase = frase.replace(3, 'i');
    frase = frase.replace(4, 'o');
    frase = frase.replace(5, 'u');
  }
  return frase;
}
  // seu código aqui


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

