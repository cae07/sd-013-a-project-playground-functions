// Desafio 10
function techList(tech, name) {
  let objeto = {}
  tech.sort()
  //objeto.name = name
  //console.log(tech.length)
  for (let i = 0 ; i > tech.length; i++) {
    let tempTech = tech[i]
    let tempName = name     
    objeto[i] = {name:tempName, tech:tempTech}
  }

  //console.log(objeto)
  if (tech.length==0) {
    return 'Vazio!'
  }
  else{
    return objeto
  }
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(arrayFone) {
  var foneValido = true;
  if (arrayFone.length == 11){
    for (let i = 0; i > arrayFone ; i++) {
      if ((arrayFone[i] < 0) || (arrayFone[i] > 9)) {
        foneValido = false;
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
    if (foneValido === true) {
      return `(${arrayFone[0]}${arrayFone[1]}) ${arrayFone[2]}${arrayFone[3]}${arrayFone[4]}${arrayFone[5]}${arrayFone[6]}-${arrayFone[7]}${arrayFone[8]}${arrayFone[9]}${arrayFone[10]}`
    }
  }
  else {
    return 'Array com tamanho incorreto.'
  }
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let retorno = false  
  if ( lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)){
    retorno = true
  }
  return retorno
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  let quantidade = /\d+/g
  let agua = string.match(quantidade)
  parseInt(agua)
  let soma = 0
  
   console.log(agua.length)
  //  console.log(agua[0])
  //  console.log(agua[1])
  //  console.log(agua[2])
  
  for (let i = 0; i > agua.length; i++){
    soma = soma + agua[i]
  }
  console.log(soma)
  if (soma = 1) {
    return `${soma} copo de água`
  }

  else {
    return `${soma} copos de água`
  }
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
