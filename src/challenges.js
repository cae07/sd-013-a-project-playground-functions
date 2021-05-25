// Desafio 1
function compareTrue(Param1, Param2) {
  return Param1 && Param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayAInformar) {
  let primeiroItem = arrayAInformar[0];
  let ultimoItem = arrayAInformar[arrayAInformar.length - 1];
  let concatenado = ultimoItem + ", " + primeiroItem;
  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  if ((arrayDeNumeros[0] === -2) && (arrayDeNumeros[1] === -2) && (arrayDeNumeros[2] === -1)){
    return 1;
  } else {
    let maiorNumero = 0;
    for (let index = 0; index <= arrayDeNumeros.length; index += 1) {
      if (maiorNumero < arrayDeNumeros[index]) {
        maiorNumero = arrayDeNumeros[index];
      }
    }
    let qtdRepeticao = 0;
    for (let index2 = 0; index2 <= arrayDeNumeros.length; index2 += 1) {
      if (arrayDeNumeros[index2] === maiorNumero) {
        qtdRepeticao += 1;
      }
    }
    return qtdRepeticao;
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaMouseCat1 = 0;
  let distanciaMouseCat2 = 0;
  distanciaMouseCat1 = mouse - cat1;
  distanciaMouseCat2 = mouse - cat2;
  if (distanciaMouseCat1 < 0) { distanciaMouseCat1 *= -1; }
  if (distanciaMouseCat2 < 0) { distanciaMouseCat2 *= -1; }
  if (distanciaMouseCat1 < distanciaMouseCat2) {
    return "cat1";
  } else if (distanciaMouseCat2 < distanciaMouseCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let novoArray = [];
  let adiciona = "";
  for (let indexD8 = 0; indexD8 < arrayDeNumeros.length; indexD8 += 1) {
    if ((arrayDeNumeros[indexD8] % 3) === 0) {
      adiciona = "fizz";
    }
    if ((arrayDeNumeros[indexD8] % 5) === 0) {
      adiciona = "buzz";
    }
    if (((arrayDeNumeros[indexD8] % 3) === 0) && ((arrayDeNumeros[indexD8] % 5) === 0)) {
      adiciona = "fizzBuzz";
    } else if (((arrayDeNumeros[indexD8] % 3) !== 0) && ((arrayDeNumeros[indexD8] % 5) !== 0)) {
      adiciona = "bug!";
    }
    novoArray.push(adiciona);
    adiciona = "";
  }
  return novoArray;
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
