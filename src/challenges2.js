// Desafio 10
function techList(lista, nome) {
  let retorno;
  let listaObjetos = [];
  if (lista.length > 0) {
    for (let key in lista.sort()) {
      let objeto = {
        tech: lista[key],
        name: nome,
      };
      listaObjetos.push(objeto);
    }
    retorno = listaObjetos;
  } else {
    retorno = 'Vazio!';
  }
  return retorno;
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
