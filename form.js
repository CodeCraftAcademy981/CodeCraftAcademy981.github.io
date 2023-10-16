const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());



function checkforblank(){
 

}
function sendMail() {
  var em1 = document.getElementById('email');
  var em2 = document.getElementById('parent-email');
  if(document.getElementById('name').value == ""||
  document.getElementById('email').value == ""||
  document.getElementById('age').value == ""||
  document.getElementById('parent-email').value == ""){
    alert("Please fill out the form properly")
  }
  else{
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      age: document.getElementById("age").value,
      email2: document.getElementById("parent-email").value,
    };
  
    const serviceID = "service_2o2ptvd";
    const templateID = "template_23d2mbc";
    

      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("age").value = "";
          document.getElementById("parent-email").value = "";
          console.log(res);
          window.open("confirmation.html");
          alert("You Have signed up to CodeCraftAcademy successfully!")
  
      })
      .catch(err=>console.log(err));
      
  }
   
  
}

    
