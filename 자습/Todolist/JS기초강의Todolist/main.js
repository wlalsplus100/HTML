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
    id: newID(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `<div class="task">
        <div class="task-done">${taskList[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
          <button onclick="toggleDelete()">Delete</button>
        </div>
      </div>`;
    } else {
      resultHTML += `<div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
          <button onclick="toggleDelete('${taskList[i].id}')">Delete</button>
        </div>
      </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  console.log(`check ${id}`);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  console.log(taskList);
  render();
}

function toggleDelete(id) {
  console.log("삭제");
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.pop(taskList[i]);
      break;
    }
  }
  console.log(taskList);
  render();
}

let newID = function () {
  return Math.random().toString(36).substr(2, 16);
};
