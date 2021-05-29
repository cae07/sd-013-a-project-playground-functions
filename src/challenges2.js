// Desafio 10
// const techName = 'tech';
// const nome = 'name';
// let chaveTech = {};
// let objectArray = [];

// for (let index = 0; index < techs.length; index += 1) {
//   chaveTech[techName] = techs[index];
//   chaveTech[nome] = name;

//   objectArray.push(chaveTech);
// }

function techList(techs, name) {
  if (techs.length === 0) {
    let resultado = 'Vazio!';
    return resultado;
  }

  techs.sort();
  let objectArray = [];

  for (let key of techs) {
    objectArray.push({
      tech: key,
      name: name,
    });
  }

  return objectArray;
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
