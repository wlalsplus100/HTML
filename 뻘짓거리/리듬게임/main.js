const lines = document.querySelectorAll(".line");
const checklines = document.querySelectorAll(".checkline");
const clear = document.querySelector(".clear");
const section = document.querySelector("section");
const miss = document.querySelector(".miss");
const retry = document.querySelector(".Retry");
const combo = document.querySelector(".combo");
const maxcomboText = document.querySelector(".maxCombo");
let clearNote = 0;
let combos = 0;
let maxcombo = 0;

const makeNote = (index) => {
  const noteline = Math.floor(Math.random() * 4);
  const note = document.createElement("div");
  note.classList.add("note");
  note.classList.add(`note${index}`);
  lines[noteline].appendChild(note);

  const checkline = document.querySelector(`.checkline${noteline + 1}`);
  const line = document.querySelector(`.line${noteline + 1}`);

  note.addEventListener("animationend", function (event) {
    if (!note.classList.contains("cleared")) {
      // Note was not cleared by the player
      const miss = document.querySelector(".miss");
      miss.style.display = "inline-block";
      combos = 0;
      renderText();
      const clear = document.querySelector(".clear");
      clear.style.display = "none";
      setTimeout(() => {
        miss.style.display = "none";
        note.remove();
      }, 500);
    }
    note.remove();
  });
};

const renderText = () => {
  const text = document.querySelector(".score");
  text.textContent = `score : ${clearNote}`;
  combo.textContent = `combo : ${combos}`;
  if (maxcombo < combos) maxcombo = combos;
  maxcomboText.textContent = `max combo : ${maxcombo}`;
};

function checkOverlap(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  if (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom + 30 &&
    rect1.bottom > rect2.top - 30
  ) {
    element1.remove();
    combos++;
    return true;
  }
  return false;
}

const Retry = () => {
  retry.style.display = "inline-block";
  retry.addEventListener("click", () => {
    location.reload();
  });
};

window.addEventListener("keydown", (e) => {
  const key = e.key;

  if (key == "d" || key == "D") {
    let checkline = document.querySelector(".checkline1");
    checkline.style.border = "orange 7px solid";
    if (checkOverlap(document.querySelector(".line1 > .note"), checkline)) {
      clearNote++;
      clear.style.display = "inline-block";
      miss.style.display = "none";
      setTimeout(() => {
        clear.style.display = "none";
      }, 500);
      renderText();
    }
  }
  if (key == "f" || key == "F") {
    let checkline = document.querySelector(".checkline2");
    checkline.style.border = "orange 7px solid";
    if (checkOverlap(document.querySelector(".line2 > .note"), checkline)) {
      clearNote++;
      clear.style.display = "inline-block";
      miss.style.display = "none";
      setTimeout(() => {
        clear.style.display = "none";
      }, 500);
      renderText();
    }
  }
  if (key == "j" || key == "J") {
    let checkline = document.querySelector(".checkline3");
    checkline.style.border = "orange 7px solid";
    if (checkOverlap(document.querySelector(".line3 > .note"), checkline)) {
      clearNote++;
      clear.style.display = "inline-block";
      miss.style.display = "none";
      setTimeout(() => {
        clear.style.display = "none";
      }, 500);
      renderText();
    }
  }
  if (key == "k" || key == "K") {
    let checkline = document.querySelector(".checkline4");
    checkline.style.border = "orange 7px solid";
    if (checkOverlap(document.querySelector(".line4 > .note"), checkline)) {
      clearNote++;
      clear.style.display = "inline-block";
      miss.style.display = "none";
      setTimeout(() => {
        clear.style.display = "none";
      }, 500);
      renderText();
    }
  }
});

window.addEventListener("keyup", (e) => {
  const key = e.key;
  if (key == "d" || key == "D") {
    let checkline = document.querySelector(".checkline1");
    checkline.style.border = "aqua 7px solid";
  } else if (key == "f" || key == "F") {
    let checkline = document.querySelector(".checkline2");
    checkline.style.border = "aqua 7px solid";
  } else if (key == "j" || key == "J") {
    let checkline = document.querySelector(".checkline3");
    checkline.style.border = "aqua 7px solid";
  } else if (key == "k" || key == "K") {
    let checkline = document.querySelector(".checkline4");
    checkline.style.border = "aqua 7px solid";
  }
});

const start = async () => {
  for (let i = 0; i < 300; i++) {
    await delay(getRandomInterval());
    makeNote(i);
  }

  Retry();
};

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const getRandomInterval = () => {
  return Math.floor(Math.random() * (300 - 30) + 100);
};

start();
