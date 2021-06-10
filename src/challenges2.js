// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let crescente = array.sort ();
  let conjunto = [];
  for (let index = 0; index < array.length; index +=1) {
    conjunto[index] = {
        tech: crescente[index],
        name: name
      }
    }
    return conjunto;
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
