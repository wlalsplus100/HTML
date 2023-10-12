// {key, value}
// new Object()
// Object.create()

const res = require("express/lib/response");

// let apple = {
//   name: "apple",
//   "hello-bye": "안녕",
//   0: 1,
//   ["hello-bye1"]: "안녕1",
// };

// console.log(apple.name);
// console.log(apple["hello-bye"]);
// console.log(apple[0]);
// console.log(apple["hello-bye1"]);

// apple.price = 1200;
// console.log(apple);

// delete apple.price;
// console.log(apple);

// const obj = {
//   name: "길동",
//   age: 20,
// };
// console.log(obj);

// function getValue(obj, key) {
//   return obj[key];
// }

// console.log(getValue(obj, "name"));

// function addKey(obj, key, value) {
//   obj[key] = value;
// }

// addKey(obj, "job", "engineer");
// console.log(obj);

// function delKey(obj, key) {
//   delete obj[key];
// }
// delKey(obj, "job");
// console.log(obj);

// const x = 0;
// const y = 0;
// const coordinate = { x: x, y: y };
// console.log(coordinate);

// function makeObj(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// console.log(makeObj("순신", 22));

// const apple2 = {
//   name: "apple2",
//   display: function () {
//     console.log(`${this.name}은 사과입니다`);
//   },
// };

// apple2.display();

// let products = [
//   {
//     name: "바나나",
//     price: 1200,
//     print: function () {
//       console.log(`${this.name}의 가격은 ${this.price}`);
//     },
//   },
//   {
//     name: "사과",
//     price: "2000",
//     print: function () {
//       console.log(`${this.name}의 가격은 ${this.price}`);
//     },
//   },
// ];

// for (let product of products) {
//   product.print();
// }

// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}:사과`);
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}:오렌지`);
//   },
// };

function Fruit(name, callName) {
  this.name = name;
  this.callName = callName;
  this.display = () => {
    console.log(`${this.name} : ${this.callName}`);
  };
  return this;
}

const apple = new Fruit("apple", "사과");
const orange = new Fruit("orange", "오렌지");

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.callName);
console.log(apple.display());
console.log(orange.display());

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.print = function () {
  console.log(`${this.name}의 가격은 ${this.price}입니다.`);
};

const product = new Product("바나나", 1200);
console.log(product);
product.print();

function Book(name, price, writer, isbn, pages) {
  this.name = name;
  this.price = price;
  this.writer = writer;
  this.isbn = isbn;
  this.pages = pages;
  this.print = () => {
    for (a in this) {
      console.log(`${a}\t${this[a]}`);
    }
  };
}

const myBook = new Book("무제", "3000", "다니엘", "56789", "500페이지");
console.log(myBook.print());

console.clear();

function Product12(name, weight, price) {
  this.name = name;
  this.weight = weight;
  this.price = price;
}

Product12.prototype.calculate = function (weight) {
  return (this.price / this.weight) * weight;
};

const meat = new Product12("돼지삼겹살", 100, 1690);
// console.log(meat.calculate(200));
let result = meat.calculate(200);
console.log(Math.round(result));

const meat2 = new Product12("목살", 100, 2000);

console.log(Math.round(meat2.calculate(300)));
