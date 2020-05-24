// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all Event Listeners
loadEventListeners();

// Load all Event Listeners function
function loadEventListeners() {
  // DOM Load Event
  document.addEventListener("DOMContentLoaded", loadTasks);

  // Add task event
  form.addEventListener("submit", addTask);

  // Remove task event
  taskList.addEventListener("click", removeTask);

  // Clear task event
  clearBtn.addEventListener("click", clearTasks);

  // Filter task event
  filter.addEventListener("keyup", filterTasks);
}

// Get Tasks
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  return tasks;
}

// Load Tasks
function loadTasks() {
  // Get Tasks Array
  let tasks = getTasks();
  tasks.forEach(function (taskValue) {
    // Create DOM Task element
    createTaskElement(taskValue);
  });
}
// Add Task
function addTask(e) {
  // Passing the e (event) parameter is important here
  if (taskInput.value === "") {
    alert("Add a task!");
  } else {
    createTaskElement(taskInput.value); // Create DOM Task element

    storeTaskInLocalStorage(taskInput.value); // Store in LS

    taskInput.value = ""; // Clear input
  }

  e.preventDefault();
}

// Create Task element
function createTaskElement(taskValue) {
  const li = document.createElement("li"); // Create li element

  li.className = "collection-item"; // Add Class

  li.appendChild(document.createTextNode(taskValue)); //Create text node and append to li

  const link = document.createElement("a"); // Create new link element

  link.className = "delete-item secondary-content"; // Add Class

  link.innerHTML = "<i class='fa fa-remove'>"; //Add icon html

  li.appendChild(link); //Append link to li

  taskList.appendChild(li); // Append li to ul
}

// Store Task in LS

function storeTaskInLocalStorage(task) {
  //Get TaskArray
  let tasks = getTasks();

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();

      // Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks = getTasks();
  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1); // splice function used to remove 1 item from the list present at "index"
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks() {
  //taskList.innerHTML = "";

  // Faster method
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear tasks from LS
  clearTasksFromLocalStorage();
}

// Clear tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.removeItem("tasks");
}
// Filter Tasks

function filterTasks(e) {
  const text = e.target.value.toLowerCase(); //This gives us whatever was typed

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  }); //Query selector directly returns a node list
}
