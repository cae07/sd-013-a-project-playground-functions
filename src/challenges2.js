// Desafio 10

function techList(tecnologias, nome) {
  tecnologias = tecnologias.sort();
  let listaObjetos = [];

  if (tecnologias.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < tecnologias.length; index += 1) {
    let objeto = {};

    objeto.tech = tecnologias[index];
    objeto.name = nome;

    listaObjetos.push(objeto);
  }

  return listaObjetos;
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
