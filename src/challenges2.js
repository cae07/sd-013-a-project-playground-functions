// Desafio 10
function techList(nomesTech, nome) {
  let nomeTech = nomesTech.sort();
  let tech = [];
    if (nomesTech.length === 0){
      return 'Vazio!';
    } else {
    for (let i in nomeTech){
      tech.push({tech: nomeTech[i], name: nome })
    }};
    return tech;
};

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
