// Desafio 10
function techList(array,name) {
  // seu código aqui
let objeto = [];
array.sort()
for(index = 0; index < array.length; index ++){
   
  objeto.push({
  name: name,
  tech: array[index]
}); 
}if(objeto > [{}]){
return objeto
}else{
  return 'Vazio!'
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
