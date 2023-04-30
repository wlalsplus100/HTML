var hw = document.getElementById("hw");
hw.addEventListener("click", function () {
  alert("Hello World!"); //alert : 경고창
});

function printname() {
  const name = document.getElementById("name").value;
  document.getElementById("result").innerText = name;
}
