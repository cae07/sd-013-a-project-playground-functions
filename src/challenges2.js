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
    return "vazio";
  } else {
    return newArray;
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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