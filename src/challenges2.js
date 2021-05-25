// Desafio 10
function techList(arrayTech, name) {
  arrayTech.sort();
  for (let i = 0; i < arrayTech.length; i += 1) {
    arrayTech[i] = {
      tech: arrayTech[i],
      name: name
    }
  }

  if (arrayTech == "") {
    return 'Vazio!'
  } else {
    return (arrayTech);
  }
}
console.log(techList([], "Lucas"));

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
