// Desafio 1: Crie uma função usando o operador &&
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true));

// Desafio 2: Crie uma função que calcule a área de um triângulo
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(51, 1));

// Desafio 3: Crie uma função que divida a frase
function splitSentence(string) {
  return string.split(' ', 3);
}
// console.log(splitSentence("foguete"));

// Desafio 4: Crie uma função que usa concatenação de strings
function concatName(arrayDeString) {
  let priPosicao = arrayDeString[0];
  let ultPosicao = `${arrayDeString[arrayDeString.length - 1]}, `;
  return ultPosicao + priPosicao;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5: Crie uma função que calcule a quantidade de pontos no futebol
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}
// console.log(footballPoints(1, 2));

/* Desafio 6: Crie uma função que calcule a repetição do maior número.
 Math permite executar tarefas matematicas em números.
 Math.max(array) irá buscar o maior numero do array.
 NaN se o parâmetro for menor que 1
 O apply funciona como se você tivesse passado os valores do array como parâmetros da função max, e equivaleria a se digitar Math.max(0,12,13,2.... O primeiro parâmetro equivale ao escopo a ser usado na função, e neste caso, como é indiferente, passamos null, que representa o escopo global.
function highestCount(array) {
  return Math.max.apply(null, array)
}     console.log(highestCount([0, 4, 4, 4, 9, 2, 1])); */

function highestCount(arrayN) {
  let numeroMaior = arrayN[0];
  let repetNum = 0;
  for (let indice = 0; indice < arrayN.length; indice += 1) {
    if (arrayN[indice] > numeroMaior) {
      numeroMaior = arrayN[indice];
    }
  }
  for (let indice2 = 0; indice2 < arrayN.length; indice2 += 1) {
    if (numeroMaior === arrayN[indice2]) {
      repetNum += 1;
    }
  }
  return repetNum;
}
// console.log(highestCount([0, 0, 0]));

// Desafio 7: Crie uma função de Caça ao Rato
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1); // O "Math.abs" (math é o objeto e abs o método usado)retorna o valor absoluto de um numero, no caso da função aqui vai transformar um numero negativo em positivo.
  let dist2 = Math.abs(mouse - cat2);
    if (dist1 < dist2) {
    return 'cat1';
  } if (dist2 < dist1) {
    return 'cat2';
  } if (dist1 == dist2) {
    return 'os gatos trombam e o rato foge';
  }
}
// console.log(catAndMouse(1, 0, 2));

// Desafio 8: Crie uma função FizzBuzz
// mod (%); se o resto é diferente de zero, vai indicar que o numero do array não é divisível por 3 e nem por 5.
//
function fizzBuzz(array) {
  let arrayStr = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      arrayStr.push('fizzBuzz');
    } else if (array[index] % 3 == 0) {
      arrayStr.push('fizz');
    } else if (array[index] % 5 == 0) {
      arrayStr.push('buzz');
    } else if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      arrayStr.push('bug!');
    }
  }
  return arrayStr;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9: Crie uma função que Codifique e Decodifique
// Usando o '/g' como sinalizador é possível substituir tudo e de forma constante, sem o g é possível só fazer substituições certas.
//Referência: DESCONHECIDO. Stack Overflow. 2009. Disponível em: https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript. Acesso em: 31 maio 2021.
function encode(str) {
  str = str.replace(/a/g, '1');
  str = str.replace(/e/g, '2');
  str = str.replace(/i/g, '3');
  str = str.replace(/o/g, '4');
  str = str.replace(/u/g, '5');
  return str;
  }
//console.log(encode('anastacio!'));
function decode(str) {
  str = str.replace(/1/g, 'a');
  str = str.replace(/2/g, 'e');
  str = str.replace(/3/g, 'i');
  str = str.replace(/4/g, 'o');
  str = str.replace(/5/g, 'u');
  return str;
}
//

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
