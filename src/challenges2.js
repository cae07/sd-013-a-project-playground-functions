// Desafio 10
function techList(tech, name) {
  let results = [];
  let techNames = tech;
  let finalList = [];
  if (techNames.length === 0) {
    return ('Vazio!');
  } for (let i = 0; i < techNames.length; i += 1) {
    let object = {
      tech: '',
      name: name,
    };
    object.tech = techNames[i];
    results.push(object);
  }  finalList = results.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    } if (a.tech < b.tech) {
      return -1;
    } return 0;
  });
  return finalList;
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
