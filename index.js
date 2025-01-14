// TODO: this file! :)
// Select elements
const form = document.querySelector("form");
const numberInput = document.querySelector("#number");
const numberBankOutput = document.querySelector("#numberBank output");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");
const sortOneButton = document.querySelector("#sortOne");
const sortAllButton = document.querySelector("#sortAll");

// Array to store numbers
let numberBank = [];

// Add number to the bank
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from reloading the page

  const number = parseInt(numberInput.value, 10);
  if (!isNaN(number)) {
    numberBank.push(number);
    updateNumberBank();
  }

  numberInput.value = ""; // Clear input field
});

// Update the Number Bank display
function updateNumberBank() {
  numberBankOutput.textContent = numberBank.join(", ");
}

// Sort one number into odds or evens
sortOneButton.addEventListener("click", () => {
  if (numberBank.length === 0) return;

  const number = numberBank.shift(); // Remove the first number
  if (number % 2 === 0) {
    addToOutput(evensOutput, number);
  } else {
    addToOutput(oddsOutput, number);
  }

  updateNumberBank();
});

// Sort all numbers into odds or evens
sortAllButton.addEventListener("click", () => {
  const odds = [];
  const evens = [];

  numberBank.forEach((number) => {
    if (number % 2 === 0) {
      evens.push(number);
    } else {
      odds.push(number);
    }
  });

  numberBank = []; // Clear the number bank
  updateNumberBank();

  // Add sorted numbers to their respective outputs
  evens.forEach((number) => addToOutput(evensOutput, number));
  odds.forEach((number) => addToOutput(oddsOutput, number));
});

// Helper function to add a number to an output element
function addToOutput(outputElement, number) {
  const currentText = outputElement.textContent;
  outputElement.textContent = currentText
    ? `${currentText}, ${number}`
    : `${number}`;
}
