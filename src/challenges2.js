// Desafio 10
function techList(array, jogador) {
let lista = array.sort();
let tech = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let i in lista) {
    tech.push({tech: lista[i], name: jogador})
  }
  return tech
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
