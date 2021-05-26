// Desafio 10
function techList(tecnologias, nome) {
  let tecnologia = [];

  if (!(tecnologias[0])) {
    tecnologia = 'Vazio!'
  }

  for (let i = 0; i < tecnologias.length; i += 1) {
    for (let j = 0; j < tecnologias.length; j += 1) {
      if (tecnologias[i] < tecnologias[j]) {
        let maior = tecnologias[i];
        tecnologias[i] = tecnologias[j];
        tecnologias[j] = maior;
      }
    }
  }

  for (tec of tecnologias) {
    tecnologia.push({ name: nome, tech: tec });
  }
  return tecnologia;
}

console.log(techList([], 'Lucas'));

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
