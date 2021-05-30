// Desafio 10
/*  Código utilizado para ordenar os elementos sem o metodo sort().
  for (let i = 0; i < tecnologias.length; i += 1) {
    for (let j = 0; j < tecnologias.length; j += 1) {
      if (tecnologias[i] < tecnologias[j]) {
        let maior = tecnologias[i];
        tecnologias[i] = tecnologias[j];
        tecnologias[j] = maior;
      }
    }
  }
  */
function techList(tecnologias, nome) {
  let tecnologia = [];

  if (!(tecnologias[0])) {
    tecnologia = 'Vazio!';
  }

  tecnologias.sort();

  for (let tec of tecnologias) {
    tecnologia.push({ name: nome, tech: tec });
  }
  return tecnologia;
}

// Desafio 11
// referencia sobre a função filter https://qastack.com.br/programming/5667888/counting-the-occurrences-frequency-of-array-elements
function numberValidation(numbers) {
  let result = true;
  for (let i = 0; i < numbers.length; i += 1) {
    let count = numbers.filter((x) => x === i);
    if (count.length >= 3) { result = false; break; }
  }

  return result;
}

function generatePhoneNumber(numbers) {
  let n = numbers;
  let ddd = `(${n[0]}${n[1]})`;
  let phoneNumber = `${ddd} ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;

  if (numberValidation(n) === false) {
    phoneNumber = 'não é possível gerar um número de telefone com esses valores';
  }
  if (n.filter((x) => x > 9).length > 0 || n.filter((x) => x < 0).length > 0) {
    phoneNumber = 'não é possível gerar um número de telefone com esses valores';
  }
  if (n.length !== 11) {
    phoneNumber = 'Array com tamanho incorreto.';
  }

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangleArray = [lineA, lineB, lineC, lineA, lineB];
  let result = true;
  for (let i = 0; i < 3; i += 1) {
    result = triangleArray[i] < triangleArray[i + 1] + triangleArray[i + 2];
    result = triangleArray[i] > Math.abs(triangleArray[i + 1] - triangleArray[i + 2]);
    if (!result) {
      break;
    }
  }

  return result;
}

// Desafio 13
function hydrate(frase) {
  let quantidade = 0;
  let copo = 'copo';

  for (let n of frase) {
    n = parseInt(n, 10);
    if (!Number.isNaN(parseInt(n, 10))) { quantidade += parseInt(n, 10); }
  }

  if (quantidade > 1) { copo = 'copos'; }

  return `${quantidade} ${copo} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
