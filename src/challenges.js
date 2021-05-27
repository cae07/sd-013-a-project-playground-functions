// Desafio 1
function compareTrue(param1, param2) {
  if ((param1 === true) && (param2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // eslint-disable-next-line no-func-assign
  calcArea = (base * height) / 2;
  return calcArea;
}

// Desafio 3
function splitSentence(string) {
  // eslint-disable-next-line guard-for-in
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line guard-for-in
  // eslint-disable-next-line no-empty-pattern
  // eslint-disable-next-line guard-for-in
  for (let {} in string) {
    // eslint-disable-next-line no-func-assign
    splitSentence = string.split(' ');
  }
  return splitSentence;
}

// Desafio 4
function concatName(array) {
  for (let index = 0; index < array.length; index += 1) {
    // eslint-disable-next-line no-func-assign
    concatName = (`${array[array.length - 1]}, ${array[0]}`);
  }
  return concatName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoint = 3;
  let tiesPoint = 1;

  let numberWins = wins * winsPoint;
  let numberTies = ties * tiesPoint;

  return numberWins + numberTies;
}

// Desafio 5 realizado com as dicas do Instrutor Fernando Soares

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  let count = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (highestNumber < array[index]) {
      highestNumber = array[index];
    }
  }
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 6 finalizado com dicas da Pessoa Estudante Rafael Victor Guimarães Dos Santos

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1); // O math.abs vai ser como módulo na matemática, se recebermos um valor negativo ele fica positivo
  let distance2 = Math.abs(mouse - cat2);

  if (distance1 > distance2) {
    return 'cat2';
  }
  if (distance2 > distance1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';

}

// Desafio 8
function fizzBuzz(array) {
  let novoArray = [];

  for (let index of array) {
    let retorno = 'bug!';
    if (index % 15 === 0) {
      retorno = 'fizzBuzz';
    } else if (index % 3 === 0) {
      retorno = 'fizz';
    } else if (index % 5 === 0) {
      retorno = 'buzz';
    }
    novoArray.push(retorno);
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