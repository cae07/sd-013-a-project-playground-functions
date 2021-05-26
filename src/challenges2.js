// Desafio 10
function techList(arr, name) {
  if (arr.length === 0) {
    return 'Vazio!';
  }

  arr.sort();
  let ordenedArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    ordenedArr.push({
      tech: arr[i],
      name: name,
    });
  }

  return ordenedArr;
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
