// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let res = (base * height) / 2;
  return res;
}

// Desafio 3 resolvido com ajuda do seguinte link https://www.w3schools.com/jsref/jsref_split.asp

// Desafio 3
function splitSentence(string) {
  let res = string.split(' ');
  return res;
}

// Desafio 4 resolvido com ajuda do seguinte link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

// Desafio 4
function concatName(nome) {
  let ultimoNome = nome[nome.length - 1];
  let primeiroNome = nome[0];

  let res = `${ultimoNome}, ${primeiroNome}`;

  return res;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontoVitoria = wins * 3;
  let pontoEmpate = ties * 1;

  let res = pontoVitoria + pontoEmpate;

  return res
  // receber numero de vitorias com nome wins
  // receber numero de empates com nome ties

}

// Desafio realizado com ajuda do seguinte link https://www.youtube.com/watch?v=pkJXwPvselI

// Desafio 6
function highestCount(parametro) {
  let contador = 0;
  let maiorNumero = parametro[0];
  
  for (let indice = 0; indice < parametro.length; indice += 1){
    if (parametro[indice] > maiorNumero){
      maiorNumero = parametro[indice];
    }
  }
    for (let index = 0; index < parametro.length; index += 1) {
      if (parametro[index] == maiorNumero) {
        contador += 1;
      }
    }
  return contador;
  // Deverá retornar a quantidade de vezes que o numero se repete
}

// Desafio 7 feito com ajuda do link: https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < (Math.abs(mouse - cat2))) {
    return 'cat1';
  }
  else if (Math.abs(mouse - cat1) > (Math.abs(mouse - cat2))){
    return 'cat2';
  }
  else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let retornaString = [];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 != 0) {
      retornaString.push('fizz')
    }
    else if (numeros[index] % 5 === 0 && numeros[index] % 3 != 0) {
      retornaString.push('buzz')
    }
    else if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      retornaString.push('fizzBuzz')
    }
    else {
      retornaString.push('bug!')
    }
  }
  return retornaString;
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
