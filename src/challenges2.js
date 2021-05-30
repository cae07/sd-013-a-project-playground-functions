// Desafio 10
function techList(arrayTecnologia, name) {
  if (arrayTecnologia.length === 0) {
    return 'Vazio!';
  }
  let tecnologiaArray = [];
  for (let tecnologia of arrayTecnologia) {
    tecnologiaArray.push({
      tech: tecnologia,
      name,
    });
  }
  tecnologiaArray.sort(function compare(a, b) {
    if (a.tech < b.tech) {
      return -1;
    }
    return 1;
  });
  return tecnologiaArray;
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
