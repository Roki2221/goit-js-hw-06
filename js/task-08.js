const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Please, fill out all the fields");
    return;
  }
  const userInfo = {
    email: email.value,
    password: password.value,
  };

  console.log(userInfo);

  event.currentTarget.reset();
}
