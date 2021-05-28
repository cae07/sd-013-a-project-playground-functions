// Desafio 10
function techList(techArray, nome) {
  let itens = [];
  for (let i in techArray) {
    if (techArray[i]) {
      let tech = { name: nome,
        tech: techArray[i] };
      itens.push(tech);
    }
  }
  return itens;
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
