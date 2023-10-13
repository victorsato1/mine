

function sendMail(){
  var params = {
      name:document.getElementById("fullName").value ,
      email:document.getElementById("email_id").value ,
      number:document.getElementById("phone").value ,
      message:document.getElementById("message").value 
  }
  const serviceId = "service_aczg0vr"
  const templateId = "template_gofme1j"
  
  emailjs.send(serviceId,templateId,params)
  .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("number").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          swal("Successfully Sent!", "", "success");
      })
  
      .catch((err) => console.log(err));
}

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

