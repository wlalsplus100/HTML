const number = 123;
console.log(number);
console.log(number.toString());

const text = "text";

console.log(text);
console.log(text.length);

const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);
console.log(Number.MAX_VALUE);
const num3 = 1234.12;
console.log(num3.toFixed());

console.log(Math.E);
console.log(Math.PI);
console.log(Math.abs(-13));
console.log(Math.floor(1.9));
console.log(Math.round(1.8));
console.log(Math.max(1, 6, 29));
console.log(Math.min(1, 5, 13));
console.log(Math.pow(3, 2));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));

const textObj = new String("Hello world");
const text2 = "Hello world";
console.log(textObj);
console.log(text);
console.log(text.length);

console.log(new Date());
console.log(new Date("Jun 5, 2023"));
console.log(Date.now());

const text10 = "H1~~~how";
for (let i = 0; i < text10.length; i++) {
  console.log(text10);
}

const ids = "user1, user2, user3, user4";
const array = ids.split(",");
console.log(array);
