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
function fizzBuzz(numeros) {
let result = [''];
for (index = 0; index < numeros.length; index += 1){
  if (numeros[index] % 3 == 0 && numeros[index] % 5 == 0){
    result[index] = 'fizzBuzz'}
  else if (numeros[index] % 5 == 0){
    result[index] = 'buzz'
  }
  else if (numeros[index] % 3 == 0){
    result [index] = 'fizz'
  }
  else {
    result[index] = 'bug!'
  }
}
return result;
}

// Desafio 9
function encode(codificar) {
  let codificarSplit = codificar.split("");
for (let index = 0; index < codificarSplit.length; index += 1){
  if (codificarSplit[index] == 'a'){
    codificarSplit[index] = '1';
  }
  else if (codificarSplit[index] == 'e'){
    codificarSplit[index] = '2';
  }
  else if (codificarSplit[index] == 'i'){
    codificarSplit[index] = '3';
  }
  else if (codificarSplit[index] == 'o'){
    codificarSplit[index] = '4';
  }
  else if (codificarSplit[index] == 'u'){
    codificarSplit[index] = '5';
  }
}
  return codificarSplit.join('');
}
function decode(decodificar) {
  let decodificarSplit = decodificar.split("");
  for (let index = 0; index < decodificarSplit.length; index += 1){
    if (decodificarSplit[index] == '1'){
      decodificarSplit[index] = 'a';
    }
    else if (decodificarSplit[index] == '2'){
      decodificarSplit[index] = 'e';
    }
    else if (decodificarSplit[index] == '3'){
      decodificarSplit[index] = 'i';
    }
    else if (decodificarSplit[index] == '4'){
      decodificarSplit[index] = 'o';
    }
    else if (decodificarSplit[index] == '5'){
      decodificarSplit[index] = 'u';
    }
  }
    return decodificarSplit.join('');
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
