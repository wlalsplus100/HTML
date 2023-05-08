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

arr5.fill(10, 1, 3); // 1번 인덱스부터 3번 인덱스 '이전'(2번 인덱스) 까지 10으로 채움
arr5.fill(10, 3); // 3번 인덱스부터 요소를 10으로 가득 채움
console.log(arr5);

const arr6 = [1, 2, 3, 4, 5];

console.log(arr6.slice(2)); //지정된 인덱스부터 끝 까지 새로운 배열을 만들어 반환
console.log(arr6.slice(2, 4)); // 지정된 인덱스부터 4번 인덱스 '이전'(3번인덱스)까지 새로운 배열을 만들어 반환

const arr7 = [1, 2, 3, 4, 5];
const arr8 = [1, 2, 3, 4, 5];

arr7.splice(2); // 지정된 인덱스부터 끝까지 제거함
arr8.splice(2, 1, 999); // 지정된 인덱스부터 1개까지 제거하고 그 자리에 999를 포함함
console.log(arr7);
console.log(arr8);

const arr9 = [1, 2, 3, 4, 5];

console.log(arr9.join()); // 각 배열들의 값과 구분자(쉼표)까지 모두 문자열로 만들어 출력
console.log(arr9.join(";")); // 각 배열의 구분자를 ;으로 바꾸어 출력

const arr10 = [1, 2, 3, 4, 5];
const arr11 = ["hello", "world", "hi", "wow", "umm"];

console.log(arr11.concat(arr10)); // 기존 배열에 인자가 합쳐져서 새로운 배열로 만들어짐

const arr12 = [1, 2, 3, 4, 5];

console.log(arr12.filter((number) => number > 3)); // 각 요소를 number 함수에 넣어서 참인 값만 모아 반환

const arr13 = [1, 2, 3, 4, 5];
const reducer = (acc, value) => acc + value; // 필수 인자로 누산기와 현재값을 가지게 된다.

console.log(arr13.reduce(reducer)); //배열의 각 요소에 reducer라는 필수 인자(함수)를 실행해서 하나의 값을 반환
console.log(arr13.reduce(reducer, 10)); // 초깃값이 10으로 설정된다.
