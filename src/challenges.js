// Desafio 1 == OK, passou nos 3 testes
const compareTrue = (veredito1, veredito2) => {
  const trueOrFalse = (veredito1 && veredito2);
  return (trueOrFalse);
};
console.log(compareTrue(false, true));

// Desafio 2 == OK, passou nos 3 testes
const calcArea = (base, height) => {
  let area = base * height;
  return area / 2;
};
console.log(calcArea(50, 1));

// Desafio 3 == OK, passou nos 3 testes
const splitSentence = (string) => string.split(' ');
console.log(splitSentence('go trybe'));

// Desafio 4 == OK, passou nos 3 testes
const concatName = (array) => {
  const primeiro = array[0];
  const ultimo = array[array.length - 1];
  const result = ultimo.concat(', ', primeiro);
  return result;
};
console.log(concatName(['ultimo', 'my', 'primeiro']));

// Desafio 5 == OK, passou nos 3 testes.
const footballPoints = (wins, ties) => {
  let result = (wins * 3) + (ties * 1);
  return result;
};
console.log(footballPoints(1, 1));

// Desafio 6
const highestCount = (arrayNum) => {
  let maiorNum = Math.max.apply(null, arrayNum);
  let contaVezes = 0;
  arrayNum.forEach((num) => {
    if (num === maiorNum) contaVezes += 1;
  });
  return contaVezes;
};
// fonte : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply (appy)
// apply => 1° parametro é o contexto, 2° parametro são os valores que a função recebe
console.log(highestCount([-2, -2, -1, -1, -1]));

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  let distGato1 = cat1 - mouse;
  let distGato2 = cat2 - mouse;
  if (distGato1 < 0) distGato1 *= -1;
  if (distGato2 < 0) distGato2 *= -1;
  if (distGato1 < distGato2) return 'cat1';
  if (distGato2 < distGato1) return 'cat2';
  return 'os gatos trombam e o rato foge';
};
console.log(catAndMouse(1, 0, 2));

// Desafio 8
const fizzBuzz = ((array) => {
  let resultado = [];
  array.forEach((position) => {
    if (position % 3 === 0 && position % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (position % 5 === 0) {
      resultado.push('buzz');
    } else if (position % 3 === 0) {
      resultado.push('fizz');
    } else { resultado.push('bug!'); }
  });

  return resultado;
});
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
