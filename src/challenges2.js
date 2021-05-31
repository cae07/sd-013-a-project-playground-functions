// Desafio 10
function techList(array, name) {
  let newArr = [];
  if (!array.length) {
    return 'Vazio!';
  }
  for (let i = 0; i < array.length; i += 1) {
    let obj = { tech: array[i], name: name };
    newArr.push(obj);
    newArr.sort((a, b) => (a.tech > b.tech ? 1 : -1));
  } return newArr;
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
