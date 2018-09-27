function matchPair(ch) {
  switch(ch) {
    case "A":
      return ["A", "T"];
    case "T":
      return ["T", "A"]
    case "C": 
      return ["C", "G"]
    case "G":
      return ["G", "C"]
    default:
  }
}

function pairElement(str) {
  let dnaStr = [];
  let tempStr = [...str];

  while(tempStr.length != 0){
    let char = tempStr.splice(0, 1).toString();
    let pair = matchPair(char);
    dnaStr.push(pair);    
  }
  return dnaStr;
}
