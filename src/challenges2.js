// Desafio 10
function techList(t , name) {
  // seu código aqui
  
  var NomeTech =
  {
    tech:  t,
    name:  name

  }
  console.log(NomeTech)
  /*var ListaObjetos = [];

  if (t === null) {
    return "Vazio!";
  }else{
  for(var i = 0; i < t.length; i++){
    var x = new NomeTech
    x.tech = t[i];
    NomeTech.name = name;

    ListaObjetos[i] = NomeTech;
    
  }// fim do for
  return ListaObjetos;
  }// fim do else*/
}// fim da função
techList("PHP","Lucas")
// Desafio 11
function generatePhoneNumber(f) {
  // seu código aqui
  if (f.length != 11) {
    return "Array com tamanho incorreto.";   
  }
  for( var i = 0; i < 11; i++){
    if(f[i] < 0){
      return "não é possível gerar um número de telefone com esses valores";
    }else if (f[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  let rep = 0;
  for(var j = 0; j < 11; i++){
    for(var h= 1; h < 11; h++){
      if(f[j] === f[h]){
        rep = rep +1;
      }
   }// fim j
}// fim h
  if(rep >= 3){
    return "não é possível gerar um número de telefone com esses valores";
  }
  

}// fim funcao 

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
