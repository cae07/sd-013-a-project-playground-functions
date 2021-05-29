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
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let absA = Math.abs(lineA)
  let absB = Math.abs(lineB)
  let absC = Math.abs(lineC)
  if(absA + absB < absC || absC + absB < absA || absC + absA < absB){
    return false
  }
  else{
    return true
  }
}
// Desafio 13
function hydrate(texto) {
  // seu código aqui
  let num = null;
  let resul = null;
  num = texto.match(/\d+/g)
  for(let i =0;i<num.length; i+=1){
    resul += parseInt(num[i])
  }
  if(resul <= 1){
    return `${resul} copo de água`
  }else{
  return `${resul} copos de água`
  }
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
