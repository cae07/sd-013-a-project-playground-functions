function highestCount(numberList) {
  let highestNumber = Math.max(numberList);
  let repeticao;
  for (let number of numberList) {
      if (number === highestNumber) {
        repeticao += 1;
      }
  } console.log(highestNumber);
}
  console.log(highestCount([1,2,2,2,3,4,5,7,5,7,5,7,5,7]));