// Desafio 10
function techList(array,name) {
  // montando objeto
  let object = {};
  object.tech = array;
  object.name = name;
  let assistant = 0;
  let newArray = [];
  // for com repetições de acordo com o tamanho do array
  for (let r = 0; r < object.tech.length; r += 1 ) {
    // for auxiliando as comparações de posições
    for (let i = 0; i < object.tech.length-1; i += 1) {
      // if comparando posição atual do i com a próxima
      if (object.tech[i] > object.tech[i + 1]) {
        assistant = object.tech[i];
        object.tech[i] = object.tech[i + 1];
        object.tech[i + 1] = assistant;
      }
    }
  }
  // for para inserir cada tecnologia e o nome em uma posição de um novo array
  for (let i = 0; i < object.tech.length; i += 1) {
    newObject = {};
    newObject.tech = object.tech[i];
    newObject.name = object.name;
    newArray.push(newObject);
  }
  return newArray;
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