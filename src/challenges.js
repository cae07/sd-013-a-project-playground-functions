// Desafio 1: Crie uma função usando o operador &&
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  } else {
  return false;
  }
}// console.log(compareTrue(true, true));

// Desafio 2: Crie uma função que calcule a área de um triângulo
function calcArea(base, height) {
  return(base * height) / 2;
} // console.log(calcArea(51, 1));

// Desafio 3: Crie uma função que divida a frase
function splitSentence(string) {
  return string.split(" ", 3);
} // console.log(splitSentence("foguete"));

// Desafio 4: Crie uma função que usa concatenação de strings
function concatName(array) {
  let priPosicao = array[0]+ "'";
  let ultPosicao = "'" + array [array.length -1];
  return ultPosicao + ', ' + priPosicao;
}  //console.log(concatName(['capitão', 'meu', 'capitão']));

// Desafio 5: Crie uma função que calcule a quantidade de pontos no futebol
function footballPoints(wins, ties) {
 return (wins * 3) + (ties * 1)
} //console.log(footballPoints(1, 2));

/* Desafio 6: Crie uma função que calcule a repetição do maior número.
 Math permite executar tarefas matematicas em números.
 Math.max(array) irá buscar o maior numero do array.
 NaN se o parâmetro for menor que 1
 O apply funciona como se você tivesse passado os valores do array como parâmetros da função max, e equivaleria a se digitar Math.max(0,12,13,2.... O primeiro parâmetro equivale ao escopo a ser usado na função, e neste caso, como é indiferente, passamos null, que representa o escopo global.
function highestCount(arrayN) {
  return Math.max.apply(null, arrayN);
}     console.log(highestCount([0, 4, 4, 4, 9, 2, 1])); */

function highestCount(arrayN) {
    let numeroMaior = arrayN[0];
    let repetNum = 0;

  for (let indice = 0; indice < arrayN.length; indice += 1) {
      if (arrayN[indice] > numeroMaior);
      numeroMaior = arrayN[indice];
    }
  for (let indice2 = 0; indice2 < arrayN.length; indice2 += 1) {
     if (numeroMaior == arrayN[indice2]) {
      repetNum = repetNum + 1;
     }
   }
   return repetNum;
  }
  console.log(highestCount([9, 9, 1, 2, 3, 9, 5, 7]));


// Desafio 7: Crie uma função de Caça ao Rato
function catAndMouse(cat1, cat2, mouse) {
    let dist1 = Math.abs(mouse - cat1)   //O "Math.abs" (math é o objeto e abs o método usado)retorna o valor absoluto de um numero, no caso da função aqui vai transformar um numero negativo em positivo.
    let dist2 = Math.abs(mouse - cat2)
  if (dist1 < dist2) {
      return 'cat1'
  } else if (dist2 < dist1) {
      return 'cat2'
  } else if (dist1 == dist2) {
    return 'os gatos trombam e o gato foge'
    }
};    console.log(catAndMouse(6, 12, 0));

// Desafio 8: Crie uma função FizzBuzz
//mod (%); se o resto é diferente de zero, vai indicar que o numero do array não é divisível por 3 e nem por 5.
//
function fizzBuzz(array) {
  let num1 = 3;
  let num2 = 5;
  let arrayStr = [];

  for (let index = 0; index < array.length; index += 1) {
    if (index % num1 == 0 && index % num2 == 0) {
        arrayStr.push('fizzBuzz');
    } else if (index % num1 == 0) {
      arrayStr.push('fizz');
    } else if (index % num2 == 0) {
      arrayStr.push('buzz');
    } else if (index % num1 !== 0 && index % num2 !== 0){
      arrayStr.push('bug!');
    }
  }
  return arrayStr;
};
    console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9: Crie uma função que Codifique e Decodifique
function encode(string) {

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
