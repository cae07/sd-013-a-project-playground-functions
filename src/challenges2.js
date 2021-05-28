// Desafio 10
function techList(texto,name) {
  // seu código aqui
  let vazio = {};
  let retorno = [];
  let ordenamendo = []
  ordenamendo = texto.sort();
  if(ordenamendo.length === 0){
    return vazio = "Vazio!";
  }
  for(let key in ordenamendo){
    vazio.name = name;
    vazio.tech = ordenamendo[key];
    retorno.push(vazio);
    vazio = {};
  }
  return retorno;
}
// Desafio 11
function generatePhoneNumber(numero) {
  // seu código aqui
  let cont = null;
  if(numero.length !== 11){
    return "Array com tamanho incorreto."
  }
  for (let i = 0; i < numero.length; i += 1) {
    if (numero[i] < 0 || numero[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    for (let j = 0; j < numero.length; j += 1) {
      if (numero[i] === numero[j]) {
        cont += 1
      }
    }
    if(cont >= 3){
      return "não é possível gerar um número de telefone com esses valores"
    }
    cont = 0;
  }
  let formatN = ""
  for(let i = 0; i < numero.length; i += 1){
    formatN += numero[i]
  }
  return formatN.replace(/(\d{2})(\d{5})(\d{4})/,"($1) $2-$3")
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
