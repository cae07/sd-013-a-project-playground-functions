// Desafio 10
function techList(array,name) {
  let object = {}; object.tech = array; object.name = name;
  let assistant = 0; let newArray = [];
  for (let r = 0; r < object.tech.length; r += 1 ) {
    for (let i = 0; i < object.tech.length-1; i += 1) {
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
    condition = "Array com tamanho incorreto.";
  }
  for (let i = 0; i < array.length; i += 1 ) {
    if ((array[i] < 0) || ((array[i] > 9) )){
      condition = "não é possível gerar um número de telefone com esses valores";
    }
    for (let v = 0; v < array.length; v += 1) {
      if (array[i] == array[v]) {
        repeat += 1;
        if (repeat >= 3) {
          condition = "não é possível gerar um número de telefone com esses valores"
        }
      }
    }
    repeat = 0;
    if (i < 1) {
      phone += '(' + array[i];   // (1
    } else if (i > 0 && i < 2) {
      phone += array[i] + ') ';  // (12)
    } else if (i > 1 && i < 7) {
      phone += array[i];        // (12)34567
    } else if (i >= 7) {
      if (i > 6 && i < 8) {
        phone += '-';           // (12)34567-
      }
      phone += array[i];  // (12)34567-8901
    }
  }
  
  if (condition == '') {
    return phone;
  } else {
    return condition;
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck
}