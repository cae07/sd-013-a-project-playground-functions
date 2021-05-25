// Desafio 10
function techList(arrayNomesTecnologias, name) {
  arrayNomesTecnologias = arrayNomesTecnologias.sort();
  let resultado = ""
  let novoArrayNomesTecnologias = [];
  for (let indexD10 = 0; indexD10 < arrayNomesTecnologias.length; indexD10 += 1) {
    let objetoAAdicionar = {
      tech: arrayNomesTecnologias[indexD10],
      name: name,
    }
    novoArrayNomesTecnologias.push(objetoAAdicionar);
  }
  if (arrayNomesTecnologias.length === 0) {
    resultado = 'Vazio!';
  } else {
    resultado = novoArrayNomesTecnologias;
  }
  return resultado; 
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
