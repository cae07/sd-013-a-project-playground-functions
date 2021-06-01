// Desafio 10
function techList(tecnologias, name) {

  if(tecnologias.length === 0){
    return "Vazio!";
  }

  tecnologias.sort();

  let novaListaDeTecnologias = [];

  for(let tecnologia of tecnologias){
    let tecnologiaQueEuQueroAprender = {
      tech: tecnologia,
      name: name
    }
    novaListaDeTecnologias.push(tecnologiaQueEuQueroAprender);
  }

  return novaListaDeTecnologias;
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
