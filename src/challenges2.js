// Desafio 10
function techList(arrayTech, name) {
  let newListOfObjeccts = [];
  arrayTech = arrayTech.sort();
  
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arrayTech.length; index += 1) {
    newListOfObjeccts.push({ tech: arrayTech[index], name: name });
  }
  return newListOfObjeccts;
//   for (let index in arrayTech) {
//     if (arrayTech[index] === String); {
//       newListOfObjeccts = [`tech: ${arrayTech[index]}, name: ${name}`];
//     } if (arrayTech[index] === '') {
//       newListOfObjeccts = 'Vazio!';
//     }
//   }
//   return newListOfObjeccts;
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
