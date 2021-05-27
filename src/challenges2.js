// Desafio 10
function techList(techs, name) {
  let array = [];
  if (techs.length === 0) {
    return 'Vazio!'
  }
  techs.sort();
    for(let index in techs) {
      let object = {};
      object.name = name;
      object.tech = techs[index];
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
