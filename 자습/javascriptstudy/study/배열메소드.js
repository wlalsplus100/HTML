const arr = [1, 2, 3, 4, 5];

arr.push(6); // 끝에서부터 추가
arr.push(7, 8); // 여러개도 추가 가능

arr.pop(); //가장 마지막 요소 삭제

const arr2 = [1, 2, 3, 4, 5];

arr2.unshift(10, 20, 30); // 앞에서 부터 추가
arr2.shift(); //앞에서 부터 요소 삭제

console.log(arr);
console.log(arr2);

const arr3 = [1, 2, 3, 4, 5];

// function print

newArr = arr3.forEach((number, index) => {
  number + 1;
}); // 배열의 각 요소를 함수에 대입, 반환을 하지 않음, 새로운 배열을 얻을 수 없음

newArr2 = arr3.map((number, index) => number + 1); //반환을 하기 때문에 새로운 배열을 만들 수 있음

console.log(newArr);
console.log(newArr2);

const arr4 = ["hello", "World"];

console.log(arr4.includes("hello")); // 배열 요소 중에 포함시 True
console.log(arr4.includes("zo")); // 배열 요소 중에 없으면 False

const arr5 = [1, 2, 3, 4, 5];

console.log(arr5.find((number) => number > 3)); //조건에 만족하는 가장 처음 요소를 반환, 없으면 undefined 반환
console.log(arr5.findIndex((number) => number > 3)); //조건에 만족하는 가장 처음 요소의 index를 반환
