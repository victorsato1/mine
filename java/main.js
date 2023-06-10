const inputs = document.querySelectorAll(".input");

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
let menuBox = document.getElementById('menuBox')
let menuIcon = document.getElementById('menuIcon')

function openIcon() {
    menuBox.classList.toggle("open-menu")

    if (menuBox.classList.contains("open-menu")) {
        menuIcon.src ="img/close.png"
    } else {
        menuIcon.src ="img/menu.png"
        
    }
}
