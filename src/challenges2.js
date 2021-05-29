// Desafio 10
function techList(array, name) {
  let object = {};
  object.tech = array;
  object.name = name;
  let assistant = 0;
  let newArray = [];
  for (let r = 0; r < object.tech.length; r += 1 ) {
    for (let i = 0; i < object.tech.length - 1; i += 1) {
      if (object.tech[i] > object.tech[i + 1]) {
        assistant = object.tech[i];
        object.tech[i] = object.tech[i + 1];
        object.tech[i + 1] = assistant;
      }
    }
  }
  for (let i = 0; i < object.tech.length; i += 1) {
    newObject = {}; newObject.tech = object.tech[i];
    newObject.name = object.name;
    newArray.push(newObject);
  }
  if (newArray == '') {
    return "Vazio!";
  } else {
    return newArray;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  let repeat = 0;
  let phone = '';
  let condition = '';
  if (array.length < 11 || array.length > 11) {
    condition = 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1 ) {
    if ((array[i] < 0) || ((array[i] > 9) )){
      if (condition == '') {
        condition = 'não é possível gerar um número de telefone com esses valores';
      }
    }
    for (let v = 0; v < array.length; v += 1) {
      if (array[i] == array[v]) {
        repeat += 1;
        if (repeat >= 3) {
          if (condition == '') {
            condition = 'não é possível gerar um número de telefone com esses valores';
          }
        }
      }
    }
    repeat = 0;
    if (i < 1) {
      phone += '(' + array[i];
    } else if (i > 0 && i < 2) {
      phone += array[i] + ') ';
    } else if (i > 1 && i < 7) {
      phone += array[i];
    } else if (i >= 7) {
      if (i > 6 && i < 8) {
        phone += '-';
      }
      phone += array[i];
    }
  }

  if (condition == '') {
    return phone;
  } else {
    return condition;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) {
    return false;
  } else {
    if ((Math.abs(lineA - lineB) < lineC) || (Math.abs(lineB - lineC) < lineA) || (Math.abs(lineC - lineA) < lineB)) {
      return true;
    }
  }
}

// Desafio 13
function hydrate(order) {
  let orderBar = 0;
  let number = order.match(/\d/g).join('');
  for (let i = 0; i < number.length; i += 1) {
    orderBar += parseInt(number[i]);
  }
  if (orderBar > 1) {
    return `${orderBar} copos de água`;
  } else {
    return `${orderBar} copo de água`;
  }
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
/*
Match p/ busca números (\d);
(flag g) faz com que não pare no primeiro encontrado;
join('') junta os valores do array para string;
parseInt retorna para número inteiro para cálculos;
*/
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck
}