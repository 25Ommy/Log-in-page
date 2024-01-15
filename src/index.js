function sayWelcome() {
  let userName = prompt("What is your name?");
  alert(userName);
}
let heading = document.querySelector("h1");
heading.innerHTML = "Welcome!😊" + userName;
