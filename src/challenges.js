// Desafio 1
function compareTrue(valor_a, valor_b) {
if (valor_a == true && valor_b == true){
return true;
} else {
return false;
}
}

// Desafio 2
function calcArea(base, height) {
return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
let array = [];
let string = '';  
if (frase.indexOf(' ') > -1){
for (let index = 0; index < frase.length; index += 1) {
  if (frase[index] !== ' ') {
    string += frase[index];
  } else {
    array.push (string);
    string = ''; 
  }
}
array.push (string);
return array;
} else {
  array.push(frase);
  return array;
}

}
console.log(splitSentence ('go trybe'));

// Desafio 4
function concatName(nomes) {
return `${nomes[nomes.length - 1]}, ${nomes[0]}`;
}
let listaDeNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(listaDeNomes));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let conta = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] >= array[i+1]) {
      conta += 1;
    } else if (array[array.length - 1] <= array[array.length - 2]) {
      conta += 1;
    }
  }
  return conta; 
}
let teste = [0, 4, 4, 4, 9, 2, 1];
console.log(highestCount(teste));

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
