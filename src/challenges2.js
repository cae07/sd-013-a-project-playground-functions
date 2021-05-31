// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let msg = '';
  let arrayObj = [];
  
  if (tech.length < 1) {
    msg = 'Vazio!';
  } else{
    var ordena = tech.sort();
    for(let index = 0; index < ordena.length; index +=1) {
      let objeto = {
        tech: ordena[index],
        name: name
      }
      arrayObj.push(objeto);     
    }
    msg = arrayObj;
  }
  return msg;
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
