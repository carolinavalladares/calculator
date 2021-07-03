// ==================================
// variables
const numKeys = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".op");
const mainDisplay = document.querySelector(".main-display");
const topDisplay = document.querySelector(".top-display");
const prev = document.querySelector(".prev-display");
const clearBtn = document.querySelector(".clear-btn");
const equalsBtn = document.querySelector(".equals");
let storePrev = [];
let emptyDisplay = true;
let operator;

// ==============================
// Event Listeners

numKeys.forEach((key) => {
  key.addEventListener("click", (e) => {
    displayNum(e);
  });
});

clearBtn.addEventListener("click", () => {
  clear();
});

ops.forEach((op) => {
  op.addEventListener("click", (e) => {
    getOperator(e);
  });
});

equalsBtn.addEventListener("click", () => {
  displayResult();
});

// ================================
// Functions

function displayNum(e) {
  if (!emptyDisplay) {
    clear();
    displayPrev();
    reset();
  }
  mainDisplay.append(e.currentTarget.textContent);
}

function clear() {
  mainDisplay.textContent = "";
  topDisplay.textContent = "";
}

function getOperator(e) {
  topDisplay.textContent = mainDisplay.textContent;
  mainDisplay.textContent = "";

  operator = e.currentTarget.textContent;
}

function displayResult() {
  num1 = parseFloat(topDisplay.textContent);
  num2 = parseFloat(mainDisplay.textContent);

  let result;

  result =
    operator === "+"
      ? num1 + num2
      : operator === "-"
      ? num1 - num2
      : operator === "*"
      ? num1 * num2
      : operator === "/"
      ? num1 / num2
      : "Error";

  if (!Number.isInteger(result)) {
    result = result.toFixed(2);
  }

  emptyDisplay = false;
  storePrev.push(num1, operator, num2, result);
  clear();
  mainDisplay.textContent = result;
}

function displayPrev() {
  prev.textContent = `${storePrev[0]} ${storePrev[1]} ${storePrev[2]} = ${storePrev[3]}`;
}

function reset() {
  storePrev = [];
  emptyDisplay = true;
}
