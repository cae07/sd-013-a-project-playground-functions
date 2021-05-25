// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  if (arrayTech.length != 0) {
    let ordArrayTech = arrayTech.sort();
    let arrayObjectTech = [];

    for (let tecnologia of ordArrayTech) {
      arrayObjectTech.push({
        tech: tecnologia,
        name: name
      });
    }

    return arrayObjectTech;
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
