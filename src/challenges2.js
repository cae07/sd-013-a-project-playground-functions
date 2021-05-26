// Desafio 10

function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  else {
    let sortArray = array.sort();
    let finalArray = [];

    for (let key in sortArray) {
      finalArray.push({ tech: sortArray[key], name: name })
    }
    return finalArray;

  }
}

// Verifica se numero é menor que zero ou maior que nove
function verificaNumero(array) {
  let verificacao = true;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 9 || array[i] < 0) {
      verificacao = false;
    }
  }
  return verificacao;
}

// Verifica quantidade de repeticoes
function verificaRepeticoes(array) {
  let maxRepeticoes = 0;
  let repeticoes = 0;
  for (let index in array) {
    let numeroAtual = array[index];

    for (let index2 in array) {
      if (numeroAtual === array[index2]) {
        repeticoes += 1;
      }
    }

    if (repeticoes > maxRepeticoes) {
      maxRepeticoes = repeticoes;
    }
    repeticoes = 0;
  }

  return maxRepeticoes;
}

function formatNumber(array) {
  let region = `(${array[0]}${array[1]})`;
  let firstHalf = "";
  let secondHalf = "";
  let phoneNumber = "";

  for (let index = 2; index <= 6; index += 1) {
    firstHalf += array[index];
  }

  for (let index = 7; index <= 10; index += 1) {
    secondHalf += array[index];
  }

  phoneNumber = `${region} ${firstHalf}-${secondHalf}`;

  return phoneNumber;
}

// formatNumber(phoneNumber);

// Desafio 11
function generatePhoneNumber(numbers) {

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  else if (verificaNumero(numbers) === false || verificaRepeticoes(numbers) >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  else {
    return formatNumber(numbers);
  }
}
// generatePhoneNumber(phoneNumber);

// Verificar se a medida de qualquer de um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.
function checkLine(a, b, c) {
  if (a < ( b + c ) && a > Math.abs(b - c)) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  let check = true;
  
  let a = checkLine(lineA, lineB, lineC);
  let b = checkLine(lineB, lineA, lineC);
  let c = checkLine(lineC, lineB, lineA);

  console.log(a, b,  c);

  if( a === false || b === false || c === false) {
    check = false;
  }
  return check; 
}

// Desafio 13
function hydrate(string) {

  let reg = /\d+/g;
  let result = string.match(reg);
  let numbers = result.map( el => parseInt(el));
  let count = 0;

  for (let index in numbers) {
    count += numbers[index];
  }

  if (count === 1) {
    return `${count} copo de água`;
  }
  else {
    return `${count} copos de água`;
  }
}

// hydrate("1 cachaça, 5 cervejas e 1 copo de vinho");


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
