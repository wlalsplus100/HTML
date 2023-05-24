function minMoney(money) {
  arr = [50000, 10000, 5000, 1000, 500, 100];
  let leave = money;
  let result = 0;
  for (i = 0; i < 6; i++) {
    let j = Math.floor(leave / arr[i]);
    if (j > 0) {
      leave -= arr[i] * j;
      result += j;
    }
  }
  return result;
}

console.log(minMoney(355700));
