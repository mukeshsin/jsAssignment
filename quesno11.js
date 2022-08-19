function find_FirstNotRepeatedChar(str){
 let array1 = str.split('');
  let result = '';
  let ctr = 0;
  // for loop//
  for (let x = 0; x < array1.length; x++) {
    ctr = 0;
  for (let y = 0; y < array1.length; y++) //nested-loop//
    {
      if (array1[x] === array1[y]) {     //if both are equal its mean repeated//
        ctr+= 1;
      }
    }
      if (ctr < 2) {
      result = array1[x];
      break;
    }
  }
  return result;
}
document.write(find_FirstNotRepeatedChar('abacddbec')
);

