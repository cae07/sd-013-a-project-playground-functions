// Desafio 10
// https://ricardo-reis.medium.com/operadores-l%C3%B3gicos-logical-operators-b0687819d1a5
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function techList(array3, name) {
  if(!array3.length) return 'Vazio!';
  let info = [];
  for (let i of array3) {
    info.push ( {
     tech: i,
     name: name, 
    });
  }
  info.sort((a, b) => (a.tech > b.tech) ? 1 : -1);
  return info;
}

console.log(techList("2", "Icaro"));

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
