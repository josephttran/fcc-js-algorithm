var Person = function(firstAndLast) {
  let fullName = firstAndLast;
  
  this.setFullName = function(full) {
    fullName = full;
  }

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(firstName) { 
    let fullArr = fullName.split(" ");
    fullArr[0] = firstName;

    fullName = fullArr.join(" ");
  }
  
  this.getFirstName = function() {
    let fullArr = fullName.split(" ");
    return fullArr[0];
  }

  this.setLastName = function(lastName) {
    let fullArr = fullName.split(" ");

    fullArr[1] = lastName;
    fullName = fullArr.join(" ");
  }

  this.getLastName = function() {
    let fullArr = fullName.split(" ");
    return fullArr[1];
  }
};
