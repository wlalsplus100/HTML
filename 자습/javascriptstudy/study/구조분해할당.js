const arr = [1, 2, 3, 4, 5];

// const [one, two, three] = arr; // one, two, three 변수에 각각 1, 2, 3 을 할당한다.

const obj = {
  x: 10,
  y: 20,
};

const { x: hello, y: world } = obj; // obj의 값을 x, y에 넣음, x와 y의 이름은 hello world로 바꿈

console.log(hello, world);

const obj2 = {
  one: {
    two: {
      three: "Bingo",
    },
  },
};

const {
  one: {
    two: { three },
  },
} = obj2;

console.log(three);
