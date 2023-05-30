//랜덤 번호 지정
//유저가 번호를 입력한다
//go 버튼을 눌렀을 때 번호를 맞추면 맞췄습니다
//랜덤번호가 유저번호보다 크면 up
//랜덤번호가 유저번호보다 작으면 down
//리셋버튼을 누르면 게임리셋
//5번의 기회를 다 쓰면 버튼 비활성화
//이전과 같은 번호를 입력하면 오류
//범위 밖의 번호를 입력하면 오류

let playButton = document.querySelector("#playButton");
let inputNumber = document.querySelector("#inputNumber");

let ComputerNum;

pickRandomNumber();
playButton.addEventListener("click", check);

function pickRandomNumber() {
  ComputerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", ComputerNum);
}
function check() {
  userNumber = inputNumber.value;
  console.log(userNumber);
  if (userNumber !== undefined) {
    if (userNumber == ComputerNum) {
      console.log("정답입니다");
    } else if (userNumber >= ComputerNum) {
      console.log("Down");
    } else if (userNumber <= ComputerNum) {
      console.log("Up");
    }
  }
}
