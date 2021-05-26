// Desafio 10
function techList(myObject, name) {
  let newArray = [];
  let result = newArray;
  myObject.sort();
  if (myObject.length > 0) {
    for (let counter of myObject) {
      let newObject = {
        tech: counter,
        name,
      };
      newArray.push(newObject);
    }
  } else {
    result = 'Vazio!';
  }
  return result;
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
  triangleCheck,
};
