// Desafio 10
// Ajudado por 
function techList(tech, name) {
  let menor = tech.sort();
  let array = [];
  for (let index = 0; index < menor.length; index += 1) {
    array.push({
      tech:  menor[index],
      name:  name,
    })
  }
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    return array;
  }
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
