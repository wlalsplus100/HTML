function getCN(num1, num2) {
  let i = 1;
  let num1list = [];
  let num2list = [];

  while (num1 * i < num1 * num2) {
    i++;
    num1list.push(num1 * i);
  }
  i = 1;
  while (num2 * i < num2 * num1) {
    i++;
    num2list.push(num2 * i);
  }
  const short = num1list.length > num2list.length ? num2list : num1list;
  const large = num1list.length > num2list.length ? num1list : num2list;
  for (i = 0; i < large.length; i++) {
    if (short.includes(large[i])) {
      return large[i];
    }
  }
  return "찾을 수 없음";
}

console.log(getCN(11, 4));
