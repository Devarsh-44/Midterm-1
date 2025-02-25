// Function to calculate the factorial of a number
function calculateFactorial() {
  // Get the input number from the input field
  let num = document.getElementById("number").value;
  // Get the result element to display the result
  let result = document.getElementById("result");

  // Check if the input is valid
  if (num === "" || num < 0) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  // Initialize factorial to 1
  let factorial = 1;
  // Calculate the factorial using a for loop
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  // Display the result
  result.textContent = `${num}! = ${factorial}`;
}

function toggleDarkMode(isDark) {
  // Function to toggle dark mode
  document.body.style.backgroundColor = isDark ? "#333" : "#fff";
  document.body.style.color = isDark ? "white" : "black";
}

function togglelightmode(isLight) {
  // Function to toggle light mode
  document.body.style.backgroundColor = isLight ? "#fff" : "#333";
  document.body.style.color = isLight ? "black" : "white";
}
