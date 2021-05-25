// Desafio 10
function techList(array, name) {
  array = array.sort();
  let output = [];
  if (array.length === 0) {
    return 'Vazio!';
  } 
  for (let i of array) {
    let object = {
      tech: i,
      name: name,
    };
    output.push(object);
  }
  return output;
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
