// Desafio 1
function compareTrue(a,b) {
  if (a == true && b == true) {
    return true;
  } else {
    return false
  }
}
  console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base,height) {
  return (base * height)/2
}
  console.log(calcArea(51,1))

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ', 4);
  return array;
}
  console.log(splitSentence('A Trybe é demais'))

// Desafio 4
function concatName(array) {
  let string = [];
  string.push(array[array.length-1], array[0]);
  return string.join(', ');
}
  console.log(concatName(['foguete', 'não', 'tem', 'ré']))

// Desafio 5
function footballPoints(wins,ties) {
  let soma = (wins * 3) + (ties * 1)
  return soma;
}
  console.log(footballPoints(14,8))


// Desafio 6
function highestCount(numeros) {
  var maior = 0;
  var numeroRepetido = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maior) {
        maior = numeros[index];
        }
    }
  for (let index = 0; index <numeros.length; index += 1) {
    if (numeros[index] == maior)
        numeroRepetido ++;
    }
        return numeroRepetido;
  }
        console.log(highestCount([0, 0, 0]))



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
