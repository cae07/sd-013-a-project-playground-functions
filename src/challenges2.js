// Desafio 10
function techList(techsList, nome) {
  let techToNameLearn = [];

  for (let technology of techsList.sort()) {
    techToNameLearn.push({
      tech: technology,
      name: nome,
    });
  }
  if (techsList.length > 0) {
    return techToNameLearn;
  }
  return 'Vazio!';
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
