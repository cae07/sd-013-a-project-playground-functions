// Desafio 10
function techList(techArray = Array, nome) {
  let itens = [];
  // eslint-disable-next-line guard-for-in
  if (techArray.length === 0) {
    return 'vazio!';
  }
  // eslint-disable-next-line guard-for-in
  for (let i in techArray) {
    let tech = { name: nome,
      tech: techArray[i] };
    itens.push(tech);
  }
  // else if (techArray === 0) {
  // return 'Vazio!';
  return itens;
}
console.log(techList([]));
// Desafio 11
function generatePhoneNumber() {
  
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
