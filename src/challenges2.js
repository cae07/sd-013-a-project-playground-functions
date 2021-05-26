// Desafio 10
function techList(tech, name) {
 newtech= tech.sort();
 let lista=[];
 for(let [key] in newtech){
    if(tech.length!==0){
     lista.push({
       tech: newtech[key],
       name,
     });
    return lista;
  }else{
    return 'Vazio!';
  }
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
