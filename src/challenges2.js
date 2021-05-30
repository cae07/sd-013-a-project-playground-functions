// Desafio 10
function techList(tech, name) {
  if(tech.length > 0) {
    order = tech.sort();

    for (let indexTechList = 0; indexTechList < tech.length; indexTechList +=1) {

      object = {
        tech: order[indexTechList],
        name: name,
      }

      resultTechList[indexTechList] = object;
    };
  } else {
    resultTechList = 'Vazio!';

  };

  return resultTechList;
};
  
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
