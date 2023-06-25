const toDoInput = document.querySelector("#todo-div input");
const toDoForm = document.querySelector("#todo-div form");
const toDoList = document.querySelector("#todo-list");

let toDoArray = [];

const i = 0;
let txt = 'Lorem ipsum typing effect!'; /* The text */

function typeWriter(item) {
  if (i < txt.length) {
    document.getElementById(`${item}`).innerText += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

function addListElements(event) {
  const li = document.createElement("li");
  li.id = event.id;
  li.setAttribute("class", "li-box")
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = event.value;
  button.innerText = "-";
  button.setAttribute("style", "color: red")
  button.addEventListener("click", deleteListElements);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function deleteListElements(event) {
  const liParentNode = event.target.parentNode;
  liParentNode.remove();
  toDoArray = JSON.parse(localStorage.TODOS_KEY);
  toDoArray = toDoArray.filter(item => item.id !== parseInt(liParentNode.id));
  localStorage.setItem("TODOS_KEY", JSON.stringify(toDoArray));
}

function showListElements() {
  const localStorageParsed = JSON.parse(localStorage.TODOS_KEY)
  localStorageParsed.forEach(item => {
    addListElements(item);
  });
}

function handleToDoListSubmit(event) {
  event.preventDefault();
  toDoInput.focus();
  if (localStorage.TODOS_KEY) {
    toDoArray = JSON.parse(localStorage.TODOS_KEY);
  }
  const liItem = {
    id: Date.now(), value: toDoInput.value
  }
  toDoArray.push(liItem);
  localStorage.setItem("TODOS_KEY", JSON.stringify(toDoArray));
  addListElements(liItem);
  toDoInput.value = "";
}

if (localStorage.TODOS_KEY) {
  showListElements();
}



toDoForm.addEventListener("submit", handleToDoListSubmit);

// document.querySelectorAll("li").forEach(function(li){
//   li.addEventListener("click", deleteListElements);
// });
// document.querySelectorAll("li").forEach(function(li){
//   li.addEventListener("mouseenter", console.log);
// });

