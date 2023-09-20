let integer = 123;
let negative = 123;
let double = 123;
console.log(integer);
console.log(negative);
console.log(double);
console.clear();
let binary = 0b1111011;
let octal = 0o173;
let hex = 0x7b;
console.log(binary);
console.log(octal);
console.log(hex);
console.clear();
console.log(0 / 123);
console.log(123 / 0);
console.log(123 / -0);
console.log(123 / "text");
let bigInt = 1234567890123456789012345678901n;
console.log(bigInt);
console.clear();
let string = "안녕하세요";
string = "안녕";
console.log(string);
string = '"안녕!"';
console.log(string);
string = "안녕\n반가와요\t\t 또 만나요";
console.log(string);
let id = "길동";
let greetings = "반갑습니다";
console.log(`홎${id}님 ${greetings}`);
console.log("askl;df;klafkjl;");
console.clear();
let t = true;
let f = false;

console.log(t);
console.log(f);
console.clear();
let isFree = t;
console.log(!!1);
console.log(!!-1);
console.log(!!"asdf");
console.log(!!{});
console.log(!!Infinity);

console.log(!!0);
console.log(!!null);
console.clear();

let apple = {};
console.log(apple);
console.log(typeof apple);
let orange = { name: "오렌지", color: "orange" };
console.log(orange);
console.log(typeof orange);

let num1 = "20";
let num2 = 10;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.clear();

console.log(Number(true));
console.log(Number("1900"));
console.log(Number("15.23"));
console.log(Number("Hi"));
console.log(Number(null));
console.log(Number("0000001470"));
console.log(Number("0000001470.70"));
console.log(parseInt(3400.123));
console.log(parseFloat(3400.123));
let num3 = 10;
let isEmpty = true;
let null001 = null;
console.log(num3.toString());
console.log(num3.toString(2));
console.log(isEmpty.toString());
// console.log(null001.toString());
console.log(String(null001));
console.log(String(undefined));
console.log(String(num3));
console.log(String("21.3"));

console.log(Boolean(2 * 3));
console.log(Boolean(2 * 0));
console.log(Boolean("hi"));
console.log(Boolean(""));

console.clear();

console.log(5 / 2);
console.log(5 % 2);
console.log(Math.floor(5 / 2));
console.log(5 ** 2);
console.log(Math.pow(5, 2));

console.log("1" == 1);
console.log("1" === 1);
console.log("1" != 1);
console.log("1" !== 1);

console.clear();

console.log(+false);
console.log(+null);
console.log(+"text");
console.log(+undefined);

console.clear();

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
