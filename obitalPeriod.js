function avgAltToObitalPeriod(avgAlt) {
  let T = 0;
  const PI = 3.1415926;
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let a = avgAlt + earthRadius;

  T = Math.round(2 * PI * Math.sqrt(Math.pow(a, 3) / GM));

  return T;
}

function orbitalPeriod(arr) {
  let newArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
   newArr[i]['orbitalPeriod'] = avgAltToObitalPeriod(arr[i]['avgAlt']);
   delete newArr[i]['avgAlt'];
  }

  return newArr;
}
