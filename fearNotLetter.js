function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphaArr = alphabet.split('');
  let alphaIndex = alphaArr.indexOf(str[0]);
  let sIndex = 0;

  for (let i = alphaIndex; i < alphaArr.length; i++) {
    if (alphabet[i] != str[sIndex]) {
      return alphabet[i];
    }
    sIndex++;
  }
  
  return undefined;
}