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
function footballPoints(wins, ties) {
  let winningPoints = wins * 3; //cada vitória vale 3 pontos
  let tiesPoints = ties * 1;  //cada epate vale 1 ponto
  let totalPoints = winningPoints + tiesPoints; //soma dos pontos totais do campeonato

  return (totalPoints);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maxNumber = arrayNumbers[0];                   //vai receber o maior número do array
  let timesItAppears = 0;              //vai receber a quantidade de vezes que o maior número aparece

  //'for' para saber o maior número do array:
  for (let index = 0; index < arrayNumbers.length; index += 1) {

    //se o elemento no index do 'for' for maior ao elemento que tá na variável maxNumber, ele vai substituir o número atual da maxNumber pelo número novo. 
    if (arrayNumbers[index] > maxNumber) {
      maxNumber = arrayNumbers[index];
    }
  }

  //após saber o maior número, outro 'for' conta quantas vezes ele aparece:
  for (let secondIndex = 0; secondIndex < arrayNumbers.length; secondIndex += 1) {

    // se o elemento no index do 'for' for igual ao maior número, descoberto anteriormente, soma +1 na variável timesItAppears
    if (arrayNumbers[secondIndex] == maxNumber) {
      timesItAppears += 1;
    }
  }

  return (timesItAppears);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Calculando a distância entre mouse e cat 1  ------- 'math.abs' retorna o valor absoluto, não importando a ordem de subtração.
  let distanceCat1 = Math.abs (cat1 - mouse);

  // Calculando a distância entre mouse e cat 2  ------- 'math.abs' retorna o valor absoluto, não importando a ordem de subtração.
  let distanceCat2 = Math.abs (cat2 - mouse);

  // Verificando qual distância é maior, se do 'gato1 ao rato' ou 'gato2 ao rato', ou se estão na mesma posição. Já retorna resultado. 
  if (distanceCat1 == distanceCat2) {
    return ("os gatos trombam e o rato foge");
  }
//----------- se a distância é maior, o gato está mais longe do rato, ou seja, vai demorar mais para pegá-lo.
  else if (distanceCat1 > distanceCat2) {   
    return ("cat2");
  } 
    else {
      return("cat1");
    }
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
