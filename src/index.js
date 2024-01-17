function sayWelcome() {
  let userName = prompt("What is your name?");

  let head = document.querySelector("h1");
  head.innerHTML = "Welcome!😊" + userName;
}
let heading = document.querySelector("button");
heading.addEventListener("click", sayWelcome);
