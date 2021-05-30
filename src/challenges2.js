// Desafio 10
function techList(techh, name) {
  // seu código aqui
  let objeto = [];
  techh.sort();

  for (technology of techh) {
    let obj = {
      tech: technology,
      name: name
    }
    objeto.push(obj);
  }
  if (techh.length === 0) {
    return "Vazio!"
  }
  return objeto;
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
