// Desafio 10
function techList(techArray = Array, nome) {
  let itens = [];
  // eslint-disable-next-line guard-for-in
  if (techArray.length <= 3) {
    return 'Vazio!';
  }
  // eslint-disable-next-line guard-for-in
  if (techArray.length >= 5) {
    // eslint-disable-next-line guard-for-in
    for (let i in techArray) {
      let tech = { tech: techArray[i],
        name: nome };
      itens.push(tech);
    }
    // else if (techArray === 0) {
    // return 'Vazio!';
    return itens;
  }
}
console.log(techList(['java', 'python', 'javascript', 'feijao', 'arroz'], 'breno'));
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
