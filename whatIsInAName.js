function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  const keys = Object.getOwnPropertyNames(source);

  for (let i = 0; i < collection.length; i++) {
    let match = true;
		
    for (let j = 0; j < keys.length; j++) {
      if (!Object.prototype.hasOwnProperty.call(collection[i], keys[j]) || (collection[i][keys[j]] !== source[keys[j]])) {
        match = false;
        break;
      }      
    }
		
    if (match) {
    	arr.push(collection[i]);      
    }
  }
  // Only change code above this line
  return arr;
}
