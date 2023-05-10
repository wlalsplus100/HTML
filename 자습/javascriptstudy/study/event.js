const button = document.querySelector("button");
const removeButton = document.querySelector(".remove");

function handler(event) {
  console.log("^^");
}

function removeHandler(event) {
  button.removeEventListener("click", handler);
}

button.addEventListener("click", handler);
removeButton.addEventListener("click", removeHandler);
