// Desafio 10
function techList(techNames, name) {
  let techObject = {};
  let techArray = [];
  if (techNames[0] === undefined) {
    return 'Vazio!';
  }
  for (let index of techNames) {
    techObject['tech'] = index;
    techObject['name'] = name;
    techArray.push(techObject);
    techObject = {};
  }
  return techArray.sort(function (a, b) {
    if (a.tech.toLowerCase() < b.tech.toLowerCase()
    ) return -1;
    if (a.tech.toLowerCase() > b.tech.toLowerCase()
    ) return 1;
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
