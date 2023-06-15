const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const form = document.querySelector("form");
const signInScreen = document.createElement("div");
const overlay = document.querySelector(".overlay");
const reset = document.querySelector(".reset");
const emailDanger = document.querySelector("#emailDanger");
const passwordDanger = document.querySelector("#passwordDanger");
const eyeIcon = document.querySelector(".eye-icon");

var errors = {};

function togglePasswordVisibility(e) {
  const passwordInput = document.querySelector("#password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "../assets/eye-show-icon.svg";
    eyeIcon.alt = "eye-show";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "../assets/eye-hide-icon.svg";
    eyeIcon.alt = "eye-hide";
  }
}

document.body.appendChild(signInScreen);

passwordInput.addEventListener("keyup", function (e) {
  if (!passwordInput.value || passwordInput.value.length < 8) {
    passwordInput.style.border = "var(--border-caution)";
    passwordInput.style.backgroundImage = "none";
    document.querySelector(".eye-icon").style.display = "inline";
  } else {
    passwordInput.style.border = "none";
    passwordInput.style.backgroundImage = "none";
    eyeIcon.style.display = "inline";
  }
});

form.addEventListener("submit", function (event) {
  if (!emailInput.value) {
    emailInput.style.backgroundImage =
      "url('../assets/danger-circle-icon.svg')";
    emailInput.style.backgroundRepeat = "no-repeat";
    emailInput.style.backgroundPosition = "95% 50%";
    emailInput.style.border = "var(--border-caution)";
  } else if (
    !/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(emailInput.value)
  ) {
    emailInput.style.backgroundImage =
      "url('../assets/danger-circle-icon.svg')";
    emailInput.style.backgroundRepeat = "no-repeat";
    emailInput.style.backgroundPosition = "95% 50%";
    emailInput.style.border = "var(--border-caution)";
    errors.email = true;
  } else {
    emailInput.style.border = "none";
    emailDanger.style.display = "none";
    errors.email = null;
  }
  
  if (!passwordInput.value || passwordInput.value.length < 8) {
    passwordInput.style.border = "var(--border-caution)";
    passwordInput.style.backgroundImage =
      "url('../assets/danger-circle-icon.svg')";
    passwordInput.style.backgroundRepeat = "no-repeat";
    passwordInput.style.backgroundPosition = "95% 50%";
    eyeIcon.style.display = "none";
    errors.password = true;
  } else {
    passwordInput.style.border = "none";
    errors.password = null;
  }
  event.preventDefault();
  console.log(errors);
  if (errors.email || errors.password) {
    alert("Please fill in the required fields");
  } else {
    overlay.style.display = "flex";
    reset.style.display = "flex";
  }
});

reset.addEventListener("click", function () {
  overlay.style.display = "none";
  reset.style.display = "none";
  form.reset();
});
