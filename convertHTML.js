function convertHTML(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '<' :
        newStr += "&lt;";
        break;
      case '>' : 
        newStr += "&gt;";
        break;
      case '&' :
        newStr += "&amp;";
        break;
      case '"' :
        newStr += "&quot;";
        break;
      case "'" :
        newStr += "&apos;";
        break;
      default:
        newStr += str[i];    
    }
  }

  return newStr;
}
