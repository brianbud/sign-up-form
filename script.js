const btn = document.querySelector("button");
const password = document.querySelector("#pw");
const confirmPw = document.querySelector("#pw-confirm");
const errorMsg = document.querySelector(".error");

confirmPw.addEventListener("input", () => {
  if (password.value === confirmPw.value) {
    errorMsg.style.display = "none";
  } else {
    errorMsg.style.display = "block";
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
});
