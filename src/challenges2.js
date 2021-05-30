// Desafio 10
function techList(tech, name) {
  let techArray = [];
  if (tech.length > 0) {
    for (let index = 0; index < tech.length; index += 1) {
      techArray.push({ tech: tech.sort()[index], name});
    }
    return (techArray);
  }
  return ('vazio');
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
