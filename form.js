
const contactForm = document.querySelector("#form-242")
const submitButton = document.querySelector(".button-solid submit")
const nameInput = document.querySelector("#name-242")
const emailInput = document.querySelector("#email-242")
const phoneInput = document.querySelector("#phone-242")
const messageInput = document.querySelector("#message-242")

const publicKey = "3HNRHci98alqxxXVv"
const serviceID = "service_7fhupfk"
const templateID = "template_0s0fof4"

emailjs.init(publicKey);

contactForm.addEventListener("submit", (e) => e.preventDefault());

const inputFields = {
  name: nameInput.value,
  email: emailInput.value,
  phone: phoneInput.value,
  message: messageInput.value,
};

emailjs.send(serviceID, templateID, params)
        .then(res=>{
            nameInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";
            messageInput.value ="";
            console.log(res);
            alert("You Have signed up to CodeCraftAcademy successfully!")
    
        })
        .catch(err=>console.log(err));
