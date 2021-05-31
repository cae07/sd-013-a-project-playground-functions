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
  let negativa = -1;
  for (let i = 0; i < array.length; i += 1) {
    if ((array[i] >= array[i+1]) && (array[i] !== negativa)) {
      conta = 1;
      negativa = array[i];
    }else if ((array[i] >= array[i+1]) && (array[i] === negativa)) {
      conta += 1;
    if (array[array.length - 1] === array[array.length - 2]) {
      conta += 1;
    }  
    }  
  }       
  return conta; 
}
let teste = [0, 0, 0];
console.log(highestCount(teste));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaDoGato1 = 0;
  let distanciaDoGato2 = 0;
  if (mouse < cat1) {
    distanciaDoGato1 = cat1 - mouse;
 }else {
    distanciaDoGato1 = mouse - cat1;
 }
  if (mouse < cat2) {
    distanciaDoGato2 = cat2 - mouse;
  }else {
    distanciaDoGato2 = mouse - cat2;
  }
  if (distanciaDoGato1 === distanciaDoGato2) {
    return 'os gatos trombam e o rato foge';
  }else if (distanciaDoGato1 < distanciaDoGato2) {
    return 'cat1';
  }else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
let receveAll = [];
for (let i = 0; i < array.length; i += 1) {
 if ((array[i] % 3 === 0) && (array[i] % 5 === 0)) {
  receveAll.push('fizzBuzz');
 }else if (array[i] % 3 ===0) {
  receveAll.push('fizz');
 }else if (array[i] % 5 ===0) {
  receveAll.push('buzz');
 }else if ((array[i] % 3 !== 0) && (array[i] % 5 !== 0)){
  receveAll.push('bug!');
 }  
}
return receveAll;
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
