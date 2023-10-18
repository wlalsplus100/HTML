// class Fruit {
//   constructor(name, nameKo) {
//     this.name = name;
//     this.nameKo = nameKo;
//   }

//   display = () => {
//     console.log(`${this.name} : ${this.nameKo}`);
//   };
// }

// const apple = new Fruit("apple", "사과");
// const orange = new Fruit("orange", "오렌지");

// console.log(apple);
// console.log(orange);

// console.log(apple.name);
// console.log(orange.nameKo);
// apple.display();

// ==========================================================================================

// class Fruit {
//   static MAX = 4;

//   constructor(name, nameKo) {
//     this.name = name;
//     this.nameKo = nameKo;
//   }

//   static makeRandomFruit() {
//     return new Fruit("banana", "바나나);");
//   }

//   display = () => {
//     console.log(`${this.name} : ${this.nameKo}`);
//   };
// }

// const banana = Fruit.makeRandomFruit();
// console.log(banana);
// console.log(Fruit.MAX);

// const apple = new Fruit("apple", "사과");
// const orange = new Fruit("orange", "오렌지");

// console.log(apple);
// console.log(orange);

// console.log(apple.name);
// console.log(orange.nameKo);
// apple.display();

// ============================================================================================

// class Car {
//   static count = 0;
//   color = "";
//   speed = 0;
//   constructor(speed) {
//     this.speed = speed;
//     Car.count += 1;
//   }
// }

// const myCar1 = new Car(30);
// console.log(
//   `자동차1의 속도 : ${myCar1.speed} 총 생산된 자동차수 : ${Car.count}`
// );
// const myCar2 = new Car(50);
// console.log(
//   `자동차2의 속도 : ${myCar2.speed} 총 생산된 자동차수 : ${Car.count}`
// );
// const myCar3 = new Car(69);
// console.log(
//   `자동차3의 속도 : ${myCar3.speed} 총 생산된 자동차수 : ${Car.count}`
// );
// const myCar4 = new Car(89);
// console.log(
//   `자동차4의 속도 : ${myCar4.speed} 총 생산된 자동차수 : ${Car.count}`
// );

// ==================================

// class Fruit {
//   type = "과일";
//   #name;
//   #nameKo;
//   constructor(name, nameKo) {
//     this.#name = name;
//     this.#nameKo = nameKo;
//   }
//   display = () => {
//     console.log(`${this.#name} : ${this.#nameKo}`);
//   };
// }

// const apple = new Fruit("apple", "사과");
// console.log(apple);
// apple.display();

// ================================================================

// class Student {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(value) {
//     console.log("set", value);
//   }
// }

// const student = new Student("길동", "홍");
// student.firstName = "광수";
// console.log(student.fullName);
// student.fullName = "이순신";

// ==============================================

// class Student {
//   #name;
//   #age;
//   constructor(name, age) {
//     this.#name = name;
//     this.#age = age;
//   }

//   get getAge() {
//     return this.#age;
//   }
//   get getName() {
//     return this.#name;
//   }

//   set setAge(age) {
//     this.#age = age;
//   }

//   set setName(name) {
//     this.#name = name;
//   }
// }

// const student = new Student("박지민", 17);
// console.log(`${student.getName} ${student.getAge}`);
// student.setAge = 18;
// student.setName = "민지박";
// console.log(`${student.getName} ${student.getAge}`);

// ===================================================

class Counter {
  #count;
  constructor(count) {
    this.#count = count;
  }

  get getCount() {
    return this.#count;
  }
}

const counter = new Counter();
