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
let result = document.querySelector("#result");
let ComputerNum;
let chance = document.querySelector("#chance");
let chanceNum = 5;
let resetButton = document.querySelector("#reset-button");

chance.innerText = `남은 기회 : ${chanceNum}`;

pickRandomNumber();
playButton.addEventListener("click", check);
resetButton.addEventListener("reset", reset);

function pickRandomNumber() {
  ComputerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", ComputerNum);
}

function reset() {
  chanceNum = 5;
  pickRandomNumber();
}

function check() {
  userNumber = inputNumber.value;
  setTimeout(() => {
    playButton.classList.remove("blue-background");
  }, 1000);
  playButton.classList.add("blue-background");
  console.log(userNumber);
  if (chanceNum > 0) {
    if (userNumber !== undefined) {
      chanceNum -= 1;
      chance.innerText = `남은 기회 : ${chanceNum}`;
      if (userNumber == ComputerNum) {
        console.log("정답입니다");
        result.innerHTML = `정답입니다`;
      } else if (userNumber >= ComputerNum) {
        console.log("Down");
        result.innerHTML = `Down`;
      } else if (userNumber <= ComputerNum) {
        console.log("Up");
        result.innerHTML = `Up`;
      }
    }
  } else {
    result.innerText = `reset을 눌러 게임 재시작`;
  }
}
