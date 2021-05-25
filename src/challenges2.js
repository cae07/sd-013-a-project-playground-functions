// Desafio 10
function techList(techArray, name) {
  let orderedTechs = techArray.sort().map((tech) => ({
    tech,
    name,
  }));
  return orderedTechs.length ? orderedTechs : 'Vazio!';
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
