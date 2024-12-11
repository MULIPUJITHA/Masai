// Select DOM elements
const colorInput = document.querySelector("#color-input");
const textInput = document.querySelector("#text-input");
const changeBgBtn = document.querySelector("#change-bg-btn");
const updateTextBtn = document.querySelector("#update-text-btn");
const dynamicDiv = document.querySelector("#dynamic-div");

// Add event listener to the "Change Background" button
changeBgBtn.addEventListener("click", () => {
  const colorValue = colorInput.value.trim(); // Get and trim the input value
  dynamicDiv.style.backgroundColor = ""; // Reset background color first

  // Test if the color is valid by assigning it and checking the computed style
  dynamicDiv.style.backgroundColor = colorValue;
  const isValidColor = window.getComputedStyle(dynamicDiv).backgroundColor !== "rgba(0, 0, 0, 0)";

  if (!isValidColor) {
    alert("Invalid color name!");
    dynamicDiv.style.backgroundColor = ""; // Reset if invalid
  }
});

// Add event listener to the "Update Text" button
updateTextBtn.addEventListener("click", () => {
  const textValue = textInput.value.trim(); // Get and trim the input value
  if (textValue === "") {
    alert("Please enter some text!");
  } else {
    dynamicDiv.textContent = textValue; // Update the text content of the <div>
  }
});
