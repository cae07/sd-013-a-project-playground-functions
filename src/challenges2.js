// Desafio 10
function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  const teste = array.sort();
  const newArray = teste.map((tech) => ({ tech, name }));
  return newArray;
}

// Desafio 11
function notExist(number) {
  for (let num of number) if ((num < 0) || (num > 9)) return true;
  return false;
}

function repeat(numbers) {
  let numReduced = [...new Set(numbers)];
  for (let num of numReduced) {
    if (numbers.filter((number) => number === num).length >= 3) return true;
  }
  return false;
}

function generatePhoneNumber(num) {
  if (num.length !== 11) return 'Array com tamanho incorreto.';
  if (notExist(num) || repeat(num)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  num = num.join('');
  return `(${num.slice(0, 2)}) ${num.slice(2, 7)}-${num.slice(7, 11)}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA > Math.abs(lineB + lineC))
  || (lineB > Math.abs(lineA + lineC))
  || lineC > Math.abs(lineB + lineA)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let array = string.match(/\d+/g);
  let qty = 0;
  let variable = 'copos';
  for (let i = 0; i < array.length; i += 1) {
    let number = parseInt(array[i], 10);
    qty += number;
  }
  if (qty === 1) variable = 'copo';
  return `${qty} ${variable} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
