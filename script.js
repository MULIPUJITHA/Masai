// Select the <ul> element and the button
const ul = document.querySelector("#item-list");
const button = document.querySelector("#add-item-btn");

// Add an event listener to the button
button.addEventListener("click", () => {
  // Create a new <li> element
  const newItem = document.createElement("li");

  // Determine the new item number
  const itemCount = ul.children.length + 1;
  newItem.textContent = `New Item ${itemCount}`;

  // Apply styles based on the item's sequence number
  if (itemCount % 2 === 0) {
    // Even: italic font & red color
    newItem.style.fontStyle = "italic";
    newItem.style.color = "red";
  } else {
    // Odd: bold font & blue color
    newItem.style.fontWeight = "bold";
    newItem.style.color = "blue";
  }

  // Append the new <li> to the <ul>
  ul.appendChild(newItem);
});
