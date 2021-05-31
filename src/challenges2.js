// Desafio 10
let array = [];
function techList(tech, name) {
  if (tech.length === 0) {
    return "Vazio!"
  }
    for (const key in tech.sort()) {
        let nomeTech = {
            name: name,
            tech: tech[key],
        };
        array.push(nomeTech);
    }return array;
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
