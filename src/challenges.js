// Desafio 1
function compareTrue(a, b) {
  // Verificando se a E b são verdadeiros. Se A=true E B=true então a função retorna verdadeiro.
  if (a === true && b === true) {
    return (true);
  } 
    // senão, ou seja, ou A=false E B=true -----ou----- A=false E B=false -------ou-------- A=true E B=false, então retorna false.
    else {
      return (false);
    }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let array = [];             // array vazia, criada para receber as palavras dividas pelo espaço da string original. Vai receber via .push.
  let letter = "";            //variável vazia, que vai receber as letras da string, para serem jogadas no array.


  // O for vai varrer a string original, o index começando na primeira letra e indo até a última, subindo de 1 em 1:
  for (let index = 0; index < string.length; index += 1) {

    // Se a letra do índice segundo o for for diferente de vazio (" ") E(&&) o índice segundo o for for diferente do índice da última letra, pois nesse caso ele vai para a segunda condição ---> depois da última letra não tem espaço vazio, então a condição anterior não se aplicaria:

    if ((string[index] != " ") && (index != string.length - 1)) {
      letter = letter + string[index];      // a variável letter recebe a letra referente ao índice do for (sem estar vazia, ou seja, vai receber o conteúdo já existe + o conteúdo novo)
    } 
      //A última letra também tem que entrar na variável letter, da mesma forma que o if anterior, por isso criei esse else if, ou seja, se o index for o da última letra (string.length - 1), ela entra dentro da variável letter da mesma forma e com um push envia a variável letter para o array ---> esse passo será realizado somente uma vez, na última letra da string original. 
      else if (index == string.length - 1) {
        letter = letter + string[index];
        array.push(letter);
      } 
        // após finalizar uma palavra, o push a envia pra o array e a variável letter é "esvaziada" para que o processo seja iniciado na próxima palavra após o espaço.  
        else {    
          array.push(letter);
          letter = "";
        } 
  }
  return (array);
}

// Desafio 4
function concatName(arrayString) {
  let stringReturn = "";

  // for começa de trás pra frente. 
  for (let index = arrayString.length - 1; index >= 0; index -= 1) {
    // Se o index do for é igual ao último elemento do array
    if (index == arrayString.length - 1) {
      stringReturn = arrayString[index] + ", ";         //adiciona na variável a string: ['ulitmoelemento,]
    } 
// senão se index=0, ou seja, primeira posição do array
    else if (index == 0) {
      stringReturn = stringReturn + arrayString[index]; //adiciona na variável que já contem ['ulitmoelemento,], a string [primeiroelemento']
    }
  }
  return (stringReturn);
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
