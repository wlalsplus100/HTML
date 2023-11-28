// let array = new Array(3);
// console.log(array);
// array = new Array(1, 2, 3);
// console.log(array);

const res = require("express/lib/response");

// const anotherArray = [1, 2, 3, 4];
// console.log(anotherArray);

// array = Array.from(anotherArray);
// console.log(array);

// console.log(array);
// console.log(array.length);

// const fruits = ["바나나", "사과", "포도", "복숭아"];
// console.log(fruits[2]);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// fruits[6] = "딸기";
// console.log(fruits);

// delete fruits[1];
// console.log(fruits);

const fruits = ["바나나", "사과", "레몬"];
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

console.log(fruits.indexOf("사과"));
console.log(fruits.includes("사과"));

let length = fruits.push("복숭아");
console.log(fruits);
console.log(length);
length = fruits.unshift("딸기");
console.log(fruits);
console.log(length);

let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);

let firstItem = fruits.shift();
console.log(fruits);
console.log(firstItem);

const deleted = fruits.splice(1, 1);
console.log(fruits);
console.log(...deleted);

fruits.splice(1, 1, "사과", "딸기");
console.log(fruits);

let newArr = fruits.slice(0, 2);
console.log(newArr);

newArr = fruits.slice(-1);
console.log(newArr);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);
console.log(arr1);
console.log(arr2);

const arr4 = arr3.reverse();
console.log(arr4);
console.log(arr3);

let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat());
console.log(arr.flat(2));
console.log(arr.flat(3));

arr = arr.flat(3);

arr.fill(0);
console.log(arr);

arr.fill("s", 1, 3);
console.log(arr);

arr.fill("a", 1);
console.log(arr);

let text = arr.join();
console.log(text);
console.log(typeof text);

text = arr.join("|");
console.log(text);
console.log(typeof text);

const pizza = { name: "피자", price: 2, owner: { name: "hong" } };
const ramen = { name: "라면", price: 3 };
const sushi = { name: "회", price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);

console.log(store1);
console.log(store2);

store2.push(sushi);

console.log(store1);
console.log(store2);

pizza.price = 4;

console.log(store1);
console.log(store2);

let input = ["바나나", "딸기", "포도", "딸기"];

const changeAtt = (array, bef, aft) => {
  const replaced = Array.from(array);
  for (let i = 0; i < array.length; i += 1) {
    if (replaced[i] === bef) {
      replaced[i] = aft;
    }
  }

  return replaced;
};

let a = changeAtt(input, "딸기", "키위");
console.log(a);

const countAtt = (array, att) => {
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === att) count += 1;
  }
  return count;
};

const input2 = ["ㅇ", "ㄱ", "ㄴ", "ㅇ", "ㅇ"];
console.log(countAtt(input2, "ㅇ"));

const match = (input, search) => {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
};

console.log(
  match(["바나나", "키위", "포도"], ["바나나", "딸기", "포도", "딸기"])
);
