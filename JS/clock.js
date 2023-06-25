const clockDisplay = document.querySelector("#clock h1");

function getClock() {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, 0);
  const minutes = String(today.getMinutes()).padStart(2, 0);
  const seconds = String(today.getSeconds()).padStart(2, 0);
  clockDisplay.innerText = `${hours}:${minutes}:${seconds}`;
  // ☀️🌕🌓🌙
}

getClock();
setInterval(getClock, 1000);