// Desafio 10
function techList(list, name) {
  let techList = [];
  for (let item of list.sort()) {
    techList.push({
      tech: item,
      name: name
    })
  }
  if (techList.length === 0) {
    techList = 'Vazio!';
  }
  return techList;
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
