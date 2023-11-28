const res = require("express/lib/response");

const fruits = ["바나나", "딸기", "포도", "딸기"];
fruits.forEach((value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
});
fruits.forEach((value) => console.log(value));

const item1 = { name: "우유", price: 2 };
const item2 = { name: "피자", price: 3 };
const item3 = { name: "사과", price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((item) => item.name === "피자");
console.log(result);

result = products.findIndex((item) => item.name === "피자");
console.log(result);

result = products.some((item) => item.name === "피자");
console.log(result);

result = products.every((item) => item.name === "피자");
console.log(result);

result = products.filter((item) => item.name === "피자");
console.log(result);

const num = [1, 2, 3, 4, 5];
result = num.map((e) => e * 2);
console.log(result);

result = num.map((e) => {
  if (e % 2 == 0) {
    return e * 2;
  } else {
    return e;
  }
});
console.log(result);

result = num.map((e) => [1, 2]);
console.log(result);

result = num.flatMap((e) => [1, 2]);
console.log(result);

result = ["hong", "gil"].flatMap((e) => e.split(""));
console.log(result);

const texts = ["hi", "abc"];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 10];
console.log(numbers.sort((a, b) => a - b));

result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
}, 0);
console.log(result);
