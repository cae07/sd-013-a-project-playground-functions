// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(nomes) {
  return nomes[nomes.length-1] + ', ' + nomes[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + ties;
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let repeticoes = 0;
  for (let index = 0; index < numeros.length; index +=1){
    if (numeros[index] > maiorNumero) {
      maiorNumero = numeros[index];
    }
  }
  for (let index = 0; index < numeros.length; index +=1){
    if (numeros[index] == maiorNumero) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaOneMouse = cat1 - mouse;
  let distanciaTwoMouse = cat2 - mouse;
  if (distanciaOneMouse < 0){
    distanciaOneMouse *= -1;
  }
  if (distanciaTwoMouse < 0){
    distanciaTwoMouse *= -1;
  }
  if (distanciaOneMouse > distanciaTwoMouse) {
    return 'cat2';
  } else if (distanciaOneMouse < distanciaTwoMouse) {
    return 'cat1';
  } else {
    return "os gatos trombam e o rato foge";
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
