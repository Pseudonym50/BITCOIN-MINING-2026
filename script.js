document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("login-message");

  if (email && password) {
    message.textContent = "E-Mail und Passwort wurden bestätigt!";
    message.style.color = "green";
  } else {
    message.textContent = "E-Mail oder Passwort leer!";
    message.style.color = "red";
  }
});
