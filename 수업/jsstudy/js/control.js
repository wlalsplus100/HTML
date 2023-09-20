// switch (key) {
//   case value:
//     break;
//   case value2:
//     break;

const e = require("cors");

//   default:
//     break;
// }

// let x = 10;
// let y = 20;
// if(x > 15 && y > 15) alert('둘 다 15보다 큽큽니다.')

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

console.clear();

const array = [];
console.log(typeof array);

const students = ["Park", "Kim", "Lee", "Kang"];

// console.log(students.length);
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

students.forEach((e) => console.log(e));
console.clear();

const book = {
  title: "자바스크립트 기초",
  pubDate: "2023-09-20",
  pages: 300,
  finished: true,
};

for (key in book) {
  console.log(`키 : ${key} \n값 : ${book[key]}`);
}

console.clear();

for (let student of students) {
  console.log(student);
}
