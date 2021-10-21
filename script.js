const element = document.querySelectorAll("[type=button]");
const form = document.querySelector("form");
const display = document.querySelector("#display");
const output = document.querySelector("#output");
const history = document.querySelector("dl");
const deleteBtn = document.querySelector("#del");
const toggleBtn = document.querySelector(".toggle-btn");
const liststyle = document.getElementsByClassName("liststyle");

element.forEach((element) =>
  element.addEventListener("click", () => {
    element.matches("#plusminus") && display.value === "0"
      ? (display.value = "-")
      : element.value === "±"
      ? (display.value += "-")
      : element.matches("#del") &&
        (display.value === "0" || display.value.length === 1)
      ? (display.value = "0")
      : element.value === "Del"
      ? ((display.value = display.value.substring(0, display.value.length - 1)),
        display.classList.remove("font-style"))
      : !element.matches(".btn--operator") && display.value === "0"
      ? (display.value = element.value)
      : element.value === "×"
      ? (display.value += "*")
      : (display.value += element.value);
  })
);

deleteBtn.addEventListener("dblclick", () => {
  display.value = "0";
  output.value = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  output.value = eval(display.value);
  display.classList.add("font-style");
  console.log(eval(display.value));
  history.innerHTML += `<div class='divclass'><dt class='liststyle'>${output.value}</dt><dd>${display.value}</dd></div>`;

  for (let i = 0; i < history.children.length; i++) {
    history.children[i].addEventListener("click", () => {
      display.value = liststyle[i].textContent;
      output.value = "";
      display.classList.remove("font-style");
    });
  }
});

toggleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  document.body.classList.toggle("light");
  toggleBtn.textContent === `Light mode 🔆`
    ? (toggleBtn.textContent = `Dark mode 🌙`)
    : (toggleBtn.textContent = `Light mode 🔆`);
});
