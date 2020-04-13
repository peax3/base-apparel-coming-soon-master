const formUI = document.getElementById("form");
const emailUI = document.getElementById("email");

function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let value = String(email).toLocaleLowerCase();
  return re.test(value);
}

formUI.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailUI.value === "" || !checkEmail(emailUI.value)) {
    formUI.classList.add("error");
  } else formUI.classList.remove("error");
});
