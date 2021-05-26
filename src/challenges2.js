// Desafio 10
function techList(techn, name){
  if (techn.length === 0) {
    return 'Vazio!';
  }
  let tecnsort = techn.sort();
  let objetos = [];
  for (let index = 0; index < tecnsort.length; index += 1) {
    objetos.push({
      tech: tecnsort[index],
      name,
    });
  }
  return objetos;
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
