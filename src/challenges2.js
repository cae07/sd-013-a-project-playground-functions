// Desafio 10
function techList(tecArray, name) {
  tecArray.sort();
  let arrayFinal = [];
  if (tecArray.length != 0) {
    for (let index = 0; index < tecArray.length; index += 1){
      arrayFinal[index] = {
        tech: tecArray[index],
        name: name
      }
    }
  } else {
    arrayFinal = 'Vazio!';
  }
  return arrayFinal;
}

// Desafio 11
function generatePhoneNumber(number) {
  if (testQuantity(number) || checkZero(number)) {
    res = '(' + number[0] + number[1] + ') ' + number[2] + number[3] + number[4] + number[5] + number[6] + '-' + number[7] + number[8] + number[9] + number[10]
  } else {
    res = "não é possível gerar um número de telefone com esses valores"
  }
  return res;
}

function testQuantity(number) {
  let count = 0;
  let compare = 0;
  if (number[0] > number[1]) {
    compare = number[0];
  } else {
    compare = number[1];
  }
  for (let index = 2; index < number.length; index += 1) {
    if (number[index] > compare) {
      compare = number[index];
    }
  }
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] === compare) {
      count += 1;
    }
  }
  if (count > 3) {
    return false;
  } return true;
}

function checkZero(number) {
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] < 0 || number[index] > 0) {
      return false;
    }
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(texto) {
  let array = texto.match(/\d+/g);
  let sum = 0;
  for(let index = 0; index < array.length; index += 1) {
    sum = sum + parseInt(array[index]);
  }
  if(sum > 1){
    return sum + ' copos de água';
  } else {
  return sum + ' copo de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
