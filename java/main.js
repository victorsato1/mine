
const inputs = document.querySelectorAll(".input");

function openc() {
  let subMenu = document.getElementById("subMenu");
  subMenu.classList.toggle("open")
}
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
