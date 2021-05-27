// Desafio 10
//let array = ["React", "Jest", "HTML", "CSS", "JavaScript"]

function techList(array) {
  // seu código aqui
let objeto = [];
array.sort()
for(index = 0; index < array.length; index ++){
   
  objeto.push({
  name: "Lucas",
  tech: array[index]
}); 
}if(objeto > [{}]){
return objeto
}else{
  return 'Vazio!'
}

}//console.log(techList(array));

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
