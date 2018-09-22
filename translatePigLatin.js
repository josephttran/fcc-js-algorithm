function translatePigLatin(str) {
  let newStr = [...str];
  let consonant = "";
  let vowels =  ['a', 'e', 'i', 'o', 'u']
  let containVowel = false;
  let count = 0;

  for (let i = 0; i < vowels.length; i++){
    if (newStr.includes(vowels[i])) {
      containVowel = true;
      break;
    } 
  }

  if (!containVowel) {
    newStr.push('a', 'y')
    return newStr.join("");
  }

  for (let i = 0; i < newStr.length; i++) {
    if (vowels.indexOf(newStr[i]) > -1) {
      if (i == 0) {
        newStr.push("w", "a", "y");
        return newStr.join(""); 
      }
      break;
    }

    if (vowels.indexOf(newStr[i]) === -1) {
      consonant += newStr[i];
      count++;  
    } 
  } 

  for (let i = 0; i < count; i++) {
    newStr.splice(0, 1);
  }

  newStr.push(consonant)
  newStr.push("a", "y");    

  return newStr.join("");    
}
