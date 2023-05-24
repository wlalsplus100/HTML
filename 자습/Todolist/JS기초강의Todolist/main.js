// + 를 누르면 input 값이 추가된다.
// check를 누르면 밑줄이 처지고 V표시가 생긴다
// delete를 누르면 삭제된다.
// 진행중 끝남 탭을 누르면 바가 이동한다.
// 진행중인것과 끝난 것만 구분해서 창에 띄운다.

let taskInput = document.querySelector("#task-input");
let addButton = document.querySelector("#addButton");
let taskList = [];

addButton.addEventListener("click", addTask);

function addTask() {
  let task = {
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task.taskContent);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `<div class="task">
    <div>${taskList[i]}</div>
    <div>
      <button>Check</button>
      <button>Delete</button>
    </div>
  </div>`;
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}
