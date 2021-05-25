// Desafio 10
function techList(array, name) {
  array.sort();
  let novoArray = [];
  let result = novoArray;

  if (array.length > 0) {
    for (let index of array) {
      let objeto = {
        tech: index,
        name,
      };
      novoArray.push(objeto);
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
