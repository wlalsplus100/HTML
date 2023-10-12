console.clear();
function sum(a, b) {
  console.log("function");
  return a + b;
}

const result = sum(1, 2);
console.log(result);

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let lastName = "홍";
let firstName = "길동";

console.log(fullName(firstName, lastName));

function add(a, b) {
  return a + b;
}

const sum2 = add;
console.log(add(1, 2));
console.log(sum2(1, 2));

console.clear();
function add2(a, b) {
  //   return a + b;
  return undefined;
}

const result2 = add2(1, 2);
console.log(result2);

function print(num) {
  console.log("들어 왔다");
  if (num < 0) return;
  console.log(num);
}

print(12);
print(13);
print(-13);

console.clear();

function add3(a = 1, b = 12) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[1]);
}

add3(56, 22);

let sum10 = function (a, b) {
  return a + b;
};

console.log(`함수의 실행 결과 : ${sum10(10, 20)}`);

let fruits = ["apple", "banana", "grape"];
console.log(fruits);
console.log(...fruits);

console.clear();

function sum12(...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let number of numbers) {
    console.log(number);
    sum += number;
  }
  return sum;
}

console.log(sum12(1, 2, 3, 4, 5, 6, 7, 8, 9, 2));

console.clear();

(function (a, b) {
  console.log("방가");
})();

let hi = () => "안녕";
console.log(hi());

let hi2 = (a) => `${a} 안녕`;
console.log(hi2(5));

const add20 = (a, b) => a + b;
const multiply = (a, b) => {
  return a * b;
};

function calc(a, b, act) {
  if (a < 0 || b < 0) return;
  let result = act(a, b);
  console.log(result);
  return result;
}

calc(1, 1, add20);
calc(1, 2, multiply);

console.clear();

const printInt = (a) => {
  console.log(a);
};

const printInt2 = (a) => {
  console.log(a * 2);
};

const rep = (max, act) => {
  for (let i = 0; i <= max; i++) {
    act(i);
  }
};

// rep(5, printInt);
// rep(5, printInt2);

rep(5, (i) => {
  console.log(i);
});
rep(5, (i) => {
  console.log(i * 2);
});

// setTimeout(() => {
//   console.log("1초 뒤에 이 함수 실행");
// }, 1000);

const display = (num) => {
  num = 5;
  console.log(num);
};

const value = 4;
display(value);
console.log(value);

function displayObject(obj) {
  obj.name = "dong";
  console.log(obj);
}

const hong = {
  name: "gil",
};

console.log(hong);
displayObject(hong);
console.log(hong);

const changeName = (obj) => {
  return { ...obj, name: "lee" };
};

console.log(changeName(hong));
