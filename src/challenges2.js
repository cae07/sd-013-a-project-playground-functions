// Desafio 10
function techList(tecNames, n4me) {
  let tecName0rdenado = tecName.sort();
  let tecListReturn = [];
  if (tecName.length !== 0) {
    for (let key = 0; techName0rdenado.length > key; key +=1) {
      let tecList = {
        tech: techName0rdenado[key],
        name: n4me,
      };
      techListReturn.push(tecList);
    }
  } else {
    return 'vazio';
  }
  return tecListReturn;
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
