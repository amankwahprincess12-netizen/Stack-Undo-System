
let stack = [""];
let currentText = "";

const textInput = document.getElementById("textInput");
const currentTextDisplay = document.getElementById("currentText");
const history = document.getElementById("history");
const message = document.getElementById("message");

function display() {
  currentTextDisplay.textContent = currentText || "Empty";
  history.innerHTML = "";

  for (let i = stack.length - 1; i >= 0; i--) {
    const item = document.createElement("li");
    item.textContent = stack[i] || "Empty";
    history.appendChild(item);
  }
}

document.getElementById("addButton").addEventListener("click", function () {
  const newText = textInput.value.trim();

  if (newText === "") {
    message.textContent = "Please enter some text.";
    return;
  }

  currentText += (currentText ? " " : "") + newText;
  stack.push(currentText);
  textInput.value = "";
  message.textContent = "Text added to the stack.";
  display();
});

document.getElementById("undoButton").addEventListener("click", function () {
  if (stack.length > 1) {
    stack.pop();
    currentText = stack[stack.length - 1];
    message.textContent = "Last action undone.";
  } else {
    message.textContent = "There is no action to undo.";
  }

  display();
});

display();
  