// Desafio 10
function techList(arrayTechList, nome) {
  let objectTechList = [];
  if (arrayTechList.length === 0) {
    return 'Vazio!';
  }
  arrayTechList = arrayTechList.sort();
  for (let key of arrayTechList) {
    objectTechList.push({
      tech: key,
      name: nome,
    });
  }
  return objectTechList;
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
