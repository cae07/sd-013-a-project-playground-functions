// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let newtech = tech.sort(); //ordena em ordem alfabetica
  let lista = [];
  for (let i = 0; i < newtech.length; i += 1) {
    lista.push({
      tech: newtech[i], //passa indice por indice
      name,
    });
  }
  return lista;
}
// Desafio 11
/* Ao ir no plantão do zezé ele sugeriu fazer dois for no nuemro repetido, daí funciona assim:
array[0,1,2,3,4,5,6,]
vai pegar o primeiro numero que é 0 e comparar com todos os numeros do array, depois segundo numero e comparar com todos os numeros do array*/
function generatePhoneNumber(numeros) {
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in numeros) {
    if (numeros[index] < 0 || numeros[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let numeroRepetido = 0;
  for (let i in numeros) {
    let contNumero = 0;
    numeroRepetido = numeros[i];
    for (let i2 in numeros) {
      if (numeros[i2] === numeroRepetido) {
        contNumero += 1;
      }
    }
    if (contNumero >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
}
  }
let telefone=("("+ numeros[0]+numeros[1] +") " + numeros[2]+numeros[3]+numeros[4]+numeros[5]+ numeros[6]+"-"+ numeros[7] + numeros[8]+ numeros[9]+ numeros[10]);
  return telefone;
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
