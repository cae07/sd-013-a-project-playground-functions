function catAndMouse(mouse, cat1, cat2) {
  let gato1 = mouse - cat1 * -1;
  let gato2 = mouse - cat2 * -1;
  if (gato1 < gato2) {
    return console.log('cat1');
  } if (gato2 < gato1) {
    return console.log('cat2');
  }
  return console.log('os gatos trombam e o rato foge');
}

catAndMouse(0, 3, 2);
