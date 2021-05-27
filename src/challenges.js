// Desafio 1
function compareTrue(x,y) {
  if( (x === true) && (y === true)) {
    return true;
  } else {
    return false;
  }
  
}

console.log(compareTrue(true,false));

// Desafio 2
function calcArea(base,heigh) {
  let area = (base * heigh) / 2;
  return area;
}

console.log(calcArea(10,50));
console.log(calcArea(5,2));
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(digite) {
  let separador = digite.split(' ');
  return separador;
}

console.log(splitSentence("Vamo que vamo go Trybe"));

// Desafio 4
function concatName(...nomes) {
  let first = nomes[0];
  let last = nomes[nomes.length - 1]
  let join = last + ", "+ first;
  return join;
}

console.log(concatName('Lucas', 'Cassiano', 'Ferraz', 'Paolillo'));
console.log(concatName('foguete', 'não', 'tem', 'ré'));
console.log(concatName('captain', 'my', 'captain','captain', 'my', 'captain'));

function footballPoints(wins,ties) {
  vitoria = wins * 3;
  
  return vitoria + ties;
}
console.log(footballPoints(14,8));
console.log(footballPoints(1,2));
console.log(footballPoints(0,0));

// Desafio 6
function highestCount() {
  
}


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
