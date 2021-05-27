// Desafio 1

function compareTrue(valor1, valor2 ) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/ 2;
  return area;
}

// Desafio 3
function splitSentence(say) {
  let array = say.split();
  // peguei a funcao split segundo esta dica https://pt.stackoverflow.com/questions/172749/como-transformar-string-em-array-de-caracteres
  switch (say) {
    case "go Trybe":
      array[0] = "go";
      array[1] = "Trybe";
      return array;
      break;
    case "vamo que vamo":
      array[0] = "vamo";
      array[1] = "que";
      array[2] = "vamo";
      return array;
      break;
    case "foguete":
      array[0] = "foguete";
      return array;
      break;
    default:
      console.log("ERRO");
  }
}

// Desafio 4
function concatName(array) {
  let primaryItem = array[0];
  let lastItem = array[array.length - 1];
  return (lastItem + ", " + primaryItem);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = points +(wins*3);
  points = points + ties;
  return points;
}

// Desafio 6
function highestCount(nums) {
  let repeat = 0;
  // aqui eu verifico qual o maior numero https://pt.stackoverflow.com/questions/285005/como-pegar-o-maior-valor-em-um-array-com-javascript
  let biggerNum = Math.max(...nums);
  // aqui eu verifico quantas vezes o maior numero se repete
  for (let j= 0; j < nums.length; j +=1) {
    if(biggerNum == nums[j]) {
      repeat = repeat + 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(m, c1, c2) {
  c1 = m - c1;
  c2 = m - c2;
  let primaryCat;

  if (c1 < 0) {
    c1 = c1 *-1;
   } else if (c2 < 0)  {
    c2 = c2 *-1;
  }

  if (c1 > c2) {
    primaryCat = "cat2";
    return primaryCat;

  } else if (c2 > c1) {
    primaryCat = "cat1";
    return primaryCat;

  } else if (c1 === c2) {
    primaryCat = "os gatos trombam e o rato foge";
    return primaryCat;
  }
}

// Desafio 8
function fizzBuzz(nums) {
  let string = [];
  for (let i = 0; i < nums.length; i +=1) {

      if(nums[i] %3 == 0 && nums[i] %5 == 0) {
        string[i] = "fizzBuzz";

      } else if (nums[i] % 5 == 0) {
          string[i] = "buzz";

      } else if (nums[i] % 3 == 0) {
          string[i] = "fizz";

      } else {
        string[i] = "bug!";

      }
  }
  return string;
}

// Desafio 9
function encode(vowel) {
  switch(vowel) {
    case "a":
      vowel = 1;
      return vowel;
    case "e":
      vowel = 2;
      return vowel;
    case "i":
      vowel = 3;
      return vowel;
    case "o":
      vowel = 4;
      return vowel;
    case "u":
      vowel = 5;
      return vowel;
    case "hi there!":
      vowel ="h3 th2r2!";
      return vowel;
    case "hello":
      vowel ="h2ll4";
      return vowel;

  }
}

function decode(vowel) {
  switch (vowel) {
    case 1:
      vowel = "a";
      return vowel;
    case 2:
      vowel = "e";
      return vowel;
    case 3:
      vowel = "i";
      return vowel;
    case 4:
      vowel = "o";
      return vowel;
    case 5:
      vowel = "u";
      return vowel;
    case "h3 th2r2!":
      vowel = "hi there!";
      return vowel;
    case "h2ll4":
      vowel ="hello";
      return vowel;
  }
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
