let display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

const appendValue = (number) => {
  currentInput += number;
  display.innerText = currentInput;
};

const clearDisplay = () => {
  currentInput = "";
  display.innerText = "";
};

const calculate = () => {
  try {
    currentInput = eval(currentInput).toString();
    display.innerText = currentInput;
  } catch (error) {
    display.innerText = "Error!";
    currentInput = "";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "DEL") {
      clearDisplay();
    } else if (value === "=") {
      calculate();
    } else {
      appendValue(value);
    }
  });
});
