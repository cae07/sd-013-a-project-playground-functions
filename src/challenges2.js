function createList(param1, param2) {
  let responseList = [];
  for (let item of param1.sort()) {
    let newObj = {
      tech: item,
      name: param2,
    };
    responseList.push(newObj);
  }
  console.log(responseList);
  return responseList;
}

// Desafio 10
function techList(param1, param2) {
  if (param1.length === 0) return 'Vazio!';
  return createList(param1, param2);
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
