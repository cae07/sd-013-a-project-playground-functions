// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let newtech = tech.sort(); // ordena em ordem alfabetica
  let lista = [];
  for (let i = 0; i < newtech.length; i += 1) {
    lista.push({
      tech: newtech[i], // passa indice por indice
      name,
    });
  }
  return lista;
}
// Desafio 11
/* Ao ir no plantão do zezé ele sugeriu fazer dois for no nuemro repetido, daí funciona assim:
array[0,1,2,3,4,5,6,]
pego todos os elementos e comparo com o que esta na mão do Zezé.A primeira tem de esperar a segunda fazer todas as voltas para mudar de indice.
no exemplo o eu sou o primeiro for Aline valho indice=0, o zezé é o segundo for ele vai percorrer todos os índices,daí depois disso eu mudo para indice 1 o zeze percorre todos os indices
vai pegar o primeiro numero que é 0 e comparar com todos os numeros do array, depois segundo numero e comparar com todos os numeros do array */
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
  for (let i = 0; i < numeros.length; i += 1) {
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
  let telefone = `(${numeros[0]}${numeros[1]}) ${numeros[2]}${numeros[3]}${numeros[4]}${numeros[5]}${numeros[6]}-${numeros[7]}${numeros[8]}${numeros[9]}${numeros[10]}`;
  return telefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
/* aqui tive ajuda da Oryange Strifezze através do Projeto amigas T criado pela Carol Silva
fonte:https://www.w3schools.com/jsref/jsref_obj_regexp.asp aqui vi que o regex para chamar ele precisa por /  /
 no próprio site tem o d de dígito o + para pegar mais de um, e o g de global.
O método match() retorna uma correspondência entre uma string com uma expressão regular/https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
criei uma variavel soma para somar os numeros, depois um if para vir copo de água ou copos de água. */
function hydrate(string) {
  const reg = /\d+/g;
  const resultado = string.match(reg);
  let soma = 0;
  for (let index = 0; index < resultado.length; index += 1) {
    soma += Number(resultado[index]);
  }
  if (soma === 1) {
    return '1 copo de água';
  }
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
