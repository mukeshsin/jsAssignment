function capitalize(input) {  
  let words = input.split(' ');  
  let CapitalizedWords = [];  
  words.forEach(element => {  
      CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
  });  
  return CapitalizedWords.join(' ');  
}  
  document.write(capitalize('the quick brown fox'
  ));