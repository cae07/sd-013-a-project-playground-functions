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
  return "'" + array [array.length -1] + "'" +','+' '+ "'" + array[0] + "'";
} // console.log(concatName(['capitão', 'meu', 'capitão']));

// Desafio 5: Crie uma função que calcule a quantidade de pontos no futebol
function footballPoints(wins, ties) {
 return (wins * 3) + (ties * 1)

} //console.log(footballPoints(1, 2));

// Desafio 6// for (indice = 0; indice < arrayDeNumeros.length; indice += 1)
function highestCount(arrayDeNumeros) {
  // let ordem = arrayDeNumeros.sort()
   // maiorNumero == maiorNumero += 1
   //return ordem */
}
  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7: Crie uma função de Caça ao Rato
function catAndMouse(cat1, cat2, mouse) {
  cat1 = Math.abs(mouse - cat1);
  cat2= Math.abs(mouse - cat2);
  if (cat1 < cat2) {
      return "cat1"
  } else if (cat2 < cat1) {
      return "cat2"
  } else {
      return 'os gatos trombam e o gato foge'
    }
}; //console.log(catAndMouse(5, 5, 0));

// Desafio 8: Crie uma função FizzBuzz
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9: Crie uma função que Codifique e Decodifique
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
