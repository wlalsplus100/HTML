function minMoney(money) {
  let result = money,
    index = 0,
    i = 1;
  result = money;
  while (result - 50000 >= 0) {
    result -= 50000;
    i++;
  }
  index += i - 1;
  i = 1;
  while (result - 10000 >= 0) {
    result -= 10000;
    i++;
  }
  index += i - 1;
  i = 1;
  while (result - 5000 >= 0) {
    result -= 5000;
    i++;
  }
  index += i - 1;
  i = 1;
  while (result - 1000 >= 0) {
    result -= 1000;
    i++;
  }
  index += i - 1;
  i = 1;
  while (result - 500 >= 0) {
    result -= 500;

    i++;
  }
  index += i - 1;
  i = 1;
  while (result - 100 >= 0) {
    result -= 100;

    i++;
  }
  index += i - 1;
  i = 1;
  return index;
}

console.log(minMoney(27900));
