// Desafio 10
function techList(techs, nome) {
  array = [];
  if (Array.isArray(techs) && techs.length > 0) {
    techs.sort();
    for (let i = 0; i < techs.length; i++) {
      let obj = {
        tech: techs[i],
        name: nome,
      }
      array.push(obj);
    }
    return array;
  } else {
    return "Vazio!";
  }
}  
  // Desafio 11
  function generatePhoneNumber(arrayNumber) {
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
