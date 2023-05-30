// + 를 누르면 input 값이 추가된다.
// check를 누르면 밑줄이 처지고 V표시가 생긴다
// delete를 누르면 삭제된다.
// 진행중 끝남 탭을 누르면 바가 이동한다.
// 진행중인것과 끝난 것만 구분해서 창에 띄운다.

let taskInput = document.querySelector("#task-input");
let addButton = document.querySelector("#addButton");
let tabs = document.querySelectorAll(".task-tabs div");
let taskList = [];
let mode = "all";
let filterList = [];
let doneList = [];
let underLine = document.querySelector("#under-line");
let menus = document.querySelectorAll(".menu");

console.log(underLine);
console.log(menus);

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  // Check if the pressed key is the Enter key
  if (event.key === "Enter") {
    // Perform the desired action when Enter is pressed
    console.log("Enter key pressed!");
    addTask();

    // You can call a function or execute any code here
    // For example, submit a form, trigger an AJAX request, or perform any other action
  }
});

menus.forEach((menu) =>
  menu.addEventListener("click", (e) => underlinemove(e))
);

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

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
  let list = [];
  if (mode == "all") {
    list = taskList;
    console.log(list);
  } else if (mode == "ongoing") {
    list = filterList;
    console.log(list);
  } else if (mode == "done") {
    list = doneList;
    console.log(list);
  }
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<div class="task">
        <div class="task-done">${list[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${list[i].id}')">Check</button>
          <button onclick="toggleDelete('${list[i].id}')">Delete</button>
        </div>
      </div>`;
    } else {
      resultHTML += `<div class="task">
        <div>${list[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${list[i].id}')">Check</button>
          <button onclick="toggleDelete('${list[i].id}')">Delete</button>
        </div>
      </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  filter();
  render();
}

function toggleDelete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  filter();
  render();
}

let newID = function () {
  return Math.random().toString(36).substr(2, 16);
};

function filter(event) {
  if (event !== undefined) {
    mode = event.target.id;
  }
  filterList = [];
  doneList = [];
  console.log("filter클릭됨", mode);
  if (mode == "all") {
    render();
  } else if (mode == "ongoing") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        if (!filterList.includes(taskList[i])) {
          filterList.push(taskList[i]);
        }
      }
    }
    render();
  } else if (mode == "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) {
        if (!doneList.includes(taskList[i])) {
          doneList.push(taskList[i]);
        }
      }
    }
    render();
  }
}

function underlinemove(e) {
  underLine.style.left = e.currentTarget.offsetLeft + "px";
  underLine.style.width = e.currentTarget.offsetWidth + "px";
  underLine.style.top = e.currentTarget.offsetHeight + "px";
}
