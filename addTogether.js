function addTogether() {
  let args = []
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      return undefined;
    }
    args[i] = arguments[i];
    sum += args[i];
  }

  if(arguments.length === 1) {
    return function sum(val) {
      if (typeof val !== "number") {
        return undefined;
      }
      return args[0] + val;
    }
  }

  return sum;
}
