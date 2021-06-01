// Desafio 10
function techList(arrayTecno, name) {
  let tecnologias = [];
  if (arrayTecno.length === 0) {
    return 'Vazio!';
  }
  arrayTecno = arrayTecno.sort();
  for (const techName of arrayTecno) {
    tecnologias.push({ tech: techName, name: name });
  }
  return tecnologias;
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
