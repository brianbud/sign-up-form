const btn = document.querySelector("button");
const password = document.querySelector("#pw");
const confirmPw = document.querySelector("#pw-confirm");

confirmPw.addEventListener("input", () => {
  if (password.value === confirmPw.value) {
    console.log("pw matches");
  } else {
    console.log(" not matching");
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
});
