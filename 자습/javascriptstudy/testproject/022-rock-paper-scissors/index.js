// 무료 강의 👉 https://youtube.com/playlist?list=PLI33CnBTx2MZGD7zAQ810_B8dDU_E8gaq
// 이 아래 코드를 작성하세요.

const buttons = document.querySelectorAll("button");
const commputerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".you-choice");
const winner = document.querySelector(".result");
const result = ["가위", "바위", "보"];

const show = (user, computer, resultj) => {
  commputerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = resultj;
};

const play = (event) => {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  console.log(user, computer);
  game(user, computer);
};

const game = (user, computer) => {
  let message;
  if (user === computer) {
    console.log("무승부");
    message = "무승부";
  } else {
    switch (user + computer) {
      case "가위바위":
      case "바위보":
      case "보가위": {
        console.log("컴퓨터 승리!");
        message = "컴퓨터 승리!";
        break;
      }
      default: {
        console.log("사용자 승리!");
        message = "사용자 승리!";
      }
    }
  }
  show(user, computer, message);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
