// Desafio 10
// realizado com ajuda do Silvio
function techList(tecnologias, name) {
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }

  let tecnologia = [];
  tecnologias.sort();

  for (let valor = 0; valor < tecnologias.length; valor += 1) {
    tecnologia.push({
      tech: tecnologias[valor],
      name,
    });
  }
  return tecnologia;
}

// Desafio 11
function generatePhoneNumber() {

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
