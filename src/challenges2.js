// Desafio 10
function techList(listaDeTecnologias, nome) {
  let listaDeTech = [];
  if (listaDeTecnologias.length <= 0) {
    return 'Vazio!';
  }

  for (let tecnologia of listaDeTecnologias.sort()) {
    listaDeTech.push({ name: nome, tech: tecnologia });
  }
  return listaDeTech;
}

// Desafio 11
function generatePhoneNumber(listaDeNumeros) {
  if (listaDeNumeros.length !== 11 || listaDeNumeros.length < 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let numero of listaDeNumeros) {
    let numeroRepedito = 0;
    for (let numeror of listaDeNumeros) {
      if (numero === numeror) {
        numeroRepedito += 1;
      }
    }
    if (numero < 0 || numero > 9 || numeroRepedito >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${listaDeNumeros[0]}${listaDeNumeros[1]}) ${listaDeNumeros[2]}${listaDeNumeros[3]}${listaDeNumeros[4]}${listaDeNumeros[5]}${listaDeNumeros[6]}-${listaDeNumeros[7]}${listaDeNumeros[8]}${listaDeNumeros[9]}${listaDeNumeros[10]}`
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > lineB && lineA > lineC) {
    return true;
  }
  if (lineB < lineA + lineC && lineB > lineC && lineB > lineA) {
    return true;
  }
  if (lineC < lineA + lineB && lineC > lineA && lineC > lineA) {
    return true;
  }
  return false;
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
