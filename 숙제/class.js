let Student = {
  name: "박지민",
  age: "17",
  score: 90,
};

function Student2(name, age, score) {
  this.name = name;
  this.age = age;
  this.score = score;
  this.printScore = () => {
    if (this.score >= 90) {
      console.log("A");
    } else if (this.score >= 80) {
      console.log("B");
    } else {
      console.log("C");
    }
  };
}

class Student3 {
  constructor(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
  }
  printScore() {
    if (this.score >= 90) return "A";
    else if (this.score >= 80) return "B";
    else return "C";
  }
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student4 extends Person {
  constructor(name, age, score) {
    super(name, age);
    this.score = score;
  }

  printScore() {
    if (this.score >= 90) return "A";
    else if (this.score >= 80) return "B";
    else return "C";
  }
}

console.log(Student);
b = new Student2("박지민", 17, 90);
console.log(b);
console.log(b.printScore());
c = new Student3("박지민", 17, 90);
console.log(c);
console.log(c.printScore());
d = new Student4("박지민", 17, 90);
console.log(d);
console.log(d.printScore());
