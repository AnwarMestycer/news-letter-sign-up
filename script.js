document.addEventListener("DOMContentLoaded", function () {
  const errorAlert = document.getElementById("error-alert");
  const mainContainer = document.getElementById("main");
  const successBox = document.getElementById("success-box");
  const theEmailField = document.querySelector(".the-email");
  const image = document.getElementById("image")
  errorAlert.style.display = "none";

function imageAdjust (){

  if (window.matchMedia("(max-width: 900px)").matches) {
    image.src="/assets/images/illustration-sign-up-mobile.svg"
  }
  else{
    image.src="/assets/images/illustration-sign-up-desktop.svg"
  }
}

window.onload = imageAdjust;
window.onresize = imageAdjust;

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  handleButtonClick = () => {
    const emailInput = document.getElementById("email");
    email = emailInput.value;

    if (isValidEmail(email)) {
      emailInput.classList.remove("bg-error-bg");
      emailInput.classList.remove("border-2");
      emailInput.classList.remove("border-red-400");
      emailInput.classList.remove("text-red-600");
      errorAlert.style.display = "none";

      const subscribedEmail = email;

      mainContainer.classList.add("scale-50");
      mainContainer.classList.add("opacity-0");
      mainContainer.classList.add("hidden");

      successBox.classList.remove("hidden");
      successBox.classList.add("scale-100");
      successBox.classList.add("opacity-100");

      theEmailField.innerHTML = subscribedEmail;
      emailInput.value = "";
    } else {
      emailInput.classList.add("border-2");
      emailInput.classList.add("border-red-600");
      errorAlert.classList.remove("hidden");
      errorAlert.style.display = "block";
    }
  };

  back =()=> {
    
    mainContainer.classList.remove("scale-50");
    mainContainer.classList.remove("opacity-0");
    mainContainer.classList.remove("hidden");

    successBox.classList.add("hidden");
    successBox.classList.remove("scale-100");
    successBox.classList.remove("opacity-100");
  }
});
