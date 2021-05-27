// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let newtech = tech.sort(); //ordena em ordem alfabetica
  let lista = [];
  for (let i = 0; i < newtech.length; i += 1) {
    lista.push({
      tech: newtech[i], //passa indice por indice
      name,
    });
  }
  return lista;
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
