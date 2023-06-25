const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const usernameDisplayed = document.querySelector("#login-div h2");

const HIDDEN_CLASSNAME = "hidden";

function handleLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem("USERNAME_KEY", loginInput.value);
  greetUser();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  if (loginInput.value === "") {
    usernameDisplayed.innerText = "Bonjour, cher étranger.\n How is your day going?"
    loginForm.classList.remove(HIDDEN_CLASSNAME);
  }
  document.querySelector("#todo-div").classList.remove("hidden");
  document.querySelector("#quotes").classList.remove("hidden");
  loginInput.value="";
}

function greetUser() {
  usernameDisplayed.classList.remove(HIDDEN_CLASSNAME);
  usernameDisplayed.innerText = `${localStorage.getItem("USERNAME_KEY")}, my dear.` + "\n\nYou may want to say something.";
}

loginForm.addEventListener("submit", handleLoginSubmit);

// function formAppearance(){
//   트랜지션 효과 함수
// }

// 타이프라이터 효과 함수

if (localStorage.getItem("USERNAME_KEY") === "") {
  usernameDisplayed.classList.remove(HIDDEN_CLASSNAME);
} else if(localStorage.getItem("USERNAME_KEY") === null) {
  // usernameDisplayed.innerText = "Hello, Stranger. \n Share your name, may we begin our talk."
}
else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greetUser();
  setTimeout(() => { document.querySelector("#todo-div").classList.remove(HIDDEN_CLASSNAME)}, 1000);
}

if(localStorage.getItem("USERNAME_KEY")){
  document.querySelector("#todo-div").classList.remove("hidden");
  document.querySelector("#quotes").classList.remove("hidden");
}