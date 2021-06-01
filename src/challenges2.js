// Desafio 10
function techList(tech, name) {
  let array = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  tech.sort();
  for (let index in tech) {
    let object = {};
    object.name = name;
    object.tech = tech[index];
    array.push(object);
  }
  return array;
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
