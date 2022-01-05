function solution(a) {
  let pplArray = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      pplArray.push(a[i]);
    }
  }
  for (i = 0; i < pplArray.length; i++) {
    for (let j = 0; j < pplArray.length; j++) {
      if (pplArray[j] > pplArray[j + 1]) {
        let temp = pplArray[j];
        pplArray[j] = pplArray[j + 1];
        pplArray[j + 1] = temp;
      }
    }
  }
  let count = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = pplArray[count];
      count++;
    }
  }
  return a;
}
