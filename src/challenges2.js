// Desafio 10
function techList(technology,name) {
  
  
  let array = [];

  for(let i = 0; i < technology.length; i += 1) { 
   
    if(technology[i] == null){
      return 'Vazio!';
    } else {
      array.push(
        obj = {
          tech : technology[i],
          name : name
        } 
      )      
    }
  }
  return array;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"].sort(),"Lucas"))

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
