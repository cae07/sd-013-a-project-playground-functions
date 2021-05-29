// Desafio 10
function techList(technology,name) {
  let array = [];
  let aux = technology.sort()

  if(technology == "") {
    return "Vazio!";
  } else {

    for(let i = 0; i < aux.length; i += 1) { 
      array.push(
        obj = {
          tech : aux[i],
          name : name
        } 
      )    
    }
  }
  
  return array;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"))
console.log(techList([],"Lucas"))

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
