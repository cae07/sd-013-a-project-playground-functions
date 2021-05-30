// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'vazio';
  }
  let arrayTech = [];
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    let learningTech = {
      tech: array[index],
      name,
    };
    arrayTech.push(learningTech);

  }
  return arrayTech.sort();
}
console.log(techList([], 'Lucas'));
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
