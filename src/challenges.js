// Desafio 1
function compareTrue(Valor1, Valor2) {
  if ( Valor1 === true && Valor2 === true) {
  return true;
  } else {
  return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let concat = array[array.length -1] + ', ' + array[0]
  return concat;
}

// Desafio 5
function footballPoints(win, tie) {
  let winPoints = win * 3;
  let tiePoints = tie * 1;
  let resultado = winPoints + tiePoints;

  return resultado;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = -10000
  let arrayMaiorNumero = []
  for(var index = 0; index < array.length; index++){
    if(array[index] >= maiorNumero) {
      maiorNumero = array[index]
    }
  }
  for(var index = 0; index < array.length; index++) {
    if(array[index] === maiorNumero)
    arrayMaiorNumero.push(array[index])
  } return arrayMaiorNumero.length
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = cat1-mouse
  let distanciaGato2 = cat2-mouse
  if(distanciaGato1 < 0) {
  distanciaGato1 = (distanciaGato1)*(-1)
  } else if (distanciaGato2 < 0) {
  distanciaGato2 = (distanciaGato2)*(-1)
  }
  
  if(distanciaGato1 === distanciaGato2) {
    return "os gatos trombam e o rato foge"
  }else if (distanciaGato1 > distanciaGato2) {
    return "cat2"
  } else if (distanciaGato2 > distanciaGato1) {
    return "cat1"
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = []
  for(var index = 0; index < array.length; index++){
  var numero = array[index]
  if(numero % 3 === 0 && numero % 5 === 0) {
  resultado.push("fizzBuzz")
  } 
  if(numero % 3 === 0 && numero % 5 != 0) {
  resultado.push("fizz")
  }
  if(numero % 5 === 0 && numero % 3 != 0) {
  resultado.push("buzz")
  }
  if (numero % 3 != 0 && numero % 5 != 0) {
  resultado.push("bug!")
  }
} return resultado
}


// Desafio 9
function encode() {

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
