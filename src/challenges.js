// Desafio 1
function compareTrue(p1, p2) {
  return p1 && p2;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);

// Desafio 3
function splitSentence(sentence) {
  let fraseSeparada = sentence.split(' ');
  return fraseSeparada;
}
splitSentence('go Trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');

// Desafio 4
function concatName(arg) {
  let string = arg;
  let primeiroItem = string[0];
  let ultimoItem = string[string.length - 1];
  let concatenacao = `${ultimoItem}, ${primeiroItem}`;
  return concatenacao;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
concatName(['foguete', 'não', 'tem', 'ré']);
concatName(['captain', 'my', 'captain']);

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = (wins * 3);
  let pontosEmpate = (ties * 1);
  let pontosTotais = pontosVitoria + pontosEmpate;
  return pontosTotais;
}
footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

// Desafio 6
function highestCount(nums) {
  let maiorNum = nums[0];
  let cont = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > maiorNum) {
      maiorNum = nums[i];
      cont = 0;
    }
    if (nums[i] === maiorNum) {
      cont += 1;
    }
  }
  return cont;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);
highestCount([0, 4, 4, 4, 9, 2, 1]);
highestCount([0, 0, 0]);

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
