// var numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]

function checarComprimeto(numero) {
  if (numero.length !== 11) {
    console.log('Array com tamanho incorreto.');
  }
}

function checarNumeroValido(numero) {
  for (let i = 0; i < numero.length; i += 1) {
    contador = 0;
    if (numero[i] < 0 || numero[i] > 9) {
      console.log('não é possível gerar um número de telefone com esses valores');
    }
  }
}

function validaRepeticao(numero) {
  for (let index = 0; index < numero.length; index += 1) {
    let repete = contaRepeticao(numero, numero[index]);
    if (repete >= 3) {
      return true;
    }
  }
}

function contaRepeticao(numero, elemento) {
  let contador = 0;
  for (let index2 = 0; index2 < numero.length; index2 += 1) {
    if (numero[index2] === elemento) {
      contador += 1;
    }
  }
  return contador;
}

function montaNumero(numero) {
  let numeroMontado = numero.join('');

  let ddd = numeroMontado.slice(0, 2);

  let prefixNumero = numeroMontado.slice(2, 7);

  let sufixNumero = numeroMontado.slice(7);

  console.log(`(${ddd}) ${prefixNumero}-${sufixNumero}`);
}

function checaTudo(numero) {
  checarComprimeto(numero);

  checarNumeroValido(numero);

  checarSeRepete(numero);

  setUpPhone(numero);
}
