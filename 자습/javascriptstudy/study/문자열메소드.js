const str = "Hello World!";

console.log(str.toUpperCase()); // 모두 대문자로
console.log(str.toLowerCase()); // 모두 소문자로

const str2 = "                haha          ";

console.log(str2.trim()); //띄어 쓰기 제거
console.log(str2.trimStart()); //띄어 쓰기 앞만 제거
console.log(str2.trimEnd()); //띄어 쓰기 뒤만 제거

console.log(str.repeat(3)); //매개변수만큼 문자열 반복

console.log(str.padStart(20, "_")); // 20만큼 크기 중 앞 쪽 빈 공간을 _로 채움
console.log(str.padEnd(20, "_")); // 20만큼 크기 중 뒷 쪽 빈 공간을 _로 채움

const str3 =
  "안녕하세요. 이룸코딩입니다!이룸코딩이룸코딩이룸코딩이룸코딩이룸코딩";

console.log(str3.indexOf("이룸")); // 매개변수가 시작되는 인덱스 반환, 없으면 -1
console.log(str3.includes("이룸")); // 매개변수가 포함되면 True
console.log(str3.includes("한국")); //매개변수가 없으면 False

console.log(str3.startsWith("안녕")); //매개변수로 시작하면 True
console.log(str3.endsWith("안녕")); //매개변수로 끝나면 True

console.log(str3.replace("이룸코딩", "개발자 이도해")); // 앞 매개변수를 뒤 매개변수로 수정 단, 가장 앞에 부분만 적용
console.log(str3.replaceAll("이룸코딩", "개발자 이도해")); // 모든 매개변수를 찾아서 뒤 매개변수로 고침

console.log(str3.substring(0, 5)); // 0부터 4번 인덱스 까지 출력

const str4 = "월요일, 화요일, 수요일, 목요일, 금요일, 토요일, 일요일";

console.log(str4.split(", ")); // 매개변수를 기준으로 잘라냄

console.log(str4.slice(3, 9)); // 3번째 인덱스부터 8번째 인덱스까지 출력 (substring과 유사)
console.log(str4.slice(-3)); // 끝에서 3번째까지 출력
