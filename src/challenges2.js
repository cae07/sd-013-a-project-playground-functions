// Desafio 10
function techList(techNames, name) {
  if (techNames.length === 0) {
    return 'Vazio!';
  }
  let listaTech = techNames.sort(); // recebe o array de tecnologias e o organiza
  let organList = []; // Onde será colocada a nova lista organizada, junto com o nome, em ordem crescente
  for (let i = 0; i < listaTech.length; i += 1) {
    organList.push({
      tech: listaTech[i],
      name,
    });
  }
  return organList;
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
