// Desafio 10
function techList(array, jogador) {
let lista = array.sort();
let tech = [];
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let i in lista) {
    tech.push({tech: lista[i], name: jogador})
  }
  return tech
}
  


// Desafio 11
function generatePhoneNumber(numeros) {
  let mensagem = "não é possível gerar um número de telefone com esses valores";

  if (numeros != 11) {
    return "Array com tamanho incorreto.";
  } else {
    
    for (let i = 0; i < numeros.length; i += 1) {
      let count = 0;
      
      if (numeros[i] < 0) {
        return mensagem;
      }
      else if (numeros[i] > 9) {
        return mensagem;
      }
      else {
        for (let j = 0; j < numeros.length; j += 1) {
          if (numeros[i] == numeros[j]) {
            count += 1;
          }
        }
      }
    }
  }
  let contato = `(${numero.slice(0,2)})`
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
