 function steamrollArray(arr) {
  let dArr = [...arr];
  let dimension = 4;
  let flatArr = dArr.reduce((acc, val) => acc.concat(val), []);

  for (let i = 0; i < dimension; i++) {
    flatArr = flatArr.reduce((acc, val) => acc.concat(val), []);
  }

  return flatArr;
}
