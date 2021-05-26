let string = "doida doida doida";
function splitSentence(string) {
  let verificator = " ";
  let coma = ", ";
  let array = [];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === verificator) {
      array.push(coma)
    } else {
      array.push(string);
    }
  } return array;
  console.log(array);
}