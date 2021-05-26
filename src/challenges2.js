// Desafio 10
function techList(array, player) {
let novaLista = array.sort();
let tech = [];
  if (array.length === 0){
    return 'Vazio!';
  }
  for (let i in novaLista){
    tech.push({tech: novaLista[i], name: player })
  }
  return tech
  // desafio concluido com auxilio do Rogerio P. da Silva https://github.com/rogeriop1990cv
}
// Desafio 11
function generatePhoneNumber(telefone) {
  if (telefone.length !== 11 || telefone.length < 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let numero of telefone) {
    let numeroRepedito = 0;
    for (let numeror of telefone) {
      if (numero === numeror) {
        numeroRepedito += 1;
      }
    }
    if (numero < 0 || numero > 9 || numeroRepedito >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${telefone[0]}${telefone[1]}) ${telefone[2]}${telefone[3]}${telefone[4]}${telefone[5]}${telefone[6]}-${telefone[7]}${telefone[8]}${telefone[9]}${telefone[10]}`
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