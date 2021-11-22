// Desafio 10
function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  const objects = array.map((item) => ({
    tech: item,
    name,
  }));

  return objects.sort(function (a, b) {
    if (a.tech < b.tech) {
      return -1;
    } if (a.tech > b.tech) {
      return 1;
    }
    return 0;
  });
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
