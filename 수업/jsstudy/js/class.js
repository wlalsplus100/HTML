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

// class Counter {
//   #value;
//   constructor(startValue) {
//     if (isNaN(startValue) || startValue < 0) {
//       this.#value = 0;
//     } else {
//       this.#value = startValue;
//     }
//   }

//   get value() {
//     return this.#value;
//   }

//   increment = () => {
//     this.#value += 1;
//   };
// }

// const counter = new Counter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.value);

// ==================================================================

// class Animal {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹는다");
//   }
//   sleep() {
//     console.log("잠을 잔다");
//   }
// }

// class Tiger extends Animal {}

// class Dog extends Animal {
//   constructor(color, ownerName) {
//     super(color);
//     this.ownerName = ownerName;
//   }
//   play = () => {
//     console.log("신나게 놀자");
//   };
//   eat = () => {
//     super.eat();
//     console.log("강아지가 먹는다");
//   };
// }

// const tiger = new Tiger("노랑");
// console.log(tiger);
// tiger.sleep();
// tiger.eat();

// const dog = new Dog("하양", "홍길동");
// console.log(dog);
// dog.sleep();
// dog.eat();
// dog.play();

// ====================================

class Employ {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calc = () => {
    return this.hoursPerMonth * this.payRate;
  };
}

class FullTime extends Employ {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTime.PAY_RATE);
  }
}

class PartTime extends Employ {
  static PAY_RATE = 9500;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTime.PAY_RATE);
  }
}

const hong = new FullTime("홍", "S/W", 30);
const kim = new FullTime("김", "S/W", 10);
const bob = new PartTime("밥", "S/W", 20);

console.log(hong.calc());
console.log(kim.calc());
console.log(bob.calc());
