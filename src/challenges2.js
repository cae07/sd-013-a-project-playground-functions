// Desafio 10
function techList(array, name) {
  let orderedArray = array.sort();
  let emptyArray = [];

  if (array.length === 0) {
    return ('Vazio!')
  }
  for (let key in array) {
    emptyArray.push({tech: array[key], name: name});
  }

  return (emptyArray);
} // Exercício realizado com a ajuda do estudante Erick Santos

// Desafio 11
function generatePhoneNumber(array) {
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
