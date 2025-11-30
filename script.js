// Run the code only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the input text
        const taskText = taskInput.value.trim();

        // If empty, alert the user
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Set onclick to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append remove button to the list item
        li.appendChild(removeButton);

        // Append list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing Enter
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Call addTask once DOM is loaded (as instructed)
    addTask();
});

     // Inside the addTask function:

// Create a new li element and set its text
const li = document.createElement('li');
li.textContent = taskText;

// Create the Remove button
const removeButton = document.createElement('button');
removeButton.textContent = "Remove";
removeButton.className = 'remove-btn';

// Assign onclick event to remove this specific task
removeButton.onclick = function() {
    taskList.removeChild(li);
};

// Append the remove button to the li
li.appendChild(removeButton);

// Append the li to the task list
taskList.appendChild(li);

// Clear the task input field
taskInput.value = "";
