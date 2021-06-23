
let simbolo1 = 'R$';
let simbolo2 = '$';
let simbolo3 = '&';

function moeda(simbolo){
  if(simbolo === 'R$'){
    return 'Real';
  } else if(simbolo === '$'){
    return 'Dolar';
  } else if (simbolo === ' &'){
    return 'Libra';
  } else return 'Não encontrado';
};

let objetoServidor = {
  acesso: true,
  login: 'mundojs'
};

let objetoServidor2 = {
  erro: 'Erro ao conectar',
}

function conexao(resposta){
  if(resposta.erro === null){
    return 'Real';
  } else if(simbolo === '$'){
    return 'Dolar';
  } else if (simbolo === ' &'){
    return 'Libra';
  } else return 'Não encontrado';
};


