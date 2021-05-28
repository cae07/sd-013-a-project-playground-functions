// Desafio 10
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(arrayTech, name) {
  arrayTech.sort();
  let nome = name;
  let arrayEmp = [];

  if (arrayTech.length > 0) {
    for (let index of arrayTech) {
      let object = {
        tech: index,
        name: nome,
      }
      arrayEmp.push(object);
    }
  } else {
    arrayEmp = 'Vazio!';
  }
  return arrayEmp;
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
