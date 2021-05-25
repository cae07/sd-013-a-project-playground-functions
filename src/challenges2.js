// Desafio 10
function techList(techno, name) {
  if (techno.length !== 0) {
    let arrayOrdenado = techno.sort();
    let objetos = [];

    for (technoS of arrayOrdenado) {
      objetos.push({
        tech: technoS, name,
      });
    }
    return objetos;
  } else {
    return "Vazio!";
  }
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
