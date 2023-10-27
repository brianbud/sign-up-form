const btn = document.querySelector("button");
const password = document.querySelector("#pw");
const confirmPw = document.querySelector("#pw-confirm");
const errorMsg = document.querySelector(".error");

confirmPw.addEventListener("input", () => {
  if (password.value === confirmPw.value) {
    errorMsg.style.display = "none";
    password.style.borderColor = "black";
    confirmPw.style.borderColor = "black";
  } else {
    errorMsg.style.display = "block";
    password.style.borderColor = "red";
    confirmPw.style.borderColor = "red";
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
});
