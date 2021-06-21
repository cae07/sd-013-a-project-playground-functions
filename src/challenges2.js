// Desafio 10
function techList(t, name) {
  // seu código aqui

  var lista = [];
  t = t.sort();
  
  if(t.length === 0){
    return 'Vazio!';
  }

  for(var i = 0; i < t.length; i++){
    lista.push({
      tech: t[i],
       name: name
      });
  }

  return lista;
}
  // Desafio 11
function generatePhoneNumber(f) {
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
}
