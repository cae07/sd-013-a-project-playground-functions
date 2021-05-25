// Desafio 10
function techList(listaDeTecnologias, nome) {
  let listaDeTech = [];
  if (listaDeTecnologias.length <= 0) {
    return 'Vazio!';
  }

  for (let tecnologia of listaDeTecnologias.sort()) {
    listaDeTech.push({ name: nome, tech: tecnologia });
  }
  return listaDeTech;
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
