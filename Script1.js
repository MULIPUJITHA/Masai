// Select DOM elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to create a new task item
function createTaskItem(taskText) {
  // Create <li> element
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  // Create task text span
  const taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText;

  // Create "Complete" button
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.classList.add("btn", "complete-btn");

  // Add event listener for marking task as complete
  completeButton.addEventListener("click", () => {
    taskTextSpan.classList.toggle("completed");
  });

  // Create "Delete" button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("btn", "delete-btn");

  // Add event listener for deleting task
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  // Append text and buttons to the <li>
  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(completeButton);
  taskItem.appendChild(deleteButton);

  return taskItem;
}

// Event listener for adding a task
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  // Validate input
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create and append the new task item
  const newTaskItem = createTaskItem(taskText);
  taskList.appendChild(newTaskItem);

  // Clear input field
  taskInput.value = "";
});
