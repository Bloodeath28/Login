const loginForm = document.getElementById("logForm");
const loginButton = document.getElementById("buttonLogin");

loginButton.addEventListener("click", Event => {
  Event.preventDefault();
  const username = loginForm.email.value;
  const passeWord = loginForm.passeword.value;

  if (username === "user@mail" && passeWord === "web_dev") {
    alert("You have successfully logged in.");
    location.reload();
  }
  else{
    alert("Invalid e-mail or passeword");
  }
})