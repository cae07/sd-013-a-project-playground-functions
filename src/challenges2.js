// Desafio 10
function techList(arrayNomes, name) {
  let arrayCompleto = [];
  let arrayCompletoSort = arrayNomes.sort();
  if (arrayNomes.length === 0) return 'Vazio!';
  arrayCompletoSort.forEach((nomeCorrente) => {
    const objeto = {
      tech: nomeCorrente,
      name,
    };
    arrayCompleto.push(objeto);
  });
  return arrayCompleto;
}
console.log(techList([], 'yuri'));

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
